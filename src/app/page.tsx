"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Search, FileText, Layout, ArrowRight, ShieldCheck, Zap, Star, MapPin, Building2, Briefcase, Bookmark, Clock, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const cities = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein'];
  
  const featuredJobs = [
    { id: 1, title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', salary: 'R850k - R1.2m', type: 'Permanent', posted: '2 days ago', logo: 'SB' },
    { id: 2, title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', salary: 'R600k - R850k', type: 'Permanent', posted: '1 day ago', logo: 'SS' },
    { id: 3, title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', salary: 'R180k - R280k', type: 'Government', posted: '5 hours ago', logo: 'GOV' },
    { id: 4, title: 'Sales Consultant', company: 'Vodacom', location: 'Cape Town', salary: 'R15k - R25k + Comm', type: 'Permanent', posted: '3 days ago', logo: 'VD' },
  ];

  const topEmployers = [
    { name: 'Standard Bank', jobs: 245, color: 'bg-blue-600' },
    { name: 'Sasol', jobs: 189, color: 'bg-green-600' },
    { name: 'Shoprite', jobs: 156, color: 'bg-red-600' },
    { name: 'Eskom', jobs: 134, color: 'bg-yellow-500' },
    { name: 'MTN', jobs: 98, color: 'bg-yellow-400' },
    { name: 'Absa', jobs: 87, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Careers24-style Header */}
      <header className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
              <ShieldCheck size={16} className="text-yellow-300" />
              <span>South Africa&apos;s #1 Job Portal</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-center mb-6 leading-tight">
            Find Your <span className="text-yellow-300">Dream Job</span> Today
          </h1>
          <p className="text-center text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Search thousands of jobs across South Africa. Build your CV and apply with confidence.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                <Search className="text-slate-400" size={22} />
                <input 
                  type="text" 
                  placeholder="Job title, keywords or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <MapPin className="text-slate-400" size={22} />
                <input 
                  type="text" 
                  placeholder="City or Province"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
                />
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                Search Jobs
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-yellow-300" />
              <span className="font-semibold">12,450 Jobs</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-yellow-300" />
              <span className="font-semibold">850+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-yellow-300" />
              <span className="font-semibold">Daily Updates</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        {/* Browse by Location */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Popular Locations</h2>
            <Link href="/find-jobs" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city, idx) => (
              <Link 
                key={city}
                href={`/jobs/${city.toLowerCase()}`}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg border border-slate-200 hover:border-blue-300 transition-all text-center group"
              >
                <MapPin className="mx-auto mb-2 text-slate-400 group-hover:text-blue-600 transition-colors" size={24} />
                <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{city}</span>
                <p className="text-xs text-slate-400 mt-1">{800 + idx * 150}+ jobs</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Jobs */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Featured Jobs</h2>
              <p className="text-slate-500 mt-1">Hand-picked opportunities for you</p>
            </div>
            <Link href="/find-jobs" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Browse All Jobs
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold text-sm">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                      <p className="text-slate-500 text-sm">{job.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-300 hover:text-blue-600 transition-colors">
                    <Bookmark size={20} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <span className="text-slate-600 font-semibold text-sm">{job.salary}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    job.type === 'Government' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Tools */}
        <section className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Career Tools</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Everything you need to land your dream job in South Africa</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/cv-builder" className="group text-center p-6 rounded-xl hover:bg-blue-50 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all">
                <FileText className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">CV Builder</h3>
              <p className="text-slate-500 mb-4">Create a professional South African CV in minutes</p>
              <span className="text-blue-600 font-semibold group-hover:underline">Create CV →</span>
            </Link>

            <Link href="/z83-helper" className="group text-center p-6 rounded-xl hover:bg-green-50 transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-all">
                <Zap className="text-green-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Z83 Helper</h3>
              <p className="text-slate-500 mb-4">Download and complete government forms correctly</p>
              <span className="text-green-600 font-semibold group-hover:underline">Get Started →</span>
            </Link>

            <Link href="/cv-builder" className="group text-center p-6 rounded-xl hover:bg-purple-50 transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-all">
                <Layout className="text-purple-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">CV Templates</h3>
              <p className="text-slate-500 mb-4">Professional templates designed for SA employers</p>
              <span className="text-purple-600 font-semibold group-hover:underline">Browse Templates →</span>
            </Link>
          </div>
        </section>

        {/* Top Employers */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Top Employers Hiring Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topEmployers.map((employer) => (
              <Link 
                key={employer.name}
                href={`/company/${employer.name.toLowerCase()}`}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all text-center group"
              >
                <div className={`w-12 h-12 ${employer.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold`}>
                  {employer.name.substring(0, 2)}
                </div>
                <h4 className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{employer.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{employer.jobs} jobs</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-900 rounded-2xl p-12 text-white" ref={useScrollAnimation().ref}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter end={15000} suffix="+" />
              </div>
              <p className="text-slate-400">Active Jobs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter end={850} suffix="+" />
              </div>
              <p className="text-slate-400">Companies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <p className="text-slate-400">Job Seekers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <p className="text-slate-400">Success Rate</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of South Africans who found their dream jobs through JobHelper
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cv-builder" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
              Create Free CV
            </Link>
            <Link href="/find-jobs" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors border border-blue-400">
              Browse Jobs
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">JobHelper.co.za</h3>
              <p className="text-sm leading-relaxed">South Africa&apos;s leading job portal helping thousands find their dream careers every day.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/find-jobs" className="hover:text-white transition-colors">Search Jobs</Link></li>
                <li><Link href="/cv-builder" className="hover:text-white transition-colors">Create CV</Link></li>
                <li><Link href="/career-advice" className="hover:text-white transition-colors">Career Advice</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/z83-helper" className="hover:text-white transition-colors">Z83 Form</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 JobHelper.co.za - Built for South Africa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
