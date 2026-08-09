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
- **Emails:** `@headerpath.com` is a Google Workspace **user alias domain** for qurioos.com — every
  address mirrors automatically, including alternates. MX/SPF/DKIM/DMARC all published.
- **Logo:** full wordmark lockups + icon marks in `public/images/brand/` (light, dark, and a solid-background dark variant). Header and footer use the light wordmark.
- **Brand colors:** cyan `#5ce1e6` (accent) + ink `#1f2a39` (text). Tokens in `global.css`.
- **Local folder + launch agent + Vercel project:** rename now.

## Coexistence — what STAYS qurioos (per app plan §4.6)

- `auth.qurioos.com` — custom auth domain, untouched.
- `app.qurioos.com` — product app / login target. Note: currently does not resolve.
- `academy.qurioos.com` — existing main tenant.
- `qurioos.com` + `www` → **301 to `www.headerpath.com`** (D6, done via Cloudflare Redirect Rules).

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

## DONE — cutover

- [x] Site LIVE at `https://www.headerpath.com` (PR #1 merged, Vercel prod deployed). www = primary; apex `headerpath.com` → 308 → www. MX intact.
- [x] Loveable subscription cancelled.

## PENDING — blocked / needs input or other repos

- [ ] **Signup form finalization** — wire the stubbed form to the new HeaderPath provisioning API (app-side, `qurioos-app` §4.1/§4.2). Blocked until that API ships.
- [ ] **LinkedIn + all social profiles** — parked by decision. Rename `linkedin.com/company/qurioos`
      + any other handles later, then update `brand.ts`.
- [ ] **App-side rebrand** — lives in `qurioos-app`, not here. Plan: `qurioos-app/docs/rebrand-and-self-serve-plan.md`.
      Remaining user-visible strings there: two `www.qurioos.com` footer/sidebar
      UTM backlinks (`app/[locale]/public-footer.tsx`, `app/[locale]/[slug]/course-sidebar.tsx`),
      and the `{slug}.qurioos.com` domain hint
      (`app/admin/settings/domain-tab.tsx`). The rest — `lib/sender-email.ts`, `lib/storage.ts`,
      `app/admin/settings/actions.ts` — is infra plumbing that must NOT be renamed.
