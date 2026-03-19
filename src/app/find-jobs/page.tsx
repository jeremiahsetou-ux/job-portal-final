"use client";

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter, ArrowRight, Building2, Clock, Bookmark, ChevronDown, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const JOBS = [
  { id: 1, title: "Senior Software Developer", company: "Standard Bank", location: "Johannesburg, GP", type: "Permanent", date: "2h ago", salary: "R850k - R1.2m pa", category: "IT", logo: "SB" },
  { id: 2, title: "Marketing Manager", company: "Sasol", location: "Sandton, GP", type: "Permanent", date: "5h ago", salary: "R600k - R850k pa", category: "Marketing", logo: "SS" },
  { id: 3, title: "Administrative Clerk", company: "Dept of Health", location: "Pretoria, GP", type: "Government", date: "1d ago", salary: "R180k - R280k pa", category: "Admin", logo: "GOV" },
  { id: 4, title: "Sales Consultant", company: "Vodacom", location: "Cape Town, WC", type: "Permanent", date: "3h ago", salary: "R15k - R25k + Comm", category: "Sales", logo: "VD" },
  { id: 5, title: "Graduate Programme", company: "Absa", location: "Johannesburg, GP", type: "Internship", date: "1d ago", salary: "R15k pm stipend", category: "Finance", logo: "AB" },
  { id: 6, title: "Civil Engineer", company: "Aurecon", location: "Durban, KZN", type: "Permanent", date: "2d ago", salary: "R500k - R700k pa", category: "Engineering", logo: "AU" },
];

const FILTERS = {
  jobType: ["Permanent", "Contract", "Internship", "Government"],
  location: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape"],
  category: ["IT", "Finance", "Marketing", "Engineering", "Sales", "Admin"],
  salary: ["Under R200k", "R200k - R500k", "R500k - R1m", "Above R1m"],
};

export default function FindJobs() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Search Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Find Jobs</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Find Your Next Career Opportunity</h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
              <Search className="text-slate-400" size={22} />
              <input 
                type="text" 
                placeholder="Job title, keywords or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3">
              <MapPin className="text-slate-400" size={22} />
              <input 
                type="text" 
                placeholder="City or Province"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="flex-1 outline-none text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-blue-600" />
                <h3 className="font-bold text-slate-900">Filters</h3>
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-slate-700 mb-3">Job Type</h4>
                <div className="space-y-2">
                  {FILTERS.jobType.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes(type)}
                        onChange={() => toggleFilter(type)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm text-slate-700 mb-3">Province</h4>
                <div className="space-y-2">
                  {FILTERS.location.map(loc => (
                    <label key={loc} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes(loc)}
                        onChange={() => toggleFilter(loc)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-600">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <h4 className="font-semibold text-sm text-slate-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {FILTERS.category.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes(cat)}
                        onChange={() => toggleFilter(cat)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Alert Box */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2">Get Job Alerts</h4>
              <p className="text-sm text-blue-700 mb-4">Never miss an opportunity. Get jobs sent to your inbox.</p>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-blue-200 mb-3 outline-none focus:border-blue-500"
              />
              <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600"><span className="font-bold text-slate-900">{JOBS.length}</span> jobs found</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sort by:</span>
                <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500">
                  <option>Most Recent</option>
                  <option>Most Relevant</option>
                  <option>Highest Salary</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {JOBS.map((job) => (
                <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold text-sm">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                        <p className="text-slate-600">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                          <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                          <span className="flex items-center gap-1"><Clock size={14} /> {job.date}</span>
                          <span className="flex items-center gap-1"><Briefcase size={14} /> {job.category}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-slate-300 hover:text-blue-600 transition-colors">
                      <Bookmark size={22} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-slate-700">{job.salary}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        job.type === 'Government' ? 'bg-green-100 text-green-700' : 
                        job.type === 'Internship' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-white border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-8 py-3 rounded-xl transition-all hover:shadow-md">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
