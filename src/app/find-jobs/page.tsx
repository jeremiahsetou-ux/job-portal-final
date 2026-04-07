'use client';

import { useState } from 'react';
import { Search, MapPin, Filter, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { JobCard } from '@/components/ui/job-card';

const mockJobs = [
  { id: '1', title: 'Software Developer', company: 'Standard Bank', location: 'Johannesburg', salary: 'R850k - R1.2m', type: 'Permanent', posted: '2 days ago' },
  { id: '2', title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', salary: 'R600k - R850k', type: 'Permanent', posted: '1 day ago' },
  { id: '3', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', salary: 'R180k - R280k', type: 'Government', posted: '5 hours ago', isRemote: false },
  { id: '4', title: 'Data Analyst', company: 'Finance Ltd', location: 'Cape Town', salary: 'R500k - R700k', type: 'Permanent', posted: '3 days ago' },
  { id: '5', title: 'Sales Consultant', company: 'Vodacom', location: 'Remote', salary: 'R15k - R25k + Comm', type: 'Remote', posted: '1 day ago', isRemote: true },
  { id: '6', title: 'HR Manager', company: 'MTN', location: 'Johannesburg', salary: 'R600k - R800k', type: 'Permanent', posted: '2 days ago' },
];

const categories = ['All', 'IT', 'Government', 'Banking', 'Retail', 'Engineering', 'Healthcare'];
const locations = ['All', 'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Remote'];

export default function FindJobsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = !search || job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || job.type === category;
    const matchesLocation = location === 'All' || job.location.includes(location) || (location === 'Remote' && job.isRemote);
    return matchesSearch && matchesCategory && matchesLocation;
  });

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

        <p className="text-muted-foreground mb-6">{filteredJobs.length} jobs found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map(job => (
            <JobCard key={job.id} {...job} posted={job.posted} isRemote={job.isRemote} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No jobs found. Try different search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}