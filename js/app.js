(function () {
  "use strict";

  const APP = document.getElementById("app");
  const TABS = document.getElementById("tabs");
  const STORAGE_KEY = "n400.progress.v1";
  const HISTORY_KEY = "n400.history.v1";
  const SETTINGS_KEY = "n400.settings.v1";
  const SITE_URL = "https://angela-grow.github.io/n400-naturalization-test/";

  const STARRED = QUESTIONS.filter((q) => q.starred);
  const CATEGORIES = [...new Set(QUESTIONS.map((q) => q.category))];

  const TRACKS = {
    standard: { pool: QUESTIONS, count: 20, passCount: 12, key: "test20" },
    senior: { pool: STARRED, count: 10, passCount: 6, key: "senior10" },
  };

  // ---------- Persistence ----------
  function readJSON(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (e) {
      return fallback;
    }
  }
  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Private mode or storage full: the app still works, progress just isn't saved.
    }
  }
  function loadProgress() { return readJSON(STORAGE_KEY, {}); }
  function loadHistory() { return readJSON(HISTORY_KEY, []); }
  function recordAnswer(id, correct) {
    const p = loadProgress();
    const entry = p[id] || { correct: 0, incorrect: 0 };
    if (correct) entry.correct++; else entry.incorrect++;
    entry.last = correct;
    entry.lastSeen = Date.now();
    p[id] = entry;
    writeJSON(STORAGE_KEY, p);
  }
  function pushHistory(record) {
    const h = loadHistory();
    h.unshift(record);
    writeJSON(HISTORY_KEY, h.slice(0, 50));
  }

  const settings = Object.assign({ lang: detectLang(), track: null, autoRead: false }, readJSON(SETTINGS_KEY, {}));
  function saveSettings() { writeJSON(SETTINGS_KEY, settings); }

  function detectLang() {
    const nav = (navigator.language || "en").toLowerCase();
    const match = LANGS.find((l) => nav === l.code || nav.startsWith(l.code + "-"));
    if (match) return match.code;
    if (nav.startsWith("fil")) return "tl";
    return "en";
  }

  // ---------- i18n ----------
  function t(key, vars) {
    const dict = STRINGS[settings.lang] || STRINGS.en;
    let s = dict[key] != null ? dict[key] : STRINGS.en[key] != null ? STRINGS.en[key] : key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  }
  function translatedQuestion(item) {
    if (settings.lang === "en") return null;
    const tr = QUESTION_TRANSLATIONS[settings.lang];
    return tr ? tr[item.id - 1] || null : null;
  }
  function catLabel(cat) { return t("cat." + cat); }
  function subLabel(sub) { return t("sub." + sub); }

  function applyStaticText() {
    document.documentElement.lang = settings.lang === "zh" ? "zh-Hans" : settings.lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
  }

  // ---------- Helpers ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => {
      if (c == null || c === false) return;
      node.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
    });
    return node;
  }

  const ICON_PATHS = {
    book: '<path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H19"/><path d="M9 7h6"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="m9 13 2 2 4-4"/>',
    cards: '<rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/>',
  };
  function icon(name) {
    const span = document.createElement("span");
    span.className = "icon";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON_PATHS[name]}</svg>`;
    return span;
  }

  let toastTimer;
  function toast(msg) {
    let node = document.getElementById("toast");
    if (!node) {
      node = el("div", { id: "toast", class: "toast", role: "status" });
      document.body.appendChild(node);
    }
    node.textContent = msg;
    node.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove("show"), 2600);
  }

  // ---------- Progress math ----------
  // A question counts as "known" when the most recent attempt was correct.
  function isKnown(entry) {
    if (!entry) return false;
    if (typeof entry.last === "boolean") return entry.last;
    return entry.correct > entry.incorrect;
  }
  function readiness(pool) {
    const p = loadProgress();
    return { known: pool.filter((q) => isKnown(p[q.id])).length, total: pool.length };
  }
  function weakest(pool) {
    const p = loadProgress();
    return pool
      .map((q) => ({ q, e: p[q.id] }))
      .filter(({ e }) => e && e.incorrect > 0 && (!isKnown(e) || e.incorrect >= e.correct))
      .sort((a, b) => b.e.incorrect / (b.e.correct + b.e.incorrect) - a.e.incorrect / (a.e.correct + a.e.incorrect) || b.e.incorrect - a.e.incorrect)
      .map(({ q }) => q);
  }
  function recentTests(trackKey, n) {
    return loadHistory().filter((h) => h.mode === TRACKS[trackKey].key).slice(0, n);
  }
  function currentTrack() { return settings.track || "standard"; }

  // ---------- Speech ----------
  const canSpeak = "speechSynthesis" in window;
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let activeRecognition = null;

  function englishVoice() {
    const voices = speechSynthesis.getVoices();
    return voices.find((v) => v.lang === "en-US" && /natural|google|samantha/i.test(v.name)) ||
      voices.find((v) => v.lang === "en-US") ||
      voices.find((v) => v.lang && v.lang.startsWith("en"));
  }
  function speak(text) {
    if (!canSpeak) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    const v = englishVoice();
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  function stopSpeech() {
    if (canSpeak) speechSynthesis.cancel();
    if (activeRecognition) {
      try { activeRecognition.abort(); } catch (e) { /* already stopped */ }
      activeRecognition = null;
    }
  }

  const FILLER = new Set(["the", "a", "an", "of", "to", "and", "is", "it", "in", "for", "on", "by"]);
  function tokens(s) {
    return s.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter((w) => w && !FILLER.has(w));
  }
  // Rough hint only: every essential word of some acceptable answer appears in what the user said.
  function soundsLikeMatch(said, answers) {
    const heard = new Set(tokens(said));
    return answers.some((a) => {
      const core = tokens(a.replace(/\([^)]*\)/g, " "));
      return core.length > 0 && core.every((w) => heard.has(w));
    });
  }

  // Question block shared by the test runner and flashcards: text, translation, listen + speak-answer controls.
  function questionBlock(item, answerBox) {
    const frag = el("div", { class: "question-block" });
    frag.appendChild(el("div", { class: "cat-tag" }, [catLabel(item.category), item.starred ? " ★" : null]));
    frag.appendChild(el("div", { class: "question-text", lang: "en" }, [item.question]));
    const tr = translatedQuestion(item);
    if (tr) frag.appendChild(el("div", { class: "question-translation" }, [tr]));

    const heard = el("div", { class: "heard", hidden: true });
    const tools = el("div", { class: "voice-tools" });
    if (canSpeak) {
      tools.appendChild(el("button", { class: "chip-btn", type: "button", onclick: () => speak(item.question) }, [icon("volume"), t("hear")]));
    }
    if (Recognition) {
      const micBtn = el("button", { class: "chip-btn", type: "button" }, [icon("mic"), t("sayAnswer")]);
      micBtn.addEventListener("click", () => {
        if (activeRecognition) { activeRecognition.stop(); return; }
        if (canSpeak) speechSynthesis.cancel();
        const rec = new Recognition();
        rec.lang = "en-US";
        rec.interimResults = true;
        let said = "";
        rec.onresult = (e) => {
          said = Array.from(e.results).map((r) => r[0].transcript).join(" ");
          heard.hidden = false;
          heard.textContent = t("youSaid", { text: said });
        };
        rec.onerror = (e) => {
          heard.hidden = false;
          heard.textContent = e.error === "not-allowed" ? t("micBlocked") : t("micError");
        };
        rec.onend = () => {
          activeRecognition = null;
          micBtn.classList.remove("listening");
          micBtn.lastChild.textContent = t("sayAnswer");
          if (said && answerBox) answerBox.dispatchEvent(new CustomEvent("heard", { detail: said }));
        };
        activeRecognition = rec;
        micBtn.classList.add("listening");
        micBtn.lastChild.textContent = t("listening");
        heard.hidden = false;
        heard.textContent = t("speakNow");
        rec.start();
      });
      tools.appendChild(micBtn);
    }
    if (tools.childNodes.length) frag.appendChild(tools);
    frag.appendChild(heard);
    return frag;
  }

  function answerReveal(item) {
    const box = el("div", { class: "answer-reveal", hidden: true });
    box.appendChild(el("strong", {}, [t("acceptable")]));
    box.appendChild(el("ul", { lang: "en" }, item.answers.map((a) => el("li", {}, [a]))));
    if (item.dynamic) box.appendChild(dynamicNote());
    if (settings.lang !== "en") box.appendChild(el("div", { class: "muted small" }, [t("answerInEnglish")]));
    const hint = el("div", { class: "match-hint", hidden: true });
    box.appendChild(hint);
    box.addEventListener("heard", (e) => {
      if (item.dynamic) return;
      hint.hidden = false;
      const ok = soundsLikeMatch(e.detail, item.answers);
      hint.className = "match-hint " + (ok ? "ok" : "maybe");
      hint.textContent = ok ? t("hintMatch") : t("hintNoMatch");
    });
    return box;
  }

  function dynamicNote() {
    return el("div", { class: "dynamic-note" }, [
      t("dynamicNote") + " ",
      el("a", { href: "https://www.uscis.gov/citizenship/testupdates", target: "_blank", rel: "noopener" }, ["uscis.gov/citizenship/testupdates"]),
    ]);
  }

  // ---------- Router ----------
  const VIEWS = {};
  const NAV_FOR = { senior: "test" };
  let flashPreset = null;

  function render(view) {
    stopSpeech();
    TABS.querySelectorAll(".tab-btn").forEach((b) => {
      const active = b.dataset.view === (NAV_FOR[view] || view);
      b.classList.toggle("active", active);
      if (active) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
    APP.innerHTML = "";
    APP.appendChild(VIEWS[view]());
    window.scrollTo(0, 0);
    if (location.hash !== "#" + view) history.replaceState(null, "", "#" + view);
  }
  TABS.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (btn) render(btn.dataset.view);
  });
  window.addEventListener("hashchange", () => {
    const v = location.hash.replace("#", "");
    if (VIEWS[v]) render(v);
  });
  function currentView() {
    const v = location.hash.replace("#", "");
    return VIEWS[v] ? v : "home";
  }

  // ---------- Home ----------
  VIEWS.home = function () {
    const wrap = el("div", { class: "home" });
    const track = settings.track;

    wrap.appendChild(
      el("section", { class: "hero" }, [
        el("p", { class: "eyebrow" }, [t("eyebrow")]),
        el("h2", { class: "hero-title" }, [t("heroTitle")]),
        el("p", { class: "hero-sub" }, [t("heroSub")]),
        el("div", { class: "btn-row hero-cta" }, [
          el("button", { class: "btn btn-lg btn-cta", onclick: () => render(track === "senior" ? "senior" : "test") }, [icon("play"), t("ctaPractice")]),
          el("button", { class: "btn btn-lg btn-ghost", onclick: () => render("study") }, [t("ctaStudy")]),
        ]),
        el("ul", { class: "trust" }, [
          el("li", {}, [icon("check"), t("trustOfficial")]),
          el("li", {}, [icon("check"), t("trustFree")]),
          el("li", {}, [icon("check"), t("trustAudio")]),
        ]),
      ])
    );

    wrap.appendChild(track ? readinessPanel(track) : trackPicker());

    const trackKey = currentTrack();
    const modes = [
      { view: "study", icon: "book", title: t("modeStudyTitle"), desc: t("modeStudyDesc") },
      { view: "flashcards", icon: "cards", title: t("modeFlashTitle"), desc: t("modeFlashDesc") },
      {
        view: trackKey === "senior" ? "senior" : "test",
        icon: "clipboard",
        title: trackKey === "senior" ? t("modeSeniorTitle") : t("modeTestTitle"),
        desc: trackKey === "senior" ? t("modeSeniorDesc") : t("modeTestDesc"),
      },
      { view: "stats", icon: "chart", title: t("modeStatsTitle"), desc: t("modeStatsDesc") },
    ];
    wrap.appendChild(
      el("div", { class: "grid" }, modes.map((m) =>
        el("button", { class: "mode-card", onclick: () => render(m.view) }, [
          el("div", { class: "mode-icon" }, [icon(m.icon)]),
          el("h3", {}, [m.title]),
          el("p", {}, [m.desc]),
        ])
      ))
    );
    return wrap;
  };

  function trackPicker() {
    function choose(track) {
      settings.track = track;
      saveSettings();
      render("home");
    }
    return el("section", { class: "card track-picker" }, [
      el("h2", {}, [t("pickTitle")]),
      el("p", { class: "muted" }, [t("pickSub")]),
      el("div", { class: "track-options" }, [
        el("button", { class: "track-option", onclick: () => choose("standard") }, [
          el("strong", {}, [t("pickStandardTitle")]),
          el("span", {}, [t("pickStandardDesc")]),
        ]),
        el("button", { class: "track-option", onclick: () => choose("senior") }, [
          el("strong", {}, [t("pickSeniorTitle")]),
          el("span", {}, [t("pickSeniorDesc")]),
        ]),
      ]),
    ]);
  }

  function readinessPanel(track) {
    const cfg = TRACKS[track];
    const r = readiness(cfg.pool);
    const pct = Math.round((r.known / r.total) * 100);
    const tests = recentTests(track, 5);
    const passed = tests.filter((h) => h.passed).length;
    const weak = weakest(cfg.pool);

    const ring = el("div", { class: "ring", style: `--pct:${pct}`, role: "img", "aria-label": `${pct}%` }, [el("span", {}, [`${pct}%`])]);
    const lines = el("div", { class: "readiness-text" }, [
      el("h2", {}, [t("knowCount", { known: r.known, total: r.total })]),
      el("p", { class: "muted" }, [tests.length ? t("passedRecent", { passed, total: tests.length }) : t("noTestsYet")]),
      el("p", { class: "track-line" }, [
        t(track === "senior" ? "trackSenior" : "trackStandard"),
        " · ",
        el("button", { class: "link-btn", onclick: () => { settings.track = null; saveSettings(); render("home"); } }, [t("change")]),
      ]),
    ]);
    const action = weak.length
      ? el("button", { class: "btn", onclick: () => { flashPreset = { mode: "weak" }; render("flashcards"); } }, [icon("target"), t("reviewWeak", { n: Math.min(weak.length, 10) })])
      : el("button", { class: "btn", onclick: () => render(track === "senior" ? "senior" : "test") }, [icon("play"), t(r.known ? "takeAnother" : "startFirst")]);

    return el("section", { class: "card readiness" }, [ring, lines, el("div", { class: "readiness-action" }, [action])]);
  }

  // ---------- Study ----------
  VIEWS.study = function () {
    const wrap = el("div", {});
    wrap.appendChild(el("h2", { class: "view-title" }, [t("studyTitle")]));
    wrap.appendChild(el("p", { class: "muted view-sub" }, [t("studySub")]));

    const search = el("input", { type: "search", placeholder: t("searchPlaceholder"), "aria-label": t("searchPlaceholder") });
    const catSelect = el("select", { "aria-label": t("allCategories") }, [
      el("option", { value: "" }, [t("allCategories")]),
      ...CATEGORIES.map((c) => el("option", { value: c }, [catLabel(c)])),
    ]);
    const starChk = el("input", { type: "checkbox" });
    if (settings.track === "senior") starChk.checked = true;
    const starredOnly = el("label", { class: "check-label" }, [starChk, t("starredOnly")]);

    wrap.appendChild(el("div", { class: "search-row" }, [search, catSelect, starredOnly]));
    const results = el("div", {});
    wrap.appendChild(results);

    function draw() {
      const q = search.value.trim().toLowerCase();
      const cat = catSelect.value;
      results.innerHTML = "";

      const filtered = QUESTIONS.filter((item) => {
        if (cat && item.category !== cat) return false;
        if (starChk.checked && !item.starred) return false;
        if (!q) return true;
        const tr = translatedQuestion(item);
        return (
          item.question.toLowerCase().includes(q) ||
          (tr && tr.toLowerCase().includes(q)) ||
          item.answers.some((a) => a.toLowerCase().includes(q))
        );
      });

      if (!filtered.length) {
        results.appendChild(el("div", { class: "empty-state" }, [t("noMatches")]));
        return;
      }

      const byCategory = {};
      filtered.forEach((item) => {
        byCategory[item.category] = byCategory[item.category] || {};
        byCategory[item.category][item.subcategory] = byCategory[item.category][item.subcategory] || [];
        byCategory[item.category][item.subcategory].push(item);
      });

      Object.entries(byCategory).forEach(([category, subs]) => {
        const catBlock = el("div", { class: "category-block" });
        catBlock.appendChild(el("h2", {}, [catLabel(category)]));
        Object.entries(subs).forEach(([sub, items]) => {
          const subBlock = el("div", { class: "subcategory-block" });
          subBlock.appendChild(el("h3", {}, [subLabel(sub)]));
          items.forEach((item) => subBlock.appendChild(qaCard(item)));
          catBlock.appendChild(subBlock);
        });
        results.appendChild(catBlock);
      });
    }

    function qaCard(item) {
      const card = el("div", { class: "qa-card" });
      const tr = translatedQuestion(item);
      const head = el("button", { class: "qa-question", type: "button", "aria-expanded": "false" }, [
        el("span", { class: "qa-num" }, [String(item.id)]),
        el("span", { class: "qa-text" }, [
          el("span", { lang: "en" }, [item.question]),
          item.starred ? el("span", { class: "star", title: t("starTitle") }, [" ★"]) : null,
          tr ? el("span", { class: "qa-translation" }, [tr]) : null,
        ]),
      ]);
      const body = el("div", { class: "qa-answers" });
      body.appendChild(el("ul", { lang: "en" }, item.answers.map((a) => el("li", {}, [a]))));
      if (item.note) body.appendChild(el("div", { class: "qa-note" }, [item.note]));
      if (item.dynamic) body.appendChild(dynamicNote());
      if (canSpeak) {
        body.appendChild(el("button", { class: "chip-btn", type: "button", onclick: () => speak(item.question) }, [icon("volume"), t("hear")]));
      }
      card.appendChild(head);
      card.appendChild(body);
      head.addEventListener("click", () => {
        const open = card.classList.toggle("open");
        head.setAttribute("aria-expanded", String(open));
      });
      return card;
    }

    search.addEventListener("input", draw);
    catSelect.addEventListener("change", draw);
    starChk.addEventListener("change", draw);
    draw();
    return wrap;
  };

  // ---------- Practice test ----------
  function testView(initialTrack) {
    const wrap = el("div", {});
    let trackKey = initialTrack;

    function draw() {
      wrap.innerHTML = "";
      wrap.appendChild(quizRunner(trackKey, () => { trackKey = trackKey === "senior" ? "standard" : "senior"; draw(); }));
    }
    draw();
    return wrap;
  }
  VIEWS.test = () => testView(currentTrack());
  VIEWS.senior = () => testView("senior");

  function quizRunner(trackKey, switchTrack) {
    const cfg = TRACKS[trackKey];
    const wrap = el("div", {});
    let pool, idx, correctCount, missed;

    function intro() {
      wrap.innerHTML = "";
      const other = trackKey === "senior" ? t("switchToStandard") : t("switchToSenior");
      const autoRead = el("input", { type: "checkbox" });
      autoRead.checked = settings.autoRead;
      autoRead.addEventListener("change", () => { settings.autoRead = autoRead.checked; saveSettings(); });
      wrap.appendChild(
        el("div", { class: "card intro-card" }, [
          el("h2", {}, [trackKey === "senior" ? t("seniorTestTitle") : t("testTitle")]),
          el("ul", {}, [
            el("li", {}, [t("ruleCount", { count: cfg.count, pool: cfg.pool.length })]),
            el("li", {}, [t("rulePass", { pass: cfg.passCount })]),
            el("li", {}, [t("ruleSayIt")]),
          ]),
          canSpeak ? el("label", { class: "check-label" }, [autoRead, t("autoRead")]) : null,
          el("div", { class: "btn-row" }, [
            el("button", { class: "btn btn-lg", onclick: startQuiz }, [icon("play"), t("startTest")]),
            el("button", { class: "link-btn", onclick: switchTrack }, [other]),
          ]),
        ])
      );
    }

    function startQuiz() {
      pool = shuffle(cfg.pool).slice(0, cfg.count);
      idx = 0;
      correctCount = 0;
      missed = [];
      drawQuestion();
    }

    function drawQuestion() {
      stopSpeech();
      wrap.innerHTML = "";
      const item = pool[idx];

      const bar = el("div", { class: "progress-bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(pool.length), "aria-valuenow": String(idx) }, [
        el("div", { style: `width:${(idx / pool.length) * 100}%` }),
      ]);
      const meta = el("div", { class: "quiz-meta" }, [
        el("span", {}, [t("questionOf", { n: idx + 1, total: pool.length })]),
        el("span", {}, [t("correctSoFar", { n: correctCount, pass: cfg.passCount })]),
      ]);

      const card = el("div", { class: "card quiz-card" });
      const answerBox = answerReveal(item);
      card.appendChild(questionBlock(item, answerBox));

      const revealBtn = el("button", { class: "btn btn-lg secondary", onclick: reveal }, [t("showAnswer")]);
      const gradeRow = el("div", { class: "btn-row center", hidden: true }, [
        el("button", { class: "btn success", onclick: () => grade(true) }, [t("gotIt")]),
        el("button", { class: "btn danger", onclick: () => grade(false) }, [t("missedIt")]),
      ]);

      function reveal() {
        answerBox.hidden = false;
        gradeRow.hidden = false;
        revealBtn.hidden = true;
      }
      function grade(correct) {
        recordAnswer(item.id, correct);
        if (correct) correctCount++; else missed.push(item);
        idx++;
        if (idx >= pool.length) finish();
        else drawQuestion();
      }

      card.appendChild(revealBtn);
      card.appendChild(answerBox);
      card.appendChild(gradeRow);
      wrap.appendChild(bar);
      wrap.appendChild(meta);
      wrap.appendChild(card);
      if (settings.autoRead) speak(item.question);
    }

    function finish() {
      stopSpeech();
      const passed = correctCount >= cfg.passCount;
      pushHistory({ mode: cfg.key, date: Date.now(), score: correctCount, total: pool.length, passed });
      wrap.innerHTML = "";
      const screen = el("div", { class: "card score-screen" });
      screen.appendChild(el("div", { class: `score-pill ${passed ? "pass" : "fail"}` }, [passed ? t("pass") : t("notYet")]));
      screen.appendChild(el("div", { class: `big-score ${passed ? "pass" : "fail"}` }, [`${correctCount} / ${pool.length}`]));
      screen.appendChild(el("p", {}, [passed ? t("passMsg", { pass: cfg.passCount }) : t("failMsg", { pass: cfg.passCount })]));

      const buttons = el("div", { class: "btn-row center" });
      if (passed) buttons.appendChild(el("button", { class: "btn btn-cta", onclick: () => shareScore(correctCount, pool.length) }, [icon("share"), t("shareScore")]));
      buttons.appendChild(el("button", { class: "btn", onclick: startQuiz }, [t("tryAgain")]));
      buttons.appendChild(el("button", { class: "btn secondary", onclick: () => render("home") }, [t("backHome")]));
      screen.appendChild(buttons);

      if (missed.length) {
        const reviewSet = missed.slice();
        screen.appendChild(
          el("div", { class: "missed-list" }, [
            el("h4", {}, [t("reviewThese")]),
            el("ul", {}, reviewSet.map((m) => el("li", { lang: "en" }, [`${m.id}. ${m.question}`]))),
            el("button", { class: "btn secondary", onclick: () => { flashPreset = { mode: "custom", deck: reviewSet }; render("flashcards"); } }, [icon("cards"), t("drillMissed")]),
          ])
        );
      }
      wrap.appendChild(screen);
    }

    intro();
    return wrap;
  }

  async function shareScore(score, total) {
    const text = t("shareText", { score, total });
    if (navigator.share) {
      try {
        await navigator.share({ title: t("appName"), text, url: SITE_URL });
        return;
      } catch (e) {
        if (e && e.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${SITE_URL}`);
      toast(t("copied"));
    } catch (e) {
      prompt(t("copyPrompt"), `${text} ${SITE_URL}`);
    }
  }

  // ---------- Flashcards ----------
  VIEWS.flashcards = function () {
    const wrap = el("div", {});
    const preset = flashPreset || { mode: settings.track === "senior" ? "starred" : "all" };
    flashPreset = null;
    let mode = preset.mode;
    const customDeck = preset.deck || [];
    let deck, pos = 0;
    let sessionCorrect = 0, sessionTotal = 0;

    function source(m) {
      if (m === "starred") return STARRED;
      if (m === "weak") return weakest(QUESTIONS).slice(0, 10);
      if (m === "custom") return customDeck;
      return QUESTIONS;
    }
    function setMode(m) {
      mode = m;
      deck = shuffle(source(m));
      pos = 0;
      draw();
    }

    function draw() {
      stopSpeech();
      wrap.innerHTML = "";
      const weakCount = Math.min(weakest(QUESTIONS).length, 10);
      const options = [
        ["all", t("deckAll")],
        ["starred", t("deckStarred")],
        ["weak", t("deckWeak", { n: weakCount })],
      ];
      if (customDeck.length) options.push(["custom", t("deckMissed", { n: customDeck.length })]);
      wrap.appendChild(
        el("div", { class: "deck-row" }, [
          el("div", { class: "segmented", role: "group", "aria-label": t("deckLabel") }, options.map(([key, label]) =>
            el("button", {
              class: mode === key ? "active" : "",
              "aria-pressed": String(mode === key),
              disabled: key === "weak" && !weakCount ? true : null,
              onclick: () => setMode(key),
            }, [label])
          )),
          el("span", { class: "muted small session" }, [t("session", { n: sessionCorrect, total: sessionTotal })]),
        ])
      );

      if (!deck.length) {
        wrap.appendChild(el("div", { class: "empty-state" }, [mode === "weak" ? t("noWeak") : t("noCards")]));
        return;
      }
      const item = deck[pos % deck.length];

      const card = el("div", { class: "card quiz-card" });
      const answerBox = answerReveal(item);
      card.appendChild(questionBlock(item, answerBox));
      const revealBtn = el("button", { class: "btn btn-lg secondary", onclick: reveal }, [t("showAnswer")]);
      const gradeRow = el("div", { class: "btn-row center", hidden: true }, [
        el("button", { class: "btn success", onclick: () => grade(true) }, [t("knewIt")]),
        el("button", { class: "btn danger", onclick: () => grade(false) }, [t("didntKnow")]),
      ]);

      function reveal() {
        answerBox.hidden = false;
        gradeRow.hidden = false;
        revealBtn.hidden = true;
      }
      function grade(correct) {
        recordAnswer(item.id, correct);
        sessionTotal++;
        if (correct) sessionCorrect++;
        pos++;
        if (pos % deck.length === 0) deck = shuffle(deck);
        draw();
      }

      card.appendChild(revealBtn);
      card.appendChild(answerBox);
      card.appendChild(gradeRow);
      card.appendChild(el("div", { class: "btn-row center" }, [
        el("button", { class: "link-btn", onclick: () => { pos++; draw(); } }, [t("skip")]),
      ]));
      wrap.appendChild(el("div", { class: "muted small deck-pos" }, [t("cardOf", { n: (pos % deck.length) + 1, total: deck.length })]));
      wrap.appendChild(card);
      if (settings.autoRead) speak(item.question);
    }

    deck = shuffle(source(mode));
    draw();
    return wrap;
  };

  // ---------- Progress ----------
  VIEWS.stats = function () {
    const wrap = el("div", {});
    wrap.appendChild(el("h2", { class: "view-title" }, [t("statsTitle")]));
    const progress = loadProgress();
    const entries = Object.entries(progress);
    const history = loadHistory();

    const totalAttempts = entries.reduce((s, [, v]) => s + v.correct + v.incorrect, 0);
    const totalCorrect = entries.reduce((s, [, v]) => s + v.correct, 0);
    const accuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    const track = currentTrack();
    const r = readiness(TRACKS[track].pool);

    wrap.appendChild(el("div", { class: "stats-grid" }, [
      statTile(`${r.known}/${r.total}`, t("statKnown")),
      statTile(`${accuracy}%`, t("statAccuracy")),
      statTile(totalAttempts, t("statAnswers")),
      statTile(history.filter((h) => h.passed).length, t("statPassed")),
    ]));

    if (!entries.length) {
      wrap.appendChild(el("div", { class: "empty-state" }, [
        el("p", {}, [t("noActivity")]),
        el("button", { class: "btn", onclick: () => render("test") }, [icon("play"), t("startFirst")]),
      ]));
      return wrap;
    }

    // Accuracy by category
    const catCard = el("div", { class: "card" }, [el("h3", {}, [t("byCategory")])]);
    CATEGORIES.forEach((cat) => {
      const qs = QUESTIONS.filter((q) => q.category === cat);
      let c = 0, n = 0, known = 0;
      qs.forEach((q) => {
        const e = progress[q.id];
        if (!e) return;
        c += e.correct;
        n += e.correct + e.incorrect;
        if (isKnown(e)) known++;
      });
      const pct = n ? Math.round((c / n) * 100) : 0;
      catCard.appendChild(el("div", { class: "cat-row" }, [
        el("div", { class: "cat-row-head" }, [
          el("span", {}, [catLabel(cat)]),
          el("span", { class: "muted small" }, [n ? t("catDetail", { pct, known, total: qs.length }) : t("notStarted")]),
        ]),
        el("div", { class: "meter" }, [el("div", { style: `width:${pct}%`, class: pct >= 60 ? "good" : "low" })]),
      ]));
    });
    wrap.appendChild(catCard);

    // Recent tests
    if (history.length) {
      const fmt = new Intl.DateTimeFormat(settings.lang === "zh" ? "zh-Hans" : settings.lang, { month: "short", day: "numeric" });
      wrap.appendChild(el("div", { class: "card" }, [
        el("h3", {}, [t("recentTests")]),
        el("ul", { class: "history-list" }, history.slice(0, 8).map((h) =>
          el("li", {}, [
            el("span", {}, [fmt.format(new Date(h.date)), " · ", h.mode === "senior10" ? t("seniorShort") : t("standardShort")]),
            el("span", { class: h.passed ? "pass-text" : "fail-text" }, [`${h.score}/${h.total} `, h.passed ? t("pass") : t("notYet")]),
          ])
        )),
      ]));
    }

    const missed = entries
      .map(([id, v]) => ({ id: Number(id), ...v, total: v.correct + v.incorrect }))
      .filter((v) => v.incorrect > 0)
      .sort((a, b) => b.incorrect / b.total - a.incorrect / a.total || b.incorrect - a.incorrect)
      .slice(0, 15);

    if (missed.length) {
      const box = el("div", { class: "card" }, [el("h3", {}, [t("mostMissed")])]);
      const list = el("ul", { class: "missed-stats" });
      missed.forEach((m) => {
        const q = QUESTIONS.find((qq) => qq.id === m.id);
        if (!q) return;
        list.appendChild(el("li", {}, [
          el("span", { lang: "en" }, [`${q.id}. ${q.question}`]),
          el("span", { class: "muted small nowrap" }, [` ${m.correct}✓ ${m.incorrect}✗`]),
        ]));
      });
      box.appendChild(list);
      box.appendChild(el("button", { class: "btn", onclick: () => { flashPreset = { mode: "weak" }; render("flashcards"); } }, [icon("target"), t("drillWeak")]));
      wrap.appendChild(box);
    }

    wrap.appendChild(el("button", { class: "btn danger subtle", onclick: () => {
      if (confirm(t("resetConfirm"))) {
        try {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(HISTORY_KEY);
        } catch (e) { /* nothing saved */ }
        render("stats");
      }
    } }, [t("reset")]));

    return wrap;

    function statTile(num, label) {
      return el("div", { class: "stat-tile" }, [
        el("div", { class: "num" }, [String(num)]),
        el("div", { class: "label" }, [label]),
      ]);
    }
  };

  // ---------- Language picker ----------
  const langSelect = document.getElementById("langSelect");
  LANGS.forEach((l) => langSelect.appendChild(el("option", { value: l.code }, [l.label])));
  langSelect.value = settings.lang;
  langSelect.addEventListener("change", () => {
    settings.lang = langSelect.value;
    saveSettings();
    applyStaticText();
    render(currentView());
  });

  // ---------- Init ----------
  if (canSpeak) speechSynthesis.getVoices(); // warm up the voice list (Chrome loads it lazily)
  applyStaticText();
  render(currentView());

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
