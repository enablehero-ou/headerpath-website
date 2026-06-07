import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Qurioos Team'),
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

const features = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    icon: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Proposals: private, noindex, hard-to-guess URLs
const proposals = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/proposals' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.coerce.date(),
    expiresAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

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
  features,
  proposals,
  legal,
  docs,
};
