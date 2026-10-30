/* Bilgə — tətbiq: marşrut, görünüşlər, test mühərriki, oyunlar, XP */
(function () {
  const { SUBJECTS, LVL, PRO_LVL, T } = B;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]] } return a };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const today = () => new Date().toISOString().slice(0, 10);

  /* ---------- ikonlar ---------- */
  const P = {
    math: '<path d="M5 7h6M8 4v6M14 7h5M5 17l5-5M5 12l5 5M14 15h5M14 19h5"/>',
    lang: '<path d="M4 19 9 5l5 14M6 14h6M15 9h5M17.5 9v10M15 19h5"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20"/><path d="M9 8h7"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
    leaf: '<path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19 13 11"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    atom: '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
    flask: '<path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7.5 15h9"/>',
    dna: '<path d="M7 3c0 6 10 6 10 12s-10 6-10 6M17 3c0 6-10 6-10 12"/><path d="M8 6.5h8M8 17.5h8M9.5 12h5"/>',
    map: '<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    column: '<path d="M3 21h18M5 18h14M4 7l8-4 8 4M6 7v11M10 7v11M14 7v11M18 7v11"/>',
    ledger: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 3v18M7 8h2M7 12h2M15 8h2M15 12h2M7 16h2M15 16h2"/>',
    mega: '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11"/>',
    code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>',
    subjects: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
    exam: '<path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z"/><path d="M8 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 13l2 2 4-4"/>',
    game: '<path d="M6 8h12a4 4 0 0 1 4 4v2a4 4 0 0 1-7 2.6L14 15h-4l-1 1.6A4 4 0 0 1 2 14v-2a4 4 0 0 1 4-4z"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 14h.01" stroke-linecap="round"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    fire: '<path d="M12 22c4.4 0 7-2.8 7-6.6 0-3.5-2.4-5.6-3.6-8.4-.5 2-1.6 3-2.8 3.4C13 7 11 4 8.5 2c.3 3.4-3.5 6.4-3.5 11.4C5 18.6 7.6 22 12 22z"/>',
    star: '<path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.3l-5.6 2.9 1.1-6.3-4.6-4.4 6.3-.9z"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m7.5 12.5 3 3 6-6.5" stroke-linecap="round" stroke-linejoin="round"/>',
    cross: '<circle cx="12" cy="12" r="10"/><path d="m8.5 8.5 7 7M15.5 8.5l-7 7" stroke-linecap="round"/>',
    close: '<path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    cards: '<rect x="3" y="5" width="12" height="15" rx="2"/><path d="M9 3h10a2 2 0 0 1 2 2v13"/>',
    scale: '<path d="M12 3v18M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0zM8 21h8"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
    medal: '<circle cx="12" cy="15" r="6"/><path d="M8.5 10 6 3h4l2 4 2-4h4l-2.5 7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5" stroke-linecap="round"/>',
    note: '<path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 12h8M8 16h5"/>',
    path: '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" stroke-linecap="round"/>',
    half: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
    vol: '<path d="M4 9v6h4l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  };
  const I = (k, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">${P[k] || ""}</svg>`;
  const STAR = on => `<svg class="${on ? "on" : ""}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${P.star}</svg>`;

  /* ---------- yaddaş ---------- */
  const KEY = "bilge_v1";
  const def = () => ({ name: "", xp: 0, days: [], done: {}, tests: 0, perfect: 0, correct: 0, answered: 0, subj: {}, blitz: 0, mem: 0, tf: 0, daily: {}, grade: 0, last: "",
    onb: false, goal: 60, xpDay: {}, goalHit: 0, mist: [], fixed: 0, decks: 0, certs: 0, sound: true, theme: "", av: 0, view: "path" });
  let S = def();
  try { S = Object.assign(def(), JSON.parse(localStorage.getItem(KEY)) || {}) } catch (e) { }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)) } catch (e) { } cloudPush() };
  const AVC = ["#16215C", "#DD3B2F", "#2F5BEA", "#17925A", "#B0480F", "#7C3AED", "#0E7C86", "#C2185B"];
  const applyTheme = () => { if (S.theme) document.documentElement.dataset.theme = S.theme; else delete document.documentElement.dataset.theme };
  applyTheme();
  const isDark = () => S.theme ? S.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  const todayXp = () => S.xpDay[today()] || 0;

  /* ---------- səs və konfeti ---------- */
  let AC;
  function beep(kind) {
    if (!S.sound) return; try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const t0 = AC.currentTime;
      const seq = kind === "ok" ? [[660, 0], [990, .09]] : kind === "no" ? [[220, 0], [180, .1]] : [[523, 0], [659, .1], [784, .2], [1047, .3]];
      seq.forEach(([f, d]) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = kind === "no" ? "triangle" : "sine"; o.frequency.value = f; g.gain.setValueAtTime(0, t0 + d); g.gain.linearRampToValueAtTime(.13, t0 + d + .015); g.gain.exponentialRampToValueAtTime(.001, t0 + d + .22); o.connect(g).connect(AC.destination); o.start(t0 + d); o.stop(t0 + d + .25) });
    } catch (e) { }
  }
  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = document.createElement("canvas"); c.id = "confetti"; document.body.appendChild(c); const x = c.getContext("2d");
    const W = c.width = innerWidth * devicePixelRatio, H = c.height = innerHeight * devicePixelRatio, cols = ["#DD3B2F", "#F0B323", "#17925A", "#2F5BEA", "#7C3AED"];
    const ps = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 26, vy: -Math.random() * 26 - 8, r: Math.random() * 6 + 4, c: pick(cols), a: Math.random() * 6, va: (Math.random() - .5) * .4 }));
    let f = 0; (function fr() { x.clearRect(0, 0, W, H); ps.forEach(p => { p.vy += .7; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore() }); if (++f < 110) requestAnimationFrame(fr); else c.remove() })();
  }
  function streak() {
    const set = new Set(S.days); let n = 0, d = new Date();
    if (!set.has(today())) d.setDate(d.getDate() - 1);
    while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1) }
    return n;
  }
  const LVLS = [[1, "Şagird"], [3, "Çalışqan"], [5, "Əlaçı"], [8, "Bilici"], [12, "Alim"], [16, "Akademik"]];
  function level(xp = S.xp) { let l = 1, need = 150, acc = 0; while (xp >= acc + need) { acc += need; l++; need = 150 + (l - 1) * 75 } return { l, cur: xp - acc, need, title: LVLS.filter(x => l >= x[0]).pop()[1] } }
  function gain(n, why) {
    if (!n) return; const before = level().l;
    const was = todayXp(); S.xp += n; S.xpDay[today()] = was + n; if (!S.days.includes(today())) S.days.push(today()); S.days = S.days.slice(-400);
    const ks = Object.keys(S.xpDay).sort(); if (ks.length > 120) ks.slice(0, ks.length - 120).forEach(k => delete S.xpDay[k]);
    const hit = was < S.goal && was + n >= S.goal; if (hit) S.goalHit++;
    save(); hud();
    const after = level().l;
    if (after > before) { toast(`Yeni səviyyə: ${after} — ${level().title}!`); confetti(); beep("win") }
    else if (hit) { toast("Günlük hədəf tamamlandı!"); confetti(); beep("win") }
    else toast(`+${n} XP${why ? " · " + why : ""}`);
  }

  /* ---------- nişanlar ---------- */
  const BADGES = [
    ["İlk addım", "İlk testi bitir", "target", () => S.tests >= 1],
    ["Çalışqan", "10 test bitir", "exam", () => S.tests >= 10],
    ["Əlaçı", "100% nəticə", "trophy", () => S.perfect >= 1],
    ["Seriya: 3", "3 gün dalbadal", "fire", () => streak() >= 3],
    ["Seriya: 7", "7 gün dalbadal", "sun", () => streak() >= 7],
    ["Sürət ustası", "Sürət raundunda 15+", "bolt", () => S.blitz >= 15],
    ["Yaddaş", "Cütlük oyununu bitir", "cards", () => S.mem >= 1],
    ["Hakim", "Doğru/Yanlış: 8+", "scale", () => S.tf >= 8],
    ["100 cavab", "100 düzgün cavab", "medal", () => S.correct >= 100],
    ["Çoxyönlü", "5 fəndən test", "subjects", () => Object.keys(S.subj).length >= 5],
    ["Peşəkar", "İxtisas testi bitir", "ledger", () => Object.keys(S.subj).some(k => B.sub(k)?.grp === "pro")],
    ["Səviyyə 5", "5-ci səviyyəyə çat", "star", () => level().l >= 5],
    ["Hədəfçi", "Günlük hədəfi tamamla", "target", () => S.goalHit >= 1],
    ["Düzəliş", "Səhvlər dəftərindən 10 sual düzəlt", "check", () => S.fixed >= 10],
    ["Kart ustası", "Fleş kart dəstini bitir", "cards", () => S.decks >= 1],
    ["Sertifikat", "90%+ ilə sertifikat qazan", "medal", () => S.certs >= 1],
  ];

  /* ---------- köməkçilər ---------- */
  const topicsOf = (s, g) => (T[s] && T[s][g]) || [];
  const grades = s => Object.keys(T[s] || {}).map(Number).sort((a, b) => a - b);
  const allTopics = () => SUBJECTS.flatMap(x => grades(x.id).flatMap(g => topicsOf(x.id, g)));
  const findTopic = id => allTopics().find(t => t.id === id);
  const gLabel = (s, g) => B.sub(s).grp === "pro" ? PRO_LVL[g] : `${g}-ci sinif`.replace(/^(\d+)-ci/, (m, n) => n + suffix(+n));
  function suffix(n) { const last = n % 10, tens = n % 100; if (tens === 10 || tens === 30 || tens === 40 || tens === 60 || tens === 90 || last === 0) return "-cu"; if ([3, 4].includes(last)) return "-cü"; if ([6].includes(last)) return "-cı"; if ([9].includes(last)) return "-cu"; return "-ci" }
  const best = (id, l) => ((S.done[id] || {})[l]) || 0;
  const topicStars = id => [1, 2, 3].filter(l => best(id, l) >= 80).length;
  function subjProgress(s) { const ts = grades(s).flatMap(g => topicsOf(s, g)); if (!ts.length) return 0; return Math.round(ts.reduce((a, t) => a + topicStars(t.id), 0) / (ts.length * 3) * 100) }
  const ICONSUB = s => `<span class="ic">${I(s.ic)}</span>`;

  function norm(q, s) { // [lvl, q, [düzgün, ...], izah] → {q, o, a, e}
    if (Array.isArray(q)) { const o = shuffle(q[2]); return { q: q[1], o, a: o.indexOf(q[2][0]), e: q[3], l: q[0], s } }
    const o = q.o.map((x, i) => ({ x, i })), sh = shuffle(o); return { q: q.q, o: sh.map(x => x.x), a: sh.findIndex(x => x.i === q.a), e: q.e, l: q.l, s };
  }
  function genQ(t, l) { const g = GEN[t.gen]; return norm(Object.assign(g(l), { l }), t.s) }
  function buildTopicQuiz(t, l) {
    if (t.gen) { const N = l === 4 ? 15 : 10, out = [], seen = new Set(); let k = 0; while (out.length < N && k++ < 90) { const q = genQ(t, l === 4 ? 1 + (out.length % 3) : l); if (!seen.has(q.q)) { seen.add(q.q); out.push(q) } } return out }
    const by = n => t.Q.filter(q => q[0] === n);
    let set = l === 1 ? [...by(1), ...shuffle(by(2)).slice(0, 1)] : l === 2 ? [...shuffle(by(1)).slice(0, 1), ...by(2), ...shuffle(by(3)).slice(0, 1)] : l === 3 ? [...by(2), ...by(3)] : t.Q;
    return shuffle(set).map(q => norm(q, t.s));
  }

  /* ---------- qabıq ---------- */
  const app = $("#app");
  const ring = (v, max, sz = 30, sw = 4) => { const r = (sz - sw) / 2, C = 2 * Math.PI * r, p = Math.min(1, max ? v / max : 0); return `<svg class="ring" viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" aria-hidden="true"><circle cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="var(--soft-2)" stroke-width="${sw}"/><circle cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="${p >= 1 ? "var(--ok)" : "var(--pen)"}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}" transform="rotate(-90 ${sz / 2} ${sz / 2})"/></svg>` };
  function hud() {
    $("#hxp").textContent = S.xp; $("#hst").textContent = streak(); const L = level(); $("#hlv").textContent = "Səviyyə " + L.l;
    const g = $("#hgoal"); if (g) { g.innerHTML = ring(todayXp(), S.goal, 24, 3.5) + `<span>${Math.min(todayXp(), S.goal)}/${S.goal}</span>`; g.title = `Günlük hədəf: ${todayXp()} / ${S.goal} XP` }
    const th = $("#htheme"); if (th) th.innerHTML = I(isDark() ? "sun" : "moon");
  }
  let toastT;
  function toast(m) { const t = $("#toast"); t.innerHTML = I("star") + `<span>${esc(m)}</span>`; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2600) }
  function confirmBox(title, text, okText, ok) {
    const m = document.createElement("div"); m.className = "modal"; m.innerHTML = `<div class="box" role="dialog" aria-modal="true"><h3>${esc(title)}</h3><p>${esc(text)}</p><div class="acts"><button class="btn ghost sm" data-x>Ləğv et</button><button class="btn pen sm" data-ok>${esc(okText)}</button></div></div>`;
    document.body.appendChild(m); const close = () => m.remove();
    m.onclick = e => { if (e.target === m || e.target.closest("[data-x]")) close(); if (e.target.closest("[data-ok]")) { close(); ok() } };
    $("[data-ok]", m).focus();
  }
  function setNav(k) { $$("[data-nav]").forEach(a => a.classList.toggle("on", a.dataset.nav === k)) }

  /* ---------- marşrut ---------- */
  let quizState = null, gameTimer = null;
  function route() {
    clearInterval(gameTimer); if (quizState && quizState.timer) clearInterval(quizState.timer);
    const h = decodeURIComponent(location.hash.slice(1));
    window.scrollTo(0, 0);
    if (!h || h === "home") return viewHome();
    if (h === "fenler") return viewSubjects();
    if (h.startsWith("s-")) return viewSubject(h.slice(2));
    if (h.startsWith("t-")) return viewLesson(h.slice(2));
    if (h === "test" && quizState) return renderQuiz();
    if (h === "imtahan") return viewExam();
    if (h === "oyunlar") return viewGames();
    if (h === "oyun-suret") return gameBlitz();
    if (h === "oyun-cutluk") return gameMemory();
    if (h === "oyun-dogru") return gameTF();
    if (h === "profil") return viewProfile();
    if (h === "sehvler") return viewMistakes();
    if (h.startsWith("kart-")) return viewCards(h.slice(5));
    location.hash = "home";
  }
  const go = h => { if (location.hash === "#" + h) route(); else location.hash = h };

  /* ---------- ana səhifə ---------- */
  function dailyQ() {
    const pool = allTopics().filter(t => t.Q && t.Q.length); let h = 0; for (const c of today()) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const t = pool[h % pool.length], q = t.Q[(h >> 4) % t.Q.length]; return { t, q };
  }
  function viewHome() {
    setNav("home");
    const { t: dt, q: dq } = dailyQ(), ds = B.sub(dt.s), answered = S.daily[today()];
    const g = S.grade, subs = g === "pro" ? SUBJECTS.filter(x => x.grp === "pro") : SUBJECTS.filter(x => x.grp === "school" && (!g || topicsOf(x.id, g).length));
    const opts = shuffle(dq[2]);
    app.innerHTML = `<div class="view">
      <section class="hero grid-bg">
        <div>
          ${S.name ? `<span class="eyebrow">${greet()}, ${esc(S.name)}</span>
          <h1 style="margin-top:12px">Bu gün nə <em>öyrənirik?</em></h1>
          <p class="lead">${todayXp() >= S.goal ? "Günlük hədəfi tamamladın. Əla iş! İstəsən davam et, seriyanı möhkəmləndir." : `Günlük hədəfə ${S.goal - todayXp()} XP qalıb. Bir dərs və bir test kifayətdir.`}</p>` : `<span class="eyebrow">1-ci sinifdən peşəyə qədər</span>
          <h1 style="margin-top:12px">Bilik — <em>addım-addım</em>, dərsdən imtahana.</h1>
          <p class="lead">Hər fənn üzrə qısa dərs postları, başlanğıcdan çətinə qədər testlər, imtahan simulyatoru və oyunlar. Hamısı Azərbaycan dilində.</p>`}
          <div class="glabel">Sinfini seç</div>
          <div class="grades" id="gpick">${Array.from({ length: 11 }, (_, i) => `<button type="button" data-g="${i + 1}" class="${g === i + 1 ? "on" : ""}" aria-pressed="${g === i + 1}">${i + 1}</button>`).join("")}<button type="button" class="pro ${g === "pro" ? "on" : ""}" data-g="pro" aria-pressed="${g === "pro"}">İxtisaslar</button></div>
        </div>
        <div class="daily">
          <span class="tag">Günün sualı</span>
          <span class="pill" style="color:${ds.c}"><span class="dot"></span>${esc(ds.n)} · ${esc(gLabel(dt.s, dt.g))}</span>
          <h3>${esc(dq[1])}</h3>
          <div class="dq-o" id="dqo">${opts.map(o => `<button type="button" data-o="${esc(o)}" ${answered ? "disabled" : ""} class="${answered ? (o === dq[2][0] ? "ok" : o === answered ? "no" : "") : ""}">${esc(o)}</button>`).join("")}</div>
          <p class="dq-e" id="dqe" ${answered ? "" : "hidden"}>${esc(dq[3])}</p>
        </div>
      </section>
      ${dashboard()}
      <section class="sec">
        <div class="sec-h"><div><h2>${g === "pro" ? "İxtisaslar" : g ? g + suffix(g) + " sinif fənləri" : "Fənlər"}</h2><p>${g === "pro" ? "Peşə bilikləri: başlanğıcdan peşəkar səviyyəyə" : "Fənni seç: dərsi oxu, sonra testlə yoxla"}</p></div><a class="lnk" href="#fenler">Bütün fənlər →</a></div>
        <div class="subs">${subs.map(x => subCard(x, g)).join("")}${!g ? `<a class="sub" href="#fenler" style="--c:var(--pen);background:var(--ink);color:var(--paper);border-color:var(--ink)"><span class="ic" style="background:color-mix(in srgb,var(--paper) 14%,transparent);color:var(--paper)">${I("ledger")}</span><b>İxtisaslar</b><small style="color:color-mix(in srgb,var(--paper) 75%,transparent)">Mühasibatlıq, marketinq, proqramlaşdırma, iqtisadiyyat, Excel</small><div class="meta" style="color:color-mix(in srgb,var(--paper) 75%,transparent)"><span>5 ixtisas</span><span>→</span></div></a>` : ""}</div>
      </section>
      <section class="sec">
        <div class="sec-h"><div><h2>Oyunlar</h2><p>Öyrəndiyini oyunla möhkəmləndir</p></div><a class="lnk" href="#oyunlar">Hamısı →</a></div>
        ${gamesGrid()}
      </section>
    </div>`;
    $("#gpick").onclick = e => { const b = e.target.closest("button"); if (!b) return; const v = b.dataset.g === "pro" ? "pro" : +b.dataset.g; S.grade = S.grade === v ? 0 : v; save(); viewHome() };
    $("#dqo").onclick = e => {
      const b = e.target.closest("button"); if (!b || S.daily[today()]) return; const v = b.dataset.o, ok = v === dq[2][0];
      S.daily[today()] = v; save();
      $$("#dqo button").forEach(x => { x.disabled = true; if (x.dataset.o === dq[2][0]) x.classList.add("ok"); else if (x === b) x.classList.add("no") });
      $("#dqe").hidden = false; S.answered++; if (ok) { S.correct++; gain(20, "Günün sualı") } else save();
    };
  }
  const greet = () => { const h = new Date().getHours(); return h < 5 ? "Gecən xeyrə" : h < 12 ? "Sabahın xeyir" : h < 18 ? "Günortan xeyir" : "Axşamın xeyir" };
  function recommend() {
    const g = S.grade, ok = t => B.sub(t.s).grp === (g === "pro" ? "pro" : "school") && (!g || g === "pro" || t.g === g);
    const weak = Object.entries(S.subj).filter(([k, v]) => v.t >= 3).map(([k, v]) => [k, v.c / v.t]).sort((a, b) => a[1] - b[1]);
    for (const [k] of weak) { const t = allTopics().filter(t => t.s === k && ok(t)).sort((a, b) => topicStars(a.id) - topicStars(b.id))[0]; if (t && topicStars(t.id) < 3) return { t, why: `${B.sub(k).n} fənnində nəticən ən aşağıdır` } }
    const t = allTopics().filter(t => ok(t) && topicStars(t.id) === 0 && t.id !== S.last); if (t.length) { let h = 0; for (const c of today()) h = (h * 31 + c.charCodeAt(0)) >>> 0; return { t: t[h % t.length], why: "Hələ başlamadığın mövzu" } }
    return null;
  }
  function dashboard() {
    const L = S.last && findTopic(S.last), rec = recommend(), tx = todayXp(), pct = Math.min(100, Math.round(tx / S.goal * 100));
    return `<div class="dash">
      <div class="card dc goal">${ring(tx, S.goal, 92, 9)}<div><span class="dl">Günlük hədəf</span><b>${tx} / ${S.goal} XP</b><small>${pct >= 100 ? "Tamamlandı ✓" : pct + "% · " + streak() + " gün seriya"}</small></div></div>
      ${L ? `<a class="card dc" href="#t-${L.id}" style="--c:${B.sub(L.s).c}"><span class="dic">${I(B.sub(L.s).ic)}</span><div><span class="dl">Qaldığın yerdən</span><b>${esc(L.t)}</b><small>${esc(B.sub(L.s).n)} · ${esc(gLabel(L.s, L.g))}</small></div><span class="go">${I("arrow")}</span></a>`
        : `<a class="card dc" href="#fenler"><span class="dic">${I("book")}</span><div><span class="dl">Başla</span><b>İlk dərsini seç</b><small>Fənlər və mövzular</small></div><span class="go">${I("arrow")}</span></a>`}
      ${rec ? `<a class="card dc" href="#t-${rec.t.id}" style="--c:${B.sub(rec.t.s).c}"><span class="dic">${I("target")}</span><div><span class="dl">Sənə tövsiyə</span><b>${esc(rec.t.t)}</b><small>${esc(rec.why)}</small></div><span class="go">${I("arrow")}</span></a>` : ""}
      <a class="card dc" href="#sehvler" style="--c:var(--pen)"><span class="dic">${I("note")}</span><div><span class="dl">Səhvlər dəftəri</span><b>${S.mist.length ? S.mist.length + " sual gözləyir" : "Təmizdir"}</b><small>${S.mist.length ? "Düzəlt və XP qazan" : "Səhv etdiyin suallar bura düşür"}</small></div><span class="go">${I("arrow")}</span></a>
    </div>`;
  }
  function subCard(x, g) {
    const gs = grades(x.id), n = gs.reduce((a, k) => a + topicsOf(x.id, k).length, 0), p = subjProgress(x.id);
    const href = "#s-" + x.id + (g && g !== "pro" && gs.includes(g) ? "" : "");
    return `<a class="sub" href="${href}" data-g="${g && g !== "pro" ? g : ""}" style="--c:${x.c}">${ICONSUB(x)}<b>${esc(x.n)}</b><small>${esc(x.d)}</small><div class="meta"><span>${n} mövzu</span><span>${p}%</span></div><div class="bar"><i style="width:${p}%"></i></div></a>`;
  }
  function gamesGrid() {
    return `<div class="games">
      <a class="game g1" href="#oyun-suret">${I("bolt", "gi")}<b>Sürət raundu</b><span>60 saniyədə nə qədər çox misal həll edə bilərsən?</span></a>
      <a class="game g2" href="#oyun-cutluk">${I("cards", "gi")}<b>Cütlük tap</b><span>Kartları aç, termini mənası ilə cütlə.</span></a>
      <a class="game g3" href="#oyun-dogru">${I("scale", "gi")}<b>Doğru, yoxsa yanlış?</b><span>Tez qərar ver: cavab düzgündürmü?</span></a></div>`;
  }
  app.addEventListener("click", e => { const a = e.target.closest("a.sub[data-g]"); if (a && a.dataset.g) { subjGrade[a.getAttribute("href").slice(3)] = +a.dataset.g } });

  /* ---------- fənlər ---------- */
  function viewSubjects() {
    setNav("fenler");
    const sc = SUBJECTS.filter(x => x.grp === "school"), pr = SUBJECTS.filter(x => x.grp === "pro");
    app.innerHTML = `<div class="view">
      <div class="sec-h" style="margin-bottom:22px"><div><span class="eyebrow">Məktəb proqramı</span><h2 style="font-size:clamp(30px,4vw,44px);margin-top:6px">Bütün fənlər</h2><p>1–11-ci siniflər üzrə dərslər və testlər</p></div></div>
      <div class="subs">${sc.map(x => subCard(x)).join("")}</div>
      <section class="sec"><div class="sec-h"><div><span class="eyebrow">Peşə bilikləri</span><h2 style="margin-top:6px">İxtisaslar</h2><p>Başlanğıc, orta və peşəkar səviyyə</p></div></div>
      <div class="subs">${pr.map(x => subCard(x)).join("")}</div></section></div>`;
  }
  const subjGrade = {};
  function viewSubject(id) {
    const x = B.sub(id); if (!x) return go("fenler"); setNav("fenler");
    const gs = grades(id); let g = subjGrade[id] || (S.grade && gs.includes(S.grade) ? S.grade : gs[0]); if (!gs.includes(g)) g = gs[0]; subjGrade[id] = g;
    const pro = x.grp === "pro";
    app.innerHTML = `<div class="view" style="--c:${x.c}">
      <nav class="crumb"><a href="#home">Ana səhifə</a>›<a href="#fenler">Fənlər</a>›<span>${esc(x.n)}</span></nav>
      <div class="shead">${ICONSUB(x)}<div><h1>${esc(x.n)}</h1><p>${esc(x.d)} · ${gs.length} ${pro ? "səviyyə" : "sinif"}, ${gs.reduce((a, k) => a + topicsOf(id, k).length, 0)} mövzu</p></div></div>
      <div class="vbar"><div class="gtabs" id="gtabs">${gs.map(k => `<button type="button" data-g="${k}" class="${k === g ? "on" : ""}">${esc(gLabel(id, k))}</button>`).join("")}</div>
      <div class="vsw" id="vsw" role="group" aria-label="Görünüş"><button type="button" data-v="path" class="${S.view === "path" ? "on" : ""}" aria-label="Öyrənmə yolu">${I("path")}</button><button type="button" data-v="list" class="${S.view === "list" ? "on" : ""}" aria-label="Kartlar">${I("list")}</button></div></div>
      ${S.view === "path" ? pathView(id, gs, g) : `<div class="topics">${topicsOf(id, g).map(t => topicCard(t)).join("") || `<div class="card empty">Bu sinif üçün mövzular hazırlanır.</div>`}</div>`}
    </div>`;
    $("#gtabs").onclick = e => { const b = e.target.closest("button"); if (!b) return; subjGrade[id] = +b.dataset.g;
      if (S.view === "path") { $$("#gtabs button").forEach(x => x.classList.toggle("on", x === b)); const sec = $("#pg-" + b.dataset.g); if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" }) } else viewSubject(id) };
    $("#vsw").onclick = e => { const b = e.target.closest("button"); if (!b) return; S.view = b.dataset.v; save(); viewSubject(id) };
    if (S.view === "path") { const sec = $("#pg-" + g); if (sec && g !== gs[0]) setTimeout(() => sec.scrollIntoView({ block: "start" }), 30) }
  }
  function pathView(id, gs, g) {
    const all = gs.flatMap(k => topicsOf(id, k)); const cur = all.find(t => t.g === g && topicStars(t.id) < 3) || all.find(t => topicStars(t.id) < 3);
    const X = [0, 70, 100, 70, 0, -70, -100, -70]; let n = 0;
    return `<div class="path">${gs.map(k => `<section class="pg" id="pg-${k}"><div class="pgh"><span>${esc(gLabel(id, k))}</span><small>${topicsOf(id, k).filter(t => topicStars(t.id) === 3).length}/${topicsOf(id, k).length} tamam</small></div>
      ${topicsOf(id, k).map(t => { const st = topicStars(t.id), x = X[n++ % 8], here = cur && cur.id === t.id;
        return `<a class="pn ${st === 3 ? "full" : st ? "part" : ""} ${here ? "here" : ""}" href="#t-${t.id}" style="--x:${x}px">${here ? `<span class="you">Sən buradasan</span>` : ""}<span class="orb">${st === 3 ? I("check") : t.gen ? I("bolt") : n}</span><span class="pst">${[1, 2, 3].map(l => STAR(best(t.id, l) >= 80)).join("")}</span><b>${esc(t.t)}</b></a>` }).join("")}</section>`).join("")}</div>`;
  }
  function topicCard(t) {
    const n = t.gen ? "Sonsuz test" : t.Q.length + " sual";
    return `<article class="card topic"><div class="row"><span class="pill">${esc(gLabel(t.s, t.g))}</span><span class="pill">${n}</span><span class="stars" style="margin-left:auto" aria-label="${topicStars(t.id)} ulduz">${[1, 2, 3].map(l => STAR(best(t.id, l) >= 80)).join("")}</span></div>
      <h3>${esc(t.t)}</h3><p style="color:var(--mut)">${esc(t.L.p.slice(0, 110))}${t.L.p.length > 110 ? "…" : ""}</p>
      <div class="row"><a class="btn sm" href="#t-${t.id}">Dərsi oxu ${I("arrow")}</a><button class="btn ghost sm" type="button" data-quiz="${t.id}" data-l="1">Testə başla</button></div></article>`;
  }
  app.addEventListener("click", e => { const b = e.target.closest("[data-quiz]"); if (b) { const t = findTopic(b.dataset.quiz); startQuiz({ title: t.t, s: t.s, topic: t, level: +b.dataset.l, qs: buildTopicQuiz(t, +b.dataset.l) }) } });

  /* ---------- dərs ---------- */
  function viewLesson(id) {
    const t = findTopic(id); if (!t) return go("fenler"); const x = B.sub(t.s); setNav("fenler"); S.last = id; save();
    const L = t.L, LV = x.grp === "pro" ? PRO_LVL : LVL, cnt = l => t.gen ? 10 : buildTopicQuiz(t, l).length;
    app.innerHTML = `<div class="view" style="--c:${x.c}">
      <nav class="crumb"><a href="#home">Ana səhifə</a>›<a href="#s-${x.id}">${esc(x.n)}</a>›<span>${esc(gLabel(t.s, t.g))}</span></nav>
      <div class="lesson">
        <article class="post grid-bg card">
          <span class="pill" style="color:${x.c}"><span class="dot"></span>${esc(x.n)} · ${esc(gLabel(t.s, t.g))}</span>
          <h1>${esc(t.t)}</h1>
          <p class="intro">${esc(L.p)}</p>
          <h3>Əsas qaydalar</h3>
          <ol class="rules">${L.k.map(k => `<li>${esc(k)}</li>`).join("")}</ol>
          ${L.x ? `<h3>Nümunə</h3><div class="example">${esc(L.x)}</div>` : ""}
          ${L.r ? `<div class="sticky"><b>Yadda saxla</b>${esc(L.r)}</div>` : ""}
        </article>
        <aside class="side">
          <div class="card" style="padding:20px"><h3 style="font-size:20px;margin-bottom:4px">Özünü yoxla</h3><p style="color:var(--mut);font-size:15px">Səviyyəni seç. 80% və yuxarı nəticə ulduz qazandırır.</p></div>
          ${[1, 2, 3].map(l => `<button type="button" class="lvl l${l}" data-quiz="${t.id}" data-l="${l}"><span class="n">${l}</span><span><b>${LV[l]}</b><small>${cnt(l)} sual${best(t.id, l) ? " · ən yaxşı: " + best(t.id, l) + "%" : ""}</small></span><span class="stars">${STAR(best(t.id, l) >= 80)}</span></button>`).join("")}
          <button type="button" class="lvl" data-quiz="${t.id}" data-l="4"><span class="n" style="background:var(--ink);color:var(--paper)">${I("exam")}</span><span><b>Tam test</b><small>${t.gen ? "15 qarışıq sual" : t.Q.length + " sual, bütün səviyyələr"}</small></span></button>
          <a class="lvl" href="#kart-${t.id}"><span class="n" style="background:var(--gold-soft);color:#B07800">${I("cards")}</span><span><b>Fleş kartlar</b><small>Sualı gör, cavabı xatırla, kartı çevir</small></span></a>
          ${t.gen ? `<div class="card" style="padding:16px 18px;font-size:14.5px;color:var(--ink-2)">${I("bolt")} Bu mövzuda suallar hər dəfə yenidən yaranır, testi istədiyin qədər təkrarlaya bilərsən.</div>` : ""}
        </aside>
      </div></div>`;
  }

  /* ---------- test mühərriki ---------- */
  function startQuiz(cfg) {
    quizState = Object.assign({ i: 0, ans: [], xp: 0, started: Date.now() }, cfg);
    if (cfg.time) quizState.left = cfg.time;
    if (location.hash === "#test") renderQuiz(); else location.hash = "test";
  }
  function renderQuiz() {
    const Q = quizState; if (!Q) return go("home"); setNav(Q.exam ? "imtahan" : "fenler");
    if (Q.i >= Q.qs.length) return renderResult();
    const q = Q.qs[Q.i], x = B.sub(q.s);
    app.innerHTML = `<div class="view quiz" style="--c:${x.c}">
      <div class="qtop"><button class="qx" type="button" id="qx" aria-label="Testi dayandır">${I("close")}</button><div class="qprog" aria-hidden="true"><i style="width:${Q.i / Q.qs.length * 100}%"></i></div>${!Q.exam ? `<button class="joker" type="button" id="qj" ${Q.joker ? "disabled" : ""} title="İki səhv variantı sil (testdə 1 dəfə)">50/50</button>` : ""}${Q.time ? `<span class="qtimer" id="qtm"></span>` : `<span class="qtimer">${Q.i + 1}/${Q.qs.length}</span>`}</div>
      <div class="card qcard grid-bg">
        <div class="qmeta"><span class="pill" style="color:${x.c}"><span class="dot"></span>${esc(x.n)}</span><span class="pill">${esc(Q.title)}</span><span class="pill">${(x.grp === "pro" ? PRO_LVL : LVL)[q.l] || ""}</span></div>
        <div class="qtext">${esc(q.q)}</div>
        <div class="opts" id="opts">${q.o.map((o, i) => `<button type="button" class="opt" data-i="${i}"><span class="k">${"ABCD"[i]}</span><span class="t">${esc(o)}</span></button>`).join("")}</div>
        <div id="fbw"></div>
      </div></div>`;
    $("#qx").onclick = () => confirmBox("Testi dayandırırsan?", "Cavabların yadda qalmayacaq.", "Dayandır", () => { clearInterval(Q.timer); const back = Q.mistMode ? "sehvler" : Q.topic ? "t-" + Q.topic.id : Q.exam ? "imtahan" : "home"; quizState = null; go(back) });
    $("#opts").onclick = e => { const b = e.target.closest(".opt"); if (b && !b.disabled) answer(+b.dataset.i) };
    const j = $("#qj"); if (j) j.onclick = () => { if (Q.joker || Q.ans[Q.i] !== undefined) return; Q.joker = true; j.disabled = true;
      shuffle(q.o.map((_, k) => k).filter(k => k !== q.a)).slice(0, 2).forEach(k => { const b = $(`#opts .opt[data-i="${k}"]`); b.disabled = true; b.classList.add("gone") }) };
    if (Q.time) { tick(); clearInterval(Q.timer); Q.timer = setInterval(tick, 1000) }
  }
  function tick() {
    const Q = quizState; if (!Q) return; const el = $("#qtm"); if (Q.left <= 0) { clearInterval(Q.timer); while (Q.ans.length < Q.qs.length) Q.ans.push(-1); Q.i = Q.qs.length; toast("Vaxt bitdi"); return renderResult() }
    if (el) { el.textContent = `${Math.floor(Q.left / 60)}:${String(Q.left % 60).padStart(2, "0")}`; el.classList.toggle("low", Q.left <= 30) } Q.left--;
  }
  function answer(i) {
    const Q = quizState, q = Q.qs[Q.i], ok = i === q.a; Q.ans[Q.i] = i;
    $$("#opts .opt").forEach((b, k) => { b.disabled = true; if (k === q.a) b.classList.add("ok"); else if (k === i) b.classList.add("no") });
    const pts = ok ? (q.l || 1) * 5 : 0; Q.xp += pts;
    S.answered++; if (ok) S.correct++; const sb = S.subj[q.s] = S.subj[q.s] || { c: 0, t: 0 }; sb.t++; if (ok) sb.c++;
    const mi = S.mist.findIndex(m => m.q === q.q);
    if (!ok && mi < 0) { S.mist.push({ q: q.q, c: q.o[q.a], w: q.o.filter((_, k) => k !== q.a), e: q.e, l: q.l, s: q.s, tid: Q.topic ? Q.topic.id : (q.tid || "") }); if (S.mist.length > 150) S.mist.shift() }
    if (ok && Q.mistMode && mi >= 0) { S.mist.splice(mi, 1); S.fixed++; Q.fixedNow = (Q.fixedNow || 0) + 1 }
    save(); beep(ok ? "ok" : "no");
    $("#fbw").innerHTML = `<div class="fb ${ok ? "ok" : "no"}" role="status">${I(ok ? "check" : "cross")}<div><b>${ok ? pick(["Düzdür!", "Əla!", "Afərin!", "Tamamilə doğru!"]) : "Düzgün cavab: " + esc(q.o[q.a])}</b><p>${esc(q.e || "")}</p></div></div>
      <div class="qnext"><button class="btn ${ok ? "" : "pen"}" type="button" id="qn">${Q.i + 1 < Q.qs.length ? "Növbəti sual" : "Nəticəni gör"} ${I("arrow")}</button></div>`;
    $("#qn").focus(); $("#qn").onclick = () => { Q.i++; renderQuiz() };
  }
  document.addEventListener("keydown", e => {
    if (e.target.closest("input,textarea,select") || $(".modal")) return;
    if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || e.key === "/") { e.preventDefault(); return openSearch() }
    if (location.hash !== "#test" || !quizState) return;
    const k = e.key.toLowerCase(), idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (idx >= 0) { const b = $(`#opts .opt[data-i="${idx}"]`); if (b && !b.disabled) { e.preventDefault(); answer(idx) } }
    else if (k === "enter") { const n = $("#qn"); if (n && document.activeElement !== n) { e.preventDefault(); n.click() } }
  });
  const ringSvg = '<svg viewBox="0 0 130 130" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" aria-hidden="true"><path d="M65 8c33 0 57 22 57 55s-26 59-59 59S7 98 8 64C9 31 34 10 70 12"/></svg>';
  function renderResult() {
    const Q = quizState; clearInterval(Q.timer);
    const right = Q.qs.filter((q, i) => Q.ans[i] === q.a).length, pct = Math.round(right / Q.qs.length * 100);
    const grade = pct >= 90 ? 5 : pct >= 70 ? 4 : pct >= 50 ? 3 : 2, word = { 5: "Əla", 4: "Yaxşı", 3: "Kafi", 2: "Hələ məşq lazımdır" }[grade];
    let bonus = 15 + (pct === 100 ? 25 : 0), starMsg = "";
    if (!Q.saved) {
      Q.saved = true; S.tests++; if (pct === 100) S.perfect++;
      if (Q.topic) { const d = S.done[Q.topic.id] = S.done[Q.topic.id] || {}; const prev = d[Q.level] || 0; if (pct > prev) d[Q.level] = pct; if (pct >= 80 && prev < 80) { starMsg = "Yeni ulduz qazandın!"; bonus += 20 } }
      save(); gain(Q.xp + bonus, "test bitdi");
    }
    const mist = Q.qs.map((q, i) => ({ q, a: Q.ans[i] })).filter(r => r.a !== r.q.a);
    const certOk = (Q.level === 4 || Q.exam) && pct >= 90 && Q.qs.length >= 6;
    if (!Q.fx) { Q.fx = true; if (pct >= 90) { confetti(); beep("win") } if (certOk) { S.certs++; save() } }
    app.innerHTML = `<div class="view"><div class="card res grid-bg">
      <div class="grade">${ringSvg}<b>${grade}</b></div>
      <h2>${word}</h2>
      <p class="sum">${Q.qs.length} sualdan ${right} düzgün · ${pct}%${Q.exam ? " · " + Math.round((Date.now() - Q.started) / 60000) + " dəq" : ""}</p>
      <div class="gain"><span class="chip xp">${I("star")}+${Q.xp + bonus} XP</span>${starMsg ? `<span class="chip">${STAR(true)} ${starMsg}</span>` : ""}<span class="chip fire">${I("fire")}${streak()} gün seriya</span></div>
      ${Q.mistMode ? `<p class="sum" style="margin-top:-6px">${Q.fixedNow || 0} sual dəftərdən silindi · ${S.mist.length} qaldı</p>` : ""}
      ${certOk ? `<div class="certbar">${I("medal")}<div><b>Sertifikat qazandın!</b><span>${pct}% nəticə ilə. Adınla yüklə və paylaş.</span></div><button class="btn sm" type="button" id="cert">Sertifikatı aç</button></div>` : ""}
      <div class="acts">${Q.mistMode ? `${S.mist.length ? `<button class="btn pen" type="button" id="mre">Davam et</button>` : ""}<a class="btn ghost" href="#sehvler">Səhvlər dəftəri</a><a class="btn ghost" href="#home">Ana səhifə</a>` : Q.topic ? `<button class="btn" type="button" id="again">Yenidən</button>${Q.level < 3 ? `<button class="btn pen" type="button" id="up">Növbəti səviyyə ${I("arrow")}</button>` : ""}<a class="btn ghost" href="#t-${Q.topic.id}">Dərsə qayıt</a>` : `<a class="btn" href="#imtahan">Yeni imtahan</a><a class="btn ghost" href="#home">Ana səhifə</a>`}</div>
      ${mist.length ? `<div class="review"><h3 style="font-size:20px">Səhvlər üzərində iş (${mist.length})</h3>${mist.map(r => `<div class="rv"><b>${esc(r.q.q)}</b><div class="a">${r.a >= 0 ? `<s>${esc(r.q.o[r.a])}</s> → ` : "Cavab verilmədi → "}<span>${esc(r.q.o[r.q.a])}</span></div>${r.q.e ? `<div class="a" style="color:var(--mut);margin-top:4px">${esc(r.q.e)}</div>` : ""}</div>`).join("")}</div>` : ""}
    </div></div>`;
    const cb = $("#cert"); if (cb) cb.onclick = () => certificate(Q.topic ? Q.topic.t : Q.title.replace(/^İmtahan · /, B.sub(Q.s).n + " · "), pct, grade);
    const mr = $("#mre"); if (mr) mr.onclick = startMistakes;
    const t = Q.topic;
    if (t && !Q.mistMode) {
      $("#again").onclick = () => startQuiz({ title: t.t, s: t.s, topic: t, level: Q.level, qs: buildTopicQuiz(t, Q.level) });
      const up = $("#up"); if (up) up.onclick = () => startQuiz({ title: t.t, s: t.s, topic: t, level: Q.level + 1, qs: buildTopicQuiz(t, Q.level + 1) });
    }
  }

  /* ---------- imtahan ---------- */
  const ex = { s: "riyaziyyat", g: 5, n: 10, timed: true };
  function viewExam() {
    setNav("imtahan"); const x = B.sub(ex.s), gs = grades(ex.s); if (!gs.includes(ex.g)) ex.g = gs[gs.length - 1];
    app.innerHTML = `<div class="view">
      <div class="sec-h" style="margin-bottom:22px"><div><span class="eyebrow">Real imtahan şəraiti</span><h2 style="font-size:clamp(30px,4vw,44px);margin-top:6px">İmtahan simulyatoru</h2><p>Fənn və sinfi seç: müxtəlif mövzu və səviyyələrdən qarışıq suallar, vaxt məhdudiyyəti ilə.</p></div></div>
      <div class="ex-setup">
        <div class="card ex-form">
          <label for="exs">Fənn<select id="exs">${["school", "pro"].map(gr => `<optgroup label="${gr === "pro" ? "İxtisaslar" : "Məktəb fənləri"}">${SUBJECTS.filter(s => s.grp === gr).map(s => `<option value="${s.id}" ${s.id === ex.s ? "selected" : ""}>${esc(s.n)}</option>`).join("")}</optgroup>`).join("")}</select></label>
          <label for="exg">${x.grp === "pro" ? "Səviyyə" : "Sinif"}<select id="exg">${gs.map(k => `<option value="${k}" ${k === ex.g ? "selected" : ""}>${esc(gLabel(ex.s, k))}</option>`).join("")}</select></label>
          <div><div style="font-weight:800;font-size:14px;color:var(--ink-2);margin-bottom:8px">Sual sayı</div><div class="seg" id="exn">${[10, 15, 20].map(n => `<button type="button" data-n="${n}" class="${n === ex.n ? "on" : ""}">${n}</button>`).join("")}</div></div>
          <div><div style="font-weight:800;font-size:14px;color:var(--ink-2);margin-bottom:8px">Vaxt</div><div class="seg" id="ext"><button type="button" data-t="1" class="${ex.timed ? "on" : ""}">Hər suala 1 dəqiqə</button><button type="button" data-t="0" class="${ex.timed ? "" : "on"}">Vaxtsız</button></div></div>
          <button class="btn pen wide" type="button" id="exgo">İmtahana başla ${I("arrow")}</button>
        </div>
        <div class="card ex-info grid-bg">
          <h3>Necə işləyir?</h3>
          <ul><li>Seçdiyin sinif və ondan əvvəlki 2 sinfin mövzularından suallar götürülür.</li><li>Başlanğıc, orta və çətin suallar qarışıq gəlir.</li><li>Vaxt bitəndə imtahan avtomatik yekunlaşır.</li><li>Sonda məktəb qiyməti (2–5), XP və səhvlərin izahı göstərilir.</li></ul>
        </div>
      </div></div>`;
    $("#exs").onchange = e => { ex.s = e.target.value; const g2 = grades(ex.s); ex.g = g2[Math.min(g2.length - 1, Math.floor(g2.length / 2))]; viewExam() };
    $("#exg").onchange = e => { ex.g = +e.target.value };
    $("#exn").onclick = e => { const b = e.target.closest("button"); if (b) { ex.n = +b.dataset.n; $$("#exn button").forEach(x => x.classList.toggle("on", x === b)) } };
    $("#ext").onclick = e => { const b = e.target.closest("button"); if (b) { ex.timed = b.dataset.t === "1"; $$("#ext button").forEach(x => x.classList.toggle("on", x === b)) } };
    $("#exgo").onclick = () => {
      const gs2 = grades(ex.s).filter(k => k <= ex.g).slice(-3), ts = gs2.flatMap(k => topicsOf(ex.s, k));
      let pool = []; ts.forEach(t => { if (t.gen) for (let l = 1; l <= 3; l++) for (let k = 0; k < 3; k++) pool.push(genQ(t, l)); else t.Q.forEach(q => pool.push(norm(q, t.s))) });
      const seen = new Set(); pool = shuffle(pool).filter(q => !seen.has(q.q) && seen.add(q.q)).slice(0, ex.n);
      startQuiz({ title: "İmtahan · " + gLabel(ex.s, ex.g), s: ex.s, exam: true, qs: pool, time: ex.timed ? pool.length * 60 : 0 });
    };
  }

  /* ---------- oyunlar ---------- */
  function viewGames() {
    setNav("oyunlar");
    app.innerHTML = `<div class="view"><div class="sec-h" style="margin-bottom:22px"><div><span class="eyebrow">Oynayaraq öyrən</span><h2 style="font-size:clamp(30px,4vw,44px);margin-top:6px">Oyunlar</h2><p>Hər oyun XP qazandırır və nişanlar açır.</p></div></div>
      ${gamesGrid()}
      <div class="stats" style="margin-top:22px"><div class="card stat"><b>${S.blitz}</b><span>Sürət rekordu</span></div><div class="card stat"><b>${S.mem}</b><span>Cütlük qələbələri</span></div><div class="card stat"><b>${S.tf}/10</b><span>Doğru/Yanlış rekordu</span></div><div class="card stat"><b>${level().l}</b><span>Səviyyə</span></div></div></div>`;
  }
  function gameShell(title, sub, inner) { setNav("oyunlar"); app.innerHTML = `<div class="view gbox"><nav class="crumb"><a href="#oyunlar">Oyunlar</a>›<span>${esc(title)}</span></nav><div class="ghead"><div><h1>${esc(title)}</h1><p style="color:var(--mut)">${esc(sub)}</p></div></div>${inner}</div>` }
  function blitzGens(g) { const out = []; for (let k = Math.max(1, g - 1); k <= g; k++) topicsOf("riyaziyyat", k).forEach(t => out.push(t)); return out.length ? out : topicsOf("riyaziyyat", 1) }
  function gameBlitz() {
    let g = typeof S.grade === "number" && S.grade ? S.grade : 3;
    gameShell("Sürət raundu", "60 saniyə. Hər düzgün cavab +1. Səhv cavab 2 saniyə aparır.", `<div class="card blitz grid-bg" id="bz">
      <div class="glabel">Sinif</div><div class="grades" id="bzg" style="justify-content:center">${Array.from({ length: 11 }, (_, i) => `<button type="button" data-g="${i + 1}" class="${g === i + 1 ? "on" : ""}">${i + 1}</button>`).join("")}</div>
      <div class="big">60</div><button class="btn pen" type="button" id="bzgo">${I("bolt")} Başla</button><p style="color:var(--mut);margin-top:14px">Rekordun: <b>${S.blitz}</b></p></div>`);
    $("#bzg").onclick = e => { const b = e.target.closest("button"); if (!b) return; g = +b.dataset.g; $$("#bzg button").forEach(x => x.classList.toggle("on", x === b)) };
    $("#bzgo").onclick = () => {
      let left = 60, score = 0, q; const ts = blitzGens(g), box = $("#bz");
      const next = () => { const t = pick(ts); q = genQ(t, Math.random() < .6 ? 1 : 2); box.innerHTML = `<div class="hud"><span>${I("clock")} <span id="bzt">${left}</span> san</span><span>Xal: <b id="bzs">${score}</b></span></div><div class="big" style="font-size:clamp(28px,6vw,52px)">${esc(q.q)}</div><div class="opts" id="bzo">${q.o.map((o, i) => `<button type="button" class="opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>` };
      next();
      box.onclick = e => { const b = e.target.closest("#bzo .opt"); if (!b) return; if (+b.dataset.i === q.a) { score++; box.classList.remove("flash-ok"); void box.offsetWidth; box.classList.add("flash-ok") } else { left = Math.max(0, left - 2); box.classList.remove("flash-no"); void box.offsetWidth; box.classList.add("flash-no") } next() };
      clearInterval(gameTimer); gameTimer = setInterval(() => {
        left--; const el = $("#bzt"); if (el) el.textContent = left;
        if (left <= 0) { clearInterval(gameTimer); box.onclick = null; const rec = score > S.blitz; if (rec) S.blitz = score; save(); gain(score * 3 + 5, "Sürət raundu");
          box.innerHTML = `<div class="grade">${ringSvg}<b>${score}</b></div><h2>${rec ? "Yeni rekord!" : "Vaxt bitdi"}</h2><p style="color:var(--ink-2);margin:8px 0 20px">60 saniyədə ${score} düzgün cavab. Rekord: ${S.blitz}</p><div class="acts" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn pen" type="button" id="bzre">Yenidən</button><a class="btn ghost" href="#oyunlar">Oyunlar</a></div>`; $("#bzre").onclick = gameBlitz }
      }, 1000);
    };
  }
  const PAIRS = {
    "Kimyəvi elementlər": [["H", "Hidrogen"], ["O", "Oksigen"], ["Fe", "Dəmir"], ["Na", "Natrium"], ["C", "Karbon"], ["Cu", "Mis"], ["Au", "Qızıl"], ["N", "Azot"]],
    "İngilis sözləri": [["cat", "pişik"], ["book", "kitab"], ["water", "su"], ["house", "ev"], ["sun", "günəş"], ["tree", "ağac"], ["friend", "dost"], ["school", "məktəb"]],
    "Paytaxtlar": [["Türkiyə", "Ankara"], ["Gürcüstan", "Tbilisi"], ["Fransa", "Paris"], ["Yaponiya", "Tokio"], ["Almaniya", "Berlin"], ["İtaliya", "Roma"], ["Misir", "Qahirə"], ["Qazaxıstan", "Astana"]],
    "Düsturlar": [["Sürət", "v = s / t"], ["Om qanunu", "I = U / R"], ["Qüvvə", "F = m · a"], ["İş", "A = F · s"], ["Kvadratın sahəsi", "S = a²"], ["Pifaqor", "c² = a² + b²"], ["Güc", "N = A / t"], ["Sıxlıq", "ρ = m / V"]],
    "Əsərlər və müəlliflər": [["Xəmsə", "Nizami"], ["Hophopnamə", "Sabir"], ["Vaqif", "S. Vurğun"], ["İblis", "H. Cavid"], ["Ölülər", "C. Məmmədquluzadə"], ["Şikayətnamə", "Füzuli"], ["Arşın mal alan", "Ü. Hacıbəyli"], ["Aldanmış kəvakib", "M.F. Axundzadə"]],
  };
  function gameMemory() {
    gameShell("Cütlük tap", "Kartları aç və cütləri tap. Nə qədər az gedişlə, o qədər yaxşı.", `<div class="seg" id="mset" style="margin-bottom:16px">${Object.keys(PAIRS).map((k, i) => `<button type="button" data-k="${esc(k)}" class="${i === 0 ? "on" : ""}">${esc(k)}</button>`).join("")}</div><div class="hud" style="display:flex;justify-content:space-between;font-weight:800;margin-bottom:12px"><span>Gediş: <b id="mmv">0</b></span><span>Tapılan: <b id="mfd">0</b>/6</span></div><div class="mem" id="mem"></div>`);
    let setKey = Object.keys(PAIRS)[0];
    const start = () => {
      const pairs = shuffle(PAIRS[setKey]).slice(0, 6), cards = shuffle(pairs.flatMap((p, i) => [{ t: p[0], id: i }, { t: p[1], id: i }]));
      let open = [], moves = 0, found = 0, lock = false;
      $("#mem").innerHTML = cards.map((c, k) => `<button type="button" class="mc" data-k="${k}" aria-label="Kart"><span class="t">${esc(c.t)}</span><span class="back">${I("star")}</span></button>`).join("");
      $("#mmv").textContent = 0; $("#mfd").textContent = 0;
      $("#mem").onclick = e => {
        const b = e.target.closest(".mc"); if (!b || lock || b.classList.contains("open") || b.classList.contains("done")) return;
        b.classList.add("open"); open.push(b);
        if (open.length === 2) {
          moves++; $("#mmv").textContent = moves; const [a, c] = open, A = cards[a.dataset.k], C = cards[c.dataset.k];
          if (A.id === C.id) { a.classList.add("done"); c.classList.add("done"); open = []; found++; $("#mfd").textContent = found;
            if (found === 6) { S.mem++; save(); gain(Math.max(20, 60 - (moves - 6) * 4), "Cütlük tap"); setTimeout(() => toast(`Bütün cütlər ${moves} gedişdə tapıldı!`), 900) } }
          else { lock = true; a.classList.add("bad"); c.classList.add("bad"); setTimeout(() => { a.classList.remove("open", "bad"); c.classList.remove("open", "bad"); open = []; lock = false }, 800) }
        }
      };
    };
    $("#mset").onclick = e => { const b = e.target.closest("button"); if (!b) return; setKey = b.dataset.k; $$("#mset button").forEach(x => x.classList.toggle("on", x === b)); start() };
    start();
  }
  function gameTF() {
    gameShell("Doğru, yoxsa yanlış?", "10 sual. Göstərilən cavab düzgündürsə “Doğru”, deyilsə “Yanlış” bas.", `<div class="card tf grid-bg" id="tf"></div>`);
    const g = typeof S.grade === "number" && S.grade ? S.grade : 0;
    let pool = allTopics().filter(t => t.Q && t.Q.length && (B.sub(t.s).grp === "school") && (!g || Math.abs(t.g - g) <= 1));
    if (!pool.length) pool = allTopics().filter(t => t.Q && t.Q.length);
    let i = 0, score = 0; const box = $("#tf");
    const next = () => {
      if (i >= 10) { const rec = score > S.tf; if (rec) S.tf = score; save(); gain(score * 4 + 5, "Doğru/Yanlış");
        box.innerHTML = `<div class="grade">${ringSvg}<b>${score}</b></div><h2>${rec ? "Yeni rekord!" : score >= 8 ? "Möhtəşəm!" : "Oyun bitdi"}</h2><p style="color:var(--ink-2);margin:8px 0 20px">10 sualdan ${score} düzgün qərar.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn pen" type="button" id="tfa">Yenidən</button><a class="btn ghost" href="#oyunlar">Oyunlar</a></div>`;
        $("#tfa").onclick = gameTF; return }
      const t = pick(pool), q = pick(t.Q), truth = Math.random() < .5, shown = truth ? q[2][0] : pick(q[2].slice(1)), x = B.sub(t.s);
      box.innerHTML = `<div class="hud" style="display:flex;justify-content:space-between;font-weight:800"><span>${i + 1}/10</span><span>Xal: ${score}</span></div><span class="pill" style="color:${x.c};margin-top:14px"><span class="dot"></span>${esc(x.n)}</span><div class="stmt">${esc(q[1])}</div><div class="ans">${esc(shown)}</div><div class="row"><button class="btn" type="button" data-v="1">${I("check")} Doğru</button><button class="btn pen" type="button" data-v="0">${I("cross")} Yanlış</button></div><p class="dq-e" id="tfe" hidden></p>`;
      $$("#tf .row .btn").forEach(b => b.onclick = () => {
        const ok = (b.dataset.v === "1") === truth; if (ok) score++; $$("#tf .row .btn").forEach(x => x.disabled = true);
        const e = $("#tfe"); e.hidden = false; e.innerHTML = `<b style="color:${ok ? "var(--ok)" : "var(--pen)"}">${ok ? "Düz tapdın!" : "Səhv."}</b> Düzgün cavab: ${esc(q[2][0])}. ${esc(q[3])}`;
        box.classList.remove("flash-ok", "flash-no"); void box.offsetWidth; box.classList.add(ok ? "flash-ok" : "flash-no");
        i++; setTimeout(next, 1500);
      });
    };
    next();
  }

  /* ---------- sertifikat ---------- */
  function wrapText(x, text, maxW) { const w = text.split(" "), out = []; let line = ""; w.forEach(t => { const tr = line ? line + " " + t : t; if (x.measureText(tr).width > maxW && line) { out.push(line); line = t } else line = tr }); if (line) out.push(line); return out }
  async function drawCert(name, what, pct, grade) {
    try { await document.fonts.load("700 80px Fraunces"); await document.fonts.load("italic 700 80px Fraunces"); await document.fonts.load("800 30px Nunito") } catch (e) { }
    const W = 1600, H = 1131, c = document.createElement("canvas"); c.width = W; c.height = H; const x = c.getContext("2d");
    x.fillStyle = "#FBF8F1"; x.fillRect(0, 0, W, H);
    x.strokeStyle = "rgba(47,91,234,.07)"; x.lineWidth = 1; for (let i = 0; i < W; i += 28) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke() } for (let i = 0; i < H; i += 28) { x.beginPath(); x.moveTo(0, i); x.lineTo(W, i); x.stroke() }
    x.strokeStyle = "#16215C"; x.lineWidth = 6; x.strokeRect(46, 46, W - 92, H - 92); x.lineWidth = 1.5; x.strokeRect(66, 66, W - 132, H - 132);
    x.fillStyle = "#F0B323"; [[66, 66], [W - 66, 66], [66, H - 66], [W - 66, H - 66]].forEach(([a, b]) => { x.beginPath(); x.arc(a, b, 12, 0, 7); x.fill() });
    x.textAlign = "center"; x.fillStyle = "#16215C";
    x.fillStyle = "#16215C"; x.beginPath(); x.roundRect ? x.roundRect(W / 2 - 34, 118, 68, 68, 20) : x.rect(W / 2 - 34, 118, 68, 68); x.fill();
    x.fillStyle = "#FBF8F1"; x.font = "800 40px Fraunces, Georgia, serif"; x.fillText("B", W / 2, 166); x.fillStyle = "#DD3B2F"; x.beginPath(); x.arc(W / 2 + 30, 124, 9, 0, 7); x.fill();
    x.fillStyle = "#69729A"; x.font = "800 24px Nunito, sans-serif"; x.fillText("B İ L G Ə   ·   S E R T İ F İ K A T", W / 2, 240);
    x.fillStyle = "#16215C"; x.font = "700 64px Fraunces, Georgia, serif"; x.fillText("Uğur sertifikatı", W / 2, 330);
    x.fillStyle = "#36427A"; x.font = "600 30px Nunito, sans-serif"; x.fillText("Bu sertifikat təsdiq edir ki,", W / 2, 410);
    x.fillStyle = "#DD3B2F"; x.font = "italic 700 96px Fraunces, Georgia, serif"; x.fillText(name, W / 2, 530);
    x.strokeStyle = "#16215C"; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 360, 560); x.lineTo(W / 2 + 360, 560); x.stroke();
    x.fillStyle = "#36427A"; x.font = "600 32px Nunito, sans-serif"; const lines = wrapText(x, `“${what}” üzrə testi ${pct}% nəticə ilə uğurla bitirmişdir.`, 1050); lines.forEach((l, i) => x.fillText(l, W / 2, 630 + i * 46));
    const gy = 820; x.strokeStyle = "#DD3B2F"; x.lineWidth = 5; x.beginPath(); x.ellipse(W / 2, gy, 70, 66, -.15, .3, Math.PI * 2.05); x.stroke();
    x.fillStyle = "#DD3B2F"; x.font = "800 88px Fraunces, Georgia, serif"; x.fillText(String(grade), W / 2, gy + 30);
    x.font = "800 26px Nunito, sans-serif"; x.fillText({ 5: "ƏLA", 4: "YAXŞI", 3: "KAFİ", 2: "" }[grade], W / 2, gy + 120);
    const d = new Date(), M = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
    x.fillStyle = "#16215C"; x.font = "700 26px Nunito, sans-serif"; x.textAlign = "left"; x.fillText(`${d.getDate()} ${M[d.getMonth()]} ${d.getFullYear()}`, 150, 990); x.fillStyle = "#69729A"; x.font = "600 20px Nunito, sans-serif"; x.fillText("Tarix", 150, 1020);
    x.textAlign = "right"; x.fillStyle = "#16215C"; x.font = "italic 700 34px Fraunces, Georgia, serif"; x.fillText("Bilgə", W - 150, 990); x.fillStyle = "#69729A"; x.font = "600 20px Nunito, sans-serif"; x.fillText("Bilik platforması", W - 150, 1020);
    x.strokeStyle = "#E1E6F2"; x.lineWidth = 2; x.beginPath(); x.moveTo(150, 960); x.lineTo(420, 960); x.moveTo(W - 420, 960); x.lineTo(W - 150, 960); x.stroke();
    return c.toDataURL("image/png");
  }
  function certificate(what, pct, grade) {
    const m = document.createElement("div"); m.className = "modal"; document.body.appendChild(m);
    const render = async () => {
      const nm = S.name || "Şagird";
      m.innerHTML = `<div class="box cert" role="dialog" aria-modal="true" aria-label="Sertifikat"><button class="qx mx" type="button" data-x aria-label="Bağla">${I("close")}</button><h3>Sertifikatın</h3><div class="cimg"><span class="empty">Hazırlanır…</span></div>
        <label class="fld">Sertifikatdakı ad<input id="cnm" value="${esc(S.name)}" maxlength="24" placeholder="Adını yaz"></label>
        <div class="acts"><button class="btn ghost sm" type="button" data-x>Bağla</button><span class="chint">Saxlamaq üçün şəklin üzərinə basıb saxla (sağ klik → “Şəkli saxla”)</span></div></div>`;
      const url = await drawCert(nm, what, pct, grade); $(".cimg", m).innerHTML = `<img src="${url}" alt="Sertifikat: ${esc(nm)}, ${esc(what)}">`; 
      $("#cnm", m).onchange = e => { S.name = e.target.value.trim().slice(0, 24); save(); render() };
    };
    m.onclick = e => { if (e.target === m || e.target.closest("[data-x]")) m.remove() };
    render();
  }

  /* ---------- səhvlər dəftəri ---------- */
  function startMistakes() {
    if (!S.mist.length) return go("sehvler");
    const qs = shuffle(S.mist).slice(0, 10).map(m => Object.assign(norm([m.l || 1, m.q, [m.c, ...m.w], m.e], m.s), { tid: m.tid }));
    startQuiz({ title: "Səhvlər dəftəri", s: qs[0].s, mistMode: true, qs });
  }
  function viewMistakes() {
    setNav("profil"); const by = {}; S.mist.forEach((m, i) => (by[m.s] = by[m.s] || []).push([m, i]));
    app.innerHTML = `<div class="view">
      <div class="sec-h" style="margin-bottom:22px"><div><span class="eyebrow">Şəxsi dəftər</span><h2 style="font-size:clamp(30px,4vw,44px);margin-top:6px">Səhvlər dəftəri</h2><p>Səhv cavab verdiyin suallar avtomatik bura düşür. Düzgün cavablandıranda dəftərdən silinir.</p></div>
        ${S.mist.length ? `<button class="btn pen" type="button" id="mgo">${I("target")} Səhvləri düzəlt (${Math.min(10, S.mist.length)})</button>` : ""}</div>
      ${S.mist.length ? `<div class="mstat"><div class="card stat"><b>${S.mist.length}</b><span>gözləyən sual</span></div><div class="card stat"><b>${S.fixed}</b><span>düzəldilib</span></div><div class="card stat"><b>${Object.keys(by).length}</b><span>fənn</span></div></div>
      ${Object.entries(by).map(([k, arr]) => { const x = B.sub(k); return `<section class="sec" style="margin-top:26px;--c:${x.c}"><div class="mh"><span class="ic">${I(x.ic)}</span><h3>${esc(x.n)}</h3><span class="pill">${arr.length}</span></div>
        <div class="mlist">${arr.map(([m, i]) => `<div class="card mi"><div><b>${esc(m.q)}</b><span>Düzgün cavab: <em>${esc(m.c)}</em></span></div><button class="qx" type="button" data-del="${i}" aria-label="Sil">${I("close")}</button></div>`).join("")}</div></section>` }).join("")}`
      : `<div class="card empty grid-bg" style="padding:56px 24px"><div style="width:72px;height:72px;margin:0 auto 14px;border-radius:22px;display:grid;place-items:center;background:var(--ok-soft);color:var(--ok)">${I("check")}</div><h3 style="font-size:24px;color:var(--ink)">Dəftər təmizdir</h3><p style="margin-top:6px">Test həll et: səhv etdiyin suallar bura düşəcək ki, sonra təkrar edəsən.</p><a class="btn" href="#fenler" style="margin-top:18px">Fənlərə keç</a></div>`}
    </div>`;
    const g = $("#mgo"); if (g) g.onclick = startMistakes;
    $$("[data-del]").forEach(b => b.onclick = () => { S.mist.splice(+b.dataset.del, 1); save(); viewMistakes() });
  }

  /* ---------- fleş kartlar ---------- */
  function viewCards(id) {
    const t = findTopic(id); if (!t) return go("fenler"); const x = B.sub(t.s); setNav("fenler");
    let deck = t.gen ? Array.from({ length: 10 }, (_, k) => genQ(t, 1 + (k % 3))).map(q => ({ f: q.q, b: q.o[q.a], e: q.e })) : shuffle(t.Q).map(q => ({ f: q[1], b: q[2][0], e: q[3] }));
    const total = deck.length; let known = 0, flipped = false;
    app.innerHTML = `<div class="view gbox" style="--c:${x.c}"><nav class="crumb"><a href="#t-${t.id}">${esc(t.t)}</a>›<span>Fleş kartlar</span></nav>
      <div class="ghead"><div><h1>Fleş kartlar</h1><p style="color:var(--mut)">Sualı oxu, cavabı ağlında de, sonra kartı çevir.</p></div></div>
      <div class="qtop"><div class="qprog"><i id="fcp" style="width:0"></i></div><span class="qtimer" id="fcn"></span></div><div id="fcw"></div></div>`;
    const draw = () => {
      $("#fcp").style.width = (known / total * 100) + "%"; $("#fcn").textContent = `${known}/${total}`;
      if (!deck.length) { S.decks++; save(); gain(15 + total, "Fleş kartlar"); $("#fcw").innerHTML = `<div class="card res grid-bg"><div class="grade">${ringSvg}<b>${total}</b></div><h2>Dəst bitdi!</h2><p class="sum">${total} kartın hamısını bildin.</p><div class="acts"><a class="btn pen" href="#t-${t.id}">Testə keç</a><button class="btn ghost" type="button" id="fcr">Yenidən</button></div></div>`; $("#fcr").onclick = () => viewCards(id); return }
      const c = deck[0]; flipped = false;
      $("#fcw").innerHTML = `<button type="button" class="flash" id="fc" aria-label="Kartı çevir"><span class="fi fr"><span class="pill" style="color:${x.c}"><span class="dot"></span>Sual</span><span class="ft">${esc(c.f)}</span><small>Çevirmək üçün toxun · boşluq</small></span><span class="fi bk"><span class="pill" style="color:var(--ok)"><span class="dot"></span>Cavab</span><span class="ft">${esc(c.b)}</span>${c.e ? `<small>${esc(c.e)}</small>` : ""}</span></button>
        <div class="fcact"><button class="btn ghost" type="button" id="fca">${I("cross")} Təkrar lazımdır</button><button class="btn" type="button" id="fck">${I("check")} Bilirəm</button></div>`;
      $("#fc").onclick = () => { flipped = !flipped; $("#fc").classList.toggle("on", flipped) };
      $("#fca").onclick = () => { deck.push(deck.shift()); draw() };
      $("#fck").onclick = () => { deck.shift(); known++; draw() };
    };
    draw();
  }
  document.addEventListener("keydown", e => { if (!location.hash.startsWith("#kart-") || e.target.closest("input") || $(".modal")) return; if (e.key === " ") { e.preventDefault(); const c = $("#fc"); if (c) c.click() } else if (e.key === "ArrowRight") { const b = $("#fck"); if (b) b.click() } else if (e.key === "ArrowLeft") { const b = $("#fca"); if (b) b.click() } });

  /* ---------- axtarış ---------- */
  const low = s => String(s).toLocaleLowerCase("az").replace(/ı/g, "i");
  function openSearch() {
    if ($(".modal")) return; const m = document.createElement("div"); m.className = "modal top"; document.body.appendChild(m);
    m.innerHTML = `<div class="box srch" role="dialog" aria-modal="true" aria-label="Axtarış"><div class="sin">${I("search")}<input id="sq" placeholder="Mövzu, fənn və ya sinif axtar…" autocomplete="off"><kbd>Esc</kbd></div><div class="sres" id="sres"></div></div>`;
    const inp = $("#sq", m), res = $("#sres", m), all = allTopics(); let sel = 0, list = [];
    const draw = () => {
      const q = low(inp.value.trim()); list = q ? all.filter(t => low(t.t + " " + B.sub(t.s).n + " " + gLabel(t.s, t.g)).includes(q)).slice(0, 30) : (S.last && findTopic(S.last) ? [findTopic(S.last)] : []).concat(all.filter(t => t.g === S.grade).slice(0, 8));
      sel = Math.min(sel, Math.max(0, list.length - 1));
      res.innerHTML = list.length ? list.map((t, i) => { const x = B.sub(t.s); return `<a href="#t-${t.id}" class="sr ${i === sel ? "on" : ""}" style="--c:${x.c}"><span class="ic">${I(x.ic)}</span><span><b>${esc(t.t)}</b><small>${esc(x.n)} · ${esc(gLabel(t.s, t.g))}</small></span><span class="pst">${[1, 2, 3].map(l => STAR(best(t.id, l) >= 80)).join("")}</span></a>` }).join("") : `<p class="empty" style="padding:28px">${q ? "Heç nə tapılmadı. Başqa söz yoxla." : "Yazmağa başla: məs., “kəsr”, “Nizami”, “HTML”."}</p>`;
      if (!q && list.length) res.insertAdjacentHTML("afterbegin", `<div class="slab">${S.last ? "Son baxdığın və sinfinə uyğun" : "Sinfinə uyğun"}</div>`);
    };
    const close = () => m.remove();
    inp.oninput = () => { sel = 0; draw() };
    inp.onkeydown = e => { if (e.key === "Escape") close(); else if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(list.length - 1, sel + 1); draw() } else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); draw() } else if (e.key === "Enter" && list[sel]) { close(); go("t-" + list[sel].id) } };
    m.onclick = e => { if (e.target === m) close(); if (e.target.closest(".sr")) close() };
    draw(); inp.focus();
  }

  /* ---------- ilk açılış ---------- */
  function onboarding() {
    const m = document.createElement("div"); m.className = "modal"; document.body.appendChild(m); let step = 0; const d = { name: S.name, grade: S.grade, goal: S.goal };
    const GOALS = [[30, "Rahat", "5 dəq/gün"], [60, "Normal", "10 dəq/gün"], [120, "Ciddi", "20 dəq/gün"], [200, "Həvəskar", "30 dəq/gün"]];
    const draw = () => {
      m.innerHTML = `<div class="box onb" role="dialog" aria-modal="true" aria-label="Xoş gəldin"><div class="dots">${[0, 1, 2].map(i => `<i class="${i <= step ? "on" : ""}"></i>`).join("")}</div>
        ${step === 0 ? `<div class="onb-ic">${I("book")}</div><h3>Bilgəyə xoş gəldin!</h3><p>Sənə necə müraciət edək? Ad sertifikatlarda da görünəcək.</p><input class="big-in" id="on" value="${esc(d.name)}" maxlength="24" placeholder="Adın">`
        : step === 1 ? `<h3>Neçənci sinifdə oxuyursan?</h3><p>Ana səhifə və tövsiyələr sinfinə uyğunlaşacaq. Sonra dəyişə bilərsən.</p><div class="grades" id="og" style="justify-content:center">${Array.from({ length: 11 }, (_, i) => `<button type="button" data-g="${i + 1}" class="${d.grade === i + 1 ? "on" : ""}">${i + 1}</button>`).join("")}<button type="button" class="pro ${d.grade === "pro" ? "on" : ""}" data-g="pro">İxtisaslar</button></div>`
        : `<h3>Günlük hədəfini seç</h3><p>Hər gün bu qədər XP topla, seriyanı qoru.</p><div class="goals" id="ogl">${GOALS.map(([v, n, t]) => `<button type="button" data-v="${v}" class="${d.goal === v ? "on" : ""}"><b>${n}</b><span>${v} XP</span><small>${t}</small></button>`).join("")}</div>`}
        <div class="acts">${step ? `<button class="btn ghost sm" type="button" data-b>Geri</button>` : `<button class="btn ghost sm" type="button" data-skip>Keç</button>`}<button class="btn pen sm" type="button" data-n>${step < 2 ? "Davam et" : "Başlayaq!"} ${I("arrow")}</button></div></div>`;
      const n = $("#on", m); if (n) { n.focus(); n.onkeydown = e => { if (e.key === "Enter") $("[data-n]", m).click() } }
      const g = $("#og", m); if (g) g.onclick = e => { const b = e.target.closest("button"); if (!b) return; d.grade = b.dataset.g === "pro" ? "pro" : +b.dataset.g; $$("button", g).forEach(x => x.classList.toggle("on", x === b)) };
      const gl = $("#ogl", m); if (gl) gl.onclick = e => { const b = e.target.closest("button"); if (!b) return; d.goal = +b.dataset.v; $$("button", gl).forEach(x => x.classList.toggle("on", x === b)) };
    };
    const finish = () => { Object.assign(S, { name: d.name, grade: d.grade, goal: d.goal, onb: true }); save(); m.remove(); hud(); route(); if (S.name) toast(`Xoş gəldin, ${S.name}!`) };
    m.onclick = e => {
      if (e.target.closest("[data-skip]")) { S.onb = true; save(); m.remove(); return }
      if (e.target.closest("[data-b]")) { step--; draw() }
      if (e.target.closest("[data-n]")) { if (step === 0) d.name = $("#on", m).value.trim().slice(0, 24); if (step < 2) { step++; draw() } else finish() }
    };
    draw();
  }

  /* ---------- hesab və bulud sinxronu (Supabase) ---------- */
  const CFG = window.BILGE_CFG || {}, SB = CFG.url && CFG.key && window.supabase ? window.supabase.createClient(CFG.url, CFG.key) : null;
  let USER = null, pushT = null, pulling = false;
  function cloudPush() { if (!SB || !USER || pulling) return; clearTimeout(pushT); pushT = setTimeout(async () => { try { await SB.from("progress").upsert({ user_id: USER.id, data: S, updated_at: new Date().toISOString() }) } catch (e) { } }, 1500) }
  function merge(a, b) { // a = yerli, b = bulud
    const o = Object.assign(def(), b, a), mx = k => o[k] = Math.max(a[k] || 0, b[k] || 0);
    ["xp", "tests", "perfect", "correct", "answered", "blitz", "mem", "tf", "goalHit", "fixed", "decks", "certs"].forEach(mx);
    o.days = [...new Set([...(a.days || []), ...(b.days || [])])].sort().slice(-400);
    o.done = Object.assign({}, b.done); for (const [t, v] of Object.entries(a.done || {})) { o.done[t] = Object.assign({}, o.done[t]); for (const [l, p] of Object.entries(v)) o.done[t][l] = Math.max(p, o.done[t][l] || 0) }
    o.subj = Object.assign({}, b.subj); for (const [k, v] of Object.entries(a.subj || {})) if (!o.subj[k] || v.t > o.subj[k].t) o.subj[k] = v;
    o.xpDay = Object.assign({}, b.xpDay); for (const [k, v] of Object.entries(a.xpDay || {})) o.xpDay[k] = Math.max(v, o.xpDay[k] || 0);
    o.daily = Object.assign({}, b.daily, a.daily);
    const seen = new Set(); o.mist = [...(b.mist || []), ...(a.mist || [])].filter(m => !seen.has(m.q) && seen.add(m.q)).slice(-150);
    ["name", "grade", "last", "theme"].forEach(k => o[k] = a[k] || b[k] || o[k]); o.onb = !!(a.onb || b.onb);
    return o;
  }
  async function cloudPull() {
    if (!SB || !USER) return; pulling = true;
    try { const { data } = await SB.from("progress").select("data").eq("user_id", USER.id).maybeSingle(); if (data && data.data) S = merge(S, data.data); const nm = USER.user_metadata && USER.user_metadata.name; if (nm && !S.name) S.name = nm; S.onb = true } catch (e) { }
    pulling = false; save(); applyTheme(); hud(); route();
  }
  function acctBtn() { const b = $("#hacct"); if (!b) return; b.innerHTML = USER ? `<span class="mini" style="background:${AVC[S.av] || AVC[0]}">${esc((S.name || USER.email || "?")[0].toLocaleUpperCase("az"))}</span>` : `${I("user")}<span>Daxil ol</span>`; b.classList.toggle("in", !!USER); b.title = USER ? USER.email : "Daxil ol / Qeydiyyat" }
  function authModal(mode = "in") {
    if ($(".modal")) return; const m = document.createElement("div"); m.className = "modal"; document.body.appendChild(m);
    const draw = (msg = "", bad = false) => {
      m.innerHTML = `<div class="box auth" role="dialog" aria-modal="true" aria-label="Hesab"><button class="qx mx" type="button" data-x aria-label="Bağla">${I("close")}</button>
        <div class="onb-ic">${I("user")}</div><h3>${mode === "up" ? "Hesab yarat" : mode === "reset" ? "Şifrəni bərpa et" : "Xoş gördük!"}</h3>
        <p>${mode === "reset" ? "E-poçtunu yaz, bərpa linki göndərək." : "Nəticələrin buludda saxlanır: telefon və kompüterdə eyni XP, ulduz və nişanlar."}</p>
        ${SB ? `<form id="af" class="aform">${mode === "up" ? `<label class="fld">Adın<input name="n" maxlength="24" value="${esc(S.name)}" required autocomplete="name"></label>` : ""}
          <label class="fld">E-poçt<input name="e" type="email" required autocomplete="email"></label>
          ${mode !== "reset" ? `<label class="fld">Şifrə<input name="p" type="password" minlength="6" required autocomplete="${mode === "up" ? "new-password" : "current-password"}" placeholder="ən azı 6 simvol"></label>` : ""}
          ${msg ? `<div class="amsg ${bad ? "bad" : ""}">${esc(msg)}</div>` : ""}
          <button class="btn pen wide" type="submit">${mode === "up" ? "Qeydiyyatdan keç" : mode === "reset" ? "Link göndər" : "Daxil ol"}</button></form>
          <div class="aswitch">${mode === "in" ? `<button type="button" class="lnk" data-m="up">Hesabın yoxdur? Qeydiyyat</button><button type="button" class="lnk" data-m="reset" style="color:var(--mut)">Şifrəni unutdum</button>` : `<button type="button" class="lnk" data-m="in">Hesabın var? Daxil ol</button>`}</div>`
        : `<div class="amsg bad">Hesab sistemi hələ qoşulmayıb. Nəticələrin bu brauzerdə saxlanır.</div>`}</div>`;
      const f = $("#af", m); if (f) { $("input", f).focus(); f.onsubmit = async e => {
        e.preventDefault(); const fd = new FormData(f), em = String(fd.get("e") || "").trim(), pw = String(fd.get("p") || ""), btn = $("button[type=submit]", f); btn.disabled = true; btn.textContent = "Gözlə…";
        try {
          if (mode === "up") { const nm = String(fd.get("n") || "").trim().slice(0, 24); const { data, error } = await SB.auth.signUp({ email: em, password: pw, options: { data: { name: nm }, emailRedirectTo: location.origin + location.pathname } }); if (error) throw error; if (nm) { S.name = nm; save() } if (!data.session) return draw("Təsdiq linkini e-poçtuna göndərdik. Linkə bas, sonra daxil ol.") }
          else if (mode === "reset") { const { error } = await SB.auth.resetPasswordForEmail(em, { redirectTo: location.origin + location.pathname }); if (error) throw error; return draw("Bərpa linki göndərildi. E-poçtunu yoxla.") }
          else { const { error } = await SB.auth.signInWithPassword({ email: em, password: pw }); if (error) throw error }
          m.remove();
        } catch (err) { const t = String(err.message || err); draw(/Invalid login/i.test(t) ? "E-poçt və ya şifrə yanlışdır." : /already registered/i.test(t) ? "Bu e-poçtla hesab artıq var. Daxil ol." : /Email not confirmed/i.test(t) ? "E-poçtu hələ təsdiqləməmisən. Gələn qutunu yoxla." : /rate limit/i.test(t) ? "Çox cəhd oldu, bir az sonra yenə yoxla." : "Xəta: " + t, true) }
      } }
    };
    m.onclick = e => { if (e.target === m || e.target.closest("[data-x]")) m.remove(); const sw = e.target.closest("[data-m]"); if (sw) { mode = sw.dataset.m; draw() } };
    draw();
  }
  async function newPassword() {
    const m = document.createElement("div"); m.className = "modal"; document.body.appendChild(m);
    m.innerHTML = `<div class="box auth" role="dialog" aria-modal="true"><h3>Yeni şifrə</h3><form id="npf" class="aform"><label class="fld">Yeni şifrə<input name="p" type="password" minlength="6" required autocomplete="new-password"></label><button class="btn pen wide" type="submit">Saxla</button></form></div>`;
    $("#npf", m).onsubmit = async e => { e.preventDefault(); const { error } = await SB.auth.updateUser({ password: new FormData(e.target).get("p") }); m.remove(); toast(error ? "Xəta: " + error.message : "Şifrə yeniləndi") };
  }
  if (SB) {
    SB.auth.onAuthStateChange((ev, ses) => {
      const was = USER; USER = ses ? ses.user : null; acctBtn();
      if (ev === "PASSWORD_RECOVERY") newPassword();
      if (USER && (!was || was.id !== USER.id)) { cloudPull(); if (ev === "SIGNED_IN") toast("Hesaba daxil oldun · nəticələr sinxronlaşdı") }
    });
  }

  /* ---------- profil ---------- */
  function heatmap() {
    const set = new Set(S.days), d = new Date(); d.setDate(d.getDate() - (d.getDay() + 6) % 7 - 16 * 7); const cells = [];
    const mx = Math.max(S.goal, ...Object.values(S.xpDay));
    for (let i = 0; i < 17 * 7; i++) { const k = d.toISOString().slice(0, 10), v = S.xpDay[k] || 0, fut = k > today(); const lv = fut ? -1 : v ? Math.min(4, 1 + Math.floor(v / mx * 3.99)) : set.has(k) ? 1 : 0; cells.push(`<i class="h${lv < 0 ? "x" : lv}" title="${k}: ${v} XP"></i>`); d.setDate(d.getDate() + 1) }
    return `<div class="heat">${cells.join("")}</div><div class="hdays"><span>B.e.</span><span></span><span>Ç.</span><span></span><span>C.</span><span></span><span>B.</span></div>`;
  }
  function viewProfile() {
    setNav("profil"); const L = level(), nm = S.name || "Şagird";
    const subs = SUBJECTS.filter(x => S.subj[x.id]);
    app.innerHTML = `<div class="view prof">
      <div class="card pcard grid-bg">
        <div class="av" style="background:${AVC[S.av] || AVC[0]}">${esc(nm[0].toLocaleUpperCase("az"))}</div>
        <div class="avsw" id="avsw" aria-label="Avatar rəngi">${AVC.map((c, i) => `<button type="button" data-a="${i}" class="${i === S.av ? "on" : ""}" style="background:${c}" aria-label="Rəng ${i + 1}"></button>`).join("")}</div>
        <h2>${esc(nm)}</h2><p style="color:var(--mut);font-weight:700">${L.title} · Səviyyə ${L.l}</p>
        <div class="lvbar bar" style="--c:var(--gold)"><i style="width:${Math.round(L.cur / L.need * 100)}%"></i></div>
        <p style="font-size:13.5px;color:var(--mut);font-weight:700">${L.cur} / ${L.need} XP növbəti səviyyəyə</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px"><div class="card stat" style="padding:12px"><b>${S.xp}</b><span>XP</span></div><div class="card stat" style="padding:12px"><b>${streak()}</b><span>gün seriya</span></div><div class="card stat" style="padding:12px"><b>${S.tests}</b><span>test</span></div><div class="card stat" style="padding:12px"><b>${S.answered ? Math.round(S.correct / S.answered * 100) : 0}%</b><span>dəqiqlik</span></div></div>
        <label style="display:grid;gap:6px;text-align:left;margin-top:18px;font-weight:800;font-size:14px;color:var(--ink-2)" for="pname">Adın<input id="pname" value="${esc(S.name)}" placeholder="Adını yaz" maxlength="24" style="height:44px;border-radius:12px;border:1.5px solid var(--line);background:var(--card);padding:0 12px;font-weight:700"></label>
        <div class="sets">
          <label class="srow"><span>${I("target")} Günlük hədəf</span><select id="pgoal">${[30, 60, 120, 200].map(v => `<option value="${v}" ${S.goal === v ? "selected" : ""}>${v} XP</option>`).join("")}</select></label>
          <label class="srow"><span>${I("moon")} Mövzu</span><select id="pth"><option value="" ${!S.theme ? "selected" : ""}>Sistem</option><option value="light" ${S.theme === "light" ? "selected" : ""}>Açıq</option><option value="dark" ${S.theme === "dark" ? "selected" : ""}>Qaranlıq</option></select></label>
          <label class="srow"><span>${I("vol")} Səs effektləri</span><input type="checkbox" class="tgl" id="psnd" ${S.sound ? "checked" : ""}></label>
        </div>
        <div class="acard">${USER ? `<span>${I("check")} ${esc(USER.email)}</span><small>Nəticələr buludda saxlanır</small><button class="btn ghost sm wide" type="button" id="pout">Çıxış et</button>` : `<span>${I("user")} Hesab yoxdur</span><small>Daxil ol ki, nəticələrin itməsin və bütün cihazlarda görünsün</small><button class="btn sm wide" type="button" id="pin">Daxil ol / Qeydiyyat</button>`}</div>
        <a class="btn ghost sm wide" href="#sehvler" style="margin-top:12px">${I("note")} Səhvlər dəftəri (${S.mist.length})</a>
        <button class="btn ghost sm wide" type="button" id="preset" style="margin-top:10px">Nəticələri sıfırla</button>
      </div>
      <div>
        <div class="card heatc"><div class="sec-h" style="margin-bottom:12px"><div><h2 style="font-size:22px">Aktivlik</h2><p>Son 17 həftə · ${S.days.length} aktiv gün</p></div><div class="hleg"><span>Az</span>${[0, 1, 2, 3, 4].map(k => `<i class="h${k}"></i>`).join("")}<span>Çox</span></div></div>${heatmap()}</div>
        <div class="sec-h" style="margin-top:26px"><div><h2>Nişanlar</h2><p>${BADGES.filter(b => b[3]()).length} / ${BADGES.length} açılıb</p></div></div>
        <div class="badges">${BADGES.map(b => `<div class="card bdg ${b[3]() ? "on" : ""}"><i>${I(b[2])}</i><b>${esc(b[0])}</b><small>${esc(b[1])}</small></div>`).join("")}</div>
        <div class="sec"><div class="sec-h"><div><h2>Fənlər üzrə</h2><p>Düzgün cavab faizi</p></div></div>
        <div class="card" style="padding:8px 20px">${subs.length ? subs.map(x => { const v = S.subj[x.id], p = Math.round(v.c / v.t * 100); return `<div class="prow" style="--c:${x.c}"><span class="ic">${I(x.ic)}</span><div><b>${esc(x.n)}</b><div class="bar" style="margin-top:6px"><i style="width:${p}%"></i></div></div><span>${p}%</span></div>` }).join("") : `<p class="empty">Hələ test yoxdur. İlk testini bitir, statistika burada görünəcək.</p>`}</div></div>
      </div></div>`;
    $("#pname").onchange = e => { S.name = e.target.value.trim().slice(0, 24); save(); viewProfile() };
    const po = $("#pout"); if (po) po.onclick = () => confirmBox("Hesabdan çıxırsan?", "Nəticələr buludda qalır, yenidən daxil olanda geri gələcək.", "Çıxış et", async () => { await SB.auth.signOut(); S = def(); S.onb = true; save(); hud(); viewProfile(); toast("Hesabdan çıxdın") });
    const pi = $("#pin"); if (pi) pi.onclick = () => authModal("in");
    $("#avsw").onclick = e => { const b = e.target.closest("button"); if (!b) return; S.av = +b.dataset.a; save(); viewProfile() };
    $("#pgoal").onchange = e => { S.goal = +e.target.value; save(); hud(); toast("Günlük hədəf: " + S.goal + " XP") };
    $("#pth").onchange = e => { S.theme = e.target.value; save(); applyTheme(); hud() };
    $("#psnd").onchange = e => { S.sound = e.target.checked; save(); if (S.sound) beep("ok") };
    $("#preset").onclick = () => confirmBox("Nəticələri sıfırlayaq?", "XP, ulduzlar, nişanlar və statistika silinəcək.", "Sıfırla", () => { S = def(); save(); hud(); viewProfile(); toast("Nəticələr sıfırlandı") });
  }

  /* ---------- başlanğıc ---------- */
  const hs = $("#hsearch"); if (hs) hs.onclick = openSearch;
  const ht = $("#htheme"); if (ht) ht.onclick = () => { S.theme = isDark() ? "light" : "dark"; save(); applyTheme(); hud() };
  const ha = $("#hacct"); if (ha) ha.onclick = () => USER ? go("profil") : authModal("in");
  acctBtn(); hud();
  if (!S.onb && !/access_token|type=recovery/.test(location.hash)) setTimeout(onboarding, 350);
  window.addEventListener("hashchange", route);
  route();
})();
