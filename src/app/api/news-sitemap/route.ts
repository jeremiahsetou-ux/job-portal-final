import { NextResponse } from 'next/server';

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  publishedAt: Date;
}

const mockArticles: NewsArticle[] = [
  { id: '1', title: 'Remote Work Trends in South Africa 2026', slug: 'remote-work-trends-2026', publishedAt: new Date('2026-04-01') },
  { id: '2', title: 'Top Matric Learnerships for 2026', slug: 'top-matric-learnerships-2026', publishedAt: new Date('2026-03-28') },
  { id: '3', title: 'How to Ace Your Government Job Interview', slug: 'ace-government-interview', publishedAt: new Date('2026-03-25') },
];

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jobhelper.co.za';

  const newsItems = mockArticles.map(article => {
    const publishDate = new Date(article.publishedAt).toISOString();
    return `<news:news>
  <news:publication>
    <news:name>JobHelper.co.za</news:name>
    <news:language>en</news:language>
  </news:publication>
  <news:publication_date>${publishDate}</news:publication_date>
  <news:title>${article.title}</news:title>
  <news:keywords>jobs, South Africa, careers, employment</news:keywords>
</news:news>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${mockArticles.map(article => `<url>
  <loc>${siteUrl}/news/${article.slug}</loc>
  ${newsItems}
</url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}