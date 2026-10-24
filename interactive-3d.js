(function () {
  function topic3dKey(yearId, unitId, topicId) {
    const wanted = String(topicId || "");
    const prefix = `s${yearId}_${unitId}.`;
    const data = window.INTERACTIVE_3D_DATA || {};
    const keys = Object.keys(data).filter((k) => k.startsWith(prefix) || k.startsWith(prefix.replace(".", "_")));
    return (
      keys.find((k) => k === wanted || k.endsWith("." + wanted) || k.indexOf(wanted) !== -1) ||
      keys.find((k) => k.indexOf(prefix) === 0) ||
      null
    );
  }

  function makeLabel(text) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "rgba(15,23,42,0.85)";
    ctx.fillRect(8, 16, 496, 96);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 42px Nunito, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 64);
    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    const spr = new THREE.Sprite(mat);
    spr.scale.set(3.2, 0.8, 1);
    return spr;
  }

  function standIn(id, color) {
    const g = new THREE.Group();
    g.name = id;
    const col = new THREE.Color(color || "#94a3b8");
    function mat(c, op) {
      return new THREE.MeshStandardMaterial({
        color: c || col,
        transparent: op != null && op < 1,
        opacity: op == null ? 1 : op,
        roughness: 0.45,
        metalness: 0.08,
      });
    }
    if (/torso/i.test(id)) {
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(1.6, 3.2, 8, 16), mat("#94a3b8", 0.28));
      m.position.y = 0.4;
      g.add(m);
    } else if (/airway|trachea_bronchi|trachea_closeup/i.test(id)) {
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 3.2, 16), mat("#10b981"));
      tube.position.y = 2.2;
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 2.2, 12), mat("#059669"));
      l.rotation.z = 0.7;
      l.position.set(-0.9, 0.4, 0);
      const r = l.clone();
      r.rotation.z = -0.7;
      r.position.x = 0.9;
      g.add(tube, l, r);
      for (let i = 0; i < 6; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.05, 8, 20, Math.PI), mat("#a7f3d0"));
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 1.1 + i * 0.38;
        g.add(ring);
      }
    } else if (/lung/i.test(id)) {
      const L = new THREE.Mesh(new THREE.SphereGeometry(1.15, 18, 14), mat("#fbcfe8", 0.92));
      L.scale.set(0.85, 1.15, 0.7);
      L.position.set(-1.15, 0.3, 0);
      const R = L.clone();
      R.position.x = 1.15;
      g.add(L, R);
    } else if (/alveol/i.test(id)) {
      for (let i = 0; i < 18; i++) {
        const s = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 10), mat("#fda4af"));
        const a = (i / 18) * Math.PI * 2;
        s.position.set(Math.cos(a) * 1.1, (i % 5) * 0.35 - 0.6, Math.sin(a) * 1.1);
        g.add(s);
      }
    } else if (/capillar/i.test(id)) {
      for (let i = 0; i < 10; i++) {
        const t = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.04, 6, 24), mat(i % 2 ? "#ef4444" : "#3b82f6"));
        t.rotation.x = 0.4 + i * 0.12;
        t.rotation.y = i * 0.3;
        g.add(t);
      }
    } else if (/mitochond/i.test(id)) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 12), mat("#f59e0b"));
      m.scale.set(1.8, 0.7, 0.7);
      g.add(m);
    } else if (/cell/i.test(id)) {
      const body = new THREE.Mesh(new THREE.SphereGeometry(2.2, 24, 18), mat("#6ee7b7", 0.35));
      const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 12), mat("#047857"));
      g.add(body, nuc);
    } else if (/ribcage|diaphragm/i.test(id)) {
      for (let i = 0; i < 8; i++) {
        const rib = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.06, 6, 20, Math.PI), mat("#cbd5e1"));
        rib.rotation.x = Math.PI / 2;
        rib.position.y = 1.6 - i * 0.32;
        rib.scale.x = 1 + i * 0.04;
        g.add(rib);
      }
      const dia = new THREE.Mesh(new THREE.CircleGeometry(1.8, 24), mat("#fb7185", 0.85));
      dia.rotation.x = -Math.PI / 2;
      dia.position.y = -0.9;
      dia.name = "diaphragmSheet";
      g.add(dia);
    } else if (/epithel|cilia|membrane/i.test(id)) {
      const plane = new THREE.Mesh(new THREE.BoxGeometry(4, 0.2, 4), mat("#bfdbfe", 0.8));
      g.add(plane);
      for (let i = 0; i < 24; i++) {
        const hair = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6), mat("#1d4ed8"));
        hair.position.set((i % 8) * 0.4 - 1.4, 0.45, Math.floor(i / 8) * 0.5 - 0.5);
        g.add(hair);
      }
    } else if (/rbc|red_blood/i.test(id)) {
      for (let i = 0; i < 8; i++) {
        const d = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.08, 8, 16), mat("#dc2626"));
        d.position.set(-1.5 + i * 0.4, Math.sin(i) * 0.2, 0);
        g.add(d);
      }
    } else if (/glucose/i.test(id)) {
      g.add(new THREE.Mesh(new THREE.DodecahedronGeometry(0.35), mat("#22c55e")));
    } else if (/o2_molecule/i.test(id)) {
      const a = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), mat("#2563eb"));
      const b = a.clone();
      b.position.x = 0.28;
      g.add(a, b);
    } else if (/co2_molecule/i.test(id)) {
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), mat("#0f172a"));
      const o1 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mat("#ea580c"));
      o1.position.x = 0.32;
      const o2 = o1.clone();
      o2.position.x = -0.32;
      g.add(c, o1, o2);
    } else if (/h2o/i.test(id)) {
      g.add(new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), mat("#38bdf8")));
    } else if (/muscle|quadricep|leg/i.test(id)) {
      const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 2.4, 6, 12), mat("#ef4444", 0.75));
      g.add(m);
    } else {
      g.add(new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), mat(col)));
    }
    return g;
  }

  function envColor(name) {
    if (name === "microscopic_darkfield") return 0x0b1220;
    if (name === "medical_blue") return 0xdbeafe;
    if (name === "cellular_fluid") return 0xecfdf5;
    return 0xeef2ff;
  }

  function mountInteractive3D(container, unitId, studySubject, yearId, topicId) {
    if (!container || !window.THREE || studySubject !== "science") return false;
    const dataAll = window.INTERACTIVE_3D_DATA || {};
    const prefix = `s${yearId}_${unitId}.`;
    const keys = Object.keys(dataAll)
      .filter((k) => k.indexOf(`s${yearId}_${unitId}`) === 0)
      .sort();
    if (!keys.length) return false;
    const wanted = String(topicId || "");
    let topicKey =
      keys.find((k) => k.indexOf(wanted) !== -1) ||
      topic3dKey(yearId, unitId, topicId) ||
      keys[0];
    const topic = dataAll[topicKey];
    if (!topic || !topic.scenes) return false;

    const cards = Object.keys(topic.scenes);
    let cardId = cards[0];
    let step = 0;
    let playTimer = null;
    const objects = {};
    const clips = [];

    container.innerHTML = "";
    const wrap = document.createElement("section");
    wrap.className = "iwb-container";
    wrap.innerHTML =
      '<div class="iwb-header"><div class="iwb-header-title"><span class="iwb-icon">🔬</span><div>' +
      '<h4 class="iwb-title">3D concept view</h4>' +
      '<p class="iwb-subtitle">Year ' +
      yearId +
      " · " +
      (topic.title || "") +
      " · stand-in models (GLB files not bundled)</p></div></div></div>" +
      '<div class="iwb-subtopic-bar"><div class="iwb-subtopic-pills" id="iwb3dPills"></div>' +
      '<span class="iwb-badge" id="iwb3dBadge">3D</span></div>' +
      '<div class="iwb-workbench"><div class="iwb-board-column"><div class="iwb-surface iwb-surface-3d">' +
      '<canvas id="iwb3dCanvas" class="iwb-3d-canvas"></canvas></div>' +
      '<div class="iwb-controls"><div class="iwb-btn-group">' +
      '<button type="button" class="iwb-ctrl-btn" id="iwb3dPrev">◀ Previous</button>' +
      '<button type="button" class="iwb-play-btn" id="iwb3dPlay">▶ Play Step</button>' +
      '<button type="button" class="iwb-ctrl-btn" id="iwb3dNext">Next ▶</button></div>' +
      '<div class="iwb-step-tracker"><span class="iwb-tracker-label">STEP PROGRESS</span>' +
      '<div class="iwb-dots" id="iwb3dDots"></div><span class="iwb-counter" id="iwb3dCounter">1 / 1</span></div></div></div>' +
      '<div class="iwb-side-column"><div class="iwb-card iwb-teacher-card"><div class="iwb-card-header">' +
      '<span class="iwb-card-avatar">👨‍🏫</span><div><h5 class="iwb-card-title" id="iwb3dTitle"></h5>' +
      '<p class="iwb-card-sub" id="iwb3dSub"></p></div></div>' +
      '<div class="iwb-narration-box"><p class="iwb-narration-text" id="iwb3dNarration"></p></div></div></div></div>';
    container.appendChild(wrap);

    const canvas = wrap.querySelector("#iwb3dCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(envColor(topic.environment));
    const camera = new THREE.PerspectiveCamera(45, 800 / 500, 0.1, 100);
    const start = topic.cameraStart || { position: [0, 2, 12], target: [0, 0, 0] };
    camera.position.fromArray(start.position);
    camera.lookAt(new THREE.Vector3().fromArray(start.target || [0, 0, 0]));
    if (start.fov) camera.fov = start.fov;
    camera.updateProjectionMatrix();
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(6, 10, 8);
    scene.add(key);

    const world = new THREE.Group();
    scene.add(world);

    function resize() {
      const w = canvas.clientWidth || 800;
      const h = canvas.clientHeight || 500;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    function getObj(id) {
      if (objects[id]) return objects[id];
      const obj = standIn(id);
      objects[id] = obj;
      world.add(obj);
      return obj;
    }

    function applyEl(el) {
      if (el.type === "model") {
        const obj = getObj(el.id);
        if (el.visible === false) obj.visible = false;
        else obj.visible = true;
        if (el.position) obj.position.fromArray(el.position);
        if (el.rotation) obj.rotation.set(el.rotation[0], el.rotation[1], el.rotation[2]);
        if (el.scale && Array.isArray(el.scale)) obj.scale.fromArray(el.scale.map(Number));
        if (el.opacity != null) {
          obj.traverse(function (n) {
            if (n.material) {
              n.material.transparent = true;
              n.material.opacity = el.opacity;
            }
          });
        }
        if (el.color) {
          obj.traverse(function (n) {
            if (n.material && n.material.color) n.material.color.set(el.color);
          });
        }
        if (el.pulse) clips.push({ kind: "pulse", obj: obj, t: 0 });
        if (el.viewport === "left") obj.position.x = -3.2;
        if (el.viewport === "right") obj.position.x = 3.2;
      } else if (el.type === "animationPlay") {
        const obj = getObj(el.target);
        clips.push({ kind: el.clip || "pulse", obj: obj, t: 0, loop: !!el.loop, speed: el.timeScale || 1 });
      } else if (el.type === "particleSystem" || el.type === "particleVolume") {
        const n = el.count || (el.type === "particleVolume" ? 80 : 40);
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          pos[i * 3] = (Math.random() - 0.5) * 4;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 3;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const pts = new THREE.Points(
          geo,
          new THREE.PointsMaterial({ color: el.color || "#3b82f6", size: 0.12 })
        );
        pts.name = el.id || "pts";
        world.add(pts);
        clips.push({ kind: "drift", obj: pts, dir: el.direction || "", t: 0 });
      } else if (el.type === "text3D") {
        const spr = makeLabel(el.text || "");
        if (el.position) spr.position.fromArray(el.position);
        if (el.viewport === "left") spr.position.set(-3.2, -2.6, 0);
        if (el.viewport === "right") spr.position.set(3.2, -2.6, 0);
        world.add(spr);
      } else if (el.type === "light") {
        if (el.typeLight === "ambient") scene.add(new THREE.AmbientLight(0xffffff, el.intensity || 0.5));
        else {
          const l = new THREE.PointLight(el.color || "#fff", el.intensity || 1, 40);
          if (el.position) l.position.fromArray(el.position);
          scene.add(l);
        }
      } else if (el.type === "materialOverride") {
        const obj = objects[el.target];
        if (obj) {
          obj.traverse(function (n) {
            if (!n.material) return;
            if (el.color) n.material.color.set(el.color);
            if (el.startColor) n.material.color.set(el.startColor);
            if (el.opacity != null) {
              n.material.transparent = true;
              n.material.opacity = el.opacity;
            }
          });
        }
      } else if (el.type === "mesh") {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(4, 4),
          new THREE.MeshStandardMaterial({
            color: el.color || "#bfdbfe",
            transparent: true,
            opacity: el.opacity == null ? 0.5 : el.opacity,
            side: THREE.DoubleSide,
          })
        );
        world.add(m);
      }
    }

    function renderStep() {
      const scenes = topic.scenes[cardId] || [];
      if (step >= scenes.length) step = scenes.length - 1;
      if (step < 0) step = 0;
      const sc = scenes[step];
      wrap.querySelector("#iwb3dTitle").textContent = topic.title;
      wrap.querySelector("#iwb3dSub").textContent = "Step " + (step + 1) + " of " + scenes.length;
      wrap.querySelector("#iwb3dNarration").textContent = sc.narration || "";
      wrap.querySelector("#iwb3dCounter").textContent = step + 1 + " / " + scenes.length;
      const dots = wrap.querySelector("#iwb3dDots");
      dots.innerHTML = "";
      for (let i = 0; i < scenes.length; i++) {
        const d = document.createElement("span");
        d.className = "iwb-dot" + (i === step ? " on" : i < step ? " done" : "");
        dots.appendChild(d);
      }
      wrap.querySelector("#iwb3dPrev").disabled = step === 0;
      wrap.querySelector("#iwb3dNext").disabled = step === scenes.length - 1;

      while (world.children.length) world.remove(world.children[0]);
      Object.keys(objects).forEach(function (k) {
        delete objects[k];
      });
      clips.length = 0;

      if (sc.cameraMove && sc.cameraMove.position) {
        camera.position.fromArray(sc.cameraMove.position);
        const tgt = sc.cameraMove.target || [0, 0, 0];
        camera.lookAt(tgt[0], tgt[1], tgt[2]);
        if (sc.cameraMove.fov) {
          camera.fov = sc.cameraMove.fov;
          camera.updateProjectionMatrix();
        }
      } else if (step === 0) {
        camera.position.fromArray(start.position);
        camera.lookAt(new THREE.Vector3().fromArray(start.target || [0, 0, 0]));
      }
      (sc.elements3D || []).forEach(applyEl);
      resize();
    }

    function setCard(id) {
      cardId = id;
      step = 0;
      wrap.querySelectorAll("#iwb3dPills button").forEach(function (b) {
        b.classList.toggle("on", b.getAttribute("data-card") === id);
      });
      const labels = { card_0: "Key idea", card_1: "Recall", card_2: "Check" };
      wrap.querySelector("#iwb3dBadge").textContent = labels[id] || id;
      renderStep();
    }

    const pills = wrap.querySelector("#iwb3dPills");
    cards.forEach(function (id, i) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "iwb-pill-btn" + (i === 0 ? " on" : "");
      b.setAttribute("data-card", id);
      b.textContent = { card_0: "Key idea", card_1: "Recall", card_2: "Check" }[id] || id;
      b.addEventListener("click", function () {
        setCard(id);
      });
      pills.appendChild(b);
    });

    wrap.querySelector("#iwb3dPrev").addEventListener("click", function () {
      if (step > 0) {
        step--;
        renderStep();
      }
    });
    wrap.querySelector("#iwb3dNext").addEventListener("click", function () {
      const scenes = topic.scenes[cardId];
      if (step < scenes.length - 1) {
        step++;
        renderStep();
      }
    });
    wrap.querySelector("#iwb3dPlay").addEventListener("click", function () {
      if (playTimer) {
        clearInterval(playTimer);
        playTimer = null;
        wrap.querySelector("#iwb3dPlay").textContent = "▶ Play Step";
        return;
      }
      wrap.querySelector("#iwb3dPlay").textContent = "⏸ Pause";
      playTimer = setInterval(function () {
        const scenes = topic.scenes[cardId];
        if (step < scenes.length - 1) {
          step++;
          renderStep();
        } else {
          clearInterval(playTimer);
          playTimer = null;
          wrap.querySelector("#iwb3dPlay").textContent = "▶ Play Step";
        }
      }, 3200);
    });

    let last = performance.now();
    function tick(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      clips.forEach(function (c) {
        c.t += dt * (c.speed || 1);
        if (c.kind === "pulse" || /pulse|energy/i.test(c.kind)) {
          const s = 1 + Math.sin(c.t * 3) * 0.08;
          c.obj.scale.setScalar(s);
        } else if (/inhale|lung_expansion|breathing/i.test(c.kind)) {
          const s = 1 + Math.sin(c.t * 2) * 0.12;
          c.obj.scale.set(s, s, s);
        } else if (/exhale|deflation/i.test(c.kind)) {
          const s = 1 - Math.min(0.18, c.t * 0.08);
          c.obj.scale.setScalar(Math.max(0.82, s));
        } else if (/panting/i.test(c.kind)) {
          c.obj.scale.setScalar(1 + Math.sin(c.t * 8) * 0.14);
        } else if (/cilia/i.test(c.kind)) {
          c.obj.rotation.z = Math.sin(c.t * 6) * 0.25;
        } else if (c.kind === "drift") {
          c.obj.rotation.y += dt * 0.4;
          const inward = /inward/i.test(c.dir);
          c.obj.position.x += (inward ? -1 : 1) * dt * 0.15;
        }
      });
      world.rotation.y += dt * 0.12;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    window.addEventListener("resize", resize);
    setCard(cards[0]);
    requestAnimationFrame(tick);
    return true;
  }

  window.mountInteractive3D = mountInteractive3D;
})();
