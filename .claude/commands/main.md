Merge the current branch's open PR to `main`, deploy to production, sync `dev`.

**Guards — run these first, in order. IF a guard fails, STOP and report; never push to `main` directly.**

1. **IF there is no open PR from `dev` to `main`** (`gh pr list --base main --head dev --json number,url,statusCheckRollup,mergeable`) → **THEN** stop and tell the user there is nothing to merge (run `/ship` first). Do not merge, do not push.
2. **IF the PR has failing checks, or the Vercel preview deployment has not built successfully** (check `statusCheckRollup`, and `gh pr checks` if needed) → **THEN** stop and report which check failed. Merging deploys to production, so a red PR never merges. **IF checks are still running** → **THEN** report that and ask whether to wait or merge anyway.

**Merge + sync:**

3. Run `gh pr merge --squash` to merge the open PR.
4. Run `git checkout main && git pull origin main`.
5. Run `git checkout dev && git reset --hard origin/main && git push --force origin dev` to reset `dev` to exactly match `main`.

**After merge:**

6. Confirm the Vercel **production** deployment for `main` started (`vercel` MCP `list_deployments`, or `gh` / the Vercel dashboard). **IF no production deployment appears within ~1 minute** → **THEN** say so explicitly rather than assuming it deployed.
7. Report the merged PR URL **and** the production deployment URL/status.
