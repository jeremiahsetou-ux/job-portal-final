'use client';

import { useState } from 'react';
import { Briefcase, Zap, TrendingUp, Users } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SearchBar } from '@/components/search-bar';
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
  {
    id: '4',
    headline: 'Remote Work Trends in South Africa',
    date: '2026-03-20',
    author: 'JobHelper Team',
    excerpt: 'Remote work is growing in South Africa. Learn which companies offer flexible arrangements and how to find remote opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1593642532407-56b8b7d6c61a?w=600&h=400&fit=crop',
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

export default function HomePage() {
  const [searchFilters, setSearchFilters] = useState({ title: '', location: '', category: '' });

  const handleSearch = (filters: { title: string; location: string; category: string }) => {
    setSearchFilters(filters);
    console.log('Search filters:', filters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Zap size={16} />
                <span>#1 Job Portal in South Africa</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Find Your Next Job in <span className="text-primary">South Africa</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-10">
                Thousands of jobs, career advice, and tools to help you succeed.
              </p>

              {/* Search Bar */}
              <SearchBar onSearch={handleSearch} />

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">12,450</p>
                    <p className="text-sm text-muted-foreground">Active Jobs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">850+</p>
                    <p className="text-sm text-muted-foreground">Companies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">50K+</p>
                    <p className="text-sm text-muted-foreground">Monthly Visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Job Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Job Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_JOBS.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Career News & Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Career News & Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {MOCK_NEWS.map((news) => (
                <NewsCard key={news.id} {...news} />
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

      <Footer />
    </div>
  );
}