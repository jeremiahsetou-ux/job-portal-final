'use client';

import React from 'react';
import { Briefcase, Globe, Clock, DollarSign, ArrowRight, ExternalLink, MapPin, Home, Laptop, Search } from 'lucide-react';
import Link from 'next/link';

const REMOTE_JOBS = [
  { title: 'Frontend Developer', company: 'UK Tech Co', salary: '£40,000 - £60,000', type: 'Full-time', source: 'Remote OK' },
  { title: 'Customer Success Manager', company: 'US SaaS', salary: '$50,000 - $70,000', type: 'Full-time', source: 'Remote' },
  { title: 'Content Writer', company: 'Global Media', salary: '$30,000 - $50,000', type: 'Contract', source: 'Remote' },
  { title: 'Virtual Assistant', company: 'E-Commerce Co', salary: '$25,000 - $40,000', type: 'Part-time', source: 'Remote' },
  { title: 'Data Analyst', company: 'FinTech Startup', salary: '€35,000 - €55,000', type: 'Full-time', source: 'Remote' },
  { title: 'Social Media Manager', company: 'Marketing Agency', salary: '$35,000 - $50,000', type: 'Full-time', source: 'Remote' },
  { title: 'Bookkeeper', company: 'Accounting Firm', salary: '$40,000 - $55,000', type: 'Full-time', source: 'Remote' },
  { title: 'UX Designer', company: 'Design Studio', salary: '€45,000 - €65,000', type: 'Full-time', source: 'Remote' },
];

const WORK_FROM_HOME = [
  { title: 'Call Centre Agent', company: 'Teleperformance', location: 'Home', salary: 'R15,000 - R20,000' },
  { title: 'Online Tutor', company: 'SuperNoza', location: 'Home', salary: 'R200/hour' },
  { title: 'Survey Completed', company: 'Survey Junkie', location: 'Home', salary: 'R50/survey' },
  { title: 'Data Entry', company: 'Amazon', location: 'Home', salary: 'R120/hour' },
];

const POPULAR_SEARCHES = [
  'Remote Developer Jobs',
  'Work From Home Data Entry',
  'Online Tutoring Jobs',
  'Freelance Writing Jobs',
  'Virtual Assistant SA',
  'Remote Customer Service',
];

export default function RemotePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <header className="bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-violet-200 text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ArrowRight size={14} />
            <span>Remote Jobs</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Remote & Work From Home</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            Work from anywhere in the world. Remote jobs for South Africans seeking 
            flexible work arrangements and international opportunities.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Global Remote Jobs */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Globe className="text-violet-600" />
            International Remote Jobs
          </h2>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-4">
            <p className="text-violet-700 text-sm">
              💡 Tip: These jobs pay in foreign currency. A R50,000/month remote salary can equal R90,000+ in SA!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REMOTE_JOBS.map((job, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-xs text-violet-600 font-semibold mb-2">
                  <Laptop size={14} /> {job.source}
                </div>
                <h3 className="font-bold text-slate-900">{job.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{job.company}</p>
                <div className="flex items-center gap-2 mt-3 text-sm text-emerald-600 font-semibold">
                  <DollarSign size={14} /> {job.salary}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work From Home SA */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Home className="text-violet-600" />
            Work From Home (South Africa)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORK_FROM_HOME.map((job, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900">{job.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{job.company}</p>
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
                  <MapPin size={14} /> {job.location}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="text-sm text-emerald-600 font-semibold">{job.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Searches</h2>
          <div className="flex flex-wrap gap-3">
            {POPULAR_SEARCHES.map((search, idx) => (
              <Link
                key={idx}
                href={`/find-jobs?q=${encodeURIComponent(search)}`}
                className="bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-colors text-slate-700"
              >
                {search}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-violet-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Find Your Remote Dream Job</h2>
          <p className="text-violet-100 max-w-xl mx-auto mb-6">
            Create a professional CV that stands out to international employers.
            Our free builder helps you compete globally.
          </p>
          <Link href="/cv-builder" className="bg-white text-violet-600 font-bold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors">
            Build Free CV
          </Link>
        </section>
      </main>
    </div>
  );
}