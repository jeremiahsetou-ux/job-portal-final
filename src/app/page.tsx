'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Briefcase, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';

import { Hero } from '@/components/hero';
import { JobCard } from '@/components/job-card';
import { NewsCard } from '@/components/news-card';
import { AffiliateBox } from '@/components/affiliate-box';

const MOCK_JOBS = [
  { id: '1', title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', postedAt: '2 days ago', remote: false },
  { id: '2', title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', postedAt: '1 day ago', remote: false },
  { id: '3', title: 'Data Analyst - Remote', company: 'Tech Corp', location: 'Remote', postedAt: '3 days ago', remote: true },
  { id: '4', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', postedAt: '5 hours ago', remote: false },
  { id: '5', title: 'Customer Success Manager', company: 'Finance Ltd', location: 'Cape Town', postedAt: '1 day ago', remote: false },
  { id: '6', title: 'HR Manager', company: 'MTN', location: 'Johannesburg', postedAt: '2 days ago', remote: false },
];

const MOCK_NEWS = [
  {
    id: '1',
    headline: 'How to Write a Winning CV in South Africa',
    date: '2026-04-01',
    author: 'JobHelper Team',
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers. From formatting to content, we cover everything.',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    headline: 'Top 50 Highest Paying Jobs in SA 2026',
    date: '2026-03-28',
    author: 'JobHelper Team',
    excerpt: 'Discover the highest paying jobs in South Africa this year. From tech to finance, see which roles offer the best salaries.',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    headline: 'Government Jobs Guide: Z83 Form Explained',
    date: '2026-03-25',
    author: 'JobHelper Team',
    excerpt: 'Everything you need to know about the Z83 government job application form. Avoid common mistakes and improve your chances.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop',
  },
];

const AFFILIATE_PRODUCTS = [
  {
    name: 'JobWinner AI',
    rating: 5,
    description: 'AI-powered resume builder that helps you create professional CVs in minutes. 30% recurring commission.',
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

        {/* Latest Career News & Insights */}
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

        {/* Featured Opportunities */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOCK_JOBS.slice(0, 4).map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations (Affiliate) */}
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