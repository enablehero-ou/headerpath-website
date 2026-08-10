import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { brand } from '../config/brand';

const base = brand.websiteUrl;

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/alternatives', priority: '0.8', changefreq: 'weekly' },
  { path: '/techniques', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/help', priority: '0.7', changefreq: 'weekly' },
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
  const [blogPosts, alternatives, techniques, docs] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('alternatives', ({ data }) => !data.draft),
    getCollection('techniques', ({ data }) => !data.draft),
    getCollection('docs', ({ data }) => !data.draft),
  ]);

  const entries = [
    ...staticPages.map(({ path, priority, changefreq }) => urlEntry(path, priority, changefreq)),

    ...blogPosts.map((p) =>
      urlEntry(
        `/blog/${p.id.replace(/^[a-z]{2}\//, '')}`,
        '0.7',
        'monthly',
        p.data.date.toISOString().split('T')[0]
      )
    ),

    ...alternatives.map((p) =>
      urlEntry(`/alternatives/${p.id.replace(/^[a-z]{2}\//, '')}`, '0.7', 'monthly')
    ),

    ...techniques.map((p) =>
      urlEntry(`/techniques/${p.id.replace(/^[a-z]{2}\//, '')}`, '0.6', 'monthly')
    ),

    ...docs.map((p) =>
      urlEntry(`/help/${p.id.split('/').pop()}`, '0.6', 'monthly')
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
