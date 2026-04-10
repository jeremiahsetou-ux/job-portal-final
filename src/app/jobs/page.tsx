'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { JobListing } from '@/components/job-listing';

interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  postedDate: string;
  salary?: string;
  category?: string;
}

const MOCK_JOBS: Job[] = [
  { id: '1', slug: 'senior-software-developer', title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', postedDate: '2 days ago', salary: 'R45,000 - R65,000', category: 'IT & Software' },
  { id: '2', slug: 'marketing-manager', title: 'Marketing Manager', company: 'Sasol', location: 'Johannesburg', postedDate: '1 day ago', salary: 'R55,000 - R75,000', category: 'Marketing' },
  { id: '3', slug: 'data-analyst-remote', title: 'Data Analyst - Remote', company: 'Tech Corp', location: 'Remote', postedDate: '3 days ago', salary: 'R30,000 - R45,000', category: 'IT & Software' },
  { id: '4', slug: 'government-clerk', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', postedDate: '5 hours ago', salary: 'R18,000 - R25,000', category: 'Government' },
  { id: '5', slug: 'customer-success-manager', title: 'Customer Success Manager', company: 'Finance Ltd', location: 'Cape Town', postedDate: '1 day ago', salary: 'R35,000 - R50,000', category: 'Customer Service' },
  { id: '6', slug: 'hr-coordinator', title: 'HR Coordinator', company: 'MTN', location: 'Johannesburg', postedDate: '2 days ago', salary: 'R25,000 - R35,000', category: 'Human Resources' },
];

const CATEGORIES = ['All', 'IT & Software', 'Marketing', 'Government', 'Finance', 'Healthcare', 'Engineering', 'Sales', 'Customer Service'];

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredJobs = activeCategory === 'All' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-primary to-indigo-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Browse thousands of job opportunities in South Africa
            </p>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobListing 
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  postedDate={job.postedDate}
                  salary={job.salary}
                  category={job.category}
                  applyUrl={`/jobs/${job.slug}`}
                />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No jobs found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/government-jobs" className="bg-card border rounded-lg p-4 hover:border-primary transition-colors">
                <h3 className="font-semibold mb-1">Government Jobs</h3>
                <p className="text-sm text-muted-foreground">DPSA and public service</p>
              </Link>
              <Link href="/remote-gig-jobs" className="bg-card border rounded-lg p-4 hover:border-primary transition-colors">
                <h3 className="font-semibold mb-1">Remote & Gig</h3>
                <p className="text-sm text-muted-foreground">Work from home</p>
              </Link>
              <Link href="/learnerships-internships" className="bg-card border rounded-lg p-4 hover:border-primary transition-colors">
                <h3 className="font-semibold mb-1">Learnerships</h3>
                <p className="text-sm text-muted-foreground">Entry-level programs</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}