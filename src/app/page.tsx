"use client";

import React, { useState } from 'react';
import { Search, MapPin, Building2, GraduationCap, ArrowRight, Menu, X, FileText } from 'lucide-react';
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

          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 items-center">
            <Link href="/jobs-in/johannesburg">Find Jobs</Link>
            <Link href="/cv-builder">CV Builder</Link>
            <Link href="/z83-form" className="text-blue-600 font-black">Z83 Guide</Link>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl">
              Post a Job
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b absolute w-full left-0 p-6 space-y-4 shadow-2xl">
            <Link href="/jobs-in/johannesburg" onClick={() => setIsMenuOpen(false)}>Find Jobs</Link>
            <Link href="/cv-builder" onClick={() => setIsMenuOpen(false)}>CV Builder</Link>
            <Link href="/z83-form" onClick={() => setIsMenuOpen(false)} className="text-blue-600 font-bold">Z83 Form</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative bg-slate-900 py-24">
        <img 
          src="https://images.unsplash.com/photo-1523211788734-231d167993bb?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Find Your Next Job in <span className="text-blue-500 italic">South Africa</span>
          </h1>

          <p className="text-xl text-slate-300 mb-10">
            Jobs, Learnerships, and Government Vacancies from top employers.
          </p>

          <div className="bg-white p-2 rounded-2xl flex flex-col md:flex-row gap-2">
            <input placeholder="Job title..." className="flex-1 p-4 outline-none" />
            <input placeholder="City..." className="flex-1 p-4 outline-none" />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Latest Jobs */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-8 uppercase italic">
          Latest Jobs in South Africa
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <JobCard title="Cashier - Shoprite" location="Johannesburg" company="Shoprite" />
          <JobCard title="Admin Clerk - Government" location="Pretoria" company="Department of Health" />
          <JobCard title="General Worker - Transnet" location="Durban" company="Transnet" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold uppercase mb-10">Browse Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <CategoryCard title="Learnerships" desc="Training programs" />
          
          <Link href="/z83-form">
            <CategoryCard title="Government Jobs" desc="Z83 & Public Jobs" />
          </Link>

          <Link href="/cv-builder">
            <CategoryCard title="Free CV Builder" desc="Create your CV" />
          </Link>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black mb-4">
          Jobs, Learnerships & Government Vacancies in South Africa
        </h2>
        <p className="text-slate-600">
          JobHelper helps South Africans find jobs, learnerships, and government opportunities.
          Use our CV builder and Z83 form guide to apply successfully.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold">JOBHELPER.co.za</h3>
            <p className="text-slate-400 text-sm">Helping South Africans find jobs.</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Cities</h4>
            <Link href="/jobs-in/johannesburg">Johannesburg</Link>
          </div>

          <div>
            <h4 className="font-bold mb-3">Tools</h4>
            <Link href="/cv-builder">CV Builder</Link><br/>
            <Link href="/z83-form">Z83 Form</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function JobCard({ title, location, company }: any) {
  return (
    <div className="p-6 border rounded-2xl">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-slate-500">{company}</p>
      <p className="text-sm text-slate-500 mb-3">{location}</p>
      <button className="text-blue-600 font-bold">View Job →</button>
    </div>
  );
}

function CategoryCard({ title, desc }: any) {
  return (
    <div className="p-6 border rounded-2xl">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}