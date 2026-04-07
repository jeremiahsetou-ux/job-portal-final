'use client';

import { useSite } from '@/lib/site-context';
import { Search, MapPin, Briefcase, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MOCK_JOBS = [
  { id: 1, title: 'Software Developer', company: 'Tech Corp', location: 'Johannesburg', salary: 'R850k - R1.2m', type: 'Permanent', posted: '2 days ago', isRemote: false },
  { id: 2, title: 'Marketing Manager', company: 'Retail Co', location: 'Cape Town', salary: 'R600k - R850k', type: 'Permanent', posted: '1 day ago', isRemote: false },
  { id: 3, title: 'Data Analyst', company: 'Finance Ltd', location: 'Remote', salary: 'R500k - R700k', type: 'Remote', posted: '3 days ago', isRemote: true },
  { id: 4, title: 'Customer Support', company: 'Service Co', location: 'Durban', salary: 'R180k - R280k', type: 'Permanent', posted: '5 hours ago', isRemote: false },
];

export default function SitePage() {
  const { currentSite } = useSite();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentSite.name}</h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8">{currentSite.description}</p>

          {/* Search */}
          <div className="bg-card rounded-xl shadow-lg p-2 flex flex-col md:flex-row gap-2 max-w-2xl">
            <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="flex-1 bg-transparent outline-none"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
            <button className="bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary/90">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12,450</p>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">850+</p>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Monthly Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Jobs</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {MOCK_JOBS.map((job) => (
              <div key={job.id} className="border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  {job.isRemote && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Remote</span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1">{job.posted}</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t">
                  <span className="font-semibold">{job.salary}</span>
                  <Link href={`/sites/${currentSite.id}/jobs/${job.id}`} className="text-primary hover:underline flex items-center gap-1">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
          <p className="text-primary-foreground/80 mb-8">Create your CV and apply with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cv-builder" className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-white/90">
              Build Free CV
            </Link>
            <Link href="/z83-form" className="bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary-foreground/90">
              Z83 Form Generator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}