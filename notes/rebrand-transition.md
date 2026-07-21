# Rebrand Transition — Qurioos → HeaderPath

> Tracker for the website + local rebrand. Public brand is **HeaderPath**
> (`headerpath.com`); Qurioos stays only as **backend infra** (auth/app), hidden
> from users. App-side plan of record: `qurioos-app/docs/rebrand-and-self-serve-plan.md`
> (§4.5 = this site). Prune this file as items ship; delete when the transition closes.

## Decisions (locked)

- **D1 brand name:** HeaderPath
- **D2 domain:** headerpath.com
- **Content:** rebrand *everything* — no visible "Qurioos"/"qurioos" anywhere in copy or slugs.
- **Signup:** stub the form (no live API yet) — wait for the app-side provisioning API (§4.1).
- **Emails:** `@headerpath.com` — MX live on Google Workspace, old addresses now aliases (work).
- **Logo/images:** defer — keep existing Qurioos marks until new assets exist.
- **Local folder + launch agent + Vercel project:** rename now.

## Coexistence — what STAYS qurioos (per app plan §4.6)

- `auth.qurioos.com` — custom auth domain, untouched.
- `app.qurioos.com` — product app / login target, until the app itself migrates.
- `academy.qurioos.com` — existing main tenant.
- `qurioos.com` apex → redirect to headerpath.com **later** (app-plan decision D6).

## DONE

- [x] GitHub repo renamed `qurioos-website` → `headerpath-website`; local remote URL updated.
- [x] `brand.ts` — name, description, domain, websiteUrl, emails, pricing label, docs → `/help`, signupUrl → `/signup` stub. (appUrl stays app.qurioos.com — backend.)
- [x] Non-content components/pages — ProductFeatures, Testimonials, help/index (category slug + copy), content.config default author.
- [x] Signup form stubbed — dead `academy.qurioos.com` POST removed; done screen reads "opening soon"; TODO left to wire the new API.
- [x] Content sweep — all blog/docs/techniques copy rebranded (webflow image paths protected). Verified: no visible qurioos left in content.
- [x] Renamed 8 qurioos-named content files/dir + matching help category slug.
- [x] Repo `CLAUDE.md` + `priorities.md` + parent workspace `CLAUDE.md` updated for HeaderPath.
- [x] Local folder → `headerpath-website`; launch agent → `com.headerpath.website` (running, dev server 200 on :4321, logs `/tmp/headerpath-website-dev.log`).
- [x] Production build passes (96 pages) after all renames.

> Not yet committed — changes are on `dev`, uncommitted. Run `/ship` to open the PR.

## PENDING — blocked / needs input or other repos

- [ ] **Signup API** — new provisioning endpoint is app-side (`qurioos-app` §4.1/§4.2). Website signup stays a stub until it exists.
- [ ] **Logo + icon** — `public/images/qurioos-logo.png`, `qurioos-icon.png` still Qurioos marks. New HeaderPath assets needed.
- [ ] **Webflow blog asset filenames** — `...-qurioos-com-blog-images.png` (~25 files) keep the old name on disk; visible only in file paths, not copy. Bulk-rename with the logo work.
- [ ] **Vercel** — cannot rename project or attach `headerpath.com` via the connected MCP (no such tool, no CLI/token). Needs the Vercel dashboard, or give me a `VERCEL_TOKEN` to do it via REST API. Live cutover is deferred anyway (main is still scaffold; DNS on Loveable).
- [ ] **DNS** — headerpath.com → Vercel attach + records (part of the deferred live cutover).
- [ ] **LinkedIn** — `linkedin.com/company/qurioos` is an external account; rename in LinkedIn, then update `brand.ts`.
- [ ] **App-side rebrand** — in-app brand strings, auth/app domains, apex redirect: tracked in the app repo, not here.
