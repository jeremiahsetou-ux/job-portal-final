import Link from 'next/link';
import { Metadata } from 'next';
import { GraduationCap, Users, ArrowRight, MapPin, Clock, Briefcase, Calendar } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsCard } from '@/components/news-card';

export const metadata: Metadata = {
  title: 'Learnerships & Internships South Africa | JobHelper',
  description: 'Find learnerships, internships, and entry-level programs in South Africa. Graduate jobs, training opportunities, and youth employment.',
};

const LEARNERSHIPS = [
  { id: '1', title: 'ICT Learnership - Level 4', company: 'MICT SETA', location: 'Johannesburg', category: 'ICT', duration: '12 months', closing: '2026-04-20' },
  { id: '2', title: 'Business Administration NQF 4', company: 'Services SETA', location: 'Cape Town', category: 'Business', duration: '12 months', closing: '2026-04-25' },
  { id: '3', title: 'Electrical Engineering Apprenticeship', company: 'Eskom', location: 'Pretoria', category: 'Engineering', duration: '36 months', closing: '2026-04-30' },
  { id: '4', title: 'Marketing Learnership NQF 5', company: 'W&RSETA', location: 'Durban', category: 'Marketing', duration: '12 months', closing: '2026-04-15' },
];

const INTERNSHIPS = [
  { id: 'i1', title: 'Finance Graduate Programme 2026', company: 'Standard Bank', location: 'Johannesburg', category: 'Finance', duration: '12 months', closing: '2026-04-30' },
  { id: 'i2', title: 'HR Internship', company: 'MTN South Africa', location: 'Johannesburg', category: 'HR', duration: '6 months', closing: '2026-04-18' },
  { id: 'i3', title: 'IT Graduate Development', company: 'SAPS', location: 'Pretoria', category: 'IT', duration: '12 months', closing: '2026-04-22' },
  { id: 'i4', title: 'Marketing Internship', company: 'Coca-Cola', location: 'Johannesburg', category: 'Marketing', duration: '6 months', closing: '2026-04-12' },
];

const NEWS_ARTICLES = [
  { id: '1', headline: 'SETA Learnerships: Your Path to Employment', date: '2026-04-07', author: 'JobHelper Team', excerpt: 'How to apply for SETA-funded learnerships and what qualifications you need.', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop' },
  { id: '2', headline: 'Graduate Programmes vs Internships: What\'s the Difference?', date: '2026-04-04', author: 'JobHelper Team', excerpt: 'Understanding the key differences between graduate programmes and internships.', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop' },
  { id: '3', headline: 'Youth Employment Initiatives 2026', date: '2026-03-28', author: 'JobHelper Team', excerpt: 'Government programmes helping young South Africans find employment.', imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop' },
];

export function generateStaticParams() {
  return [{ slug: 'learnerships-internships' }];
}

export default function LearnershipsInternshipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learnerships & Internships
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Entry-Level Programs, Training Opportunities & Youth Employment
            </p>
            <Link
              href="/matric"
              className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              <GraduationCap className="w-5 h-5" />
              For Matriculants
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Latest News & Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {NEWS_ARTICLES.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Available Learnerships</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {LEARNERSHIPS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.duration}</span>
                    <span className="text-orange-600 font-medium">Closes: {job.closing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Graduate Internships</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {INTERNSHIPS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.duration}</span>
                    <span className="text-orange-600 font-medium">Closes: {job.closing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">For Matriculants & Young Job Seekers</h2>
              <p className="text-muted-foreground mb-6">
                Just finished matric? Explore our dedicated resources for first-time job seekers and learnership opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/matric" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90">
                  Matric Resources
                </Link>
                <Link href="/learn" className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10">
                  Free Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}