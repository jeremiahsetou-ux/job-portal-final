'use client';

import React from 'react';
import { Briefcase, GraduationCap, Clock, MapPin, ExternalLink, ArrowRight, Users, Award, Building2 } from 'lucide-react';
import Link from 'next/link';

const LEARNERSHIPS = [
  { title: 'Retail Learnership (NQF Level 2)', company: 'Shoprite', location: 'Nationwide', type: 'Retail', deadline: '30 April 2026' },
  { title: 'Furniture Manufacturing NQF Level 3', company: 'Woolworths', location: 'Cape Town', type: 'Manufacturing', deadline: '15 May 2026' },
  { title: 'Call Centre NQF Level 3', company: 'FNB', location: 'Johannesburg', type: 'Banking', deadline: '31 May 2026' },
  { title: 'Business Administration NQF Level 3', company: 'Absa', location: 'Johannesburg', type: 'Banking', deadline: '30 April 2026' },
  { title: 'Hair & Beauty NQF Level 3', company: 'Sorbet', location: 'Nationwide', type: 'Beauty', deadline: 'Open' },
  { title: 'Electrical NQF Level 4', company: 'Eskom', location: 'Pretoria', type: 'Engineering', deadline: '15 May 2026' },
];

const INTERNSHIPS = [
  { title: 'Finance Internship', company: 'Standard Bank', location: 'Johannesburg', duration: '12 months', deadline: '30 April 2026' },
  { title: 'IT Support Internship', company: 'MTN', location: 'Johannesburg', duration: '6 months', deadline: '31 May 2026' },
  { title: 'Marketing Internship', company: 'Coca-Cola', location: 'Johannesburg', duration: '12 months', deadline: '15 May 2026' },
  { title: 'Human Resources Internship', company: 'Nedbank', location: 'Johannesburg', duration: '12 months', deadline: '30 April 2026' },
  { title: 'Supply Chain Internship', company: 'Shoprite', location: 'Durban', duration: '12 months', deadline: 'Open' },
  { title: 'Data Analysis Internship', company: 'Discovery', location: 'Johannesburg', duration: '6 months', deadline: '31 May 2026' },
];

const ENTRY_JOBS = [
  { title: 'Customer Service Agent', company: 'Vodacom', location: 'Johannesburg', salary: 'R12,000 - R15,000', type: 'Permanent' },
  { title: 'Sales Assistant', company: 'Pick n Pay', location: 'Durban', salary: 'R10,000 - R12,000', type: 'Permanent' },
  { title: 'General Worker', company: 'Eskom', location: 'Pretoria', salary: 'R8,000 - R10,000', type: 'Permanent' },
  { title: 'Security Officer', company: 'Bidvest', location: 'Johannesburg', salary: 'R10,000 - R12,000', type: 'Permanent' },
  { title: 'Data Capturer', company: 'Department of Home Affairs', location: 'Pretoria', salary: 'R12,000 - R15,000', type: 'Contract' },
  { title: 'Admin Clerk', company: 'SAPS', location: 'Nationwide', salary: 'R11,000 - R14,000', type: 'Permanent' },
];

export default function MatricPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <header className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-emerald-200 text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ArrowRight size={14} />
            <span>Matric & Entry Level</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Matric-Only Opportunities</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Learnerships, internships and entry-level jobs for matriculants and young South Africans.
            No experience required - start your career here.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Learnerships */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <GraduationCap className="text-emerald-600" />
            Available Learnerships
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LEARNERSHIPS.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold mb-2">
                  <Award size={14} /> {item.type}
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.company}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                  <span className="text-sm text-orange-600 font-semibold flex items-center gap-1">
                    <Clock size={14} /> {item.deadline}
                  </span>
                  <ExternalLink className="text-slate-400" size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internships */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="text-emerald-600" />
            Internships
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERNSHIPS.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.company}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {item.duration}</span>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-sm text-orange-600 font-semibold flex items-center gap-1">
                    <Clock size={14} /> Deadline: {item.deadline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Entry Level Jobs */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Users className="text-emerald-600" />
            Entry Level Jobs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ENTRY_JOBS.map((job, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900">{job.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{job.company}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                  <span className="font-semibold text-emerald-600">{job.salary}</span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Help Getting Started?</h2>
          <p className="text-emerald-100 max-w-xl mx-auto mb-6">
            Our free Z83 form generator helps you apply to government learnerships.
            Build your CV and start your career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cv-builder" className="bg-white text-emerald-600 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">
              Build Free CV
            </Link>
            <Link href="/z83-form" className="bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors border border-emerald-400">
              Z83 Form Generator
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}