Delete any `PLAN-*.md` files in the project root (use `rm -f PLAN-*.md` — silent if none exist).

Update `priorities.md` first: **remove every item that this branch ships** (their record will be in the PR/git history), and add any new follow-ups surfaced by the work. `priorities.md` is forward-only — never a changelog, no strikethroughs.

Run `git add -A`, then inspect all changes on this branch (compare to main) to infer a concise summary of everything built. Commit with the message `feat: <inferred summary>`.

Before pushing, check if any of the shipped changes affect areas documented in CLAUDE.md (new routes, changed config/tokens, new components, new i18n strings, new content collections, connections, etc.). If yes, update only the affected sections of CLAUDE.md to reflect the current reality. CLAUDE.md is infrastructure/context only — no logs or dated markers. Then `git add CLAUDE.md priorities.md` and amend the commit with `git commit --amend --no-edit`.

Then run `git push origin HEAD`. Then run `gh pr create --fill --base main` (or find the existing PR with `gh pr view`).

## Google Chat post (space "app.headerpath.com")

After the PR exists, post a short summary to the space via its incoming webhook. The URL lives only in `~/Documents/CC/headerpath-app/.env.local` as `GOOGLE_CHAT_WEBHOOK_URL` (both repos read it from there; never copy it elsewhere, never print it).

- Build the message: `🚢 <repo> — <PR title>` on line 1, then 2–4 bullets of what shipped (user-visible outcomes, ≤ 12 words each), then the PR URL, then the preview base URL.
- Send it with one command; the message is JSON in `{"text": "..."}` (write the body to a scratch file with a heredoc first so quoting never breaks):
  `curl -s -o /dev/null -w "%{http_code}" -X POST -H 'Content-Type: application/json; charset=UTF-8' --data @<file> "$(grep '^GOOGLE_CHAT_WEBHOOK_URL=' ~/Documents/CC/headerpath-app/.env.local | cut -d= -f2- | tr -d '"')"`
- A non-200 response or a missing env var never blocks the ship — add one line `Chat post: failed (<code>)` to the report and move on.

## Report — exact URLs to check, nothing else

The report must be a 1-click checklist: every line a **full, clickable URL** on the `dev` preview. Never report a bare path like `/signup` or a slug.

**Base host:** `https://website-git-dev-headerventures.vercel.app` (Vercel preview of `dev`; deployment protection is ON, so the first open asks for a Vercel login — say so once).

**Derive the URLs from the diff** (`git diff main...HEAD --name-only`), one per changed surface:
- `src/pages/<path>.astro` → `https://website-git-dev-headerventures.vercel.app/<path>` (`index` → `/`).
- `src/pages/es/**`, `src/pages/fr/**` → the same with the locale prefix.
- Content collections (`src/content/<collection>/<slug>.md`, locale prefix stripped) → the rendered page URL per `notes/site-structure.md` (e.g. help articles → `/help/<slug>`, blog → `/blog/<slug>`); for a translated file give the locale URL.
- Shared components / layouts / `brand.ts` / `navigation.ts` / global CSS → one representative page per affected template (home, one help article, one blog post, `/signup`, `/pricing`) — not every page.
- Redirects in `astro.config.mjs` → the **source** URL, with the expected destination after the dash.
- i18n string changes → one URL per affected locale.

**Output format** (bullets only, no prose):
- PR: `<url>`
- Check:
  - `<full url>` — what to look for (≤ 8 words)
  - `<full url>` — …
- Chat post: `sent` / `failed (<code>)`
- Then run `/main`.

If Vercel has not finished building yet, say "preview building — URLs valid in ~1 min" above the list; do not wait.
