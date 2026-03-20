"use client";

import React from 'react';
import { MapPin, Briefcase, Building2, ExternalLink, ChevronRight, Users, TrendingUp, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';

// City Database with SEO-optimized content
const CITIES: Record<string, CityData> = {
  'johannesburg': {
    name: 'Johannesburg',
    province: 'Gauteng',
    description: 'Johannesburg is South Africa\'s economic powerhouse and largest city. Known as the City of Gold, it offers diverse opportunities in finance, mining, technology, and services sectors.',
    population: '5.6 million',
    majorIndustries: ['Finance & Banking', 'Mining', 'Technology', 'Retail', 'Manufacturing'],
    avgSalary: 'R280,000 - R450,000',
    jobCount: '3,200+',
    topEmployers: ['Standard Bank', 'FNB', 'Absa', 'Anglo American', 'MTN'],
  },
  'cape-town': {
    name: 'Cape Town',
    province: 'Western Cape',
    description: 'Cape Town is South Africa\'s legislative capital and a major tourist destination. It has a growing tech hub, strong tourism sector, and vibrant creative industries.',
    population: '4.6 million',
    majorIndustries: ['Tourism & Hospitality', 'Technology', 'Film & Media', 'Wine & Agriculture', 'Financial Services'],
    avgSalary: 'R260,000 - R420,000',
    jobCount: '2,800+',
    topEmployers: ['Woolworths', 'Pick n Pay', 'Amazon', 'Takealot', 'Naspers'],
  },
  'durban': {
    name: 'Durban',
    province: 'KwaZulu-Natal',
    description: 'Durban is South Africa\'s third-largest city and busiest port. It offers opportunities in logistics, manufacturing, tourism, and the growing Dube TradePort special economic zone.',
    population: '3.9 million',
    majorIndustries: ['Logistics & Transport', 'Manufacturing', 'Tourism', 'Sugar Industry', 'Chemicals'],
    avgSalary: 'R220,000 - R380,000',
    jobCount: '1,900+',
    topEmployers: ['Transnet', 'SAPREF', 'Toyota', 'Unilever', 'Spar'],
  },
  'pretoria': {
    name: 'Pretoria',
    province: 'Gauteng',
    description: 'Pretoria (Tshwane) is South Africa\'s administrative capital. It offers abundant government jobs, research institutions, automotive manufacturing, and a growing services sector.',
    population: '2.9 million',
    majorIndustries: ['Government & Public Service', 'Automotive', 'Research & Education', 'Healthcare', 'ICT'],
    avgSalary: 'R250,000 - R400,000',
    jobCount: '2,400+',
    topEmployers: ['Department of Health', 'BMW', 'University of Pretoria', 'CSIR', 'Denel'],
  },
  'port-elizabeth': {
    name: 'Port Elizabeth',
    province: 'Eastern Cape',
    description: 'Port Elizabeth (Gqeberha) is a major automotive manufacturing hub and coastal city. It offers opportunities in vehicle production, logistics, and renewable energy projects.',
    population: '1.2 million',
    majorIndustries: ['Automotive Manufacturing', 'Renewable Energy', 'Tourism', 'Agriculture', 'Logistics'],
    avgSalary: 'R200,000 - R340,000',
    jobCount: '980+',
    topEmployers: ['Volkswagen', 'Isuzu', 'Ford', 'Coega Development', 'Transnet'],
  },
  'bloemfontein': {
    name: 'Bloemfontein',
    province: 'Free State',
    description: 'Bloemfontein is South Africa\'s judicial capital. It offers opportunities in the legal sector, government services, agriculture, and education with a lower cost of living.',
    population: '560,000',
    majorIndustries: ['Government & Judiciary', 'Agriculture', 'Education', 'Healthcare', 'Retail'],
    avgSalary: 'R180,000 - R300,000',
    jobCount: '650+',
    topEmployers: ['University of Free State', 'Department of Justice', 'Sasol', 'Mediclinic', 'Shoprite'],
  },
};

interface CityData {
  name: string;
  province: string;
  description: string;
  population: string;
  majorIndustries: string[];
  avgSalary: string;
  jobCount: string;
  topEmployers: string[];
}

const DEFAULT_CITY: CityData = {
  name: 'City',
  province: 'South Africa',
  description: 'Explore job opportunities in this South African city. Browse available positions and connect with top employers.',
  population: '500,000+',
  majorIndustries: ['Various'],
  avgSalary: 'Market Related',
  jobCount: '100+',
  topEmployers: ['Various Companies'],
};

// Sample jobs for each city
const CITY_JOBS: Record<string, Array<{title: string; company: string; type: string; salary: string; posted: string}>> = {
  'johannesburg': [
    { title: 'Senior Software Developer', company: 'Standard Bank', type: 'Permanent', salary: 'R700k - R950k', posted: '1 day ago' },
    { title: 'Mining Engineer', company: 'Anglo American', type: 'Permanent', salary: 'R650k - R850k', posted: '2 days ago' },
    { title: 'Marketing Manager', company: 'MTN', type: 'Permanent', salary: 'R550k - R750k', posted: '3 days ago' },
    { title: 'Financial Analyst', company: 'FNB', type: 'Permanent', salary: 'R450k - R600k', posted: '4 days ago' },
    { title: 'HR Business Partner', company: 'Sasol', type: 'Permanent', salary: 'R500k - R680k', posted: '5 days ago' },
    { title: 'Retail Store Manager', company: 'Shoprite', type: 'Permanent', salary: 'R280k - R380k', posted: '1 week ago' },
  ],
  'cape-town': [
    { title: 'Frontend Developer', company: 'Takealot', type: 'Permanent', salary: 'R450k - R650k', posted: '1 day ago' },
    { title: 'Brand Manager', company: 'Woolworths', type: 'Permanent', salary: 'R500k - R700k', posted: '2 days ago' },
    { title: 'Hotel Manager', company: 'Sun International', type: 'Permanent', salary: 'R350k - R480k', posted: '3 days ago' },
    { title: 'Data Scientist', company: 'Naspers', type: 'Permanent', salary: 'R600k - R850k', posted: '4 days ago' },
    { title: 'Content Creator', company: 'Media24', type: 'Permanent', salary: 'R220k - R320k', posted: '5 days ago' },
    { title: 'Supply Chain Coordinator', company: 'Pick n Pay', type: 'Permanent', salary: 'R280k - R380k', posted: '1 week ago' },
  ],
  'durban': [
    { title: 'Harbor Operations Manager', company: 'Transnet', type: 'Permanent', salary: 'R550k - R750k', posted: '1 day ago' },
    { title: 'Production Supervisor', company: 'Unilever', type: 'Permanent', salary: 'R350k - R480k', posted: '2 days ago' },
    { title: 'Logistics Coordinator', company: 'SAPREF', type: 'Permanent', salary: 'R280k - R380k', posted: '3 days ago' },
    { title: 'Store Supervisor', company: 'Spar', type: 'Permanent', salary: 'R180k - R250k', posted: '4 days ago' },
    { title: 'Quality Assurance Officer', company: 'Toyota', type: 'Permanent', salary: 'R320k - R420k', posted: '5 days ago' },
    { title: 'Tourism Consultant', company: 'Tourism KZN', type: 'Contract', salary: 'R180k - R260k', posted: '1 week ago' },
  ],
  'pretoria': [
    { title: 'Policy Analyst', company: 'Department of Health', type: 'Permanent', salary: 'R450k - R620k', posted: '1 day ago' },
    { title: 'Research Scientist', company: 'CSIR', type: 'Permanent', salary: 'R480k - R680k', posted: '2 days ago' },
    { title: 'Production Engineer', company: 'BMW', type: 'Permanent', salary: 'R550k - R750k', posted: '3 days ago' },
    { title: 'Lecturer', company: 'University of Pretoria', type: 'Permanent', salary: 'R380k - R550k', posted: '4 days ago' },
    { title: 'Aerospace Engineer', company: 'Denel', type: 'Permanent', salary: 'R450k - R650k', posted: '5 days ago' },
    { title: 'Nurse Manager', company: 'Mediclinic', type: 'Permanent', salary: 'R350k - R480k', posted: '1 week ago' },
  ],
  'port-elizabeth': [
    { title: 'Assembly Line Supervisor', company: 'Volkswagen', type: 'Permanent', salary: 'R320k - R450k', posted: '1 day ago' },
    { title: 'Wind Farm Technician', company: 'Coega Wind', type: 'Permanent', salary: 'R280k - R380k', posted: '2 days ago' },
    { title: 'Production Planner', company: 'Isuzu', type: 'Permanent', salary: 'R350k - R480k', posted: '3 days ago' },
    { title: 'Marine Biologist', company: 'NMMU', type: 'Permanent', salary: 'R280k - R380k', posted: '4 days ago' },
    { title: 'Tourism Officer', company: 'NMB Tourism', type: 'Contract', salary: 'R200k - R280k', posted: '5 days ago' },
    { title: 'Quality Controller', company: 'Ford', type: 'Permanent', salary: 'R250k - R350k', posted: '1 week ago' },
  ],
  'bloemfontein': [
    { title: 'Court Interpreter', company: 'Department of Justice', type: 'Permanent', salary: 'R180k - R260k', posted: '1 day ago' },
    { title: 'Agricultural Specialist', company: 'Free State Dept of Agriculture', type: 'Permanent', salary: 'R320k - R450k', posted: '2 days ago' },
    { title: 'Lecturer', company: 'University of Free State', type: 'Permanent', salary: 'R350k - R500k', posted: '3 days ago' },
    { title: 'Process Technician', company: 'Sasol', type: 'Permanent', salary: 'R280k - R380k', posted: '4 days ago' },
    { title: 'Nursing Sister', company: 'Mediclinic', type: 'Permanent', salary: 'R220k - R320k', posted: '5 days ago' },
    { title: 'Department Manager', company: 'Shoprite', type: 'Permanent', salary: 'R200k - R280k', posted: '1 week ago' },
  ],
};

const DEFAULT_JOBS = [
  { title: 'General Worker', company: 'Various Companies', type: 'Permanent', salary: 'Market Related', posted: 'Recently' },
  { title: 'Administrator', company: 'Local Business', type: 'Permanent', salary: 'R150k - R220k', posted: 'Recently' },
  { title: 'Sales Consultant', company: 'Retail Group', type: 'Permanent', salary: 'R120k - R180k', posted: 'Recently' },
];

export default function CityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city.toLowerCase();
  const city = CITIES[citySlug] || { 
    ...DEFAULT_CITY, 
    name: params.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) 
  };
  
  const jobs = CITY_JOBS[citySlug] || DEFAULT_JOBS;
  const otherCities = Object.keys(CITIES).filter(c => c !== citySlug).slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100 mb-4 sm:mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <Link href="/find-jobs" className="hover:underline">Jobs</Link>
            <ChevronRight size={14} />
            <span>{city.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Jobs in {city.name}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8">
            {city.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
              <Briefcase className="mx-auto mb-2 text-yellow-300" size={24} />
              <p className="text-2xl sm:text-3xl font-bold">{city.jobCount}</p>
              <p className="text-blue-100 text-xs sm:text-sm">Available Jobs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
              <Building2 className="mx-auto mb-2 text-yellow-300" size={24} />
              <p className="text-2xl sm:text-3xl font-bold">{city.topEmployers.length}+</p>
              <p className="text-blue-100 text-xs sm:text-sm">Top Employers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
              <TrendingUp className="mx-auto mb-2 text-yellow-300" size={24} />
              <p className="text-lg sm:text-xl font-bold">{city.avgSalary}</p>
              <p className="text-blue-100 text-xs sm:text-sm">Avg. Salary</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">
              <Users className="mx-auto mb-2 text-yellow-300" size={24} />
              <p className="text-lg sm:text-xl font-bold">{city.population}</p>
              <p className="text-blue-100 text-xs sm:text-sm">Population</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Jobs */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder={`Search jobs in ${city.name}...`}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 outline-none text-sm"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
                  <Search size={16} /> Search
                </button>
              </div>
            </div>

            {/* Jobs List */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="text-blue-600 flex-shrink-0" size={20} />
                  Latest Jobs in {city.name}
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {jobs.length} jobs
                  </span>
                </h2>
                <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm">
                  <Filter size={16} /> Filter
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl p-3 sm:p-4 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base sm:text-lg">
                          {job.title}
                        </h3>
                        <p className="text-slate-500 text-sm">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {city.name}
                          </span>
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                        <span className="font-semibold text-slate-700 text-sm">{job.salary}</span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${job.type === 'Permanent' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm">
                        Apply Now
                      </button>
                      <button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-400">
                        <TrendingUp size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                  Load More Jobs
                </button>
              </div>
            </section>

            {/* About City */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                Working in {city.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {city.description} The city offers a diverse range of career opportunities 
                across multiple sectors including {city.majorIndustries.slice(0, 3).join(', ')}, and more.
              </p>
              
              <h3 className="font-bold text-slate-900 mb-2 sm:mb-3">Major Industries</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {city.majorIndustries.map((industry, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                    {industry}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-4 sm:space-y-6">
            {/* Top Employers */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                <Building2 className="text-blue-600 flex-shrink-0" size={18} />
                Top Employers
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {city.topEmployers.map((employer, index) => (
                  <Link
                    key={index}
                    href={`/company/${employer.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-700 text-sm sm:text-base">{employer}</span>
                    <ArrowRight size={14} className="text-slate-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
              <Link
                href="/company"
                className="mt-3 sm:mt-4 w-full text-center text-blue-600 font-semibold hover:underline text-sm block"
              >
                View All Companies →
              </Link>
            </section>

            {/* Salary Guide */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-4 sm:p-6 text-white">
              <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Salary Guide</h3>
              <p className="text-blue-100 text-sm mb-4">
                Average salary ranges in {city.name}:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Entry Level</span>
                  <span className="font-bold text-sm sm:text-base">R120k - R200k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Mid Level</span>
                  <span className="font-bold text-sm sm:text-base">R250k - R450k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Senior Level</span>
                  <span className="font-bold text-sm sm:text-base">R500k - R900k</span>
                </div>
              </div>
            </section>

            {/* Other Cities */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Jobs in Other Cities</h3>
              <div className="space-y-2">
                {otherCities.map((cityKey) => {
                  const otherCity = CITIES[cityKey];
                  return (
                    <Link
                      key={cityKey}
                      href={`/jobs/${cityKey}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <MapPin size={14} className="text-slate-400 flex-shrink-0" />
                      <span className="flex-1 text-sm text-slate-700">{otherCity.name}</span>
                      <span className="text-xs text-slate-400">{otherCity.jobCount}</span>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* CV Builder CTA */}
            <section className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 sm:p-6">
              <h3 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">Boost Your Application</h3>
              <p className="text-slate-600 text-sm mb-3 sm:mb-4">
                Create a professional CV tailored for {city.name} employers.
              </p>
              <Link
                href="/cv-builder"
                className="block w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2.5 sm:py-3 rounded-lg text-center transition-colors text-sm"
              >
                Build Your CV →
              </Link>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
