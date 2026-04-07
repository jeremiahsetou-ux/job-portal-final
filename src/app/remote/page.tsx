'use client';

import { ArrowLeft, Globe, DollarSign, Home, Laptop } from 'lucide-react';
import Link from 'next/link';

const REMOTE_JOBS = [
  { title: 'Frontend Developer', company: 'UK Tech Co', salary: '£40,000 - £60,000', type: 'Full-time' },
  { title: 'Customer Success Manager', company: 'US SaaS', salary: '$50,000 - $70,000', type: 'Full-time' },
  { title: 'Content Writer', company: 'Global Media', salary: '$30,000 - $50,000', type: 'Contract' },
  { title: 'Virtual Assistant', company: 'E-Commerce Co', salary: '$25,000 - $40,000', type: 'Part-time' },
  { title: 'Data Analyst', company: 'FinTech Startup', salary: '€35,000 - €55,000', type: 'Full-time' },
  { title: 'Social Media Manager', company: 'Marketing Agency', salary: '$35,000 - $50,000', type: 'Full-time' },
];

export default function RemotePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Remote & Work From Home</h1>
          <p className="text-primary-foreground/80 mt-2">Work from anywhere in the world</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8">
          <p className="text-sm"><strong>💡 Tip:</strong> Remote jobs pay in foreign currency. A R50,000/month salary can equal R90,000+ in SA!</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">International Remote Jobs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REMOTE_JOBS.map((job, idx) => (
            <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs text-green-600 font-medium mb-2">
                <Laptop className="w-4 h-4" /> Remote
              </div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <div className="flex items-center gap-2 mt-3 text-green-600 font-semibold">
                <DollarSign className="w-4 h-4" /> {job.salary}
              </div>
              <div className="mt-3 pt-3 border-t">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">{job.type}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Work From Home (SA)</h2>
        <div className="bg-card border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Local Opportunities</span>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Call Centre Agent - Work from home (R15,000 - R20,000)</p>
            <p>• Online Tutor - R200/hour</p>
            <p>• Data Entry - R120/hour</p>
            <p>• Survey Completed - R50/survey</p>
          </div>
        </div>
      </div>
    </div>
  );
}