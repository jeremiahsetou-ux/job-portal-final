import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'South Africa Job Market News & Updates | JobHelper',
  description: 'Latest job market news, employment trends, salary insights, and career advice for South Africans.',
};

interface NewsArticle {
  id: string;
  headline: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

const NEWS_ARTICLES: NewsArticle[] = [
  { id: '1', headline: 'DPSA Salary Adjustment 2026 - What You Need to Know', excerpt: 'The Department of Public Service and Administration has announced new salary scales for government employees.', date: '2026-04-09', author: 'JobHelper Team', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop', category: 'Government' },
  { id: '2', headline: 'Top 50 Highest Paying Jobs in SA 2026', excerpt: 'Discover the highest paying jobs in South Africa this year across various industries.', date: '2026-04-08', author: 'JobHelper Team', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop', category: 'Salary Trends' },
  { id: '3', headline: 'How to Write a Winning CV in South Africa', excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.', date: '2026-04-07', author: 'JobHelper Team', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop', category: 'Career Advice' },
  { id: '4', headline: 'Remote Work Trends in South Africa 2026', excerpt: 'Discover which companies offer remote work and how to find legitimate work-from-home opportunities.', date: '2026-04-06', author: 'JobHelper Team', imageUrl: 'https://images.unsplash.com/photo-1593642532407-56b8b7d6c61a?w=600&h=400&fit=crop', category: 'Remote Work' },
  { id: '5', headline: 'SETA Learnerships: Your Path to Employment', excerpt: 'How to apply for SETA-funded learnerships and what qualifications you need.', date: '2026-04-05', author: 'JobHelper Team', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', category: 'Learnerships' },
  { id: '6', headline: 'Government Jobs Guide: Z83 Form Explained', excerpt: 'Everything you need to know about the Z83 government job application form.', date: '2026-04-04', author: 'JobHelper Team', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop', category: 'Government' },
];

const CATEGORIES = ['All', 'Government', 'Salary Trends', 'Career Advice', 'Remote Work', 'Learnerships'];

export default function NewsUpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-indigo-600 to-blue-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              South Africa Job Market News & Updates
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Stay informed with the latest employment trends, career advice, and job opportunities
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_ARTICLES.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.imageUrl})` }} />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary mb-2 inline-block">{article.category}</span>
                    <h2 className="text-lg font-bold mb-2 line-clamp-2">{article.headline}</h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('en-ZA')}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/news" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-xl p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Government Jobs</h3>
                <p className="text-sm text-muted-foreground mb-4">DPSA circulars and public service vacancies</p>
                <Link href="/government-jobs" className="text-primary font-medium hover:underline">View Jobs</Link>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Remote Work</h3>
                <p className="text-sm text-muted-foreground mb-4">Work from home opportunities</p>
                <Link href="/remote-gig-jobs" className="text-primary font-medium hover:underline">View Jobs</Link>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Career Advice</h3>
                <p className="text-sm text-muted-foreground mb-4">Tips and guides for job seekers</p>
                <Link href="/career-advice" className="text-primary font-medium hover:underline">View Articles</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}