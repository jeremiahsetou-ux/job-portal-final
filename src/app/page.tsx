"use client";

import React from 'react';
import { Search, FileText, Layout, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-white border-b pt-20 pb-16 px-6 text-center shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-blue-100">
            <ShieldCheck size={14} /> South Africa's #1 Career Toolkit
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase leading-none">
            Get Hired <span className="text-blue-600">Faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            The all-in-one platform for South African job seekers. Build professional CVs, download official forms, and find your next opportunity.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/cv-builder" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide">
              Create My CV <ArrowRight size={20} />
            </Link>
            <Link href="/z83-helper" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide">
              Z83 Masterclass
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase italic tracking-tight">Our Career Tools</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tool 1: CV Builder */}
          <Link href="/cv-builder" className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all border-b-8 border-b-blue-600">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-slate-900">CV Builder</h3>
            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
              Create a professional, South African standard CV in minutes with our easy-to-use editor.
            </p>
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest group-hover:underline">Start Building →</span>
          </Link>

          {/* Tool 2: Template Designer */}
          <Link href="/template-builder" className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all border-b-8 border-b-cyan-500">
            <div className="bg-cyan-50 w-14 h-14 rounded-2xl flex items-center justify-center text-cyan-600 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all">
              <Layout size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-slate-900">Template Pro</h3>
            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
              Customize colors and layouts to stand out from the crowd. Modern designs for 2026.
            </p>
            <span className="text-cyan-600 font-black text-xs uppercase tracking-widest group-hover:underline">Design Now →</span>
          </Link>

          {/* Tool 3: Z83 Helper */}
          <Link href="/z83-helper" className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all border-b-8 border-b-slate-900">
            <div className="bg-slate-100 w-14 h-14 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight text-slate-900">Z83 Helper</h3>
            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-6">
              Download the official 2026 Z83 form and follow our guide to avoid government rejection.
            </p>
            <span className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:underline">Get the Form →</span>
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          
          {/* Brand Info */}
          <div>
            <div className="text-2xl font-black text-blue-600 italic tracking-tighter mb-4 uppercase">JobHelper.co.za</div>
            <p className="text-slate-400 font-bold text-xs max-w-sm leading-relaxed">
              Empowering South African job seekers with professional tools and verified information since 2006.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-2">
            <h4 className="font-black uppercase tracking-widest text-blue-600 text-xs mb-6 italic underline decoration-blue-200 underline-offset-8">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/z83-helper" className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors block uppercase tracking-tight">
                Z83 Form Guide
              </Link>
              <Link href="/cv-builder" className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors block uppercase tracking-tight">
                CV Builder
              </Link>
              <Link href="/template-builder" className="text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors block uppercase tracking-tight">
                Template Designer
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">Built for the South African Workforce • 2026</p>
        </div>
      </footer>
    </div>
  );
}