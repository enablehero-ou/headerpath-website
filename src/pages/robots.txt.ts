import type { APIRoute } from 'astro';
import { brand } from '../config/brand';

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

Sitemap: ${brand.websiteUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
