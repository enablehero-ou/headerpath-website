# Priorities — HeaderPath Website

> **Forward-looking only.** This file lists what's *next*, never what's done.
> When items ship to `main`, delete them from here — the record lives in the PR
> and Git history. This is not a changelog.

> Vercel deployment protection stays ON — it is an account-wide setting, so previews
> will keep returning 401. Not a task; don't re-raise it.

## Email (headerpath.com)
- [ ] ~9 Aug 2026 +48h: confirm Google is actually signing outbound mail with DKIM
      (`google._domainkey.headerpath.com` is published and authentication is started).
- [ ] Then tighten DMARC from `p=none` → `p=quarantine`, and point `rua` at a mailbox
      that is actually read (currently Cloudflare's aggregator only).

## Pre-launch fixes
- [ ] LinkedIn handle — parked by decision. Rename the company page, then update `brand.ts`.
- [ ] es/fr locales render empty (new copy is English-only) — translate or remove `es`/`fr` from `astro.config.mjs` i18n. Deferred by decision, still live in the nav.
- [ ] `/signup` — currently a **stub** (no live API). Wire the 4-step form to the new
      HeaderPath provisioning API when it ships (app-side). The final screen already
      promises a verification email, so the API must actually send one before launch.
- [ ] Cookie banner writes the same `cookie_consent` cookie the app uses, but the marketing
      site loads no analytics yet, so nothing reads it. Gate any future analytics tag on it,
      and add a "Privacy settings" footer link (`reopenCookieBanner()` is already exported).
- [ ] Verify inferred assets: integration icons (`Frame.svg`→Stripe, `Group 11.svg`→Notion), Tim Etherington headshot
- [ ] `app.qurioos.com` does not resolve. `brand.appUrl` points at it but nothing on the
      site references `appUrl`, so it is not user-facing — decide whether the app gets a
      host or the field gets dropped.
- [ ] `qurioos-app` leftovers (that repo, not this one): 2 `www.qurioos.com` UTM backlinks
      and the `{slug}.qurioos.com` domain hint. The `team@` address is already migrated.
- [ ] 6 blog case-study posts still link "Book your demo" → `/schedule` (now a 301 to
      `/pricing`). Decide the new CTA target (`/signup` or `mailto:team@headerpath.com`)
      and reword.
- [ ] Per-page OG images — every page currently shares the one default. Consider generating per-post images for blog/techniques.
- [ ] No dark surface carries a logo yet (the prefooter CTA is ink but has no mark), so
      `wordmarkDark` / `iconDark` are still unused. Wire them in if a dark section or dark mode lands.

## Open decisions
- [ ] Intro promo ($99/mo for the first 3 months) has no end date. Decide when it retires and
      flip `brand.pricing.promo.active` to `false` then — nothing expires it automatically.
      Also confirm billing can actually honour the 3-month rate before launch.
- [ ] Blog copy now says AI translation is **included in the plan** (it previously advertised
      pay-as-you-go "$5 per language", which contradicted the flat unlimited plan). Confirm
      that is correct — if translation is actually metered on top, the copy needs rewording.
- [ ] Homepage length — 17 fully-detailed feature cards; trim or keep?

## Infra / ops
- [ ] Repo-specific `/main` skill (squash-merge to `main` + hard-reset `dev` to `main`); `/ship` is already repo-specific and prunes `priorities.md`

## Nice-to-have
- [ ] Add a real product screenshot/visual to the hero when available
- [ ] Translate blog / techniques / help content for es/fr (only if i18n is kept)
