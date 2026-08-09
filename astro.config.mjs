// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://qurioos.com',
  output: 'static',
  adapter: vercel(),

  // Permanent redirects — these pages folded into the product homepage.
  redirects: {
    '/about': { status: 301, destination: '/' },
    '/platform': { status: 301, destination: '/' },
    '/partner': { status: 301, destination: '/' },
  },

  integrations: [mdx(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    fallback: {
      es: 'en',
      fr: 'en',
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
