import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Home, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';

import { JobListing } from '@/components/job-listing';

export const metadata: Metadata = {
  title: 'Remote & Gig Jobs in South Africa | Work From Home | JobHelper',
  description: 'Find remote work, gig economy jobs, and freelance opportunities in South Africa. Updated daily with work from home positions.',
};

const REMOTE_JOBS = [
  { id: '1', slug: 'remote-data-analyst', title: 'Remote Data Analyst', company: 'Tech Corp', location: 'Remote', postedDate: '2 days ago', salary: 'R30,000 - R45,000', category: 'IT & Software' },
  { id: '2', slug: 'remote-customer-support', title: 'Work From Home Customer Support', company: 'Global Connect', location: 'Remote', postedDate: '3 days ago', salary: 'R18,000 - R25,000', category: 'Customer Service' },
  { id: '3', slug: 'remote-digital-marketer', title: 'Remote Digital Marketer', company: 'Media Agency', location: 'Remote', postedDate: '5 days ago', salary: 'R25,000 - R35,000', category: 'Marketing' },
  { id: '4', slug: 'remote-frontend-developer', title: 'Remote Frontend Developer', company: 'StartupXYZ', location: 'Remote', postedDate: '1 day ago', salary: 'R40,000 - R60,000', category: 'IT & Software' },
  { id: '5', slug: 'virtual-assistant', title: 'Virtual Assistant', company: 'AdminPro', location: 'Remote', postedDate: '4 days ago', salary: 'R15,000 - R22,000', category: 'Admin' },
  { id: '6', slug: 'remote-copywriter', title: 'Remote Copywriter', company: 'ContentKing', location: 'Remote', postedDate: '6 days ago', salary: 'R20,000 - R30,000', category: 'Content' },
];

const GIG_JOBS = [
  { id: 'g1', slug: 'uber-eats-delivery', title: 'Delivery Driver - Uber Eats', company: 'Uber Eats', location: 'Johannesburg', postedDate: 'Today', salary: 'R150-200/day', category: 'Gig' },
  { id: 'g2', slug: 'uber-driver', title: 'Rideshare Driver - Uber', company: 'Uber', location: 'Cape Town', postedDate: 'Today', salary: 'R180-250/day', category: 'Gig' },
  { id: 'g3', slug: 'freelance-tutor', title: 'Freelance Tutor', company: 'SuperProf', location: 'Remote', postedDate: 'Yesterday', salary: 'R200-400/hr', category: 'Gig' },
  { id: 'g4', slug: 'handyman-services', title: 'Handyman Services', company: 'HelloPeter', location: 'Durban', postedDate: '2 days ago', salary: 'R250-500/job', category: 'Gig' },
];

export default function RemoteGigJobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-green-600 to-teal-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Remote & Gig Jobs in South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Work from home opportunities, freelance gigs, and flexible employment
            </p>
            <Link href="/find-jobs?remote=true" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              <Globe className="w-5 h-5" />
              Find Remote Jobs
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Remote Job Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REMOTE_JOBS.map((job) => (
                <JobListing key={job.id} {...job} applyUrl={`/jobs/${job.slug}`} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/find-jobs?remote=true" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All Remote Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Gig Economy Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {GIG_JOBS.map((job) => (
                <JobListing key={job.id} {...job} applyUrl="#" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Tips for Remote Work Success</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Create a Workspace</h3>
                  <p className="text-sm text-muted-foreground">Dedicate a quiet space with good lighting and ergonomic setup.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stay Connected</h3>
                  <p className="text-sm text-muted-foreground">Use video calls and instant messaging to stay in touch with your team.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Manage Your Time</h3>
                  <p className="text-sm text-muted-foreground">Set clear boundaries and maintain a consistent schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}