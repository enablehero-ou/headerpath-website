# CLAUDE.md — qurioos-website

Website-specific guidance. Read alongside the parent CLAUDE.md one level up.

## Commands

```bash
~/.local/bin/pnpm dev      # Dev server — localhost:4321
~/.local/bin/pnpm build    # Production build
~/.local/bin/pnpm preview  # Preview build
```

## Stack

- **Framework**: Astro 6 (static output)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Interactive**: React 19 islands (`client:load` / `client:visible`)
- **Content**: MDX content collections
- **Package manager**: pnpm (`~/.local/bin/pnpm`)
- **Deploy**: Vercel static · Project: `qurioos-v0/website`

## /research — Pure Research Mode

Invoke with `/research`. Enters pure research mode (no planning, building, or tech specs). Focuses on conceptual, structural, and architectural elegance. Challenges all prior assumptions, restricts no options, and prioritizes absolute durability over quick fixes.

## Git Workflow

Work on `dev`. `/ship` → PR → Vercel preview. `/main` → production deploy.

Local preview runs at `localhost:4321` via the `com.qurioos.website` launch agent
(auto-starts, logs at `/tmp/qurioos-website-dev.log`). Use it instead of pushing
to preview for visual checks. Restart: `launchctl kickstart -k gui/$(id -u)/com.qurioos.website`.

## priorities.md

`priorities.md` holds **forward-looking priorities only** — never a changelog.
After every merge to `main`, remove the items that shipped (their record lives in
the PR/Git history). Keep it pruned to what's still pending.

## Brand & Config

- **Brand config** (`src/config/brand.ts`): All brand strings — name, tagline, URLs. Never hardcode brand name anywhere else.
- **Navigation** (`src/config/navigation.ts`): All nav/footer links
- **Translations** (`src/i18n/translations.ts`): All UI strings for en/es/fr. All user-visible text must come from here, not hardcoded.

## i18n

- Default locale: English (no URL prefix — `/blog`, not `/en/blog`)
- Spanish: `/es/blog`, French: `/fr/blog`
- Missing translations fall back to English automatically
- `Astro.currentLocale` gives the current locale in any `.astro` file
- Use `useTranslations(locale)` from `src/i18n/translations.ts`

## Content Collections

Content lives in `src/content/[type]/en/` (then `es/`, `fr/` when translated).
Types: `blog`, `alternatives`, `techniques`, `integrations`, `features`, `proposals`, `legal`, `docs`

`docs` articles live in `src/content/docs/en/[category]/`. Old CSV exports are in `src/content/docs/_archive/` (reference only, not rendered).

Proposals MUST have `noindex: true` and NEVER appear in sitemaps or listings.

## Layouts

- `PageLayout.astro` — standard pages (header + main + footer)
- `BaseLayout.astro` — raw HTML shell (use for custom layouts)

## Components

- `Container.astro` — centered max-w-7xl wrapper
- `Button.astro` — primary/secondary/ghost variants
- `Card.astro` — dark card with border
- `Badge.astro` — green pill badge

## Design Tokens

```
--color-bg-primary       #050505
--color-bg-secondary     #0f0f0f
--color-bg-card          #111111
--color-text-primary     #fafafa
--color-text-secondary   #a3a3a3
--color-text-muted       #737373
--color-accent           #10b981 (green)
--color-border           #262626
```

## Docs Article Conventions

**File naming:** kebab-case — `user-management.md`

**Required frontmatter:**
```md
---
title: Article Title
description: One sentence description.
---
```

**Changelog entries:** `src/content/docs/en/changelog/YYYY-MM-DD-short-title.md`

**Categories:** `getting-started`, `content`, `users-and-groups`, `login-and-access`, `appearance`, `settings`, `certifications`, `progress`, `localization`, `security`, `privacy`, `for-learners`, `changelog`

## Docs Article Writing Guide

### Tone & Voice

- **Professional-casual** — confident and direct. No jargon, no corporate stiffness, no enthusiasm filler ("and more!").
- **Second person** for the reader ("you/your"). "Qurioos" (third person) for the product. "We/our" sparingly for company voice only.
- **Active voice** dominant (~80%). Use passive only for technical descriptions.

### Length & Structure

- **Target: 200–300 words.** Go longer only when the feature genuinely demands it.
- **Opening paragraph:** 1–3 sentences of context. Never jump straight into steps or a list.
- **Headings:** `###` (H3) as the primary section heading. `##` (H2) only in longer multi-section articles. No H1 in the body.

### Formatting

- **Bold** for UI element names, key terms, and emphasis.
- **Ordered lists** only for step-by-step instructions. **Unordered** for features/benefits/tips.
- `Code formatting` for technical values, URLs, file formats, config parameters.
- **No screenshots** unless a visual is genuinely irreplaceable.

### Copywriting Patterns

- **"Need to know"** — bold-labeled callout at the end for caveats/edge cases. Format: bold heading + bullet list.
- **Problem → solution** — open feature articles by naming the user's need.
- **Feature-benefit pairing** — never state a feature alone; pair with its use case.
- End with a "Need to know" block, a "Note:" block, or a link to a related article. No sign-off, no support CTA.

### Terminology

| Use | Avoid |
|-----|-------|
| Content page / content pages | Course, courses, Path, Module |
| Page | Course |
| Step | Lesson, Block |
| Section step | Title step |
| Account | Academy, workspace, organization, tenant |
| User / users | Learner, learners, student, member |
| Admin | Administrator |
| Certification | Certificate (for the feature/setting) |

- Product nouns capitalized: **Step**, **Page**, **Certification**, **Level**, **Subject**
- Support contact: **support@qurioos.com**
- External links: "Name ↗" with arrow symbol

## Key Rules

- Zero JS on static content pages — only React islands where interactivity is needed
- All user-visible strings in `translations.ts`, not hardcoded
- All brand references via `brand.ts`
- Proposals: `noindex: true` + excluded from sitemap
- Images: use Astro's `<Image>` from `astro:assets` for processed images
