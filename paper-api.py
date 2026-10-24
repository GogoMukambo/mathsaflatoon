"""Serve Year 9 mock questions from the Study Data Store folders."""
from __future__ import annotations

import json
import os
import random
import re
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

HERE = Path(__file__).resolve().parent
ROOT = Path(r"C:\OneDrive\Documents\Study Data Store\Year 9 - IGCSE")
SOURCES = {
    "maths": [ROOT / "Mathematics - Worksheet and Question papers"],
    "science": [
        ROOT / "Science - Worksheet and Question papers",
        ROOT / "Science - Worksheet and Question papers" / "Past papers",
    ],
}
cfg = HERE / "paper-sources.json"
if cfg.exists():
    try:
        data = json.loads(cfg.read_text(encoding="utf-8"))
        if data.get("mathsFolders"):
            SOURCES["maths"] = [Path(p) for p in data["mathsFolders"]]
        if data.get("scienceFolders"):
            SOURCES["science"] = [Path(p) for p in data["scienceFolders"]]
    except Exception:
        pass
SKIP_NAME = re.compile(r"(ak|mark.?scheme|ms_|guidelines|project|insert|ins\b)", re.I)
QUESTION_SPLIT = re.compile(
    r"(?:^|\n)\s*(?:question\s*)?(\d{1,2})(?:[.)]|]\s|\s{2,})",
    re.I,
)
HOUR_HINT = re.compile(r"1\s*hour|60\s*min|time:\s*1", re.I)
PORT = 5181


def pdf_text(path: Path) -> str:
    import pymupdf

    doc = pymupdf.open(path)
    parts = []
    for page in doc:
        parts.append(page.get_text() or "")
    return "\n".join(parts)


def looks_like_hour_paper(text: str, path: Path) -> bool:
    head = text[:2500]
    if HOUR_HINT.search(head):
        return True
    name = path.name.lower()
    return "pp" in name or "paper" in name or "past" in str(path.parent).lower()


def clean_prompt(text: str) -> str:
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = text.strip()
    text = re.sub(r"SAMPLE|Original material.*?\n", "", text, flags=re.I)
    return text[:1200].strip()


def questions_from_pdf(path: Path) -> list[dict]:
    try:
        raw = pdf_text(path)
    except Exception:
        return []
    if not looks_like_hour_paper(raw, path):
        # Still allow worksheet PDFs that contain numbered questions.
        if "worksheet" not in path.name.lower() and "ws_" not in path.name.lower():
            if not HOUR_HINT.search(raw[:4000]):
                pass
    chunks = QUESTION_SPLIT.split(raw)
    items = []
    # split keeps capture groups: [pre, num, body, num, body, ...]
    i = 1
    while i + 1 < len(chunks):
        num, body = chunks[i], chunks[i + 1]
        i += 2
        prompt = clean_prompt(body)
        if len(prompt) < 20 or len(prompt) > 1100:
            continue
        if prompt.lower().startswith(("contents", "page ", "name ")):
            continue
        items.append(
            {
                "id": f"{path.stem}-{num}",
                "source": path.name,
                "prompt": f"{num}. {prompt}",
                "answer": "",
                "folder": str(path.parent),
            }
        )
    return items


def load_json_pack(path: Path) -> list[dict]:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return []
    if isinstance(data, dict):
        data = data.get("questions") or data.get("items") or []
    items = []
    for i, row in enumerate(data):
        if not isinstance(row, dict) or not row.get("prompt") or not row.get("answer"):
            continue
        item = {
            "id": row.get("id") or f"{path.stem}-{i+1}",
            "source": row.get("source") or path.name,
            "prompt": str(row["prompt"]).strip(),
            "answer": str(row["answer"]).strip(),
        }
        if row.get("acceptAny"):
            item["acceptAny"] = row["acceptAny"]
        if row.get("acceptAll"):
            item["acceptAll"] = row["acceptAll"]
        if row.get("numeric") is not None:
            item["numeric"] = row["numeric"]
        items.append(item)
    return items


def collect(subject: str) -> list[dict]:
    seen = set()
    items = []
    folders = SOURCES.get(subject) or []
    for folder in folders:
        if not folder.exists():
            continue
        for path in folder.rglob("*"):
            if not path.is_file():
                continue
            key = str(path.resolve()).lower()
            if key in seen:
                continue
            seen.add(key)
            if path.suffix.lower() == ".json":
                items.extend(load_json_pack(path))
    markable = [q for q in items if q.get("answer")]
    if len(markable) < 12:
        seen_pdf = set()
        for folder in folders:
            if not folder.exists():
                continue
            for path in folder.rglob("*.pdf"):
                key = str(path.resolve()).lower()
                if key in seen_pdf or SKIP_NAME.search(path.name):
                    continue
                seen_pdf.add(key)
                items.extend(questions_from_pdf(path))
    return items


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print("[paper-api]", fmt % args)

    def _send(self, code: int, payload: dict):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            self._send(200, {"ok": True, "root": str(ROOT)})
            return
        if parsed.path != "/api/mock":
            self._send(404, {"error": "not found"})
            return
        qs = parse_qs(parsed.query)
        subject = (qs.get("subject") or ["science"])[0].lower()
        if subject not in SOURCES:
            self._send(400, {"error": "subject must be science or maths"})
            return
        pool = collect(subject)
        markable = [q for q in pool if q.get("answer")]
        # Prefer markable packs; still return extracted stems so the UI can merge.
        random.shuffle(pool)
        random.shuffle(markable)
        self._send(
            200,
            {
                "subject": subject,
                "folders": [str(p) for p in SOURCES[subject]],
                "available": len(pool),
                "markable": len(markable),
                "questions": pool[:40],
            },
        )


if __name__ == "__main__":
    print(f"Paper API on http://127.0.0.1:{PORT} reading {ROOT}")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
