"use client";

import React from 'react';
import { FileText, Download, CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck, UserCheck, GraduationCap, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Z83Form() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Navigation */}
      <nav className="bg-white border-b h-20 sticky top-0 z-50 px-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 font-black text-blue-600 italic uppercase tracking-tighter hover:text-blue-800 transition-all text-xl">
          <ArrowLeft size={20} /> JOBHELPER
        </Link>
        <div className="hidden md:flex items-center gap-2 text-[10px] font-black bg-slate-900 text-white px-4 py-2 rounded-full italic uppercase tracking-widest shadow-md">
          <ShieldCheck size={14} className="text-blue-400" /> Official 2026 Guide
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase leading-none text-slate-900">
            Z83 Form <span className="text-blue-600">Masterclass</span>
          </h1>
          <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed italic">
            Don't let a simple mistake cost you a government job. Follow our verified 2026 step-by-step guide.
          </p>
        </div>

        {/* Warning Box */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-2xl mb-12 flex items-start gap-4 shadow-sm">
          <AlertCircle className="text-amber-500 shrink-0" size={24} />
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest text-amber-800 mb-1">Crucial Notice</h4>
            <p className="text-sm font-bold text-amber-700">Ensure you use the NEW Z83 form (effective from 1 January 2021). Old forms are still being rejected by many departments.</p>
          </div>
        </div>

        {/* Guide Steps */}
        <div className="space-y-6">
          {[
            { 
              title: "1. Personal Information", 
              icon: <UserCheck className="text-blue-600" />, 
              desc: "Fill in your full name exactly as it appears on your ID. Double-check your ID number—one wrong digit leads to instant disqualification." 
            },
            { 
              title: "2. Education & Training", 
              icon: <GraduationCap className="text-blue-600" />, 
              desc: "List your highest qualification first. Include the institution name and the year obtained. Do not leave gaps in your educational history." 
            },
            { 
              title: "3. Professional Experience", 
              icon: <Briefcase className="text-blue-600" />, 
              desc: "Include all relevant work experience. For government roles, being specific about your responsibilities is key." 
            },
            { 
              title: "4. The Declaration", 
              icon: <CheckCircle2 className="text-blue-600" />, 
              desc: "Sign and date the form. An unsigned Z83 is the #1 reason applications are ignored. Ensure the date matches the day you submit." 
            }
          ].map((step, idx) => (
            <section key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-slate-50 p-4 rounded-2xl shrink-0">
                {step.icon}
              </div>
              <div>
                <h2 className="text-xl font-black mb-2 uppercase italic tracking-tight">{step.title}</h2>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{step.desc}</p>
              </div>
            </section>
          ))}
        </div>

        {/* Download Action */}
        <div className="text-center mt-16 bg-blue-600 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
             <FileText size={100} />
          </div>
          <h3 className="text-2xl font-black text-white uppercase italic mb-6">Ready to apply?</h3>
          <a 
            href="/z83-form-2026.pdf" 
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-xl uppercase tracking-widest text-sm"
          >
            <Download size={20} /> Download Official PDF
          </a>
          <p className="mt-6 text-blue-100 text-[10px] font-black uppercase tracking-[0.2em]">Verified South African Government Document</p>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="py-12 text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">JobHelper.co.za • Authority Career Portal</p>
      </footer>
    </div>
  );
}