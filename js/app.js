(function () {
  "use strict";

  const APP = document.getElementById("app");
  const TABS = document.getElementById("tabs");
  const STORAGE_KEY = "n400.progress.v1";
  const HISTORY_KEY = "n400.history.v1";

  const STARRED = QUESTIONS.filter((q) => q.starred);

  // ---------- Persistence ----------
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }
  function recordAnswer(id, correct) {
    const p = loadProgress();
    const entry = p[id] || { correct: 0, incorrect: 0 };
    if (correct) entry.correct++; else entry.incorrect++;
    entry.lastSeen = Date.now();
    p[id] = entry;
    saveProgress(p);
  }
  function loadHistory() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function pushHistory(record) {
    const h = loadHistory();
    h.unshift(record);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(h.slice(0, 50)));
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
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v);
      }
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  // ---------- Router ----------
  const VIEWS = {};
  function render(view) {
    TABS.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.view === view);
    });
    APP.innerHTML = "";
    APP.appendChild(VIEWS[view]());
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    location.hash = view;
  }
  TABS.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (btn) render(btn.dataset.view);
  });

  // ---------- Home ----------
  VIEWS.home = function () {
    const wrap = el("div", {});
    wrap.appendChild(
      el("div", { class: "card intro-card" }, [
        el("h2", {}, ["Get ready for the 2025 civics test"]),
        el("p", {}, [
          "This tool covers all 128 official USCIS civics questions for the N-400 naturalization interview. The officer asks up to 20 of these 128 questions, and you need ",
          el("strong", {}, ["12 correct"]),
          " to pass. Applicants 65+ with 20+ years as a lawful permanent resident can study just the 20 starred questions instead.",
        ]),
      ])
    );

    const modes = [
      { view: "study", badge: "📖", title: "Study all 128", desc: "Browse every question and answer by category, searchable." },
      { view: "test", badge: "📝", title: "Practice Test (20Q)", desc: "Simulates the real interview: 20 random questions, need 12 correct to pass." },
      { view: "senior", badge: "⭐", title: "65/20 Practice (10Q)", desc: "10 random questions from the 20 starred questions, need 6 correct to pass." },
      { view: "flashcards", badge: "🔁", title: "Flashcard Drill", desc: "Endless shuffled flashcards to drill weak spots, tracked over time." },
      { view: "stats", badge: "📊", title: "Your Progress", desc: "See accuracy by category and your most-missed questions." },
    ];
    const grid = el("div", { class: "grid" });
    modes.forEach((m) => {
      grid.appendChild(
        el("button", { class: "mode-card", onclick: () => render(m.view) }, [
          el("div", { class: "badge" }, [m.badge]),
          el("h3", {}, [m.title]),
          el("p", {}, [m.desc]),
        ])
      );
    });
    wrap.appendChild(grid);
    return wrap;
  };

  // ---------- Study ----------
  VIEWS.study = function () {
    const wrap = el("div", {});
    const categories = [...new Set(QUESTIONS.map((q) => q.category))];

    const search = el("input", { type: "search", placeholder: "Search questions or answers…" });
    const catSelect = el("select", {}, [
      el("option", { value: "" }, ["All categories"]),
      ...categories.map((c) => el("option", { value: c }, [titleCase(c)])),
    ]);
    const starredOnly = el("label", { style: "display:flex;align-items:center;gap:6px;font-size:0.9rem;color:var(--text-muted);white-space:nowrap;" }, [
      el("input", { type: "checkbox", id: "starredOnlyChk" }),
      "★ starred only",
    ]);

    wrap.appendChild(el("div", { class: "search-row" }, [search, catSelect, starredOnly]));

    const results = el("div", {});
    wrap.appendChild(results);

    function titleCase(s) {
      return s.replace(/\w\S*/g, (t) => t.charAt(0) + t.slice(1).toLowerCase());
    }

    function draw() {
      const q = search.value.trim().toLowerCase();
      const cat = catSelect.value;
      const starOnly = starredOnly.querySelector("input").checked;
      results.innerHTML = "";

      const filtered = QUESTIONS.filter((item) => {
        if (cat && item.category !== cat) return false;
        if (starOnly && !item.starred) return false;
        if (!q) return true;
        return (
          item.question.toLowerCase().includes(q) ||
          item.answers.some((a) => a.toLowerCase().includes(q))
        );
      });

      if (!filtered.length) {
        results.appendChild(el("div", { class: "empty-state" }, ["No questions match your search."]));
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
        catBlock.appendChild(el("h2", {}, [titleCase(category)]));
        Object.entries(subs).forEach(([sub, items]) => {
          const subBlock = el("div", { class: "subcategory-block" });
          subBlock.appendChild(el("h3", {}, [sub]));
          items.forEach((item) => subBlock.appendChild(qaCard(item)));
          catBlock.appendChild(subBlock);
        });
        results.appendChild(catBlock);
      });
    }

    function qaCard(item) {
      const card = el("div", { class: "qa-card" });
      const head = el("div", { class: "qa-question" }, [
        el("span", {}, [`${item.id}. ${item.question}`, item.starred ? el("span", { class: "star" }, ["★"]) : null]),
      ]);
      const body = el("div", { class: "qa-answers" });
      const list = el("ul", {}, item.answers.map((a) => el("li", {}, [a])));
      body.appendChild(list);
      if (item.note) body.appendChild(el("div", { class: "qa-note" }, [item.note]));
      if (item.dynamic) body.appendChild(el("div", { class: "dynamic-note" }, ["⚠️ Answer may have changed — verify at uscis.gov/citizenship/testupdates"]));
      card.appendChild(head);
      card.appendChild(body);
      head.addEventListener("click", () => card.classList.toggle("open"));
      return card;
    }

    search.addEventListener("input", draw);
    catSelect.addEventListener("change", draw);
    starredOnly.querySelector("input").addEventListener("change", draw);
    draw();
    return wrap;
  };

  // ---------- Quiz runner (shared by Practice Test & 65/20) ----------
  function quizRunner(opts) {
    // opts: { pool, count, passCount, title, key }
    const wrap = el("div", {});
    const pool = shuffle(opts.pool).slice(0, opts.count);
    let idx = 0;
    let correctCount = 0;
    const missed = [];
    let revealed = false;

    function intro() {
      wrap.innerHTML = "";
      wrap.appendChild(
        el("div", { class: "card intro-card" }, [
          el("h2", {}, [opts.title]),
          el("ul", {}, [
            el("li", {}, [`${opts.count} random questions from a pool of ${opts.pool.length}.`]),
            el("li", {}, [`You need ${opts.passCount} correct to pass, just like the real interview.`]),
            el("li", {}, ["Read the question, say your answer out loud, then reveal to self-grade."]),
          ]),
          el("div", { class: "btn-row" }, [
            el("button", { class: "btn", onclick: startQuiz }, ["Start Practice Test"]),
          ]),
        ])
      );
    }

    function startQuiz() {
      idx = 0;
      correctCount = 0;
      missed.length = 0;
      drawQuestion();
    }

    function drawQuestion() {
      revealed = false;
      wrap.innerHTML = "";
      const item = pool[idx];

      const bar = el("div", { class: "progress-bar" }, [el("div", { style: `width:${(idx / pool.length) * 100}%` })]);
      const meta = el("div", { class: "quiz-meta" }, [
        el("span", {}, [`Question ${idx + 1} of ${pool.length}`]),
        el("span", {}, [`Correct so far: ${correctCount}`]),
      ]);

      const card = el("div", { class: "card quiz-card" });
      card.appendChild(el("div", { class: "cat-tag" }, [item.category.replace(/_/g, " ")]));
      card.appendChild(el("div", { class: "question-text" }, [item.question]));

      const revealBtn = el("button", { class: "btn secondary", onclick: reveal }, ["Show Answer"]);
      const answerBox = el("div", { class: "answer-reveal", style: "display:none" });
      answerBox.appendChild(el("strong", {}, ["Acceptable answers:"]));
      answerBox.appendChild(el("ul", {}, item.answers.map((a) => el("li", {}, [a]))));
      if (item.dynamic) answerBox.appendChild(el("div", { class: "dynamic-note" }, ["⚠️ Verify the current officeholder at uscis.gov/citizenship/testupdates"]));

      const gradeRow = el("div", { class: "btn-row", style: "justify-content:center;display:none" }, [
        el("button", { class: "btn success", onclick: () => grade(true) }, ["I got it right"]),
        el("button", { class: "btn danger", onclick: () => grade(false) }, ["I missed it"]),
      ]);

      function reveal() {
        revealed = true;
        answerBox.style.display = "block";
        gradeRow.style.display = "flex";
        revealBtn.style.display = "none";
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
    }

    function finish() {
      const passed = correctCount >= opts.passCount;
      pushHistory({
        mode: opts.key,
        date: Date.now(),
        score: correctCount,
        total: pool.length,
        passed,
      });
      wrap.innerHTML = "";
      const screen = el("div", { class: "card score-screen" });
      screen.appendChild(el("div", { class: `score-pill ${passed ? "pass" : "fail"}` }, [passed ? "PASS" : "NOT YET"]));
      screen.appendChild(el("div", { class: `big-score ${passed ? "pass" : "fail"}` }, [`${correctCount} / ${pool.length}`]));
      screen.appendChild(el("p", {}, [`You needed ${opts.passCount} correct to pass this practice round.`]));
      screen.appendChild(
        el("div", { class: "btn-row", style: "justify-content:center" }, [
          el("button", { class: "btn", onclick: startQuiz }, ["Try Again"]),
          el("button", { class: "btn secondary", onclick: () => render("home") }, ["Back Home"]),
        ])
      );
      if (missed.length) {
        const missedList = el("div", { class: "missed-list" }, [
          el("h4", {}, ["Review these:"]),
          el("ul", {}, missed.map((m) => el("li", {}, [`${m.id}. ${m.question}`]))),
        ]);
        screen.appendChild(missedList);
      }
      wrap.appendChild(screen);
    }

    intro();
    return wrap;
  }

  VIEWS.test = function () {
    return quizRunner({
      pool: QUESTIONS,
      count: 20,
      passCount: 12,
      title: "Practice Test — 20 Questions",
      key: "test20",
    });
  };

  VIEWS.senior = function () {
    return quizRunner({
      pool: STARRED,
      count: 10,
      passCount: 6,
      title: "65/20 Practice — 10 Starred Questions",
      key: "senior10",
    });
  };

  // ---------- Flashcards ----------
  VIEWS.flashcards = function () {
    const wrap = el("div", {});
    let starOnly = false;
    let deck = shuffle(starOnly ? STARRED : QUESTIONS);
    let pos = 0;
    let sessionCorrect = 0;
    let sessionTotal = 0;

    function toggleFilter() {
      starOnly = !starOnly;
      deck = shuffle(starOnly ? STARRED : QUESTIONS);
      pos = 0;
      draw();
    }

    function draw() {
      wrap.innerHTML = "";
      const controls = el("div", { class: "search-row" }, [
        el("button", { class: "btn secondary", onclick: toggleFilter }, [starOnly ? "★ Starred only (tap to show all)" : "Showing all 128 (tap for ★ starred only)"]),
        el("span", { style: "margin-left:auto;color:var(--text-muted);font-size:0.9rem;align-self:center;" }, [`Session: ${sessionCorrect}/${sessionTotal}`]),
      ]);
      wrap.appendChild(controls);

      if (!deck.length) {
        wrap.appendChild(el("div", { class: "empty-state" }, ["No cards available."]));
        return;
      }
      const item = deck[pos % deck.length];

      const card = el("div", { class: "card quiz-card" });
      card.appendChild(el("div", { class: "cat-tag" }, [item.category + (item.starred ? " ★" : "")]));
      card.appendChild(el("div", { class: "question-text" }, [item.question]));

      const revealBtn = el("button", { class: "btn secondary", onclick: reveal }, ["Show Answer"]);
      const answerBox = el("div", { class: "answer-reveal", style: "display:none" });
      answerBox.appendChild(el("ul", {}, item.answers.map((a) => el("li", {}, [a]))));
      const gradeRow = el("div", { class: "btn-row", style: "justify-content:center;display:none" }, [
        el("button", { class: "btn success", onclick: () => grade(true) }, ["I knew it"]),
        el("button", { class: "btn danger", onclick: () => grade(false) }, ["I didn't"]),
      ]);

      function reveal() {
        answerBox.style.display = "block";
        gradeRow.style.display = "flex";
        revealBtn.style.display = "none";
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
      card.appendChild(el("div", { class: "btn-row", style: "justify-content:center" }, [
        el("button", { class: "btn secondary", onclick: () => { pos++; draw(); } }, ["Skip →"]),
      ]));
      wrap.appendChild(card);
    }

    draw();
    return wrap;
  };

  // ---------- Stats ----------
  VIEWS.stats = function () {
    const wrap = el("div", {});
    const progress = loadProgress();
    const entries = Object.entries(progress);

    const totalAttempts = entries.reduce((s, [, v]) => s + v.correct + v.incorrect, 0);
    const totalCorrect = entries.reduce((s, [, v]) => s + v.correct, 0);
    const accuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    const questionsSeen = entries.length;

    const tiles = el("div", { class: "stats-grid" }, [
      statTile(totalAttempts, "Answers logged"),
      statTile(`${accuracy}%`, "Overall accuracy"),
      statTile(`${questionsSeen}/128`, "Questions seen"),
      statTile(loadHistory().filter((h) => h.passed).length, "Practice tests passed"),
    ]);
    wrap.appendChild(tiles);

    if (!entries.length) {
      wrap.appendChild(el("div", { class: "empty-state" }, ["No activity yet — take a practice test or run some flashcards to see stats here."]));
      return wrap;
    }

    const missed = entries
      .map(([id, v]) => ({ id: Number(id), ...v, total: v.correct + v.incorrect }))
      .filter((v) => v.incorrect > 0)
      .sort((a, b) => b.incorrect / b.total - a.incorrect / a.total || b.incorrect - a.incorrect)
      .slice(0, 15);

    if (missed.length) {
      const box = el("div", { class: "card" });
      box.appendChild(el("h3", {}, ["Most-missed questions"]));
      const list = el("ul", {});
      missed.forEach((m) => {
        const q = QUESTIONS.find((qq) => qq.id === m.id);
        if (!q) return;
        list.appendChild(el("li", {}, [`${q.id}. ${q.question} `, el("span", { style: "color:var(--text-muted);font-size:0.85rem" }, [`(${m.correct}✓ / ${m.incorrect}✗)`])]));
      });
      box.appendChild(list);
      wrap.appendChild(box);
    }

    const resetBtn = el("button", { class: "btn danger", style: "margin-top:20px", onclick: () => {
      if (confirm("Reset all saved progress and test history? This can't be undone.")) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(HISTORY_KEY);
        render("stats");
      }
    } }, ["Reset all progress"]);
    wrap.appendChild(resetBtn);

    return wrap;

    function statTile(num, label) {
      return el("div", { class: "stat-tile" }, [
        el("div", { class: "num" }, [String(num)]),
        el("div", { class: "label" }, [label]),
      ]);
    }
  };

  // ---------- Init ----------
  const initial = (location.hash || "").replace("#", "");
  render(VIEWS[initial] ? initial : "home");
})();
