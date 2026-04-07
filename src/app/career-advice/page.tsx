'use client';

import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ARTICLES = [
  { title: 'How to Write a Winning CV in South Africa', date: '2026-04-01', author: 'JobHelper Team' },
  { title: 'Top 50 Highest Paying Jobs in SA 2026', date: '2026-03-28', author: 'JobHelper Team' },
  { title: 'Government Jobs Guide: Z83 Form Explained', date: '2026-03-25', author: 'JobHelper Team' },
  { title: 'Remote Work Trends in South Africa', date: '2026-03-20', author: 'JobHelper Team' },
  { title: 'How to Ace Your Interview', date: '2026-03-15', author: 'JobHelper Team' },
];

export default function CareerAdvicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Career Advice</h1>
          <p className="text-primary-foreground/80 mt-2">Tips, guides and insights for your career</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-4">
          {ARTICLES.map((article, idx) => (
            <Link
              key={idx}
              href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {new Date(article.date).toLocaleDateString()}</span>
              </div>
              <span className="text-primary text-sm flex items-center gap-1 mt-3">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}