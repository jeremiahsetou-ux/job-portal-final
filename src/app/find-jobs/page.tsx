"use client";

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter, ArrowRight, Building2, Clock } from 'lucide-react';
import Link from 'next/link';

const JOBS = [
  { id: 1, title: "Operations Manager", company: "Transnet", location: "Durban, KZN", type: "Permanent", date: "2h ago", salary: "Market Related" },
  { id: 2, title: "Graduate Intern", company: "Sasol", location: "Secunda, MP", type: "Internship", date: "5h ago", salary: "Stipend" },
  { id: 3, title: "Administrative Clerk", company: "Dept of Health", location: "Pretoria, GP", type: "Government", date: "1d ago", salary: "Grade 5" },
];

export default function FindJobs() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b h-20 flex items-center px-6 justify-between sticky top-0 z-50">
        <Link href="/" className="text-2xl font-black text-blue-600 italic uppercase">JOBHELPER</Link>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold text-sm">Post a Job</button>
      </nav>

      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Latest Vacancies</h1>
          <div className="flex gap-4 bg-white p-2 rounded-2xl border shadow-sm">
            <div className="flex-1 flex items-center px-4 gap-2">
              <Search size={20} className="text-slate-400" />
              <input placeholder="Job title or company..." className="w-full py-3 outline-none font-bold" />
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black uppercase text-sm">Search</button>
          </div>
        </div>

        <div className="space-y-4">
          {JOBS.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-black uppercase italic group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Building2 size={14}/> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  </div>
                </div>
                <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-black uppercase text-slate-600">{job.date}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <div className="flex gap-2">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase">{job.type}</span>
                  <span className="text-slate-400 text-[10px] font-black uppercase flex items-center gap-1"><Clock size={12}/> {job.salary}</span>
                </div>
                <button className="text-blue-600 font-black text-xs uppercase flex items-center gap-1 group-hover:underline">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}