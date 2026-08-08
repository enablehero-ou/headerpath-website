# Priorities — HeaderPath Website

> **Forward-looking only.** This file lists what's *next*, never what's done.
> When items ship to `main`, delete them from here — the record lives in the PR
> and Git history. This is not a changelog.

## Launch / production cutover
- [ ] Rename the Vercel project `website` → HeaderPath (updates preview URLs) — dashboard/token needed
- [ ] Remove Vercel deployment protection (preview currently returns 401)
- [ ] `qurioos.com` → `www.headerpath.com` permanent 301 — infra/app-side, not this repo. Keep `auth.qurioos.com` untouched.

## Pre-launch fixes
- [ ] Rebrand tail (do at the very end, once content is final): rename ~25 `*-qurioos-com-*` webflow asset files, LinkedIn handle. Tracker: `notes/rebrand-transition.md`.
- [ ] es/fr locales render empty (new copy is English-only) — translate or remove `es`/`fr` from `astro.config.mjs` i18n
- [ ] `/signup` — currently a **stub** (no live API). Wire the form to the new HeaderPath provisioning API when it ships (app-side).
- [ ] Verify inferred assets: integration icons (`Frame.svg`→Stripe, `Group 11.svg`→Notion), Tim Etherington headshot
- [ ] Clean the empty `proposals` and `features` collections that throw build warnings
- [ ] Per-page OG images — every page currently shares the one default. Consider generating per-post images for blog/techniques.
- [ ] Nothing on the site uses a dark surface yet, so `wordmarkDark` / `iconDark` are unused. Wire them in if a dark section or dark mode lands.

## Open decisions
- [ ] Homepage length — 17 fully-detailed feature cards; trim or keep?
- [ ] Reconcile the 40 archived hand-written docs (`src/content/docs/_archive/handwritten-en/`) vs the 36 imported CSV help articles

## Infra / ops
- [ ] Repo-specific `/main` skill (squash-merge to `main` + hard-reset `dev` to `main`); `/ship` is already repo-specific and prunes `priorities.md`

## Nice-to-have
- [ ] Add a real product screenshot/visual to the hero when available
- [ ] Translate blog / techniques / help content for es/fr (only if i18n is kept)
