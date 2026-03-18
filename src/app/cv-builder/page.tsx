"use client";

import React, { useState } from 'react';
import { FileText, Download, User, Briefcase, GraduationCap, Mail, Phone, MapPin, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CVBuilder() {
  const [formData, setFormData] = useState({
    fullName: "Jabulani Khumalo",
    email: "j.khumalo@email.com",
    phone: "071 234 5678",
    location: "Soweto, Gauteng",
    summary: "Dedicated professional with experience in logistics and fleet management. Seeking to contribute to a growth-oriented company in South Africa.",
    experience: "Fleet Controller - 5 Years\nManaged daily dispatch for 50+ trucks.",
    education: "Matric - National Senior Certificate\nDiploma in Logistics Management"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Top Nav */}
      <nav className="bg-white border-b h-20 sticky top-0 z-50 px-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 font-black text-blue-600 italic uppercase tracking-tighter hover:text-blue-800 transition-all text-xl">
          <ArrowLeft size={20} /> JOBHELPER
        </Link>
        <div className="flex items-center gap-2 text-[10px] font-black bg-blue-600 text-white px-4 py-2 rounded-full italic uppercase tracking-widest shadow-md">
          <Sparkles size={14} /> AI CV BUILDER 2026
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-6 grid lg:grid-cols-2 gap-10">
        
        {/* Left Side: Input Form */}
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3">
              <User className="text-blue-600" /> Personal Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block font-sans">Full Name</label>
                <input name="fullName" onChange={handleChange} value={formData.fullName} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block font-sans">Email Address</label>
                  <input name="email" onChange={handleChange} value={formData.email} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block font-sans">Phone Number</label>
                  <input name="phone" onChange={handleChange} value={formData.phone} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block font-sans">Location (Town/City)</label>
                <input name="location" onChange={handleChange} value={formData.location} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3">
              <Briefcase className="text-blue-600" /> Professional Experience
            </h2>
            <textarea name="experience" onChange={handleChange} value={formData.experience} rows={4} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold resize-none" />
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3">
              <GraduationCap className="text-blue-600" /> Education
            </h2>
            <textarea name="education" onChange={handleChange} value={formData.education} rows={3} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold resize-none" />
          </section>
        </div>

        {/* Right Side: Live Preview */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-white shadow-2xl rounded-none w-full aspect-[1/1.41] p-12 border border-slate-300 relative overflow-hidden flex flex-col">
            {/* CV Header */}
            <div className="border-b-4 border-blue-600 pb-8 mb-8">
              <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{formData.fullName}</h1>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 font-sans">
                <span className="flex items-center gap-1"><Mail size={12}/> {formData.email}</span>
                <span className="flex items-center gap-1"><Phone size={12}/> {formData.phone}</span>
                <span className="flex items-center gap-1"><MapPin size={12}/> {formData.location}</span>
              </div>
            </div>

            {/* CV Body */}
            <div className="space-y-8 flex-1">
              <div>
                <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2 font-sans">Professional Summary</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-700 font-sans">{formData.summary}</p>
              </div>

              <div>
                <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2 font-sans">Work History</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-700 whitespace-pre-line font-sans">{formData.experience}</p>
              </div>

              <div>
                <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2 font-sans">Education & Training</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-700 whitespace-pre-line font-sans">{formData.education}</p>
              </div>
            </div>

            {/* Bottom Branding */}
            <div className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center opacity-40 grayscale">
               <span className="text-[8px] font-black uppercase tracking-widest font-sans">Generated by JobHelper.co.za</span>
               <div className="text-blue-600 font-black italic text-[10px]">JH</div>
            </div>

            {/* Download Overlay */}
            <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
               <div className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black shadow-2xl flex items-center gap-2 uppercase tracking-wide font-sans">
                 <Download size={20} /> Preview Mode
               </div>
            </div>
          </div>
          <p className="mt-6 text-center text-slate-400 text-xs font-bold uppercase italic font-sans">Real-time Preview (South African Standard Layout)</p>
        </div>
      </main>
    </div>
  );
}