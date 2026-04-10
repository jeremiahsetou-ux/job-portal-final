import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowRight, Link2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { NewsArticleSchema } from '@/components/structured-data';

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

interface Article {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  targetKeyword: string;
  themeWords: string[];
}

const mockArticles: Article[] = [
  {
    slug: 'how-to-write-winning-cv-south-africa',
    title: 'How to Write a Winning CV in South Africa',
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.',
    content: `Creating a winning CV is essential for job seekers in South Africa. Here's what you need to know:

## 1. Keep It Concise
Your CV should be no more than 2-3 pages.

## 2. Use the Right Format
South African employers typically prefer a chronological CV format.

## 3. Include Keywords
Many companies use ATS systems. Include keywords from the job description.

## 4. Highlight Achievements
Focus on achievements with numbers and metrics.`,
    author: 'JobHelper Team',
    publishDate: '2026-04-07',
    targetKeyword: 'CV writing',
    themeWords: ['CV', 'resume', 'job application'],
  },
  {
    slug: 'ace-your-job-interview',
    title: 'How to Ace Your Job Interview',
    excerpt: 'Master the interview process with these proven tips and preparation strategies.',
    content: `Interviews can be nerve-wracking, but with proper preparation, you can nail them.

## Research the Company
Understand their mission, values, and recent news.

## Prepare for Common Questions
Practice answers to common questions.

## Dress Appropriately
First impressions matter.

## Ask Questions
Show genuine interest in the role.`,
    author: 'Sarah Johnson',
    publishDate: '2026-04-05',
    targetKeyword: 'job interview',
    themeWords: ['interview', 'preparation'],
  },
  {
    slug: 'remote-work-guide-south-africa',
    title: 'Remote Work: A Complete Guide for South Africans',
    excerpt: 'Everything you need to know about finding and succeeding in remote work opportunities.',
    content: `Remote work has become increasingly popular in South Africa.

## Finding Remote Jobs
Look on LinkedIn, remote job boards, and company career pages.

## Required Skills
Remote employers look for strong communication and time management.

## Home Office Setup
Create a productive workspace with reliable internet.`,
    author: 'JobHelper Team',
    publishDate: '2026-04-03',
    targetKeyword: 'remote work',
    themeWords: ['remote', 'work from home'],
  },
];

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Not Found' };
  }

  return {
    title: `${article.title} | Career Advice | JobHelper`,
    description: article.excerpt,
  };
}

export default async function CareerAdviceArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const relatedJobKeywords = [
    { keyword: 'CV writing', url: '/jobs' },
    { keyword: 'job interview', url: '/jobs' },
    { keyword: 'remote work', url: '/remote-gig-jobs' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1">
        <NewsArticleSchema article={{
          headline: article.title,
          description: article.excerpt,
          author: article.author,
          datePublished: article.publishDate,
          url: `https://jobhelper.co.za/career-advice/${article.slug}`,
        }} />
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/career-advice" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Career Advice
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              return <p key={idx} className="mb-4 text-muted-foreground">{paragraph}</p>;
            })}
          </div>

          <div className="border-t pt-8 mb-12">
            <h3 className="font-semibold text-lg mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-[#1DA1F2] text-white text-sm">X (Twitter)</button>
              <button className="px-4 py-2 rounded-lg bg-[#4267B2] text-white text-sm">Facebook</button>
              <button className="px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-sm">LinkedIn</button>
            </div>
          </div>

          <aside className="bg-muted/30 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-4">Related Opportunities</h3>
            <p className="text-muted-foreground mb-4">Explore jobs related to "{article.targetKeyword}"</p>
            <div className="flex flex-wrap gap-3">
              {relatedJobKeywords.map((job) => (
                <Link key={job.keyword} href={job.url} className="inline-flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:border-primary">
                  {job.keyword} <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </aside>
        </article>
      </main>
      <Footer />
    </div>
  );
}