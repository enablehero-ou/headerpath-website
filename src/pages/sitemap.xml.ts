import type { APIRoute } from 'astro';
import { brand } from '../config/brand';

const base = brand.websiteUrl;

// Static pages with their priorities and change frequencies
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/platform', priority: '0.9', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/alternatives', priority: '0.8', changefreq: 'weekly' },
  { path: '/integrations', priority: '0.8', changefreq: 'weekly' },
  { path: '/techniques', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/signup', priority: '0.9', changefreq: 'monthly' },
  { path: '/partner', priority: '0.6', changefreq: 'monthly' },
  { path: '/schedule', priority: '0.7', changefreq: 'monthly' },
  { path: '/careers', priority: '0.5', changefreq: 'monthly' },
  { path: '/legal/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal/services-agreement', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal/end-user-policy', priority: '0.3', changefreq: 'yearly' },
];

function urlEntry(path: string, priority: string, changefreq: string, lastmod?: string) {
  return `  <url>
    <loc>${base}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`;
}

export const GET: APIRoute = async () => {
  // Dynamic pages from content collections will be added in Phase 2
  // when content collections are created. For now, static pages only.
  const entries = staticPages.map(({ path, priority, changefreq }) =>
    urlEntry(path, priority, changefreq)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
