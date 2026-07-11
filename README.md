# N-400 Civics Test Practice

A free, static study app for the 2025 version of the USCIS civics test used in the N-400 naturalization interview. Covers all 128 official questions and answers from USCIS Form M-1778.

**[Live app](https://angela-grow.github.io/n400-naturalization-test/)** *(enable GitHub Pages in repo settings to activate this link)*

## Features

- **Study** - browse all 128 questions grouped by category, with search and a "starred only" filter
- **Practice Test** - 20 random questions, self-graded, need 12 correct to pass (mirrors the real interview)
- **65/20 Test** - 10 random questions from the 20 starred questions for applicants 65+ with 20+ years as a lawful permanent resident, need 6 correct to pass
- **Flashcards** - endless shuffled drill mode
- **Stats** - tracks your accuracy per question in `localStorage` and highlights your most-missed questions

No backend, no build step, no dependencies - just static HTML/CSS/JS.

## Running locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Source data

Questions and answers are transcribed from the official USCIS **2025 version, 128 Civics Questions and Answers** (Form M-1778, 09/25). Some answers (e.g. the current President, Vice President, Speaker of the House, and Chief Justice) change over time - the app flags these and links to [uscis.gov/citizenship/testupdates](https://www.uscis.gov/citizenship/testupdates) for the current officeholder.

This is an independent study tool and is not affiliated with or endorsed by USCIS.
