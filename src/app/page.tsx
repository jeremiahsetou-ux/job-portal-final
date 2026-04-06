"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Search, FileText, ArrowRight, ShieldCheck, Zap, Star, MapPin, Building2, Briefcase, Bookmark, Clock, TrendingUp, Users, Download, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// All available jobs database for search
const ALL_JOBS = [
  { id: 1, title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', salary: 'R850k - R1.2m', type: 'Permanent', posted: '2 days ago', logo: 'SB', category: 'IT' },
  { id: 2, title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', salary: 'R600k - R850k', type: 'Permanent', posted: '1 day ago', logo: 'SS', category: 'Marketing' },
  { id: 3, title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', salary: 'R180k - R280k', type: 'Government', posted: '5 hours ago', logo: 'GOV', category: 'Admin' },
  { id: 4, title: 'Sales Consultant', company: 'Vodacom', location: 'Cape Town', salary: 'R15k - R25k + Comm', type: 'Permanent', posted: '3 days ago', logo: 'VD', category: 'Sales' },
  { id: 5, title: 'Process Engineer', company: 'Sasol', location: 'Secunda', salary: 'R650k - R850k', type: 'Permanent', posted: '2 days ago', logo: 'SS', category: 'Engineering' },
  { id: 6, title: 'Personal Banker', company: 'Absa', location: 'Johannesburg', salary: 'R220k - R320k', type: 'Permanent', posted: '1 week ago', logo: 'AB', category: 'Banking' },
  { id: 7, title: 'Store Manager', company: 'Shoprite', location: 'Durban', salary: 'R280k - R380k', type: 'Permanent', posted: '3 days ago', logo: 'SR', category: 'Retail' },
  { id: 8, title: 'Electrical Engineer', company: 'Eskom', location: 'Pretoria', salary: 'R600k - R850k', type: 'Permanent', posted: '5 days ago', logo: 'ES', category: 'Engineering' },
  { id: 9, title: 'Train Driver', company: 'Transnet', location: 'Johannesburg', salary: 'R250k - R350k', type: 'Permanent', posted: '3 days ago', logo: 'TR', category: 'Transport' },
  { id: 10, title: 'Network Engineer', company: 'MTN', location: 'Johannesburg', salary: 'R550k - R750k', type: 'Permanent', posted: '2 days ago', logo: 'MTN', category: 'IT' },
  { id: 11, title: 'Brand Manager', company: 'Unilever', location: 'Durban', salary: 'R550k - R750k', type: 'Permanent', posted: '3 days ago', logo: 'UL', category: 'Marketing' },
  { id: 12, title: 'Mining Engineer', company: 'Anglo American', location: 'Rustenburg', salary: 'R700k - R950k', type: 'Permanent', posted: '1 day ago', logo: 'AA', category: 'Mining' },
];

const CITIES = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein'];

const TOP_EMPLOYERS = [
  { name: 'Standard Bank', slug: 'standard-bank', jobs: 245, color: 'bg-blue-600' },
  { name: 'Sasol', slug: 'sasol', jobs: 189, color: 'bg-green-600' },
  { name: 'Shoprite', slug: 'shoprite', jobs: 156, color: 'bg-red-600' },
  { name: 'Eskom', slug: 'eskom', jobs: 134, color: 'bg-yellow-500' },
  { name: 'MTN', slug: 'mtn', jobs: 98, color: 'bg-yellow-400' },
  { name: 'Absa', slug: 'absa', jobs: 87, color: 'bg-red-500' },
];

function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 2000, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(ALL_JOBS);
  const [showResults, setShowResults] = useState(false);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const handleSearch = () => {
    const filtered = ALL_JOBS.filter(job => {
      const matchesQuery = !searchQuery || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !location || 
        job.location.toLowerCase().includes(location.toLowerCase());
      
      return matchesQuery && matchesLocation;
    });
    
    setFilteredJobs(filtered);
    setShowResults(true);
    
    setTimeout(() => {
      document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const clearSearch = () => {
    setSearchQuery('');
    setLocation('');
    setFilteredJobs(ALL_JOBS);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-white/30">
              <ShieldCheck size={14} className="text-yellow-300" />
              <span>South Africa&apos;s #1 Job Portal</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 sm:mb-6 leading-tight px-2">
            Find Your <span className="text-yellow-300">Dream Job</span> Today
          </h1>
          <p className="text-center text-blue-100 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 px-4">
            Search thousands of jobs across South Africa. Build your CV and apply with confidence.
          </p>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-3 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 border-b md:border-b-0 md:border-r border-slate-200">
                <Search className="text-slate-400 flex-shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="Job title, keywords or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm sm:text-base min-w-0"
                />
              </div>
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3">
                <MapPin className="text-slate-400 flex-shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="City or Province"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm sm:text-base min-w-0"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg text-sm sm:text-base"
              >
                Search Jobs
              </button>
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 sm:mt-4">
              {['Remote', 'Entry Level', 'Graduate', 'Government'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => { setSearchQuery(filter); handleSearch(); }}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-10 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-yellow-300" />
              <span className="font-semibold">12,450 Jobs</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-yellow-300" />
              <span className="font-semibold">850+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-yellow-300" />
              <span className="font-semibold">Daily Updates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-20">

        {/* Search Results Section */}
        {showResults && (
          <section id="search-results" className="animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Search Results {filteredJobs.length > 0 && `(${filteredJobs.length} jobs found)`}
                </h2>
                {(searchQuery || location) && (
                  <p className="text-slate-500 text-sm mt-1">
                    {searchQuery && `for "${searchQuery}"`} {location && `in ${location}`}
                  </p>
                )}
              </div>
              <button 
                onClick={clearSearch}
                className="text-blue-600 font-semibold hover:underline text-sm self-start"
              >
                Clear Search
              </button>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {filteredJobs.slice(0, 6).map((job) => (
                  <div key={job.id} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold text-xs sm:text-sm flex-shrink-0">
                          {job.logo}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate">{job.title}</h3>
                          <p className="text-slate-500 text-xs sm:text-sm">{job.company}</p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 text-xs text-slate-400">
                            <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {job.posted}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleSaveJob(job.id)}
                        className={`transition-colors flex-shrink-0 ${savedJobs.includes(job.id) ? 'text-blue-600' : 'text-slate-300 hover:text-blue-600'}`}
                      >
                        <Bookmark size={18} fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 border-t border-slate-100">
                      <span className="text-slate-600 font-semibold text-xs sm:text-sm">{job.salary}</span>
                      <span className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${job.type === 'Government' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {job.type}
                      </span>
                    </div>
                    <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                      View Job Details
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">No jobs found</h3>
                <p className="text-slate-500 mb-4">Try different keywords or browse all jobs</p>
                <button 
                  onClick={clearSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                >
                  Browse All Jobs
                </button>
              </div>
            )}
          </section>
        )}

        {/* Browse by Location */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Popular Locations</h2>
            <Link href="/find-jobs" className="text-blue-600 font-semibold hover:underline flex items-center gap-1 text-sm">
              View all locations <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CITIES.map((city, idx) => (
              <Link
                key={city}
                href={`/jobs/${city.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-lg border border-slate-200 hover:border-blue-300 transition-all text-center group"
              >
                <MapPin className="mx-auto mb-2 text-slate-400 group-hover:text-blue-600 transition-colors" size={20} />
                <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-sm sm:text-base block truncate">{city}</span>
                <p className="text-xs text-slate-400 mt-1">{800 + idx * 150}+ jobs</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Jobs */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Featured Jobs</h2>
              <p className="text-slate-500 mt-1 text-sm">Hand-picked opportunities for you</p>
            </div>
            <Link href="/find-jobs" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors text-sm self-start">
              Browse All Jobs
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {ALL_JOBS.slice(0, 4).map((job) => (
              <div key={job.id} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold text-xs sm:text-sm flex-shrink-0">
                      {job.logo}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate">{job.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleSaveJob(job.id)}
                    className={`transition-colors flex-shrink-0 ${savedJobs.includes(job.id) ? 'text-blue-600' : 'text-slate-300 hover:text-blue-600'}`}
                  >
                    <Bookmark size={18} fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 border-t border-slate-100">
                  <span className="text-slate-600 font-semibold text-xs sm:text-sm">{job.salary}</span>
                  <span className={`text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${job.type === 'Government' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Tools */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">Career Tools</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base px-4">Everything you need to land your dream job in South Africa</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Link href="/cv-builder" className="group text-center p-5 sm:p-6 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-600 transition-all">
                <FileText className="text-blue-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1 sm:mb-2">CV Builder</h3>
              <p className="text-slate-500 mb-3 sm:mb-4 text-sm">Create a professional South African CV in minutes</p>
              <span className="text-blue-600 font-semibold group-hover:underline text-sm">Create CV →</span>
            </Link>

            <Link href="/z83-helper" className="group text-center p-5 sm:p-6 rounded-xl hover:bg-green-50 transition-all border border-transparent hover:border-green-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-600 transition-all">
                <Download className="text-green-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1 sm:mb-2">Z83 Form</h3>
              <p className="text-slate-500 mb-3 sm:mb-4 text-sm">Download official government job application forms</p>
              <span className="text-green-600 font-semibold group-hover:underline text-sm">Download →</span>
            </Link>

            <Link href="/career-advice" className="group text-center p-5 sm:p-6 rounded-xl hover:bg-purple-50 transition-all border border-transparent hover:border-purple-100 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-purple-600 transition-all">
                <GraduationCap className="text-purple-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1 sm:mb-2">Career Advice</h3>
              <p className="text-slate-500 mb-3 sm:mb-4 text-sm">Interview tips, salary guides and career growth</p>
              <span className="text-purple-600 font-semibold group-hover:underline text-sm">Learn More →</span>
            </Link>
          </div>
        </section>

        {/* Top Employers */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Top Employers</h2>
              <p className="text-slate-500 mt-1 text-sm">Leading companies hiring now</p>
            </div>
            <Link href="/company" className="text-blue-600 font-semibold hover:underline flex items-center gap-1 text-sm self-start">
              View all companies <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {TOP_EMPLOYERS.map((employer) => (
              <Link
                key={employer.slug}
                href={`/company/${employer.slug}`}
                className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-lg border border-slate-200 hover:border-blue-300 transition-all text-center group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${employer.color} rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  {employer.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-xs sm:text-sm block truncate">{employer.name}</span>
                <p className="text-xs text-slate-400 mt-1">{employer.jobs} jobs</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">
                <AnimatedCounter end={12450} />
              </p>
              <p className="text-blue-100 text-sm sm:text-base">Active Jobs</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">
                <AnimatedCounter end={850} suffix="+" />
              </p>
              <p className="text-blue-100 text-sm sm:text-base">Companies</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">
                <AnimatedCounter end={6} />
              </p>
              <p className="text-blue-100 text-sm sm:text-base">Major Cities</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">
                <AnimatedCounter end={50} suffix="K+" />
              </p>
              <p className="text-blue-100 text-sm sm:text-base">Monthly Visitors</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-50 rounded-2xl p-6 sm:p-8 lg:p-12 text-center border-2 border-yellow-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
            Join thousands of South Africans who found their perfect career match through JobHelper. 
            Create your profile today and get discovered by top employers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              href="/find-jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors text-sm sm:text-base"
            >
              Search Jobs
            </Link>
            <Link 
              href="/cv-builder"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors text-sm sm:text-base"
            >
              Build Your CV
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
