import { NextResponse } from 'next/server';

const jobs = [
  { slug: 'software-developer', updatedAt: '2026-04-01' },
  { slug: 'marketing-manager', updatedAt: '2026-04-01' },
  { slug: 'government-clerk', updatedAt: '2026-04-01' },
];

const news = [
  { slug: 'remote-work-trends-2026', updatedAt: '2026-04-01' },
  { slug: 'top-matric-learnerships-2026', updatedAt: '2026-03-28' },
  { slug: 'ace-government-interview', updatedAt: '2026-03-25' },
];

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jobhelper.co.za';
  
  const jobUrls = jobs.map(job => `<url>
  <loc>${siteUrl}/jobs/${job.slug}</loc>
  <lastmod>${job.updatedAt}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.8</priority>
</url>`).join('\n');

  const newsUrls = news.map(article => `<url>
  <loc>${siteUrl}/news/${article.slug}</loc>
  <lastmod>${article.updatedAt}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>${siteUrl}/</loc>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>${siteUrl}/find-jobs</loc>
  <changefreq>daily</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>${siteUrl}/jse</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>${siteUrl}/matric</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>${siteUrl}/remote</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>${siteUrl}/z83-form</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
${jobUrls}
${newsUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}