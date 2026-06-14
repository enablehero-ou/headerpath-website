# Priorities — Qurioos Website

> **Forward-looking only.** This file lists what's *next*, never what's done.
> When items ship to `main`, delete them from here — the record lives in the PR
> and Git history. This is not a changelog.

## Launch / production cutover
- [ ] Merge `dev` → `main` (`/ship` → `/main`) once the preview is approved
- [ ] Attach `qurioos.com` (+ `www`) to the Vercel `website` project
- [ ] Repoint DNS from Loveable (`185.158.133.1`) to Vercel
- [ ] Remove Vercel deployment protection (preview currently returns 401)
- [ ] Cancel the Loveable subscription once the domain serves from Vercel

## Pre-launch fixes
- [ ] es/fr locales render empty (new copy is English-only) — translate or remove `es`/`fr` from `astro.config.mjs` i18n
- [ ] Orphaned `/signup` page — delete or repurpose (all CTAs point to `app.qurioos.com/signup`)
- [ ] Verify inferred assets: integration icons (`Frame.svg`→Stripe, `Group 11.svg`→Notion), Tim Etherington headshot, and that the logo is the dark variant (legible on light backgrounds)
- [ ] Clean the empty `proposals` and `features` collections that throw build warnings

## Open decisions
- [ ] Accent color: keep green (`#10b981`) vs adopt getmodern orange (`#FF6600`) — one token in `global.css`
- [ ] Homepage length — 17 fully-detailed feature cards; trim or keep?
- [ ] Reconcile the 40 archived hand-written docs (`src/content/docs/_archive/handwritten-en/`) vs the 36 imported CSV help articles

## Infra / ops
- [ ] Repo-specific `/ship` and `/main` skills reflecting this repo's flow (mentioned, not yet created)
- [ ] Delete obsolete `github-pages-migration.md` (GitHub Pages approach rejected)

## Nice-to-have
- [ ] Add a real product screenshot/visual to the hero when available
- [ ] Translate blog / techniques / help content for es/fr (only if i18n is kept)
