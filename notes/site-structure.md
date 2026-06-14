# Qurioos.com — URL Map & Page Structure

Product-only positioning (Qurioos = the AI-native academy SaaS). This is the
target structure after the rebuild.

**Status legend:** ✅ exists & on-brand · ⚠️ exists, needs rework · ❌ missing/to build · ↪ redirect · 🟢 done this pass

---

## A. Standalone pages

### `/` — Homepage (= the product page)
- ✅ Page + section components exist (`Hero`, `Pillars`, `HowItWorks`, `Testimonials`, `FAQ`, `CTA`)
- ⚠️ Copy is service-positioned ("designs, builds, runs programs") — must become product/self-serve
- ❌ The 17 product-feature blocks from the old Webflow Platform page not yet ported in
- ❌ `brand.ts` description still service-worded (feeds meta + hero)
- ❌ Product stats (85+ customers, since 2021) not present

```
┌───────────────────────────────────────────────┐
│  HEADER  [logo]  Platform Pricing Blog Help  [Book a call] │
├───────────────────────────────────────────────┤
│  HERO                                          │
│   H1: The AI-native academy platform           │
│   Sub: Launch a branded academy. AI builds the │
│        courses. You publish.                   │
│   [Get started]  [Book a demo]                 │
│   · 85+ customers · Since 2021 · US/CA/EU ·    │
├───────────────────────────────────────────────┤
│  PILLARS  (3–4 value props, product voice)     │
│   [Build with AI] [Brand it] [Measure outcomes]│
├───────────────────────────────────────────────┤
│  PRODUCT FEATURES  (grid, ported from Webflow) │
│   ▢ Academy Building Agent  ▢ Course Agent      │
│   ▢ Videos   ▢ Quizzes   ▢ Certifications       │
│   ▢ Auto-Translate ▢ Localization ▢ Privacy     │
│   ▢ Manage users ▢ Track progress ▢ Outcomes    │
│   ▢ Repetitions ▢ Rewards ▢ Feedback            │
│   ▢ Security ▢ Custom domain ▢ Integrations     │
├───────────────────────────────────────────────┤
│  HOW IT WORKS  (Goal → Upload → Go live → Track)│
├───────────────────────────────────────────────┤
│  TESTIMONIALS (6 logos/quotes)                 │
├───────────────────────────────────────────────┤
│  FAQ (accordion)                               │
├───────────────────────────────────────────────┤
│  CTA  "Start your academy"  [Get started]      │
├───────────────────────────────────────────────┤
│  FOOTER (Product / Company / Resources / Legal)│
└───────────────────────────────────────────────┘
```

### `/pricing`
- ✅ Page exists
- ⚠️ Verify plan copy matches product-only positioning (Starter/Custom in `brand.ts`)

```
┌───────────────────────────────────────────────┐
│  H1: Pricing                                   │
│  [ Starter $99/mo ]   [ Custom — Get pricing ] │
│   · feature list      · feature list           │
│  FAQ (pricing)                                 │
│  CTA                                           │
└───────────────────────────────────────────────┘
```

### `/integrations`
- ⚠️ Listing page exists but pulls a near-empty collection (1 entry)
- ❌ Rebuild as a single generic "connects to any tool" statement page
- ❌ Remove per-integration detail route `/integrations/[slug]` (not building those)

```
┌───────────────────────────────────────────────┐
│  H1: Connects to the tools you already use     │
│  Sub: CRM, SSO, analytics, comms — your stack, │
│       one login for learners.                  │
│  [ logo wall: HubSpot Salesforce Slack Teams   │
│    Zapier Google Analytics … ]                 │
│  "Need an integration? Talk to us." [Book call]│
└───────────────────────────────────────────────┘
```

### `/blog` — listing
- ✅ Exists, renders the 29 imported posts 🟢
- ✅ Cards show cover image (now local), category badge, date

```
┌───────────────────────────────────────────────┐
│  H1: Blog        Sub: …                         │
│  ┌─card─┐ ┌─card─┐ ┌─card─┐                      │
│  │[img] │ │[img] │ │[img] │   (3-col grid)       │
│  │badge │ │badge │ │badge │                      │
│  │title │ │title │ │title │                      │
│  │date  │ │date  │ │date  │                      │
│  └──────┘ └──────┘ └──────┘                      │
└───────────────────────────────────────────────┘
```

### `/techniques` — listing
- ✅ Exists, renders 17 imported techniques 🟢

```
┌───────────────────────────────────────────────┐
│  H1: Techniques                                │
│  ┌─card─┐ ┌─card─┐ ┌─card─┐  (grid)             │
│  │title │ │title │ │title │                     │
│  │desc  │ │desc  │ │desc  │                     │
│  └──────┘ └──────┘ └──────┘                      │
└───────────────────────────────────────────────┘
```

### `/help` — Help center listing 🟢 (built this pass)
- ✅ NEW. Renders 36 articles grouped into 11 categories
- ✅ Footer "Help" now points here (was external `help.qurioos.com`)

```
┌───────────────────────────────────────────────┐
│  H1: Help center                               │
│  ACCOUNTS                                       │
│   ┌card┐ ┌card┐ ┌card┐                          │
│  CREATE CONTENT                                 │
│   ┌card┐ ┌card┐ ┌card┐                          │
│  … (per category) …                             │
└───────────────────────────────────────────────┘
```

### `/alternatives` — listing
- ✅ Exists; only 1 entry (LearnWorlds) — thin
- ⚠️ Decide: keep as SEO comparison play or hide until more entries

### `/schedule`, `/signup`, `/careers`
- ✅ All exist
- `/schedule` = book-a-call (primary CTA) · `/signup` = product signup · `/careers` = company (footer)

---

## B. Template pages (one structure → many URLs)

### Blog post — `/blog/<slug>`
- ✅ Layout `BlogLayout` exists; title, cover image, author, date, reading time, body
- ✅ Images now local 🟢

```
┌───────────────────────────────────────────────┐
│  ‹ Blog                                         │
│  [category badge]                               │
│  H1: Post title                                 │
│  by Author · date · N min read                  │
│  ┌───────── cover image ─────────┐              │
│  └───────────────────────────────┘              │
│  Body (prose: h2/h3, lists, images, quotes)     │
│  CTA                                            │
└───────────────────────────────────────────────┘
```
URLs (29):
- /blog/2026-elearning-translation-localization-guide
- /blog/4-ways-to-translate-learning-content-videos
- /blog/8-advanced-sales-training-techniques-that-work
- /blog/ai-user-onboarding-strategies-to-personalize-and-automate
- /blog/breaking-onboarding-into-micro-journeys
- /blog/case-study-aesculap-academy-educates-200-000-global-hcps
- /blog/case-study-boston-scientific-trains-59-000-global-professionals
- /blog/case-study-how-medtronic-trains-450-000-hcps-globally
- /blog/case-study-how-patient-requests-drive-prescribing-behavior
- /blog/case-study-how-pharma-marketing-increases-physician-prescribing
- /blog/case-study-roche-trains-7-500-healthcare-providers
- /blog/complete-elearning-localization-guide-checklist
- /blog/data-driven-sales-coaching-strategies-that-move-the-middle
- /blog/data-driven-sales-strategies-that-close-deals-faster
- /blog/effective-partner-onboarding-checklist-and-process-guide
- /blog/elearning-translation-is-getting-replaced-by-ai-localization
- /blog/how-smart-dealership-leaders-diagnose-and-solve-retail-underperformance
- /blog/how-to-map-your-onboarding-personas
- /blog/introducing-qurioos-partners
- /blog/invite-only-learning-crm-sync
- /blog/jul-2025
- /blog/sales-training-and-enablement-2025-global-report
- /blog/scalable-saas-onboarding-experience
- /blog/study-why-pharma-and-supplement-companies-are-losing-millions-at-the-pharmacy-counter
- /blog/teaching-humans-ld-ai-case-study
- /blog/teaching-law-through-experience-charlyn-ho-rikka-academy-harvard-business-review-advisory-council
- /blog/why-ai-localization-unlocks-global-education-at-scale-1hxjl
- /blog/why-linear-onboarding-flows-are-failing-your-saas-users
- /blog/why-pharmacists-don-t-recommend-your-supplement-and-how-evidence-alone-won-t-fix-it

### Help article — `/help/<slug>`
- ✅ Layout `ContentLayout` (prose + "‹ Help center" back-link) 🟢

```
┌───────────────────────────────────────────────┐
│  ‹ Help center                                  │
│  H1: Article title                              │
│  Body (prose: h3 sections, steps, callouts)     │
└───────────────────────────────────────────────┘
```
URLs (36):
- /help/change-your-password
- /help/delete-your-account
- /help/keep-your-qurioos-account-secure
- /help/roles-and-permissions
- /help/signup-for-a-qurioos-account
- /help/user-profile
- /help/adding-certifications-to-linkedin
- /help/certifications-overview
- /help/retake-a-certification-level
- /help/content-overview
- /help/content-types
- /help/controlling-youtube-recommended-videos
- /help/how-users-navigate-content
- /help/video
- /help/colors
- /help/fonts
- /help/logo
- /help/setting-up-multiple-themes
- /help/how-to-set-a-profile-picture-for-qurioos-emails
- /help/connect-your-domain
- /help/create-a-sitemap-in-qurioos
- /help/robots-txt-rules
- /help/use-a-qurioos-subdomain
- /help/intergrations-api-overview
- /help/ai-powered-translation-methodology
- /help/localization
- /help/right-to-left
- /help/defining-completion-in-qurioos
- /help/progress-tracking-overview
- /help/how-to-use-exported-csv-reports-with-ai
- /help/reports-overview
- /help/backups
- /help/recaptcha-security-on-signup
- /help/report-abuse
- /help/security-overview
- /help/suspicious-activity

### Technique — `/techniques/<slug>`
- ✅ Layout `ContentLayout` ("‹ All techniques" back-link) 🟢

```
┌───────────────────────────────────────────────┐
│  ‹ All techniques                               │
│  H1: Technique name                             │
│  Body (What it is / Why it works / Steps)       │
└───────────────────────────────────────────────┘
```
URLs (17):
- /techniques/analogies
- /techniques/animations
- /techniques/branching-paths
- /techniques/case-studies
- /techniques/checklists
- /techniques/click-demos
- /techniques/feedback-loops
- /techniques/guided-discovery
- /techniques/job-aids
- /techniques/peer-feedback
- /techniques/real-projects
- /techniques/role-play-111bc
- /techniques/scenarios
- /techniques/simulations
- /techniques/socratic-prompts
- /techniques/storytelling
- /techniques/video-tutorials

### Alternative — `/alternatives/<slug>`
- ✅ Layout exists; pros/cons/verdict
URLs (1):
- /alternatives/learnworlds

### Legal — `/legal/<slug>`
- ✅ Brought as-is
URLs (3):
- /legal/privacy
- /legal/services-agreement
- /legal/end-user-policy

---

## C. Redirects (301 permanent → `/`)
- ↪ `/about`     → `/`   (service/company page; folds into product home)
- ↪ `/platform`  → `/`   (product content moves into the homepage)
- ↪ `/partner`   → `/`
- ↪ `/proposals/*` → `/` (private proposals; were noindex)
- 🔧 Also remove the now-dead nav links `/ai-course-generator` and `/ai-curriculum`

---

## D. System / generated
- ✅ `/robots.txt`
- ✅ `/sitemap.xml` (must exclude proposals; verify after redirects)

---

## E. i18n note
`es/` and `fr/` locale routes exist (English fallback) but **no translated
content** — effectively English-only today. Out of scope unless we translate.

---

## Build status
- 🟢 100 pages building. Content imported: 29 blog + 17 techniques + 36 help.
- 🟢 All 71 images localized to `public/images/webflow/`.
- ❌ Remaining build work: homepage product rebuild · `brand.ts` reposition ·
  `/integrations` generic page · redirects · nav cleanup.
```
