Delete any `PLAN-*.md` files in the project root (use `rm -f PLAN-*.md` — silent if none exist).

Run `git add -A`, then inspect all changes on this branch (compare to main) to infer a concise summary of everything built. Commit with the message `feat: <inferred summary>`.

Before pushing, check if any of the shipped changes affect areas documented in CLAUDE.md (new routes, changed config, new components, new i18n strings, new content collections, etc.). If yes, update only the affected sections of CLAUDE.md to reflect the current reality — then `git add CLAUDE.md` and amend the commit with `git commit --amend --no-edit`.

Then run `git push origin HEAD`. Then run `gh pr create --fill --base main`. Report the PR URL when done.
