import type { APIRoute } from 'astro';
import { defaultLang, languages, langs, localePath } from '@/i18n/ui';

export const GET: APIRoute = ({ site }) => {
  const url = (lang: (typeof langs)[number]) => new URL(localePath(lang), site).href;
  const alternates = [
    ...langs.map((l) => `<xhtml:link rel="alternate" hreflang="${languages[l].htmlLang}" href="${url(l)}"/>`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${url(defaultLang)}"/>`,
  ].join('');
  const lastmod = new Date().toISOString().slice(0, 10);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${langs.map((l) => `<url><loc>${url(l)}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
