"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, ArrowLeft, Palette, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function TemplateBuilder() {
  const [profileColor, setProfileColor] = useState('bg-slate-800'); 
  const [sidebarColor, setSidebarColor] = useState('bg-cyan-600'); 

  const [formData, setFormData] = useState({
    fullName: "Olivia Taylor",
    email: "lily.french@example.co.uk",
    phone: "07941 234 567",
    location: "Bradford BD1 6YU",
    summary: "Highly organised and disciplined pharmacy leader with excellent communication and conflict resolution skills. Competent in managing supplies, reviewing service quality, and maintaining patient confidentiality and satisfaction.",
    experience: "June 2017 - Current\nPharmacist King Chemist | Birmingham\n• Checked more than 30 patient orders against histories each day.\n• Provided patient counselling regarding OTC medications.",
    education: "2010\nMasters degree in pharmacy\nBirmingham University, Birmingham"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      <nav className="bg-white border-b h-20 sticky top-0 z-50 px-6 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 font-black text-blue-600 italic uppercase tracking-tighter hover:text-blue-800 transition-all text-xl">
          <ArrowLeft size={20} /> JOBHELPER
        </Link>
        <div className="flex items-center gap-3 text-sm font-black text-slate-600 uppercase italic">
          <Palette className="text-blue-600" size={18} />
          <span>Style Customizer</span>
        </div>
      </nav>

      <div className="bg-white border-b p-6 max-w-7xl mx-auto mt-6 rounded-3xl shadow-lg mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="text-[10px] font-black text-slate-400 mb-3 block uppercase tracking-[0.2em]">Sidebar & Accents</label>
            <div className="flex gap-3">
              <button onClick={() => setSidebarColor('bg-cyan-600')} className="w-12 h-12 rounded-xl bg-cyan-600 border-4 border-white shadow-lg transform hover:scale-110 transition-all"></button>
              <button onClick={() => setSidebarColor('bg-blue-600')} className="w-12 h-12 rounded-xl bg-blue-600 border-2 border-slate-200 transform hover:scale-110 transition-all"></button>
              <button onClick={() => setSidebarColor('bg-rose-600')} className="w-12 h-12 rounded-xl bg-rose-600 border-2 border-slate-200 transform hover:scale-110 transition-all"></button>
              <button onClick={() => setSidebarColor('bg-indigo-600')} className="w-12 h-12 rounded-xl bg-indigo-600 border-2 border-slate-200 transform hover:scale-110 transition-all"></button>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-400 mb-3 block uppercase tracking-[0.2em]">Profile Background</label>
            <div className="flex gap-3">
              <button onClick={() => setProfileColor('bg-slate-800')} className="w-12 h-12 rounded-xl bg-slate-800 border-4 border-white shadow-lg transform hover:scale-110 transition-all"></button>
              <button onClick={() => setProfileColor('bg-slate-900')} className="w-12 h-12 rounded-xl bg-slate-900 border-2 border-slate-200 transform hover:scale-110 transition-all"></button>
              <button onClick={() => setProfileColor('bg-blue-950')} className="w-12 h-12 rounded-xl bg-blue-950 border-2 border-slate-200 transform hover:scale-110 transition-all"></button>
              <button onClick={() => setProfileColor('bg-black')} className="w-12 h-12 rounded-xl bg-black border-2 border-slate-200 transform hover:scale-110 transition-all"></button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-4 px-6 grid lg:grid-cols-2 gap-12 items-start pb-20">
        {/* Form Inputs */}
        <div className="space-y-6">
          <section className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h2 className="text-xl font-black mb-6 uppercase italic flex items-center gap-2">
              <Sparkles className="text-blue-600" size={20} /> Identity
            </h2>
            <div className="space-y-4">
              <input name="fullName" onChange={handleChange} value={formData.fullName} placeholder="Full Name" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
              <div className="grid grid-cols-2 gap-4">
                <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
                <input name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
              </div>
              <input name="location" onChange={handleChange} value={formData.location} placeholder="Location" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold" />
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h2 className="text-xl font-black mb-6 uppercase italic flex items-center gap-2 text-slate-900">
              Professional Details
            </h2>
            <textarea name="summary" onChange={handleChange} value={formData.summary} rows={4} placeholder="Summary" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold mb-4 resize-none" />
            <textarea name="experience" onChange={handleChange} value={formData.experience} rows={6} placeholder="Experience" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold mb-4 resize-none" />
            <textarea name="education" onChange={handleChange} value={formData.education} rows={3} placeholder="Education" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 font-bold resize-none" />
          </section>
        </div>

        {/* The Designer CV Preview */}
        <div className="lg:sticky lg:top-32">
          <div className="bg-white shadow-2xl w-full aspect-[1/1.41] flex overflow-hidden border">
            {/* Sidebar */}
            <div className={`w-[35%] ${sidebarColor} text-white flex flex-col`}>
              <div className={`h-64 ${profileColor} flex items-center justify-center p-8`}>
                <div className="w-full aspect-square bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center text-slate-400">
                  <User size={80} strokeWidth={1} />
                </div>
              </div>
              <div className="p-8 space-y-6 flex-1">
                <div className="space-y-4 text-[11px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-3"><MapPin size={14}/> {formData.location}</div>
                  <div className="flex items-center gap-3"><Phone size={14}/> {formData.phone}</div>
                  <div className="flex items-center gap-3"><Mail size={14}/> {formData.email}</div>
                </div>
                <div className="pt-10">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-4 italic">Summary</h3>
                  <p className="text-[10px] leading-relaxed font-medium text-white/90">{formData.summary}</p>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="flex-1 p-12 flex flex-col bg-white">
              <h1 className={`text-5xl font-black uppercase italic tracking-tighter mb-12 ${sidebarColor.replace('bg-', 'text-')}`}>
                {formData.fullName}
              </h1>
              
              <div className="space-y-12">
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-100 pb-2 mb-6 italic">Experience</h3>
                  <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line font-medium">{formData.experience}</p>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-100 pb-2 mb-6 italic">Education</h3>
                  <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line font-medium">{formData.education}</p>
                </section>
              </div>

              <div className="mt-auto pt-10 flex justify-between items-center opacity-20">
                <span className="text-[8px] font-black uppercase tracking-widest">JobHelper.co.za</span>
                <span className="text-[8px] font-black uppercase tracking-widest italic">Professional Template</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}