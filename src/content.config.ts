import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('HeaderPath Team'),
    category: z.enum([
      'strategy',
      'case-studies',
      'product-updates',
      'tutorials',
      'live-events',
    ]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const alternatives = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/alternatives' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    competitor: z.string(),
    competitorUrl: z.string().url().optional(),
    image: z.string().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    verdict: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/techniques' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bestFor: z.string().optional(),
    category: z.enum(['pedagogy', 'assessment', 'engagement', 'ai']).optional(),
    image: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const integrations = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/integrations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    category: z.enum(['lms', 'video', 'analytics', 'auth', 'crm', 'hris', 'other']),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

// `features` and `proposals` collections were defined but never populated or
// queried, so every build warned about them. Removed. `ProposalLayout.astro`,
// the robots.txt disallow and the sitemap exclusion are all still in place —
// re-add a collection here when there is actually content to load.

const legal = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.coerce.date(),
    effectiveDate: z.coerce.date().optional(),
  }),
});

// Help center / docs — self-hosted. Category derived from folder, e.g.
// src/content/docs/en/<category>/<slug>.md. _archive is excluded by the glob.
const docs = defineCollection({
  loader: glob({ pattern: 'en/**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  alternatives,
  techniques,
  integrations,
  legal,
  docs,
};
