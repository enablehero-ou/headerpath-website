Delete any `PLAN-*.md` files in the project root (use `rm -f PLAN-*.md` — silent if none exist).

Update `priorities.md` first: **remove every item that this branch ships** (their record will be in the PR/git history), and add any new follow-ups surfaced by the work. `priorities.md` is forward-only — never a changelog, no strikethroughs.

Run `git add -A`, then inspect all changes on this branch (compare to main) to infer a concise summary of everything built. Commit with the message `feat: <inferred summary>`.

Before pushing, check if any of the shipped changes affect areas documented in CLAUDE.md (new routes, changed config/tokens, new components, new i18n strings, new content collections, connections, etc.). If yes, update only the affected sections of CLAUDE.md to reflect the current reality. CLAUDE.md is infrastructure/context only — no logs or dated markers. **`GEMINI.md` mirrors `CLAUDE.md` — apply the identical change to it (they differ only in the header).** Then `git add CLAUDE.md GEMINI.md priorities.md` and amend the commit with `git commit --amend --no-edit`.

Then run `git push origin HEAD`. Then run `gh pr create --fill --base main`. Report the PR URL when done.
