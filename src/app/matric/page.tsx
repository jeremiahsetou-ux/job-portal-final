'use client';

import { ArrowLeft, GraduationCap, Clock, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const LEARNERSHIPS = [
  { title: 'Retail Learnership NQF L2', company: 'Shoprite', location: 'Nationwide', deadline: '30 April 2026' },
  { title: 'Call Centre NQF L3', company: 'FNB', location: 'Johannesburg', deadline: '15 May 2026' },
  { title: 'Business Admin NQF L3', company: 'Absa', location: 'Johannesburg', deadline: '30 April 2026' },
  { title: 'Hair & Beauty NQF L3', company: 'Sorbet', location: 'Nationwide', deadline: 'Open' },
  { title: 'Electrical NQF L4', company: 'Eskom', location: 'Pretoria', deadline: '15 May 2026' },
];

const INTERNSHIPS = [
  { title: 'Finance Internship', company: 'Standard Bank', location: 'Johannesburg', duration: '12 months' },
  { title: 'IT Support Internship', company: 'MTN', location: 'Johannesburg', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Coca-Cola', location: 'Johannesburg', duration: '12 months' },
  { title: 'HR Internship', company: 'Nedbank', location: 'Johannesburg', duration: '12 months' },
];

export default function MatricPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Matric & Entry Level Jobs</h1>
          <p className="text-primary-foreground/80 mt-2">Learnerships, internships and entry-level opportunities</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Available Learnerships</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {LEARNERSHIPS.map((item, idx) => (
              <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                  <GraduationCap className="w-4 h-4" /> Learnership
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {item.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Internships</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {INTERNSHIPS.map((item, idx) => (
              <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {item.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}