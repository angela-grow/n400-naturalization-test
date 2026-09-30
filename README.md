# N-400 Civics Test Practice

A free, static study app for the 2025 version of the USCIS civics test used in the N-400 naturalization interview. Covers all 128 official questions and answers from USCIS Form M-1778.

**[Live app](https://angela-grow.github.io/n400-naturalization-test/)**

## Features

- **Practice Test**: realistic, self-graded rounds for the standard test (128 questions, 20 asked, 12 to pass) or the 65/20 test (20 starred questions, 10 asked, 6 to pass), with a shareable result when you pass
- **Readiness on the home page**: once you've practiced, see how many questions you know, your recent pass rate, and a one-tap review of your weakest questions
- **Audio**: hear each question read aloud (optionally automatic), and answer out loud with speech recognition where the browser supports it (Chrome, Edge, Safari)
- **Study**: every question, folded by topic, with search and a starred-only filter. Switch to **Flashcards** to drill all 128, the 20 starred questions, your weakest questions, or the ones you just missed
- **Progress**: accuracy by topic, recent tests, and most-missed questions (stored in `localStorage`)
- **Languages**: interface in English, Spanish, Chinese (Simplified), Vietnamese and Tagalog, with each question translated beneath the official English wording
- **Installable and offline**: a PWA with a service worker

## Project layout

| Path | What it is |
| --- | --- |
| `js/data.js` | The 128 questions and answers (official English) |
| `js/i18n.js` | Interface strings for each language |
| `js/questions-i18n.js` | Question translations, ordered by question id |
| `js/app.js` | The app |
| `sw.js` | Offline cache. Bump `CACHE` when you ship changes |
| `icons/` | App icons and the social preview image (`og-image.png`) |

## Translations

The question translations are not official USCIS translations. Corrections from native speakers are welcome. Answers stay in English because the standard interview is in English.

## Source data

Questions and answers are transcribed from the official USCIS **2025 version, 128 Civics Questions and Answers** (Form M-1778, 09/25). Some answers (e.g. the current President, Vice President, Speaker of the House, and Chief Justice) change over time. The app flags these and links to [uscis.gov/citizenship/testupdates](https://www.uscis.gov/citizenship/testupdates) for the current officeholder.

This is an independent study tool and is not affiliated with or endorsed by USCIS.
