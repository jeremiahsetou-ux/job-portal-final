import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowRight, Link2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

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
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers. From formatting to content, we cover everything you need to know.',
    content: `Creating a winning CV is essential for job seekers in South Africa. Here's what you need to know:

## 1. Keep It Concise
Your CV should be no more than 2-3 pages. Recruiters spend an average of 6-7 seconds scanning each CV, so make every word count.

## 2. Use the Right Format
South African employers typically prefer a chronological CV format. Start with your personal details, followed by a brief professional summary, work experience, education, and skills.

## 3. Include Keywords
Many companies use ATS (Applicant Tracking Systems). Include keywords from the job description to ensure your CV passes through these systems.

## 4. Highlight Achievements
Instead of just listing duties, focus on achievements. Use numbers and metrics where possible - "Increased sales by 25%" is more impactful than "Responsible for sales".

## 5. Proofread
Typos can instantly disqualify your CV. Have someone else review it before submitting.`,
    author: 'JobHelper Team',
    publishDate: '2026-04-07',
    targetKeyword: 'CV writing',
    themeWords: ['CV', 'resume', 'job application', 'interview'],
  },
  {
    slug: 'ace-your-job-interview',
    title: 'How to Ace Your Job Interview',
    excerpt: 'Master the interview process with these proven tips and preparation strategies. Learn how to answer common questions and make a great impression.',
    content: `Interviews can be nerve-wracking, but with proper preparation, you can nail them. Here's how:

## Research the Company
Before any interview, research the company thoroughly. Understand their:
- Mission and values
- Recent news and developments
- Products or services
- Culture and work environment

## Prepare for Common Questions
Practice answers to common questions like:
- "Tell me about yourself"
- "What are your strengths and weaknesses?"
- "Why do you want to work here?"

## Dress Appropriately
First impressions matter. Dress professionally even if the company has a casual dress code.

## Ask Questions
Always have questions ready for the interviewer. This shows genuine interest in the role.`,
    author: 'Sarah Johnson',
    publishDate: '2026-04-05',
    targetKeyword: 'job interview',
    themeWords: ['interview', 'preparation', 'questions'],
  },
  {
    slug: 'remote-work-guide-south-africa',
    title: 'Remote Work: A Complete Guide for South Africans',
    excerpt: 'Everything you need to know about finding and succeeding in remote work opportunities in South Africa.',
    content: `Remote work has become increasingly popular in South Africa. Here's your complete guide:

## Finding Remote Jobs
Look for positions on:
- LinkedIn
- Remote job boards
- Company career pages
- Freelance platforms

## Required Skills
Remote employers typically look for:
- Strong communication skills
- Self-motivation
- Time management
- Tech proficiency

## Home Office Setup
Create a productive workspace:
- Dedicated desk area
- Reliable internet
- Good lighting
- Ergonomic chair`,
    author: 'JobHelper Team',
    publishDate: '2026-04-03',
    targetKeyword: 'remote work',
    themeWords: ['remote', 'work from home', 'freelance'],
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
    { keyword: 'CV writing', url: '/find-jobs?search=CV' },
    { keyword: 'job interview', url: '/find-jobs?search=interview' },
    { keyword: 'remote work', url: '/remote-gig-jobs' },
    { keyword: 'career advice', url: '/career-advice' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-8">
            <Link
              href="/career-advice"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Career Advice
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-6 mb-4 space-y-2">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="border-t pt-8 mb-12">
            <h3 className="font-semibold text-lg mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://jobhelper.co.za/career-advice/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://jobhelper.co.za/career-advice/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4267B2] text-white hover:opacity-90"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://jobhelper.co.za/career-advice/${article.slug}`)}&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-90"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-secondary">
                <Link2 className="w-4 h-4" />
                Copy Link
              </button>
            </div>
          </div>

          <aside className="bg-muted/30 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-4">Related Opportunities</h3>
            <p className="text-muted-foreground mb-4">
              Explore jobs related to &quot;{article.targetKeyword}&quot;
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedJobKeywords.map((job) => (
                <Link
                  key={job.keyword}
                  href={job.url}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  {job.keyword}
                  <ArrowRight className="w-4 h-4" />
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