"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, ArrowLeft, Palette } from 'lucide-react';
import Link from 'next/link';

export default function TemplateBuilder() {
  const [profileColor, setProfileColor] = useState('bg-slate-900'); // Default (like your image)
  const [sidebarColor, setSidebarColor] = useState('bg-blue-600'); // Default (like your image)

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
      {/* Top Navigation */}
      <nav className="bg-white border-b h-20 sticky top-0 z-50 px-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 font-black text-blue-600 italic uppercase tracking-tighter hover:text-blue-800 transition-all text-xl">
          <ArrowLeft size={20} /> JOBHELPER
        </Link>
        <div className="flex items-center gap-3 text-sm font-black text-slate-600">
          <Palette className="text-blue-600" />
          <span>PICK YOUR COLORS</span>
        </div>
      </nav>

      {/* Color Selection Bar */}
      <div className="bg-white border-b p-4 max-w-7xl mx-auto mt-6 rounded-2xl shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-500 mb-2 block uppercase">Sidebar Color</label>
            <div className="flex gap-2">
              <button onClick={() => setSidebarColor('bg-blue-600')} className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-xl"></button>
              <button onClick={() => setSidebarColor('bg-red-600')} className="w-10 h-10 rounded-full bg-red-600 border-2 border-slate-300"></button>
              <button onClick={() => setSidebarColor('bg-emerald-600')} className="w-10 h-10 rounded-full bg-emerald-600 border-2 border-slate-300"></button>
              <button onClick={() => setSidebarColor('bg-amber-600')} className="w-10 h-10 rounded-full bg-amber-600 border-2 border-slate-300"></button>
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 mb-2 block uppercase">Profile Header Color</label>
            <div className="flex gap-2">
              <button onClick={() => setProfileColor('bg-slate-900')} className="w-10 h-10 rounded-full bg-slate-900 border-4 border-white shadow-xl"></button>
              <button onClick={() => setProfileColor('bg-slate-700')} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-300"></button>
              <button onClick={() => setProfileColor('bg-blue-950')} className="w-10 h-10 rounded-full bg-blue-950 border-2 border-slate-300"></button>
              <button onClick={() => setProfileColor('bg-emerald-950')} className="w-10 h-10 rounded-full bg-emerald-950 border-2 border-slate-300"></button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-10 px-6 grid lg:grid-cols-2 gap-10">
        {/* Left Side: Input Form */}
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3">
              <User className="text-blue-600" /> Personal Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Full Name</label>
                <input name="fullName" onChange={handleChange} value={formData.fullName} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Email Address</label>
                  <input name="email" onChange={handleChange} value={formData.email} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Phone Number</label>
                  <input name="phone" onChange={handleChange} value={formData.phone} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Location</label>
                <input name="location" onChange={handleChange} value={formData.location} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3">
              <Briefcase className="text-blue-600" /> Experience
            </h2>
            <textarea name="experience" onChange={handleChange} value={formData.experience} rows={4} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold resize-none" />
          </section>
        </div>

        {/* Right Side: LIVE PREVIEW (The Two-Column CV) */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-white shadow-2xl rounded-none w-full aspect-[1/1.41] border border-slate-300 relative overflow-hidden flex">
            
            {/* 1. Sidebar (Default Blue) */}
            <div className={`w-[35%] p-10 flex flex-col items-center ${sidebarColor} text-white`}>
              {/* Profile Image Area (Matches the dark box in image) */}
              <div className={`w-32 h-32 ${profileColor} rounded-full mb-10 flex items-center justify-center border-4 border-white shadow-xl`}>
                <User size={64} className="opacity-70" />
              </div>
              
              {/* Profile Contact Info (Bottom left of sidebar in image) */}
              <div className="space-y-5 text-[10px] font-bold text-slate-100 flex-1 flex flex-col justify-end w-full">
                <span className="flex items-center gap-2"><MapPin size={12}/> {formData.location}</span>
                <span className="flex items-center gap-2"><Phone size={12}/> {formData.phone}</span>
                <span className="flex items-center gap-2"><Mail size={12}/> {formData.email}</span>
              </div>
            </div>

            {/* 2. Main Content (Right Side) */}
            <div className="flex-1 p-12 space-y-12">
              {/* Header (Top Right Title) */}
              <h1 className={`text-5xl font-black uppercase italic tracking-tighter ${sidebarColor.replace('bg-','text-')} mb-4`}>
                {formData.fullName}
              </div>

              {/* Summary */}
              <div>
                <h3 className={`text-sm font-black uppercase tracking-widest mb-3 ${sidebarColor.replace('bg-','text-')}`}>Summary</h3>
                <p className="text-xs font-medium leading-relaxed text-slate-700">{formData.summary}</p>
              </div>

              {/* Work History */}
              <div>
                <h3 className={`text-sm font-black uppercase tracking-widest mb-3 ${sidebarColor.replace('bg-','text-')}`}>Experience</h3>
                <p className="text-xs font-medium leading-relaxed text-slate-700 whitespace-pre-line">{formData.experience}</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-slate-400 text-xs font-bold uppercase italic">Real-time Preview (South African Standard Layout)</p>
        </div>
      </main>
    </div>
  );
}