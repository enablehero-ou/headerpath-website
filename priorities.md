# Priorities — HeaderPath Website

> **Forward-looking only.** This file lists what's *next*, never what's done.
> When items ship to `main`, delete them from here — the record lives in the PR
> and Git history. This is not a changelog.

## Launch / production cutover
- [ ] Make `www.headerpath.com` the **primary** domain; redirect apex `headerpath.com` → `www` (Vercel + Cloudflare). Apex is already attached + serving from Vercel.
- [ ] Rename the Vercel project `website` → HeaderPath (updates preview URLs) — dashboard/token needed
- [ ] Remove Vercel deployment protection (preview currently returns 401)
- [ ] Cancel the Loveable subscription once fully cut over

## Pre-launch fixes
- [ ] Rebrand tail (do at the very end, once content is final): HeaderPath logo/icon, rename ~25 `*-qurioos-com-*` webflow asset files, LinkedIn handle. Tracker: `notes/rebrand-transition.md`.
- [ ] es/fr locales render empty (new copy is English-only) — translate or remove `es`/`fr` from `astro.config.mjs` i18n
- [ ] `/signup` — currently a **stub** (no live API). Wire the form to the new HeaderPath provisioning API when it ships (app-side).
- [ ] Verify inferred assets: integration icons (`Frame.svg`→Stripe, `Group 11.svg`→Notion), Tim Etherington headshot, and that the logo is the dark variant (legible on light backgrounds)
- [ ] Clean the empty `proposals` and `features` collections that throw build warnings

## Open decisions
- [ ] Accent color: keep green (`#10b981`) vs adopt getmodern orange (`#FF6600`) — one token in `global.css`
- [ ] Homepage length — 17 fully-detailed feature cards; trim or keep?
- [ ] Reconcile the 40 archived hand-written docs (`src/content/docs/_archive/handwritten-en/`) vs the 36 imported CSV help articles

## Infra / ops
- [ ] Repo-specific `/main` skill (squash-merge to `main` + hard-reset `dev` to `main`); `/ship` is already repo-specific and prunes `priorities.md`

## Nice-to-have
- [ ] Add a real product screenshot/visual to the hero when available
- [ ] Translate blog / techniques / help content for es/fr (only if i18n is kept)
