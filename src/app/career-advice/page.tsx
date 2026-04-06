"use client";

import React, { useState } from 'react';
import { Search, ArrowRight, Clock, User, Eye, ThumbsUp, Share2, Bookmark, ChevronRight, Briefcase, GraduationCap, TrendingUp, Award, BookOpen, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  image: string;
  featured: boolean;
}

const CATEGORIES = [
  { id: 'all', name: 'All Articles', icon: BookOpen, color: 'bg-blue-600' },
  { id: 'job-search', name: 'Job Search', icon: Briefcase, color: 'bg-blue-600' },
  { id: 'interview-tips', name: 'Interview Tips', icon: MessageSquare, color: 'bg-green-600' },
  { id: 'cv-writing', name: 'CV Writing', icon: GraduationCap, color: 'bg-purple-600' },
  { id: 'career-growth', name: 'Career Growth', icon: TrendingUp, color: 'bg-yellow-500' },
  { id: 'salary-guides', name: 'Salary Guides', icon: Award, color: 'bg-red-500' },
  { id: 'government-jobs', name: 'Government Jobs', icon: Briefcase, color: 'bg-slate-600' },
];

const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'how-to-write-winning-cv-south-africa',
    title: 'How to Write a Winning CV in South Africa (2024)',
    excerpt: 'Learn the secrets of crafting a CV that gets noticed by South African recruiters. Our comprehensive guide covers format, content, and common mistakes to avoid.',
    content: 'Your CV is your first impression...',
    category: 'cv-writing',
    author: 'Sarah Mitchell',
    publishedAt: '2024-03-15',
    readTime: 8,
    image: 'CV',
    featured: true,
  },
  {
    id: 2,
    slug: 'top-50-highest-paying-jobs-south-africa-2024',
    title: 'Top 50 Highest Paying Jobs in South Africa 2024',
    excerpt: 'Discover the highest paying careers in SA, from IT to finance. Includes salary ranges and required qualifications for each profession.',
    content: 'The South African job market offers...',
    category: 'salary-guides',
    author: 'James Cooper',
    publishedAt: '2024-03-12',
    readTime: 6,
    image: '$$$',
    featured: true,
  },
  {
    id: 3,
    slug: 'government-jobs-guide-z83-form',
    title: 'Complete Guide to Government Jobs: Z83 Form Explained',
    excerpt: 'Everything you need to know about applying for government positions in South Africa. Master the Z83 form and improve your chances.',
    content: 'Government jobs offer excellent...',
    category: 'government-jobs',
    author: 'Priya Naidoo',
    publishedAt: '2024-03-10',
    readTime: 10,
    image: 'GOV',
    featured: true,
  },
  {
    id: 4,
    slug: 'interview-questions-answers-south-africa',
    title: 'Common Interview Questions and How to Answer Them',
    excerpt: 'Prepare for your next interview with our guide to the most asked questions in South African job interviews.',
    content: 'Interviews can be nerve-wracking...',
    category: 'interview-tips',
    author: 'Michael Ross',
    publishedAt: '2024-03-08',
    readTime: 7,
    image: 'INT',
    featured: false,
  },
  {
    id: 5,
    slug: 'how-to-negotiate-salary-south-africa',
    title: 'How to Negotiate Your Salary in South Africa',
    excerpt: 'Don\'t leave money on the table. Learn effective salary negotiation strategies that work in the SA market.',
    content: 'Salary negotiation is a crucial...',
    category: 'salary-guides',
    author: 'Lisa Johnson',
    publishedAt: '2024-03-05',
    readTime: 5,
    image: 'SAL',
    featured: false,
  },
  {
    id: 6,
    slug: 'graduate-programmes-south-africa-2024',
    title: 'Best Graduate Programmes in South Africa 2024',
    excerpt: 'Top graduate programmes offered by leading South African companies. Apply now and kickstart your career.',
    content: 'Graduate programmes are an excellent...',
    category: 'career-growth',
    author: 'David Kim',
    publishedAt: '2024-03-03',
    readTime: 6,
    image: 'GRAD',
    featured: false,
  },
  {
    id: 7,
    slug: 'cv-vs-resume-differences-south-africa',
    title: 'CV vs Resume: What\'s the Difference?',
    excerpt: 'Do you need a CV or a resume? Understand the key differences and when to use each.',
    content: 'In South Africa, the term CV...',
    category: 'cv-writing',
    author: 'Sarah Mitchell',
    publishedAt: '2024-03-01',
    readTime: 4,
    image: 'CVR',
    featured: false,
  },
  {
    id: 8,
    slug: 'soft-skills-south-africa-employers-want',
    title: 'Soft Skills SA Employers Want in 2024',
    excerpt: 'Beyond qualifications, employers are looking for these essential soft skills. Boost your employability today.',
    content: 'Technical skills will get you...',
    category: 'career-growth',
    author: 'James Cooper',
    publishedAt: '2024-02-28',
    readTime: 5,
    image: 'SKL',
    featured: false,
  },
];

export default function CareerAdvicePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState<number[]>([]);

  const filteredArticles = ARTICLES.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = ARTICLES.filter(a => a.featured);
  const recentArticles = ARTICLES.slice(0, 4);

  const toggleSaveArticle = (id: number) => {
    setSavedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id)
        : [...prev, id]
    );
  };

  const getCategoryName = (slug: string) => {
    const cat = CATEGORIES.find(c => c.id === slug);
    return cat?.name || slug;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SEO Meta Tags */}
      <head>
        <title>Career Advice South Africa - JobHelper Blog</title>
        <meta name="description" content="Expert career advice, job search tips, CV writing guides, and interview prep for South Africans. Your guide to landing your dream job." />
        <meta name="news_keywords" content="career advice, jobs, South Africa, CV, interview, salary" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Career Advice - JobHelper.co.za" />
        <meta property="og:description" content="Expert career advice for South Africans seeking their dream jobs." />
      </head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span>Career Advice</span>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Career <span className="text-yellow-300">Advice</span> Blog
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you succeed in the South African job market
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-2 flex gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="text-slate-400" size={22} />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
            <div>
              <p className="text-2xl font-bold">{ARTICLES.length}+</p>
              <p className="text-blue-100 text-sm">Articles</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{CATEGORIES.length - 1}</p>
              <p className="text-blue-100 text-sm">Categories</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-blue-100 text-sm">Readers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Categories */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-slate-600">Browse by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${
                  selectedCategory === category.id
                    ? `${category.color} text-white`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <category.icon size={16} />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Articles */}
            {selectedCategory === 'all' && !searchQuery && (
              <section className="mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="text-yellow-500" size={24} />
                  Featured Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredArticles.map(article => (
                    <Link
                      key={article.id}
                      href={`/career-advice/${article.slug}`}
                      className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all overflow-hidden"
                    >
                      <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <span className="text-4xl font-black text-white/30">{article.image}</span>
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                          {getCategoryName(article.category)}
                        </span>
                        <h3 className="font-bold text-lg text-slate-900 mt-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Clock size={14} /> {article.readTime} min
                            </span>
                            <span className="flex items-center gap-1">
                              <User size={14} /> {article.author}
                            </span>
                          </div>
                          <ArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" size={18} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* All Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  {selectedCategory === 'all' ? 'Recent Articles' : getCategoryName(selectedCategory)}
                </h2>
                <p className="text-slate-500 text-sm">{filteredArticles.length} articles</p>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="space-y-4">
                  {filteredArticles.map(article => (
                    <article
                      key={article.id}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-48 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-black text-white/30">{article.image}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              {getCategoryName(article.category)}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <Clock size={12} /> {article.readTime} min read
                            </span>
                          </div>
                          <Link href={`/career-advice/${article.slug}`}>
                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                              {article.title}
                            </h3>
                          </Link>
                          <p className="text-slate-500 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-4 text-xs text-slate-400">
                              <span className="flex items-center gap-1">
                                <User size={14} /> {article.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} /> {article.publishedAt}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => toggleSaveArticle(article.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  savedArticles.includes(article.id)
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-slate-300 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                              >
                                <Bookmark size={18} fill={savedArticles.includes(article.id) ? 'currentColor' : 'none'} />
                              </button>
                              <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Share2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                  <BookOpen size={48} className="mx-auto text-slate-300 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No articles found</h3>
                  <p className="text-slate-500 mb-4">Try different keywords or browse all categories</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-6">
            {/* Popular Articles */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={20} />
                Popular Articles
              </h3>
              <div className="space-y-4">
                {ARTICLES.slice(0, 5).map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/career-advice/${article.slug}`}
                    className="flex gap-3 group"
                  >
                    <span className="text-2xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-medium text-slate-700 group-hover:text-blue-600 text-sm line-clamp-2 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">{article.readTime} min read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg mb-2">Get Career Tips Weekly</h3>
                <p className="text-blue-100 text-sm">Join 50,000+ job seekers getting our weekly career advice</p>
              </div>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-slate-900 mb-3 outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 rounded-lg transition-colors">
                Subscribe
              </button>
              <p className="text-xs text-blue-200 text-center mt-3">No spam, unsubscribe anytime</p>
            </div>

            {/* Categories List */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.filter(c => c.id !== 'all').map(category => {
                  const count = ARTICLES.filter(a => a.category === category.id).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => { setSelectedCategory(category.id); setSearchQuery(''); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <category.icon size={16} />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded-full">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RSS Feed Link */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <p className="text-slate-500 text-sm mb-3">Stay updated with our RSS feed</p>
              <a 
                href="/feed.xml"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                </svg>
                Subscribe to RSS Feed
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}