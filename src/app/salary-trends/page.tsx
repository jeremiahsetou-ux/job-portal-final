import Link from 'next/link';
import { Metadata } from 'next';
import { DollarSign, TrendingUp, Users, ArrowRight, Briefcase } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsCard } from '@/components/news-card';

export const metadata: Metadata = {
  title: 'Salary Trends South Africa – Market Reports & Benchmarks | JobHelper',
  description: 'Latest salary trends and market data for South Africa. Industry benchmarks, salary surveys, and negotiation tips.',
};

const SALARY_NEWS = [
  { id: '1', headline: 'Top 50 Highest Paying Jobs in SA 2026', date: '2026-04-07', author: 'JobHelper Team', excerpt: 'Discover the highest paying jobs in South Africa and which industries offer the best salaries.', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop' },
  { id: '2', headline: 'IT Salary Trends in South Africa', date: '2026-04-04', author: 'JobHelper Team', excerpt: 'Latest salary data for software developers, data scientists, and IT professionals in SA.', imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop' },
  { id: '3', headline: 'How to Negotiate Your Salary', date: '2026-03-30', author: 'JobHelper Team', excerpt: 'Proven strategies for negotiating a higher salary offer in South Africa.', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop' },
];

const INDUSTRY_SALARIES = [
  { industry: 'Information Technology', avgSalary: 'R650,000', growth: '+12%' },
  { industry: 'Finance & Banking', avgSalary: 'R580,000', growth: '+8%' },
  { industry: 'Healthcare', avgSalary: 'R520,000', growth: '+10%' },
  { industry: 'Mining', avgSalary: 'R480,000', growth: '+5%' },
  { industry: 'Retail & FMCG', avgSalary: 'R350,000', growth: '+6%' },
  { industry: 'Construction', avgSalary: 'R380,000', growth: '+7%' },
];

export default function SalaryTrendsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Salary Trends South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Market Reports, Industry Benchmarks & Salary Insights
            </p>
            <Link
              href="/salary-guide"
              className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              <DollarSign className="w-5 h-5" />
              View Salary Guide
            </Link>
          </div>
        </section>

        {/* News Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Latest Salary Reports</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {SALARY_NEWS.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* Industry Salaries */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Industry Average Salaries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRY_SALARIES.map((item) => (
                <div key={item.industry} className="bg-card border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{item.industry}</h3>
                    <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {item.growth}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{item.avgSalary}</p>
                  <p className="text-sm text-muted-foreground">Average annual salary</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Salary Negotiation Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Before the Interview</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Research market rates for your role</li>
                    <li>• Know your worth and bottom line</li>
                    <li>• Prepare your achievements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">During Negotiation</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Wait for the offer first</li>
                    <li>• Present competing offers</li>
                    <li>• Consider total compensation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}