'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Filter, ArrowLeft } from 'lucide-react';
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

const categories = ['All', 'IT', 'Government', 'Banking', 'Retail', 'Engineering', 'Healthcare'];
const locations = ['All', 'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Remote'];

export default function FindJobsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (search) params.set('q', search);
        if (location && location !== 'All') params.set('l', location);
        if (category && category !== 'All') params.set('category', category);

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
  }, [search, category, location]);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Find Jobs</h1>
          <p className="text-primary-foreground/80 mt-2">Search thousands of jobs across South Africa</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg outline-none focus:border-primary"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
            ))}
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border rounded-lg outline-none focus:border-primary"
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
            ))}
          </select>
        </div>

        <p className="text-muted-foreground mb-6">{loading ? 'Loading...' : `${jobs.length} jobs found`}</p>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No jobs found. Try different search criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map(job => (
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