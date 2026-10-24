import json
from pathlib import Path

import pymupdf as fitz

p = Path(r"c:\OneDrive\Documents\Study Data Store\Year 8 - IGCSE\StudyMaterial\Science Second Edition\Science-Learners-Book-Stage 9.pdf")
doc = fitz.open(p)
out = []
out.append(f"pages {len(doc)}")
toc = doc.get_toc(simple=True) or []
out.append(f"toc {len(toc)}")
for row in toc[:40]:
    out.append(repr(row))

for i in range(min(12, len(doc))):
    text = doc[i].get_text("text")
    out.append(f"\n===== PAGE {i+1} chars={len(text)} =====")
    out.append(text[:2200])

out.append("\n===== LARGE LINES first 30 pages =====")
for i in range(min(30, len(doc))):
    items = []
    for block in doc[i].get_text("dict").get("blocks", []):
        for line in block.get("lines", []):
            spans = line.get("spans", [])
            if not spans:
                continue
            t = " ".join("".join(s.get("text", "") for s in spans).split())
            if not t:
                continue
            size = max(s.get("size", 0) for s in spans)
            items.append((size, t[:80]))
    items.sort(reverse=True)
    top = items[:5]
    out.append(f"p{i+1}: " + " || ".join(f"{s:.1f}:{t}" for s, t in top))

Path("tmp_s9_inspect.txt").write_text("\n".join(out), encoding="utf-8")
print("wrote tmp_s9_inspect.txt", len(doc), "pages")
