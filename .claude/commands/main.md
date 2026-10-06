Merge the current branch's open PR to `main`, deploy to production, sync `dev`.

**Guards — run these first, in order. IF a guard fails, STOP and report; never push to `main` directly.**

1. **IF there is no open PR from `dev` to `main`** (`gh pr list --base main --head dev --json number,url,statusCheckRollup,mergeable`) → **THEN** stop and tell the user there is nothing to merge (run `/ship` first). Do not merge, do not push.
2. **IF the PR has failing checks** (check `statusCheckRollup`, and `gh pr checks` if needed), **or `~/.local/bin/pnpm build` fails locally** → **THEN** stop and report which check failed. Merging deploys to production, so a red PR never merges. **IF checks are still running** → **THEN** report that and ask whether to wait or merge anyway.

**Merge + sync:**

3. Run `gh pr merge --squash` to merge the open PR.
4. Run `git checkout main && git pull origin main`.
5. Run `git checkout dev && git reset --hard origin/main && git push --force origin dev` to reset `dev` to exactly match `main`.

**After merge:**

6. Confirm the **Deploy to GitHub Pages** workflow run for `main` started and succeeded (`gh run list --workflow deploy.yml --branch main --limit 1`, then `gh run watch <id>`). **IF no run appears within ~1 minute, or it fails** → **THEN** say so explicitly rather than assuming it deployed.
7. **Close the shipped tasks.** For every `Refs #<n>` in the merged PR body: `gh issue close <n>` and set its Status to **Done** on the project board (project #4, same `gh project item-edit` call as `/ship`).
8. Post the **Google Chat summary** below.
9. Report the merged PR URL, the production deployment URL/status, and `Chat post: sent / failed (<code>)`.

## Google Chat post (space "app.headerpath.com") — after the merge

Post the **final** summary of what actually landed on `main` (read it from the squashed commit, `git show --stat main`, not from the pre-merge PR description — the PR may have changed after `/ship`). Webhook URL: `GOOGLE_CHAT_WEBHOOK_URL` in `~/Documents/CC/headerpath-app/.env.local` (both repos read it from there; never print it).

- Line 1: `✅ Live — <repo> — <PR title>` (title from `gh pr view <n> --json title`).
- Line 2: `<date> <time> Athens` — `TZ=Europe/Athens date '+%Y-%m-%d %H:%M'`.
- Then 2–5 bullets "What it includes" (user-visible outcomes, ≤ 12 words each), then the PR URL, then `https://www.headerpath.com`.
- Write the `{"text": "..."}` body to a scratch file with a heredoc, then:
  `curl -s -o /dev/null -w "%{http_code}" -X POST -H 'Content-Type: application/json; charset=UTF-8' --data @<file> "$(grep '^GOOGLE_CHAT_WEBHOOK_URL=' ~/Documents/CC/headerpath-app/.env.local | cut -d= -f2- | tr -d '"')"`
- A non-200 never blocks anything — report `Chat post: failed (<code>)` and move on.

## 👉 NEXT STEP — always the very last thing you print

Print this block last, after everything else, every single time. Plain words, no jargon.
One command only. If the user must choose, list each case with its own command.

```
👉 NEXT STEP
Run:    /<command>
Where:  <folder, e.g. ~/Documents/CC/headerpath-app — "this folder" if unchanged>
Why:    <one short sentence>
```

Cases:
- Merged → `Run: nothing — cycle done.` The site is live.
- Guard failed → `Run: /ship` (no PR) or wait for the red check and re-run `/main`.
