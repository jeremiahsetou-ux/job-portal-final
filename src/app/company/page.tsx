"use client";

import React, { useState } from 'react';
import { Building2, MapPin, Briefcase, Search, ChevronRight, Star, TrendingUp, Filter } from 'lucide-react';
import Link from 'next/link';

const COMPANIES = [
  { name: 'Sasol', slug: 'sasol', industry: 'Chemicals & Energy', jobs: 189, location: 'Secunda & Sasolburg', featured: true },
  { name: 'Standard Bank', slug: 'standard-bank', industry: 'Banking', jobs: 245, location: 'Nationwide', featured: true },
  { name: 'Shoprite', slug: 'shoprite', industry: 'Retail', jobs: 156, location: 'Nationwide', featured: true },
  { name: 'Eskom', slug: 'eskom', industry: 'Energy', jobs: 134, location: 'Various Provinces', featured: true },
  { name: 'Transnet', slug: 'transnet', industry: 'Logistics', jobs: 98, location: 'Ports & Rail', featured: true },
  { name: 'MTN', slug: 'mtn', industry: 'Telecommunications', jobs: 87, location: 'Johannesburg', featured: false },
  { name: 'Absa', slug: 'absa', industry: 'Banking', jobs: 76, location: 'Nationwide', featured: false },
  { name: 'Vodacom', slug: 'vodacom', industry: 'Telecommunications', jobs: 65, location: 'Midrand', featured: false },
  { name: 'Pick n Pay', slug: 'pick-n-pay', industry: 'Retail', jobs: 112, location: 'Nationwide', featured: false },
  { name: 'Fidelity Services', slug: 'fidelity-services', industry: 'Security', jobs: 234, location: 'Nationwide', featured: false },
  { name: 'Department of Health', slug: 'dept-health', industry: 'Government', jobs: 445, location: 'All Provinces', featured: true },
  { name: 'South African Police', slug: 'saps', industry: 'Government', jobs: 567, location: 'Nationwide', featured: true },
];

const INDUSTRIES = ['All Industries', 'Banking', 'Retail', 'Energy', 'Government', 'Telecommunications', 'Logistics'];

export default function CompaniesDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const filteredCompanies = COMPANIES.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All Industries' || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredCompanies = COMPANIES.filter(c => c.featured);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Top South African Employers</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Discover career opportunities at South Africa's leading companies.
            Browse 500+ employers actively hiring.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search & Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
              />
            </div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none bg-white"
            >
              {INDUSTRIES.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Companies */}
        {!searchQuery && selectedIndustry === 'All Industries' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Employers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCompanies.map((company) => (
                <Link
                  key={company.slug}
                  href={`/company/${company.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                      {company.name.substring(0, 2)}
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">{company.industry}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {company.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {company.jobs} jobs</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Companies */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {searchQuery || selectedIndustry !== 'All Industries' ? 'Search Results' : 'All Companies'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Link
                key={company.slug}
                href={`/company/${company.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 font-bold">
                    {company.name.substring(0, 2)}
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>
                <p className="text-slate-500 text-sm mb-3">{company.industry}</p>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {company.location}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {company.jobs} jobs</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
