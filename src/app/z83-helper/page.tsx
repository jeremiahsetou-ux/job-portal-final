import React from 'react';
import { FileText, Download, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Z83Helper() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Mini Nav */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-black text-blue-600 italic uppercase">← Back to JobHelper</Link>
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase">Gov Guide</span>
      </nav>

      <main className="max-w-4xl mx-auto py-16 px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-black mb-4 tracking-tight uppercase italic">Z83 Form <span className="text-blue-600 underline">2021 Edition</span></h1>
          <p className="text-lg text-slate-600 font-medium">How to correctly fill out the official application form for South African Government positions.</p>
        </header>

        {/* Steps Grid */}
        <div className="grid gap-8">
          <section className="bg-white p-8 rounded-3xl border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-2xl text-white"><FileText size={24} /></div>
              <h2 className="text-2xl font-bold uppercase italic text-slate-800">1. Download the Form</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">Ensure you are using the <span className="font-bold">New Z83 Form</span> (effective 1 January 2021). Old forms will result in automatic disqualification.</p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition flex items-center gap-3 uppercase text-sm tracking-wide">
              <Download size={18} /> Download Official PDF
            </button>
          </section>

          <section className="bg-white p-8 rounded-3xl border shadow-sm border-l-8 border-l-blue-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-2xl text-blue-600"><CheckCircle size={24} /></div>
              <h2 className="text-2xl font-bold uppercase italic text-slate-800">2. Critical Fields</h2>
            </div>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-start gap-2">✅ <span className="font-bold">Reference Number:</span> Must match the advert exactly.</li>
              <li className="flex items-start gap-2">✅ <span className="font-bold">Declaration:</span> You must sign and date the form.</li>
              <li className="flex items-start gap-2">✅ <span className="font-bold">Experience:</span> Fill in even if your CV is attached.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}