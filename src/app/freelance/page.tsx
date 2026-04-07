'use client';

import { ArrowLeft, Briefcase, DollarSign, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PLATFORMS = [
  { name: 'Upwork', desc: 'Global freelance platform', jobs: '10,000+' },
  { name: 'Fiverr', desc: 'Services marketplace', jobs: '5,000+' },
  { name: 'Toptal', desc: 'Premium talent network', jobs: '500+' },
  { name: 'PeoplePerHour', desc: 'European focused', jobs: '2,000+' },
];

export default function FreelancePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Freelance & Gig Work</h1>
          <p className="text-primary-foreground/80 mt-2">Find freelance opportunities and build your business</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Freelance Platforms</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORMS.map((platform, idx) => (
            <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">{platform.name}</h3>
              <p className="text-sm text-muted-foreground">{platform.desc}</p>
              <p className="text-xs text-muted-foreground mt-2">{platform.jobs} jobs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}