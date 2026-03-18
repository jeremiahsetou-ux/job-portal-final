"use client";

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building2, GraduationCap, ArrowRight, Menu, X, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white z-[100]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter italic">
            JOB<span className="text-slate-900">HELPER</span><span className="text-blue-600">.co.za</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 items-center">
            <Link href="/jobs-in/johannesburg" className="hover:text-blue-600 transition-colors">Find Jobs</Link>
            <Link href="/cv-builder" className="hover:text-blue-600 transition-colors">CV Builder</Link>
            <Link href="/z83-helper" className="hover:text-blue-600 transition-colors font-black text-blue-600">Z83 Guide</Link>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 font-bold shadow-md transition-all">
              Post a Job
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b absolute w-full left-0 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            <Link href="/jobs-in/johannesburg" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-900">Find Jobs</Link>
            <Link href="/cv-builder" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-900">CV Builder</Link>
            <Link href="/z83-helper" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-blue-600 uppercase tracking-wide">Z83 Form Helper</Link>
            <hr />
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
              Register
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-slate-900 border-b overflow-hidden py-24 md:py-32">
        <img 
          src="https://images.unsplash.com/photo-1523211788734-231d167993bb?auto=format&fit=crop&q=80&w=2000" 
          alt="South Africa Business" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
            Find Your Next Job in <span className="text-blue-500 italic">South Africa</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Connecting you to vacancies, learnerships, and Z83 guides from Sasol, Shoprite, and top SA employers.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-2xl border flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
            <div className="flex-1 flex items-center px-4 gap-3 border-r">
              <Search className="text-slate-400" size={20} />
              <input type="text" placeholder="Job title or company..." className="w-full py-4 outline-none font-medium text-slate-900 bg-transparent" />
            </div>
            <div className="flex-1 flex items-center px-4 gap-3">
              <MapPin className="text-slate-400" size={20} />
              <input type="text" placeholder="City or Province..." className="w-full py-4 outline-none font-medium text-slate-900 bg-transparent" />
            </div>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black hover:bg-blue-700 transition-all uppercase tracking-wide">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Popular Categories */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold italic tracking-tight uppercase">Browse Categories</h2>
            <p className="text-slate-500 font-medium">Popular paths for South African job seekers</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard icon={<GraduationCap size={32}/>} title="Learnerships" desc="Entry-level training programs for students" />
          <Link href="/z83-helper">
            <CategoryCard 
              icon={<Building2 size={32}/>} 
              title="Government Jobs" 
              label="HOT" 
              desc="SAPS, Health, & Education. Use our Z83 guide here." 
            />
          </Link>
          <Link href="/cv-builder">
            <CategoryCard 
              icon={<FileText size={32}/>} 
              title="Free CV Builder" 
              label="NEW"
              desc="Create a professional CV for the South African market." 
            />
          </Link>
        </div>
      </section>

      {/* Career Advice (Silo 3) */}
      <section className="py-16 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-black italic tracking-tight">CAREER ADVICE</h2>
            <Link href="/advice/write-cv-south-africa" className="text-blue-600 font-bold flex items-center gap-1">Read All Tips <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdviceCard title="How to write a professional CV" tag="CV TIPS" link="/advice/write-cv-south-africa" />
            <AdviceCard title="Latest 2021 Z83 Form Guide" tag="GOVERNMENT" link="/z83-helper" />
            <AdviceCard title="SAPS Ranking System" tag="CAREERS" link="#" />
            <AdviceCard title="Retail Interview Questions" tag="INTERVIEWS" link="#" />
          </div>
        </div>
      </section>

      {/* Footer (Crucial for Authority Site SEO) */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-xl font-black text-blue-500 tracking-tighter italic">JOBHELPER.co.za</div>
            <p className="text-slate-400 text-sm font-medium">The most trusted source for South African job seekers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Jobs by City</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="/jobs-in/johannesburg" className="hover:text-white">Johannesburg</Link></li>
              <li><Link href="/jobs-in/pretoria" className="hover:text-white">Pretoria</Link></li>
              <li><Link href="/jobs-in/durban" className="hover:text-white">Durban</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Top Companies</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="/company/sasol-jobs" className="hover:text-white">Sasol</Link></li>
              <li><Link href="/company/shoprite-jobs" className="hover:text-white">Shoprite</Link></li>
              <li><Link href="/company/transnet-jobs" className="hover:text-white">Transnet</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Tools</h4>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="/cv-builder" className="hover:text-white">CV Builder</Link></li>
              <li><Link href="/z83-helper" className="hover:text-white">Z83 Form Guide</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AdviceCard({ title, tag, link }: any) {
  return (
    <Link href={link} className="bg-white p-6 rounded-2xl border hover:shadow-lg transition-all group">
      <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">{tag}</span>
      <h3 className="text-lg font-bold mt-3 group-hover:text-blue-600 transition-colors">{title}</h3>
    </Link>
  );
}

function CategoryCard({ icon, title, desc, label }: any) {
  return (
    <div className="p-8 border rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group h-full bg-white">
      <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      {label && <span className="text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2 inline-block">{label}</span>}
      <h3 className="text-xl font-bold mb-2 italic uppercase">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  );
}