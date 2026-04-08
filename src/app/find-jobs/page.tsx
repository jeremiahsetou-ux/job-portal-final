'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { JobCard } from '@/components/ui/job-card';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  category?: string;
  createdAt: string;
}

const categories = [
  { id: 'all', label: 'All Jobs' },
  { id: 'Government', label: 'Government' },
  { id: 'Remote', label: 'Remote' },
  { id: 'IT', label: 'IT' },
  { id: 'Finance', label: 'Finance' },
  { id: 'Retail', label: 'Retail' },
  { id: 'Healthcare', label: 'Healthcare' },
];

export default function FindJobsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (activeCategory !== 'all') {
          // Handle "Remote" category differently - filter by location
          if (activeCategory === 'Remote') {
            params.set('l', 'Remote');
          } else {
            params.set('category', activeCategory);
          }
        }

        const res = await fetch(`/api/jobs?${params.toString()}`);
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Browse Jobs</h1>
          <p className="text-primary-foreground/80 mt-2">Explore opportunities by category</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Navigation Chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="text-muted-foreground mb-6">
          {loading ? 'Loading...' : `${jobs.length} jobs found`}
          {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
        </p>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No jobs found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary || ''}
                type={job.category || 'Permanent'}
                posted={new Date(job.createdAt).toLocaleDateString('en-ZA')}
                isRemote={job.location.toLowerCase() === 'remote'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}