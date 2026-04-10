'use client';

import { Metadata } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Job Market News South Africa | Latest Updates & Trends | JobHelper',
  description: 'Stay updated with the latest job market news, employment trends, salary insights, and career advice in South Africa. Daily updates on government jobs and opportunities.',
};

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  publishedAt: string;
  author: string;
  categoryId?: string;
  imageUrl?: string;
}

const MOCK_POSTS: Post[] = [
  { id: '1', title: 'DPSA Salary Adjustment 2026 - What You Need to Know', slug: 'dpsa-salary-2026', excerpt: 'The Department of Public Service and Administration has announced new salary scales for government employees.', publishedAt: '2026-04-09', author: 'JobHelper Team', categoryId: '1', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop' },
  { id: '2', title: 'Top 50 Highest Paying Jobs in SA 2026', slug: 'highest-paying-jobs-2026', excerpt: 'Discover the highest paying jobs in South Africa this year across various industries.', publishedAt: '2026-04-08', author: 'JobHelper Team', categoryId: '2', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop' },
  { id: '3', title: 'How to Write a Winning CV in South Africa', slug: 'write-winning-cv', excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.', publishedAt: '2026-04-07', author: 'JobHelper Team', categoryId: '3', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop' },
  { id: '4', title: 'Remote Work Trends in South Africa 2026', slug: 'remote-work-trends-2026', excerpt: 'Discover which companies offer remote work and how to find legitimate work-from-home opportunities.', publishedAt: '2026-04-06', author: 'JobHelper Team', categoryId: '1', imageUrl: 'https://images.unsplash.com/photo-1593642532407-56b8b7d6c61a?w=600&h=400&fit=crop' },
  { id: '5', title: 'SETA Learnerships: Your Path to Employment', slug: 'seta-learnerships', excerpt: 'How to apply for SETA-funded learnerships and what qualifications you need.', publishedAt: '2026-04-05', author: 'JobHelper Team', categoryId: '4', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop' },
  { id: '6', title: 'Government Jobs Guide: Z83 Form Explained', slug: 'z83-form-explained', excerpt: 'Everything you need to know about the Z83 government job application form.', publishedAt: '2026-04-04', author: 'JobHelper Team', categoryId: '1', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop' },
];

export function generateStaticParams() {
  return [{ slug: 'news-updates' }];
}

export default function NewsUpdatesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [catsRes, postsRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/news'),
        ]);
        const catsData = await catsRes.json();
        const postsData = await postsRes.json();
        setCategories(catsData.categories || []);
        setPosts(postsData.posts || []);
      } catch (error) {
        setPosts(MOCK_POSTS);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const displayPosts = posts.length > 0 ? posts : MOCK_POSTS;
  const filteredPosts = selectedCategory === 'all'
    ? displayPosts
    : displayPosts.filter(post => post.categoryId === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Latest Job Market News, Career Insights & Employment Trends
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                All News
              </button>
              <button
                onClick={() => setSelectedCategory('1')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === '1'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Job Market
              </button>
              <button
                onClick={() => setSelectedCategory('2')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === '2'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Salary Trends
              </button>
              <button
                onClick={() => setSelectedCategory('3')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === '3'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Career Advice
              </button>
              <button
                onClick={() => setSelectedCategory('4')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === '4'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                Learnerships
              </button>
            </div>

            {loading ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Loading...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {post.imageUrl && (
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }} />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString('en-ZA')}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                      {post.excerpt && (
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <Link href="/news" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}