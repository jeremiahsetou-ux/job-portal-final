import Link from 'next/link';
import { Metadata } from 'next';
import { Home, Globe, ArrowRight, MapPin, Clock, Briefcase, DollarSign } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsCard } from '@/components/news-card';

export const metadata: Metadata = {
  title: 'Remote & Gig Jobs South Africa – Work From Home & Freelance | JobHelper',
  description: 'Find remote work, gig economy jobs, and freelance opportunities in South Africa. Work from home jobs and flexible employment.',
};

const REMOTE_JOBS = [
  { id: '1', title: 'Remote Data Analyst', company: 'Tech Corp', location: 'Remote', category: 'IT', postedAt: '1 day ago', remote: true },
  { id: '2', title: 'Work From Home Customer Support', company: 'Global Connect', location: 'Remote', category: 'Customer Service', postedAt: '2 days ago', remote: true },
  { id: '3', title: 'Remote Digital Marketer', company: 'Media Agency', location: 'Remote', category: 'Marketing', postedAt: '3 days ago', remote: true },
  { id: '4', title: 'Remote Software Developer', company: 'StartupXYZ', location: 'Remote', category: 'IT', postedAt: '5 hours ago', remote: true },
  { id: '5', title: 'Freelance Graphic Designer', company: 'CreativeHub', location: 'Remote', category: 'Design', postedAt: '1 day ago', remote: true },
  { id: '6', title: 'Part-Time Virtual Assistant', company: 'AdminPro', location: 'Remote', category: 'Admin', postedAt: '2 days ago', remote: true },
];

const GIG_JOBS = [
  { id: 'g1', title: 'Delivery Driver - Uber Eats', company: 'Uber Eats', location: 'Johannesburg', category: 'Gig', postedAt: 'Today', pay: 'R150-200/day' },
  { id: 'g2', title: 'Rideshare Driver - Uber', company: 'Uber', location: 'Cape Town', category: 'Gig', postedAt: 'Today', pay: 'R180-250/day' },
  { id: 'g3', title: 'Freelance Tutor', company: 'SuperProf', location: 'Remote', category: 'Gig', postedAt: 'Yesterday', pay: 'R200-400/hr' },
  { id: 'g4', title: 'Handyman Services', company: 'HelloPeter', location: 'Durban', category: 'Gig', postedAt: '2 days ago', pay: 'R250-500/job' },
];

const NEWS_ARTICLES = [
  { id: '1', headline: 'Remote Work Trends in South Africa 2026', date: '2026-04-06', author: 'JobHelper Team', excerpt: 'Discover which companies offer remote work and how to find legitimate work-from-home opportunities.', imageUrl: 'https://images.unsplash.com/photo-1593642532407-56b8b7d6c61a?w=600&h=400&fit=crop' },
  { id: '2', headline: 'Top 10 Remote-Friendly Companies in SA', date: '2026-04-02', author: 'JobHelper Team', excerpt: 'List of South African companies known for their remote work policies and flexible arrangements.', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop' },
  { id: '3', headline: 'Setting Up Your Home Office for Success', date: '2026-03-25', author: 'JobHelper Team', excerpt: 'Essential tips for creating a productive workspace when working from home.', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop' },
];

export function generateStaticParams() {
  return [{ slug: 'remote-gig-jobs' }];
}

export default function RemoteGigJobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Remote & Gig Jobs South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Work From Home, Freelance Opportunities & Flexible Employment
            </p>
            <Link
              href="/find-jobs?remote=true"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              <Globe className="w-5 h-5" />
              Find Remote Jobs
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Remote Work News & Insights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {NEWS_ARTICLES.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Remote Job Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {REMOTE_JOBS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.company}</span>
                    <span className="flex items-center gap-1"><Home className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.postedAt}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/find-jobs?remote=true" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All Remote Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Gig Economy Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {GIG_JOBS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.postedAt}</span>
                    <span className="flex items-center gap-1 text-green-600 font-medium"><DollarSign className="w-4 h-4" /> {job.pay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Remote Work Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Work From Home Tips</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Create a dedicated workspace</li>
                    <li>• Set clear work boundaries</li>
                    <li>• Maintain regular hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Remote Job Search</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Check company websites</li>
                    <li>• Use remote job boards</li>
                    <li>• Network online</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Equipment Guide</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Reliable internet</li>
                    <li>• Good headset/mic</li>
                    <li>• Ergonomic setup</li>
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