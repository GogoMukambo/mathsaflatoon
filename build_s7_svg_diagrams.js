// Builds the black-and-white schematic diagrams used by the Year 7 Science boards.
// Graphs and particle models are drawn here rather than generated as photos so the
// axes, values and labels stay accurate.
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "assets", "illustrations");
const W = 1200;
const H = 900;

const INK = "#111111";
const MID = "#555555";
const SOFT = "#999999";
const FAINT = "#d4d4d4";

const F = "Helvetica, Arial, sans-serif";

function attrs(map) {
  return Object.entries(map)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
}

function line(x1, y1, x2, y2, o = {}) {
  return `<line ${attrs({
    x1,
    y1,
    x2,
    y2,
    stroke: o.stroke || INK,
    "stroke-width": o.w || 2,
    "stroke-dasharray": o.dash,
    "stroke-linecap": "round",
    "marker-end": o.arrow ? "url(#ah)" : undefined,
    "marker-start": o.arrowStart ? "url(#ah)" : undefined,
  })} />`;
}

function rect(x, y, w, h, o = {}) {
  return `<rect ${attrs({
    x,
    y,
    width: w,
    height: h,
    rx: o.rx,
    fill: o.fill || "none",
    stroke: o.stroke || INK,
    "stroke-width": o.w === undefined ? 2 : o.w,
    "stroke-dasharray": o.dash,
  })} />`;
}

function circle(cx, cy, r, o = {}) {
  return `<circle ${attrs({
    cx,
    cy,
    r,
    fill: o.fill === undefined ? INK : o.fill,
    stroke: o.stroke,
    "stroke-width": o.w,
  })} />`;
}

function ellipse(cx, cy, rx, ry, o = {}) {
  return `<ellipse ${attrs({
    cx,
    cy,
    rx,
    ry,
    fill: o.fill || "none",
    stroke: o.stroke || INK,
    "stroke-width": o.w === undefined ? 2 : o.w,
  })} />`;
}

function pathEl(d, o = {}) {
  return `<path ${attrs({
    d,
    fill: o.fill || "none",
    stroke: o.stroke || INK,
    "stroke-width": o.w === undefined ? 2 : o.w,
    "stroke-dasharray": o.dash,
    "stroke-linejoin": "round",
    "stroke-linecap": "round",
    "marker-end": o.arrow ? "url(#ah)" : undefined,
  })} />`;
}

function text(x, y, label, o = {}) {
  return `<text ${attrs({
    x,
    y,
    fill: o.fill || INK,
    "font-family": F,
    "font-size": o.size || 26,
    "font-weight": o.weight || 600,
    "text-anchor": o.anchor || "middle",
    transform: o.rotate ? `rotate(${o.rotate} ${x} ${y})` : undefined,
  })}>${label}</text>`;
}

function polyline(points, o = {}) {
  return pathEl("M " + points.map((p) => p.join(" ")).join(" L "), o);
}

function write(name, body, extraDefs = "") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<defs>
<marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M 0 1 L 9 5 L 0 9 z" fill="${INK}" />
</marker>
${extraDefs}
</defs>
<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff" />
${body}
</svg>
`;
  fs.writeFileSync(path.join(OUT, name + ".svg"), svg);
  return name;
}

// Plot frame shared by every graph.
function frame(title, xLabel, yLabel) {
  const box = { x: 170, y: 120, w: 880, h: 580 };
  const parts = [
    text(W / 2, 72, title, { size: 34, weight: 700 }),
    line(box.x, box.y + box.h, box.x + box.w, box.y + box.h, { w: 3 }),
    line(box.x, box.y + box.h, box.x, box.y, { w: 3 }),
    text(box.x + box.w / 2, box.y + box.h + 68, xLabel, { size: 27 }),
    text(60, box.y + box.h / 2, yLabel, { size: 27, rotate: -90 }),
  ];
  for (let i = 1; i <= 5; i++) {
    const gy = box.y + box.h - (box.h / 5) * i;
    parts.push(line(box.x, gy, box.x + box.w, gy, { stroke: FAINT, w: 1.5 }));
  }
  return { box, parts };
}

const made = [];

// 1. Fair test: identical apparatus, one factor changed.
made.push(
  write("fair_test_variables_setup", (() => {
    const p = [line(90, 720, 1110, 720, { w: 3 })];
    [250, 600, 950].forEach((cx, i) => {
      p.push(pathEl(`M ${cx - 95} 400 L ${cx - 80} 718 L ${cx + 80} 718 L ${cx + 95} 400`, { w: 3 }));
      p.push(pathEl(`M ${cx - 86} 520 L ${cx - 80} 718 L ${cx + 80} 718 L ${cx + 86} 520 Z`, { fill: FAINT, stroke: MID, w: 1.5 }));
      p.push(line(cx - 86, 520, cx + 86, 520, { stroke: MID, w: 2 }));
      for (let s = 0; s < 4; s++) {
        p.push(line(cx + 60, 560 + s * 38, cx + 86, 560 + s * 38, { stroke: SOFT, w: 1.5 }));
      }
      // thermometer, reading higher in each beaker
      const bulb = 700 - i * 0;
      p.push(rect(cx - 14, 330, 28, 330, { rx: 14, fill: "#ffffff", w: 2.5 }));
      p.push(circle(cx, bulb - 40, 20, { fill: INK }));
      p.push(rect(cx - 6, 420 + (2 - i) * 70, 12, bulb - 60 - (420 + (2 - i) * 70), { fill: INK, stroke: "none", w: 0 }));
      p.push(pathEl(`M ${cx + 110} 300 L ${cx + 150} 300`, { stroke: MID, w: 2 }));
    });
    p.push(text(250, 250, "cool", { size: 28, fill: MID }));
    p.push(text(600, 250, "warm", { size: 28, fill: MID }));
    p.push(text(950, 250, "hot", { size: 28, fill: MID }));
    p.push(text(600, 800, "same solvent volume in every beaker", { size: 28, fill: MID }));
    return p.join("\n");
  })())
);

// 2. Solubility against temperature, with plotted readings.
made.push(
  write("solubility_data_graphing", (() => {
    const { box, parts } = frame("Solubility against temperature", "Temperature (°C)", "Solubility (g per 100 g water)");
    const data = [
      [0, 13],
      [20, 32],
      [40, 64],
      [60, 110],
      [80, 169],
      [100, 246],
    ];
    const sx = (t) => box.x + (t / 100) * box.w;
    const sy = (g) => box.y + box.h - (g / 260) * box.h;
    for (let t = 0; t <= 100; t += 20) {
      parts.push(line(sx(t), box.y + box.h, sx(t), box.y + box.h + 12, { w: 2 }));
      parts.push(text(sx(t), box.y + box.h + 42, String(t), { size: 24, weight: 500 }));
    }
    [0, 50, 100, 150, 200, 250].forEach((g) => {
      parts.push(text(box.x - 22, sy(g) + 8, String(g), { size: 24, weight: 500, anchor: "end" }));
    });
    parts.push(polyline(data.map(([t, g]) => [sx(t), sy(g)]), { w: 3.5 }));
    data.forEach(([t, g]) => {
      parts.push(line(sx(t) - 11, sy(g) - 11, sx(t) + 11, sy(g) + 11, { w: 3 }));
      parts.push(line(sx(t) - 11, sy(g) + 11, sx(t) + 11, sy(g) - 11, { w: 3 }));
    });
    return parts.join("\n");
  })())
);

// 3. Repeat readings with one anomaly.
made.push(
  write("experimental_anomalies_chart", (() => {
    const { box, parts } = frame("Repeat readings", "Attempt", "Mass dissolved (g)");
    const pts = [38, 41, 39, 40, 72, 39, 41, 40];
    const sx = (i) => box.x + 70 + i * ((box.w - 140) / (pts.length - 1));
    const sy = (g) => box.y + box.h - (g / 90) * box.h;
    [0, 30, 60, 90].forEach((g) => {
      parts.push(text(box.x - 22, sy(g) + 8, String(g), { size: 24, weight: 500, anchor: "end" }));
    });
    pts.forEach((g, i) => {
      parts.push(text(sx(i), box.y + box.h + 42, String(i + 1), { size: 24, weight: 500 }));
      parts.push(circle(sx(i), sy(g), 9, { fill: g > 60 ? "#ffffff" : INK, stroke: INK, w: 3 }));
    });
    parts.push(line(box.x + 40, sy(40), box.x + box.w - 20, sy(40), { dash: "10 9", stroke: MID, w: 2.5 }));
    parts.push(circle(sx(4), sy(72), 34, { fill: "none", stroke: INK, w: 3 }));
    parts.push(line(sx(4) + 30, sy(72) - 26, sx(4) + 110, sy(72) - 76, { w: 2.5, arrowStart: true }));
    parts.push(text(sx(4) + 190, sy(72) - 82, "anomalous", { size: 26 }));
    return parts.join("\n");
  })())
);

// 4. Speed formula triangle.
made.push(
  write("speed_equation_triangle", (() => {
    const cx = 600;
    const top = 170;
    const bottom = 720;
    const half = 300;
    const p = [
      pathEl(`M ${cx} ${top} L ${cx - half} ${bottom} L ${cx + half} ${bottom} Z`, { w: 4 }),
      line(cx - 165, 470, cx + 165, 470, { w: 4 }),
      line(cx, 470, cx, bottom, { w: 4 }),
      text(cx, 405, "d", { size: 96, weight: 700 }),
      text(cx - 92, 630, "s", { size: 86, weight: 700 }),
      text(cx + 92, 630, "t", { size: 86, weight: 700 }),
      text(cx, 820, "distance  ÷  speed  ×  time", { size: 30, fill: MID }),
    ];
    return p.join("\n");
  })())
);

// 5. Moment of a force about a pivot.
made.push(
  write("moment_force_lever_arm", (() => {
    const pivotX = 250;
    const beamY = 420;
    const p = [
      rect(pivotX, beamY - 16, 740, 32, { fill: FAINT, stroke: INK, w: 3 }),
      pathEl(`M ${pivotX} ${beamY + 16} L ${pivotX - 56} ${beamY + 130} L ${pivotX + 56} ${beamY + 130} Z`, { fill: INK, stroke: INK, w: 2 }),
      circle(pivotX, beamY, 13, { fill: "#ffffff", stroke: INK, w: 4 }),
      line(930, beamY + 30, 930, beamY + 230, { w: 5, arrow: true }),
      text(930, beamY + 285, "force", { size: 30 }),
      line(pivotX, beamY - 150, 930, beamY - 150, { dash: "12 10", w: 2.5, arrow: true, arrowStart: true }),
      line(pivotX, beamY - 20, pivotX, beamY - 190, { dash: "7 8", stroke: SOFT, w: 2 }),
      line(930, beamY - 20, 930, beamY - 190, { dash: "7 8", stroke: SOFT, w: 2 }),
      text(590, beamY - 175, "perpendicular distance", { size: 30 }),
      pathEl(`M ${pivotX + 120} ${beamY - 70} A 120 120 0 0 1 ${pivotX + 205} ${beamY - 12}`, { w: 3, arrow: true, stroke: MID }),
    ];
    return p.join("\n");
  })())
);

// 6. Balanced seesaw: clockwise moment equals anticlockwise moment.
made.push(
  write("principle_of_moments_seesaw", (() => {
    const cx = 600;
    const beamY = 400;
    const p = [
      rect(cx - 470, beamY - 14, 940, 28, { fill: FAINT, stroke: INK, w: 3 }),
      pathEl(`M ${cx} ${beamY + 14} L ${cx - 70} ${beamY + 170} L ${cx + 70} ${beamY + 170} Z`, { fill: INK, stroke: INK, w: 2 }),
      line(cx - 300, beamY + 170, cx + 300, beamY + 170, { w: 3 }),
      circle(cx, beamY, 12, { fill: "#ffffff", stroke: INK, w: 4 }),
    ];
    // heavy mass close in, light mass far out
    p.push(line(cx - 160, beamY + 14, cx - 160, beamY + 70, { w: 3 }));
    p.push(rect(cx - 225, beamY + 70, 130, 110, { fill: SOFT, stroke: INK, w: 3 }));
    p.push(line(cx + 320, beamY + 14, cx + 320, beamY + 100, { w: 3 }));
    p.push(rect(cx + 285, beamY + 100, 70, 58, { fill: SOFT, stroke: INK, w: 3 }));
    p.push(line(cx, beamY - 110, cx - 160, beamY - 110, { dash: "12 10", w: 2.5, arrow: true, arrowStart: true }));
    p.push(line(cx, beamY - 200, cx + 320, beamY - 200, { dash: "12 10", w: 2.5, arrow: true, arrowStart: true }));
    p.push(text(cx - 80, beamY - 130, "short distance", { size: 27 }));
    p.push(text(cx + 160, beamY - 220, "long distance", { size: 27 }));
    p.push(text(cx - 160, beamY + 240, "large force", { size: 27 }));
    p.push(text(cx + 320, beamY + 240, "small force", { size: 27 }));
    return p.join("\n");
  })())
);

// 7. Same weight, different contact area.
made.push(
  write("pressure_area_solid_mechanics", (() => {
    const p = [];
    const ground = 700;
    [
      { cx: 310, w: 90, depth: 120, arrows: 2 },
      { cx: 880, w: 300, depth: 34, arrows: 6 },
    ].forEach(({ cx, w, depth, arrows }) => {
      p.push(rect(cx - 250, ground, 500, 170, { fill: "#ffffff", stroke: INK, w: 3 }));
      for (let i = 0; i < 9; i++) {
        p.push(line(cx - 250, ground + 20 + i * 17, cx + 250, ground + 20 + i * 17, { stroke: FAINT, w: 1.5 }));
      }
      p.push(rect(cx - w / 2, ground - 230 + depth, w, 230, { fill: SOFT, stroke: INK, w: 3 }));
      p.push(pathEl(`M ${cx - 250} ${ground} L ${cx - w / 2 - 40} ${ground} L ${cx - w / 2} ${ground + depth} L ${cx + w / 2} ${ground + depth} L ${cx + w / 2 + 40} ${ground} L ${cx + 250} ${ground}`, { w: 4 }));
      for (let i = 0; i < arrows; i++) {
        const x = cx - w / 2 + (w / (arrows + 1)) * (i + 1);
        p.push(line(x, ground + depth + 16, x, ground + depth + 76, { w: 3, arrow: true, stroke: MID }));
      }
      p.push(line(cx, ground - 330, cx, ground - 250, { w: 5, arrow: true }));
      p.push(text(cx, ground - 355, "same weight", { size: 28 }));
    });
    p.push(text(310, 890, "small area", { size: 30 }));
    p.push(text(880, 890, "large area", { size: 30 }));
    return p.join("\n");
  })())
);

// 8. Pressure in a liquid increases with depth.
made.push(
  write("fluid_pressure_depth_gradient", (() => {
    const left = 200;
    const top = 120;
    const w = 300;
    const h = 620;
    const p = [
      pathEl(`M ${left} ${top} L ${left} ${top + h} L ${left + w} ${top + h} L ${left + w} ${top}`, { w: 4 }),
      rect(left + 4, top + 70, w - 8, h - 74, { fill: FAINT, stroke: "none", w: 0 }),
      line(left + 4, top + 70, left + w - 4, top + 70, { stroke: MID, w: 3 }),
    ];
    [0.25, 0.55, 0.85].forEach((f, i) => {
      const y = top + 70 + (h - 90) * f;
      const reach = 120 + i * 170;
      p.push(circle(left + w, y, 7, { fill: "#ffffff", stroke: INK, w: 3 }));
      p.push(pathEl(`M ${left + w + 8} ${y} Q ${left + w + reach / 2} ${y + 10} ${left + w + reach} ${y + 150}`, { w: 4, stroke: MID }));
      p.push(line(left + w + 8, y, left + w + 70 + i * 50, y, { w: 3, arrow: true }));
    });
    p.push(line(left - 70, top + 70, left - 70, top + h, { w: 3, arrow: true }));
    p.push(text(left - 110, top + h / 2, "depth", { size: 30, rotate: -90 }));
    p.push(text(600, 860, "deeper water pushes out harder", { size: 30, fill: MID }));
    return p.join("\n");
  })())
);

// 9. Gas particles colliding with the container walls.
made.push(
  write("gas_particle_container_collisions", (() => {
    const box = { x: 180, y: 150, w: 840, h: 560 };
    const p = [rect(box.x, box.y, box.w, box.h, { w: 5 })];
    let seed = 7;
    const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
    for (let i = 0; i < 26; i++) {
      const cx = box.x + 40 + rand() * (box.w - 80);
      const cy = box.y + 40 + rand() * (box.h - 80);
      const ang = rand() * Math.PI * 2;
      p.push(circle(cx, cy, 13, { fill: INK }));
      p.push(line(cx, cy, cx + Math.cos(ang) * 58, cy + Math.sin(ang) * 58, { w: 2.5, arrow: true, stroke: MID }));
    }
    [
      [box.x, 300],
      [box.x, 560],
      [box.x + box.w, 240],
      [box.x + box.w, 520],
    ].forEach(([x, y]) => {
      for (let k = 0; k < 5; k++) {
        const a = -0.6 + k * 0.3;
        const dir = x === box.x ? -1 : 1;
        p.push(line(x, y, x + dir * 34 * Math.cos(a), y + 34 * Math.sin(a), { w: 2.5 }));
      }
    });
    p.push(text(600, 810, "particles hit the walls and push outwards", { size: 30, fill: MID }));
    return p.join("\n");
  })())
);

// 10. Squeeze the same gas into a smaller volume.
made.push(
  write("boyles_law_volume_pressure", (() => {
    const p = [];
    [
      { x: 150, pistonY: 250, dots: 14, label: "large volume" },
      { x: 680, pistonY: 470, dots: 14, label: "small volume" },
    ].forEach(({ x, pistonY, dots, label }, idx) => {
      const w = 370;
      const bottom = 740;
      p.push(pathEl(`M ${x} 200 L ${x} ${bottom} L ${x + w} ${bottom} L ${x + w} 200`, { w: 4 }));
      p.push(rect(x + 4, pistonY, w - 8, bottom - pistonY - 4, { fill: "#ffffff", stroke: "none", w: 0 }));
      p.push(rect(x + 2, pistonY - 34, w - 4, 34, { fill: SOFT, stroke: INK, w: 3 }));
      p.push(rect(x + w / 2 - 14, pistonY - 150, 28, 116, { fill: FAINT, stroke: INK, w: 3 }));
      let seed = 3 + idx * 11;
      const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
      for (let i = 0; i < dots; i++) {
        p.push(circle(x + 35 + rand() * (w - 70), pistonY + 30 + rand() * (bottom - pistonY - 60), 12, { fill: INK }));
      }
      p.push(text(x + w / 2, 860, label, { size: 30 }));
      if (idx === 1) p.push(line(x + w / 2, 120, x + w / 2, 200, { w: 5, arrow: true }));
    });
    p.push(line(560, 470, 650, 470, { w: 4, arrow: true, stroke: MID }));
    return p.join("\n");
  })())
);

// 11. Net movement down a concentration gradient.
made.push(
  write("diffusion_concentration_gradient", (() => {
    const box = { x: 150, y: 170, w: 900, h: 420 };
    const p = [rect(box.x, box.y, box.w, box.h, { w: 4 })];
    let seed = 19;
    const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
    for (let i = 0; i < 70; i++) {
      const bias = Math.pow(rand(), 2.4);
      const cx = box.x + 25 + bias * (box.w - 50);
      const cy = box.y + 25 + rand() * (box.h - 50);
      p.push(circle(cx, cy, 10, { fill: INK }));
    }
    p.push(line(box.x + 120, box.y + box.h + 90, box.x + box.w - 90, box.y + box.h + 90, { w: 6, arrow: true }));
    p.push(text(box.x + box.w / 2, box.y + box.h + 155, "net movement: crowded → less crowded", { size: 30 }));
    p.push(text(box.x + 130, box.y - 35, "high concentration", { size: 27, fill: MID }));
    p.push(text(box.x + box.w - 150, box.y - 35, "low concentration", { size: 27, fill: MID }));
    return p.join("\n");
  })())
);

// 12. Diffusion is faster in a gas than in a liquid.
made.push(
  write("diffusion_gas_vs_liquid", (() => {
    const p = [];
    [
      { x: 110, label: "gas", count: 16, step: 86, spread: 1 },
      { x: 640, label: "liquid", count: 40, step: 30, spread: 0.55 },
    ].forEach(({ x, label, count, step, spread }, idx) => {
      const box = { x, y: 170, w: 450, h: 450 };
      p.push(rect(box.x, box.y, box.w, box.h, { w: 4 }));
      let seed = 5 + idx * 23;
      const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
      for (let i = 0; i < count; i++) {
        const cx = box.x + 30 + rand() * (box.w - 60) * (idx === 1 ? 1 : 1);
        const cy = box.y + 30 + rand() * (box.h - 60);
        const ang = rand() * Math.PI * 2;
        p.push(circle(cx, cy, idx === 1 ? 14 : 12, { fill: INK }));
        p.push(line(cx, cy, cx + Math.cos(ang) * step * spread, cy + Math.sin(ang) * step * spread, { w: 2.5, arrow: true, stroke: MID }));
      }
      p.push(text(box.x + box.w / 2, 690, label, { size: 34, weight: 700 }));
      p.push(text(box.x + box.w / 2, 740, idx === 0 ? "far apart, moving fast" : "close together, moving slower", { size: 26, fill: MID }));
    });
    return p.join("\n");
  })())
);

// 13. A poison concentrating up the trophic levels.
made.push(
  write("bioaccumulation_trophic_pyramid", (() => {
    const p = [];
    const cx = 600;
    const levels = [
      { w: 860, dots: 6 },
      { w: 660, dots: 14 },
      { w: 450, dots: 26 },
      { w: 240, dots: 44 },
    ];
    const hStep = 150;
    levels.forEach((lv, i) => {
      const y = 740 - i * hStep;
      p.push(rect(cx - lv.w / 2, y - hStep + 14, lv.w, hStep - 20, { fill: "#ffffff", stroke: INK, w: 3 }));
      let seed = 31 + i * 17;
      const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
      for (let d = 0; d < lv.dots; d++) {
        p.push(circle(cx - lv.w / 2 + 24 + rand() * (lv.w - 48), y - hStep + 34 + rand() * (hStep - 58), 7, { fill: INK }));
      }
    });
    p.push(line(1110, 730, 1110, 190, { w: 5, arrow: true }));
    p.push(text(1165, 460, "poison builds up", { size: 28, rotate: -90 }));
    p.push(text(cx, 880, "producers at the bottom, top predator at the top", { size: 28, fill: MID }));
    return p.join("\n");
  })())
);

// 14. Pure substance against a mixture, at particle level.
made.push(
  write("pure_substance_vs_mixture_particle", (() => {
    const p = [];
    [
      { x: 120, label: "pure substance", mixed: false },
      { x: 650, label: "mixture", mixed: true },
    ].forEach(({ x, label, mixed }) => {
      const box = { x, y: 180, w: 430, h: 430 };
      p.push(rect(box.x, box.y, box.w, box.h, { w: 4 }));
      let n = 0;
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
          const cx = box.x + 54 + col * 65;
          const cy = box.y + 54 + row * 65;
          n += 1;
          if (mixed && n % 3 === 0) {
            p.push(rect(cx - 15, cy - 15, 30, 30, { fill: "#ffffff", stroke: INK, w: 3 }));
          } else {
            p.push(circle(cx, cy, 16, { fill: mixed ? INK : INK }));
          }
        }
      }
      p.push(text(box.x + box.w / 2, 680, label, { size: 34, weight: 700 }));
    });
    p.push(text(600, 760, "one kind of particle  ·  more than one kind of particle", { size: 27, fill: MID }));
    return p.join("\n");
  })())
);

// 15. Melting point of a pure and an impure sample.
made.push(
  write("melting_point_graph_pure_impure", (() => {
    const { box, parts } = frame("Melting a pure and an impure sample", "Time (minutes)", "Temperature (°C)");
    const sx = (t) => box.x + (t / 10) * box.w;
    const sy = (c) => box.y + box.h - ((c + 20) / 120) * box.h;
    [-20, 0, 20, 40, 60, 80, 100].forEach((c) => {
      parts.push(text(box.x - 22, sy(c) + 8, String(c), { size: 23, weight: 500, anchor: "end" }));
    });
    for (let t = 0; t <= 10; t += 2) {
      parts.push(line(sx(t), box.y + box.h, sx(t), box.y + box.h + 12, { w: 2 }));
      parts.push(text(sx(t), box.y + box.h + 42, String(t), { size: 23, weight: 500 }));
    }
    parts.push(polyline([[sx(0), sy(-15)], [sx(2.6), sy(0)], [sx(5.4), sy(0)], [sx(8), sy(45)], [sx(10), sy(72)]], { w: 4 }));
    parts.push(polyline([[sx(0), sy(-15)], [sx(2.4), sy(-9)], [sx(5.6), sy(-2)], [sx(8), sy(42)], [sx(10), sy(70)]], { w: 4, dash: "14 10", stroke: MID }));
    parts.push(line(sx(2.6), sy(0), sx(5.4), sy(0), { w: 7 }));
    parts.push(text(sx(4), sy(0) - 34, "sharp flat melting point", { size: 26 }));
    parts.push(text(sx(4.2), sy(-15) + 56, "impure: lower and sloping", { size: 26, fill: MID }));
    return parts.join("\n");
  })())
);

// 16. What dry air is made of.
made.push(
  write(
    "air_composition_mixture_gases",
    (() => {
      const cx = 540;
      const cy = 470;
      const r = 285;
      const slices = [
        { frac: 0.78, fill: "url(#hatchA)", label: "nitrogen 78%" },
        { frac: 0.21, fill: "url(#hatchB)", label: "oxygen 21%" },
        { frac: 0.01, fill: INK, label: "other gases 1%" },
      ];
      const p = [text(W / 2, 80, "What dry air is made of", { size: 34, weight: 700 })];
      let start = -Math.PI / 2;
      slices.forEach((s) => {
        const end = start + s.frac * Math.PI * 2;
        const x1 = cx + r * Math.cos(start);
        const y1 = cy + r * Math.sin(start);
        const x2 = cx + r * Math.cos(end);
        const y2 = cy + r * Math.sin(end);
        const big = s.frac > 0.5 ? 1 : 0;
        p.push(
          pathEl(`M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${big} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`, {
            fill: s.fill,
            w: 3,
          })
        );
        start = end;
      });
      const keyY = 330;
      slices.forEach((s, i) => {
        p.push(rect(910, keyY + i * 80, 46, 46, { fill: s.fill, stroke: INK, w: 3 }));
        p.push(text(975, keyY + i * 80 + 34, s.label, { size: 27, anchor: "start" }));
      });
      return p.join("\n");
    })(),
    `<pattern id="hatchA" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
<rect width="14" height="14" fill="#ffffff" /><line x1="0" y1="0" x2="0" y2="14" stroke="${INK}" stroke-width="4" />
</pattern>
<pattern id="hatchB" width="12" height="12" patternUnits="userSpaceOnUse">
<rect width="12" height="12" fill="#ffffff" /><circle cx="6" cy="6" r="2.6" fill="${MID}" />
</pattern>`
  )
);

// 17. Year-to-year variation against the long-term trend.
made.push(
  write("trend_vs_variation_graph", (() => {
    const { box, parts } = frame("Year-to-year weather and the long-term trend", "Year", "Average temperature (°C)");
    const vals = [13.6, 14.3, 13.4, 14.1, 13.9, 14.6, 13.8, 14.4, 14.2, 14.9, 14.1, 14.8, 14.6, 15.2, 14.7, 15.4];
    const sx = (i) => box.x + 30 + i * ((box.w - 60) / (vals.length - 1));
    const sy = (v) => box.y + box.h - ((v - 13) / 3) * box.h;
    [13, 14, 15, 16].forEach((v) => {
      parts.push(text(box.x - 22, sy(v) + 8, String(v), { size: 24, weight: 500, anchor: "end" }));
    });
    parts.push(polyline(vals.map((v, i) => [sx(i), sy(v)]), { w: 3, stroke: MID }));
    vals.forEach((v, i) => parts.push(circle(sx(i), sy(v), 6, { fill: MID })));
    parts.push(line(sx(0), sy(13.8), sx(vals.length - 1), sy(15.1), { w: 5, dash: "18 12" }));
    parts.push(text(sx(vals.length - 1) - 170, sy(15.1) - 46, "trend", { size: 30 }));
    parts.push(text(sx(3), sy(13.3), "one cold year is weather", { size: 25, fill: MID }));
    return parts.join("\n");
  })())
);

// 18. Repeating glacial and warm periods from ice cores.
made.push(
  write("ice_core_temp_cycles", (() => {
    const { box, parts } = frame("Temperature over the last ice ages", "Thousands of years ago", "Temperature compared with today (°C)");
    const sx = (k) => box.x + box.w - (k / 400) * box.w;
    const sy = (d) => box.y + box.h / 2 - (d / 12) * (box.h / 2);
    [0, 100, 200, 300, 400].forEach((k) => {
      parts.push(line(sx(k), box.y + box.h, sx(k), box.y + box.h + 12, { w: 2 }));
      parts.push(text(sx(k), box.y + box.h + 42, String(k), { size: 24, weight: 500 }));
    });
    [-8, -4, 0, 4].forEach((d) => {
      parts.push(text(box.x - 22, sy(d) + 8, String(d), { size: 24, weight: 500, anchor: "end" }));
    });
    const pts = [];
    for (let k = 400; k >= 0; k -= 2) {
      const cycle = Math.sin((k / 100) * Math.PI * 2);
      const warm = Math.pow(Math.max(0, cycle), 3) * 3;
      const cold = Math.min(0, cycle) * 7;
      pts.push([sx(k), sy(warm + cold + 0.4 * Math.sin(k / 7))]);
    }
    parts.push(line(box.x, sy(0), box.x + box.w, sy(0), { dash: "12 10", stroke: SOFT, w: 2 }));
    parts.push(polyline(pts, { w: 3.5 }));
    parts.push(text(box.x + 150, sy(-9), "glacial periods", { size: 26, fill: MID }));
    parts.push(text(box.x + box.w - 170, sy(5.4), "warm periods", { size: 26, fill: MID }));
    return parts.join("\n");
  })())
);

console.log("wrote " + made.length + " svg diagrams:\n" + made.join("\n"));
