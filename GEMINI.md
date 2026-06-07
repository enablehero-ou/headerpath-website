# GEMINI.md — qurioos-website

Website-specific guidance. Read alongside the parent GEMINI.md one level up.

## Commands

```bash
pnpm dev      # Dev server — localhost:4321
pnpm build    # Production build
pnpm preview  # Preview build
```

## Stack

- **Framework**: Astro 6 (static output)
- **Styling**: Tailwind CSS v4
- **Interactive**: React 19 islands
- **Deploy**: Vercel static

## /research — Pure Research Mode

Invoke with `/research`. Enters pure research mode (no planning, building, or tech specs). Focuses on conceptual, structural, and architectural elegance. Challenges all prior assumptions, restricts no options, and prioritizes absolute durability over quick fixes.

## Git Workflow

Work on `dev`. `/ship` → PR → Vercel preview. `/main` → production deploy.

## Key Rules

- Zero JS on static content pages — only React islands where interactivity is needed
- All user-visible strings in `translations.ts`, not hardcoded
- All brand references via `brand.ts`
- Proposals: `noindex: true` + excluded from sitemap
