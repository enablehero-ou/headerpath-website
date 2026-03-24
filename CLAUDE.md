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

## Git Workflow

Work on `dev`. `/ship` → PR → Vercel preview. `/main` → production deploy.

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
Types: `blog`, `alternatives`, `techniques`, `integrations`, `features`, `proposals`, `legal`

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

## Key Rules

- Zero JS on static content pages — only React islands where interactivity is needed
- All user-visible strings in `translations.ts`, not hardcoded
- All brand references via `brand.ts`
- Proposals: `noindex: true` + excluded from sitemap
- Images: use Astro's `<Image>` from `astro:assets` for processed images
