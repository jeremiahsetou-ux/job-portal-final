import React from 'react';
import { FileText, Download, CheckCircle, AlertTriangle, ArrowLeft, Printer } from 'lucide-react';
import Link from 'next/link';

export default function Z83Helper() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header / Nav */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-blue-600">
            <ArrowLeft size={18} /> BACK TO JOBS
          </Link>
          <div className="text-xs font-black bg-blue-600 text-white px-3 py-1 rounded italic uppercase tracking-widest">
            2026 Updated Guide
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight italic uppercase">
            Master the <span className="text-blue-600">Z83 Form</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Don't get disqualified. 80% of government applications are rejected due to simple Z83 errors. Follow our official 2026 guide.
          </p>
        </div>

        {/* Download Box */}
        <div className="bg-blue-600 rounded-3xl p-8 text-white mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-b-8 border-blue-800">
          <div>
            <h2 className="text-2xl font-bold mb-2 uppercase italic">Official 2021 Z83 Form</h2>
            <p className="text-blue-100 font-medium italic text-sm italic">Newest Version (PDF Format, 256KB)</p>
          </div>
          <a 
            href="https://www.dpsa.gov.za/dpsa2g/documents/forms/Z83%202021.pdf" 
            target="_blank"
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition flex items-center gap-3 shadow-lg"
          >
            <Download size={20} /> DOWNLOAD NOW
          </a>
        </div>

        {/* The "Authority" Checklist */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border shadow-sm group hover:border-blue-500 transition-all">
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Printer size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tight">Printing Tips</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex gap-3">✅ <p>Use clear black ink only.</p></li>
              <li className="flex gap-3">✅ <p>Ensure the barcode is clearly visible.</p></li>
              <li className="flex gap-3">✅ <p>Keep the pages in the correct order.</p></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border shadow-sm border-l-8 border-l-amber-500 group">
            <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center text-amber-500 mb-6">
              <AlertTriangle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tight text-amber-600">Avoid Disqualification</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex gap-3">❌ <p>Never leave the <b>Reference Number</b> blank.</p></li>
              <li className="flex gap-3">❌ <p>Do not use Tipp-ex on the form.</p></li>
              <li className="flex gap-3">❌ <p>Don't forget to sign the last page.</p></li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
        JobHelper South Africa • Government Application Support
      </footer>
    </div>
  );
}