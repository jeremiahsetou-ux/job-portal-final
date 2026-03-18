"use client";

import React from 'react';
import { FileText, Download, CheckCircle, AlertTriangle, ArrowLeft, Printer, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';

export default function Z83Helper() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation Header */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-tight">
            <ArrowLeft size={20} /> Back to Job Search
          </Link>
          <div className="hidden md:block text-[10px] font-black bg-slate-900 text-white px-4 py-1.5 rounded-full italic uppercase tracking-[0.2em]">
            Official 2026 Employment Guide
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
            <ShieldCheck size={14} /> Verified DPSA Format
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase">
            Master the <span className="text-blue-600">Z83 Form</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Applying for a government job? Don't let a simple paperwork error cost you your career. 80% of applications are rejected due to small mistakes. Follow our verified 2026 guide.
          </p>
        </div>

        {/* Primary Download Action - Pointing to your Local PDF */}
        <div className="bg-slate-900 rounded-[2.5rem] p-1 mb-16 shadow-2xl transform hover:scale-[1.01] transition-all">
          <div className="bg-blue-600 rounded-[2.3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-blue-800">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black mb-3 uppercase italic leading-none">Official Z83 PDF</h2>
              <p className="text-blue-100 font-medium italic opacity-90">Verified 2021 Revision (Latest for 2026)</p>
            </div>
            <a 
              href="/z83-form-2026.pdf" 
              download
              className="w-full md:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl text-lg uppercase tracking-wide group"
            >
              <Download size={24} className="group-hover:bounce" /> Download Form
            </a>
          </div>
        </div>

        {/* The Instructions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-600">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              <Printer size={28} />
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight">Printing Tips</h3>
            <ul className="space-y-5 text-slate-600 font-bold">
              <li className="flex gap-4 items-start">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span>Use clear black ink only (No faded ink).</span>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span>Ensure the barcode is clearly visible.</span>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span>Keep pages flat—do not fold or staple.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all border-b-4 border-b-amber-500">
            <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center text-amber-500 mb-8">
              <AlertTriangle size={28} />
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tight text-amber-700">Avoid Rejection</h3>
            <ul className="space-y-5 text-slate-600 font-bold">
              <li className="flex gap-4 items-start">
                <span className="text-amber-500 text-xl font-black leading-none">!</span>
                <span>Leaving the 'Reference Number' blank.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-amber-500 text-xl font-black leading-none">!</span>
                <span>Using Tipp-Ex or liquid paper for fixes.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-amber-500 text-xl font-black leading-none">!</span>
                <span>Forgetting to sign and initial every page.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div className="bg-blue-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="bg-blue-800 p-4 rounded-2xl">
            <Info size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase italic tracking-tight mb-1">Expert Advice</h4>
            <p className="text-blue-200 font-medium">Always attach your CV even if you have filled in the "Work Experience" section of the Z83 form. Double-check your contact number!</p>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-200 bg-white mt-12">
        <div className="text-xl font-black text-blue-600 italic tracking-tighter mb-4 uppercase">JobHelper South Africa</div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Building the future of South African employment</p>
      </footer>
    </div>
  );
}