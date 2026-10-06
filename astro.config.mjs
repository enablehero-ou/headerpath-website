// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://headerpath.com',
  // GitHub Pages behind the custom domain (public/CNAME). Fully static — no adapter.
  output: 'static',

  // Permanent redirects — these pages folded into the product homepage.
  redirects: {
    '/about': { status: 301, destination: '/' },
    '/platform': { status: 301, destination: '/' },
    '/partner': { status: 301, destination: '/' },
    '/schedule': { status: 301, destination: '/contact' },
    // Signup is retired while HeaderPath hibernates.
    '/signup': { status: 301, destination: '/contact' },
    '/get-started': { status: 301, destination: '/contact' },
    '/careers': { status: 301, destination: '/' },
  },

  integrations: [mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    // No es/fr fallback: es/fr have no pages yet, and GitHub Pages can't serve
    // Astro's fallback redirects (they render empty without an adapter).
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
