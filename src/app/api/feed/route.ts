import { NextResponse } from 'next/server';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

const ARTICLES: Article[] = [
  {
    slug: 'how-to-write-winning-cv-south-africa',
    title: 'How to Write a Winning CV in South Africa (2024)',
    excerpt: 'Learn the secrets of crafting a CV that gets noticed by South African recruiters. Our comprehensive guide covers format, content, and common mistakes to avoid.',
    category: 'cv-writing',
    author: 'Sarah Mitchell',
    publishedAt: '2024-03-15',
    readTime: 8,
  },
  {
    slug: 'top-50-highest-paying-jobs-south-africa-2024',
    title: 'Top 50 Highest Paying Jobs in South Africa 2024',
    excerpt: 'Discover the highest paying careers in SA, from IT to finance. Includes salary ranges and required qualifications for each profession.',
    category: 'salary-guides',
    author: 'James Cooper',
    publishedAt: '2024-03-12',
    readTime: 6,
  },
  {
    slug: 'government-jobs-guide-z83-form',
    title: 'Complete Guide to Government Jobs: Z83 Form Explained',
    excerpt: 'Everything you need to know about applying for government positions in South Africa. Master the Z83 form and improve your chances.',
    category: 'government-jobs',
    author: 'Priya Naidoo',
    publishedAt: '2024-03-10',
    readTime: 10,
  },
  {
    slug: 'interview-questions-answers-south-africa',
    title: 'Common Interview Questions and How to Answer Them',
    excerpt: 'Prepare for your next interview with our guide to the most asked questions in South African job interviews.',
    category: 'interview-tips',
    author: 'Michael Ross',
    publishedAt: '2024-03-08',
    readTime: 7,
  },
  {
    slug: 'how-to-negotiate-salary-south-africa',
    title: 'How to Negotiate Your Salary in South Africa',
    excerpt: 'Don\'t leave money on the table. Learn effective salary negotiation strategies that work in the SA market.',
    category: 'salary-guides',
    author: 'Lisa Johnson',
    publishedAt: '2024-03-05',
    readTime: 5,
  },
  {
    slug: 'graduate-programmes-south-africa-2024',
    title: 'Best Graduate Programmes in South Africa 2024',
    excerpt: 'Top graduate programmes offered by leading South African companies. Apply now and kickstart your career.',
    category: 'career-growth',
    author: 'David Kim',
    publishedAt: '2024-03-03',
    readTime: 6,
  },
  {
    slug: 'cv-vs-resume-differences-south-africa',
    title: 'CV vs Resume: What\'s the Difference?',
    excerpt: 'Do you need a CV or a resume? Understand the key differences and when to use each.',
    category: 'cv-writing',
    author: 'Sarah Mitchell',
    publishedAt: '2024-03-01',
    readTime: 4,
  },
  {
    slug: 'soft-skills-south-africa-employers-want',
    title: 'Soft Skills SA Employers Want in 2024',
    excerpt: 'Beyond qualifications, employers are looking for these essential soft skills. Boost your employability today.',
    category: 'career-growth',
    author: 'James Cooper',
    publishedAt: '2024-02-28',
    readTime: 5,
  },
];

export async function GET() {
  const siteUrl = 'https://jobhelper.co.za';
  const buildDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:news="http://www.google.com/news/extensions/">
  <channel>
    <title>JobHelper Career Advice Blog</title>
    <link>${siteUrl}/career-advice</link>
    <description>Expert career advice, job search tips, CV writing guides, and interview prep for South Africans. Your guide to landing your dream job.</description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/api/feed" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/favicon.ico</url>
      <title>JobHelper Career Advice</title>
      <link>${siteUrl}/career-advice</link>
    </image>
    ${ARTICLES.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/career-advice/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/career-advice/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author>${article.author}</author>
      <category>${article.category}</category>
      <news:news>
        <news:publication>
          <news:name>JobHelper.co.za</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${new Date(article.publishedAt).toISOString()}</news:publication_date>
        <news:title><![CDATA[${article.title}]]></news:title>
        <news:keywords>${article.category}, career advice, jobs, South Africa</news:keywords>
      </news:news>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}