'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Briefcase, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { NewsCard } from '@/components/news-card';
import { JobListing } from '@/components/job-listing';
import { AffiliateBox } from '@/components/affiliate-box';

const MOCK_JOBS = [
  { id: '1', slug: 'senior-software-developer', title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', postedDate: '2 days ago', salary: 'R45,000 - R65,000', category: 'IT & Software' },
  { id: '2', slug: 'marketing-manager', title: 'Marketing Manager', company: 'Sasol', location: 'Johannesburg', postedDate: '1 day ago', salary: 'R55,000 - R75,000', category: 'Marketing' },
  { id: '3', slug: 'data-analyst-remote', title: 'Data Analyst - Remote', company: 'Tech Corp', location: 'Remote', postedDate: '3 days ago', salary: 'R30,000 - R45,000', category: 'IT & Software' },
  { id: '4', slug: 'government-clerk', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', postedDate: '5 hours ago', salary: 'R18,000 - R25,000', category: 'Government' },
];

const MOCK_NEWS = [
  {
    id: '1',
    headline: 'How to Write a Winning CV in South Africa',
    date: '2026-04-01',
    author: 'JobHelper Team',
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    headline: 'Top 50 Highest Paying Jobs in SA 2026',
    date: '2026-03-28',
    author: 'JobHelper Team',
    excerpt: 'Discover the highest paying jobs in South Africa this year across various industries.',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    headline: 'Government Jobs Guide: Z83 Form Explained',
    date: '2026-03-25',
    author: 'JobHelper Team',
    excerpt: 'Everything you need to know about the Z83 government job application form.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop',
  },
];

const AFFILIATE_PRODUCTS = [
  {
    name: 'JobWinner AI',
    rating: 5,
    description: 'AI-powered resume builder that helps you create professional CVs in minutes.',
    url: 'https://jobwinner.ai',
  },
  {
    name: 'Coursera',
    rating: 5,
    description: 'Online courses from top universities. Upskill with certifications recognized by South African employers.',
    url: 'https://coursera.org',
  },
  {
    name: 'NordVPN',
    rating: 4,
    description: 'Protect your online privacy when job hunting. Secure your data and access global job boards safely.',
    url: 'https://nordvpn.com',
  },
];

interface NewsPost {
  id: string;
  headline: string;
  title?: string;
  date: string;
  publishedAt?: string;
  author: string;
  excerpt?: string;
  imageUrl?: string;
}

export default function HomePage() {
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNewsPosts(data.posts?.slice(0, 3) || []);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const displayNews = newsPosts.length > 0 ? newsPosts : MOCK_NEWS;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Career News & Insights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {displayNews.slice(0, 3).map((news) => (
                <NewsCard
                  key={news.id}
                  id={news.id}
                  headline={news.headline}
                  date={news.date || ''}
                  author={news.author}
                  excerpt={news.excerpt || ''}
                  imageUrl={news.imageUrl || ''}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest Job Opportunities</h2>
              <Link href="/jobs" className="text-primary font-medium hover:underline">
                View All Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOCK_JOBS.map((job) => (
                <JobListing
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  postedDate={job.postedDate}
                  salary={job.salary}
                  category={job.category}
                  applyUrl={`/jobs/${job.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Recommended Tools for Job Seekers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AFFILIATE_PRODUCTS.map((product, idx) => (
                <AffiliateBox key={idx} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}