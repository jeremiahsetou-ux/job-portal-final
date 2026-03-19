"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Palette, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

export default function TemplatePro() {
  const [accentColor, setAccentColor] = useState('#0099bc'); // The Cyan from your image

  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-white border-b h-20 flex items-center px-6 justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 font-black text-blue-600 italic uppercase">
          <ArrowLeft size={20}/> BACK TO PORTAL
        </Link>
        <div className="flex gap-2">
           <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="w-10 h-10 rounded-full border-0 cursor-pointer" />
           <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-black uppercase text-xs shadow-lg">Download PDF</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-6 grid lg:grid-cols-2 gap-12">
        {/* Input Controls */}
        <div className="space-y-6">
          <section className="bg-white p-8 rounded-[2rem] border shadow-sm">
            <h2 className="text-xl font-black uppercase italic mb-6">Editor</h2>
            <div className="space-y-4 font-bold">
               <input placeholder="Full Name" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500" defaultValue="Olivia Taylor" />
               <textarea placeholder="Professional Summary" rows={4} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-500 resize-none" defaultValue="Highly organised and disciplined pharmacy leader..." />
            </div>
          </section>
        </div>

        {/* The "Olivia Taylor" Layout (Matches image_6dc8e3.png) */}
        <div className="bg-white shadow-2xl w-full aspect-[1/1.41] flex border overflow-hidden">
          {/* Sidebar */}
          <div className="w-[35%] flex flex-col" style={{ backgroundColor: accentColor }}>
            {/* Profile Photo Area (Dark background) */}
            <div className="h-64 bg-slate-800 flex items-center justify-center p-8">
               <div className="w-full aspect-square bg-slate-200 border-4 border-white overflow-hidden flex items-center justify-center">
                  <User size={80} className="text-slate-400" />
               </div>
            </div>
            {/* Contact & Skills Section (Blue background with geometric vibe) */}
            <div className="p-8 text-white space-y-10">
               <div className="space-y-3 text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><MapPin size={12}/> Bradford BD1 6YU</div>
                  <div className="flex items-center gap-2"><Phone size={12}/> 07941 234 567</div>
                  <div className="flex items-center gap-2"><Mail size={12}/> lily.french@example.co.uk</div>
               </div>
               
               <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-4">Summary</h3>
                  <p className="text-[9px] leading-relaxed font-medium">Highly organised and disciplined pharmacy leader with excellent communication skills...</p>
               </div>

               <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] border-b border-white/30 pb-2 mb-4">Skills</h3>
                  <ul className="text-[9px] font-bold uppercase space-y-1 opacity-90">
                    <li>• Interpreting orders</li>
                    <li>• Dosing recommendations</li>
                    <li>• Compounding abilities</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-12">
             <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-2" style={{ color: accentColor }}>Olivia Taylor</h1>
             <div className="h-1 w-full mb-12" style={{ backgroundColor: accentColor }}></div>
             
             <section className="mb-12">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-800 mb-6 italic">Experience</h2>
                <div className="space-y-8">
                   <div>
                      <h4 className="text-xs font-black uppercase tracking-tight">Pharmacist King Chemist | Birmingham</h4>
                      <p className="text-[9px] font-bold text-slate-400 mb-2">June 2017 - Current</p>
                      <ul className="text-[10px] text-slate-600 space-y-1 list-disc pl-4">
                         <li>Checked more than 30 patient orders against histories each day.</li>
                         <li>Provided patient counselling regarding OTC medications.</li>
                      </ul>
                   </div>
                </div>
             </section>

             <section>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-800 mb-6 italic">Education</h2>
                <div>
                   <h4 className="text-xs font-black uppercase tracking-tight">Masters degree in pharmacy</h4>
                   <p className="text-[9px] font-bold text-slate-400">Birmingham University | 2010</p>
                </div>
             </section>
          </div>
        </div>
      </main>
    </div>
  );
}