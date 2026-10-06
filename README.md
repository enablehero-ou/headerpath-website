# HeaderPath — marketing website

The public site at [headerpath.com](https://www.headerpath.com): product pages, contact,
blog, techniques, and a self-hosted help center. Static Astro, deployed on GitHub Pages.

This repo is the marketing site only. It does not contain the product application.

## Stack

- **Astro 6**, `output: 'static'`, GitHub Pages
- **Tailwind CSS v4** — design tokens in `src/styles/global.css`
- **React 19** islands for the few interactive pieces (mobile nav, FAQ accordion)
- **Markdown / MDX** content collections
- **pnpm**

## Getting started

```sh
pnpm install
pnpm dev      # localhost:4321
pnpm build    # production build
pnpm preview  # preview the build
```

No environment variables are required — see `.env.example`.

## Layout

```
src/
├── pages/       # routes, plus sitemap.xml.ts and robots.txt.ts
├── content/     # blog, techniques, docs (help), alternatives, legal
├── components/  # ui/ · sections/ · layout/
├── layouts/     # page shells
├── config/      # brand.ts, navigation.ts
├── i18n/        # translations.ts
└── styles/      # global.css — the only place colours and fonts are defined
```

Brand strings come from `src/config/brand.ts`; user-visible copy from
`src/i18n/translations.ts`. Neither belongs inline in a component.
