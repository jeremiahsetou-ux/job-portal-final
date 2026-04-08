import Link from 'next/link';
import { Metadata } from 'next';
import { GraduationCap, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsCard } from '@/components/news-card';

export const metadata: Metadata = {
  title: 'Career Advice – CV Tips, Interviews & Skills Development | JobHelper',
  description: 'Expert career advice for South Africans. CV tips, interview guides, skills development, and career growth strategies.',
};

const CV_TIPS = [
  { id: '1', headline: 'How to Write a Winning CV in South Africa', date: '2026-04-07', author: 'JobHelper Team', excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop' },
  { id: '2', headline: 'Top CV Formats for SA Employers', date: '2026-04-04', author: 'JobHelper Team', excerpt: 'Which CV format works best for different industries in South Africa.', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop' },
  { id: '3', headline: 'Common CV Mistakes to Avoid', date: '2026-03-30', author: 'JobHelper Team', excerpt: 'Don\'t let these common errors ruin your chances of landing an interview.', imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop' },
];

const INTERVIEW_GUIDES = [
  { id: '4', headline: 'How to Ace Your Job Interview', date: '2026-04-05', author: 'JobHelper Team', excerpt: 'Master the interview process with these proven tips and preparation strategies.', imageUrl: 'https://images.unsplash.com/photo-1567014302777-0a1292e51c0c?w=600&h=400&fit=crop' },
  { id: '5', headline: 'Common Interview Questions & Answers', date: '2026-04-01', author: 'JobHelper Team', excerpt: 'Prepare for the most frequently asked interview questions in South Africa.', imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop' },
  { id: '6', headline: 'Body Language Tips for Interviews', date: '2026-03-28', author: 'JobHelper Team', excerpt: 'Make a positive impression with the right body language during your interview.', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop' },
];

export default function CareerAdvicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Career Advice
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              CV Tips, Interview Guides & Skills Development for South Africans
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cv-builder" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                <FileText className="w-5 h-5 inline mr-2" />
                Build Your CV
              </Link>
              <Link href="/interview" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10">
                Interview Prep
              </Link>
            </div>
          </div>
        </section>

        {/* CV Tips Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">CV Writing Tips</h2>
              <Link href="/cv-builder" className="text-primary font-medium hover:underline">View All</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CV_TIPS.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* Interview Guides Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Interview Preparation</h2>
              <Link href="/interview" className="text-primary font-medium hover:underline">View All</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {INTERVIEW_GUIDES.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Career Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-xl p-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">CV Builder</h3>
                <p className="text-sm text-muted-foreground mb-4">Create a professional CV in minutes</p>
                <Link href="/cv-builder" className="text-primary font-medium hover:underline">Get Started</Link>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Interview Prep</h3>
                <p className="text-sm text-muted-foreground mb-4">Practice with common interview questions</p>
                <Link href="/interview" className="text-primary font-medium hover:underline">Prepare Now</Link>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Learn Skills</h3>
                <p className="text-sm text-muted-foreground mb-4">Upskill with free courses and resources</p>
                <Link href="/learn" className="text-primary font-medium hover:underline">Explore Courses</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}