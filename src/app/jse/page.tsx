'use client';

import React from 'react';
import { Building2, MapPin, ExternalLink, ArrowRight, Search, Briefcase, Globe, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const JSE_COMPANIES = [
  { name: 'Sasol', sector: 'Mining & Chemicals', jobs: 189, url: 'https://www.sasol.com/careers', color: 'bg-green-600' },
  { name: 'Standard Bank', sector: 'Banking', jobs: 245, url: 'https://www.standardbank.com/careers', color: 'bg-blue-600' },
  { name: 'Shoprite', sector: 'Retail', jobs: 156, url: 'https://www.shopritegroup.com/careers', color: 'bg-red-600' },
  { name: 'MTN', sector: 'Telecommunications', jobs: 98, url: 'https://www.mtn.com/careers', color: 'bg-yellow-500' },
  { name: 'Absa', sector: 'Banking', jobs: 87, url: 'https://www.absa.co.za/careers', color: 'bg-red-500' },
  { name: 'Nedbank', sector: 'Banking', jobs: 76, url: 'https://www.nedbank.co.za/careers', color: 'bg-green-500' },
  { name: 'FNB', sector: 'Banking', jobs: 65, url: 'https://www.fnb.co.za/careers', color: 'bg-blue-500' },
  { name: 'Discovery', sector: 'Insurance', jobs: 54, url: 'https://www.discovery.co.za/careers', color: 'bg-teal-500' },
  { name: 'Sanlam', sector: 'Insurance', jobs: 48, url: 'https://www.sanlam.co.za/careers', color: 'bg-orange-500' },
  { name: 'Old Mutual', sector: 'Insurance', jobs: 42, url: 'https://www.oldmutual.co.za/careers', color: 'bg-blue-600' },
  { name: 'Pick n Pay', sector: 'Retail', jobs: 38, url: 'https://www.pnp.com/careers', color: 'bg-red-500' },
  { name: 'Woolworths', sector: 'Retail', jobs: 35, url: 'https://www.woolworths.co.za/careers', color: 'bg-blue-500' },
  { name: 'Dstv', sector: 'Media', jobs: 32, url: 'https://www.multichoice.co.za/careers', color: 'bg-purple-500' },
  { name: 'Tiger Brands', sector: 'Food & Beverage', jobs: 28, url: 'https://www.tigerbrands.com/careers', color: 'bg-orange-600' },
  { name: 'Mondi', sector: 'Packaging', jobs: 25, url: 'https://www.mondi.com/careers', color: 'bg-green-700' },
  { name: 'Sibanye Stillwater', sector: 'Mining', jobs: 24, url: 'https://www.sibanyestillwater.com/careers', color: 'bg-gray-600' },
  { name: 'Anglo American', sector: 'Mining', jobs: 22, url: 'https://www.angloamerican.com/careers', color: 'bg-blue-700' },
  { name: 'Barloworld', sector: 'Industrial', jobs: 20, url: 'https://www.barloworld.com/careers', color: 'bg-cyan-600' },
  { name: 'Bidvest', sector: 'Financial Services', jobs: 18, url: 'https://www.bidvest.com/careers', color: 'bg-indigo-600' },
  { name: 'Pioneer Foods', sector: 'Food & Beverage', jobs: 15, url: 'https://www.pioneerfoods.co.za/careers', color: 'bg-amber-600' },
];

const GRAD_PROGRAMMES = [
  { name: 'Standard Bank Grad Programme', deadline: '30 April 2026', url: 'https://www.standardbank.com/careers/graduates' },
  { name: 'Sasol Graduate Development', deadline: '15 May 2026', url: 'https://www.sasol.com/careers/graduates' },
  { name: 'MTN Graduate Programme', deadline: '31 May 2026', url: 'https://www.mtn.com/careers/graduates' },
  { name: 'Absa Graduate Programme', deadline: '30 April 2026', url: 'https://www.absa.co.za/careers/graduates' },
  { name: 'Nedbank Graduate Learnership', deadline: '15 May 2026', url: 'https://www.nedbank.co.za/careers/graduates' },
  { name: 'Discovery Grad Programme', deadline: '31 May 2026', url: 'https://www.discovery.co.za/careers/graduates' },
  { name: 'FNB Graduate Programme', deadline: '30 April 2026', url: 'https://www.fnb.co.za/careers/graduates' },
  { name: 'Sanlam Graduate Programme', deadline: '15 June 2026', url: 'https://www.sanlam.co.za/careers/graduates' },
];

export default function JSEPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ArrowRight size={14} />
            <span>JSE Careers</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">JSE Company Directory</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Direct links to career portals of top JSE-listed companies. Find graduate programmes, 
            internships, and full-time positions at South Africa's leading corporations.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold">{JSE_COMPANIES.length}</p>
              <p className="text-blue-200 text-sm">Companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{JSE_COMPANIES.reduce((a, c) => a + c.jobs, 0)}</p>
              <p className="text-blue-200 text-sm">Open Positions</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{GRAD_PROGRAMMES.length}</p>
              <p className="text-blue-200 text-sm">Grad Programmes</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Graduate Programmes */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="text-blue-600" />
            Active Graduate Programmes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {GRAD_PROGRAMMES.map((prog, idx) => (
              <a
                key={idx}
                href={prog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600">{prog.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                    <Clock size={14} /> Deadline: {prog.deadline}
                  </p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-blue-600" size={20} />
              </a>
            ))}
          </div>
        </section>

        {/* Company Directory */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Building2 className="text-blue-600" />
              All JSE Companies
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search companies..."
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {JSE_COMPANIES.map((company, idx) => (
              <a
                key={idx}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 ${company.color} rounded-xl flex items-center justify-center text-white font-bold text-sm mb-3`}>
                  {company.name.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600">{company.name}</h3>
                <p className="text-sm text-slate-500">{company.sector}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                  <span className="text-sm text-slate-600">{company.jobs} jobs</span>
                  <ExternalLink className="text-slate-400 group-hover:text-blue-600" size={16} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6">
            Create your CV with our free builder and apply with confidence. 
            Our Z83 form generator helps you apply to government positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cv-builder"
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Build Free CV
            </Link>
            <Link
              href="/z83-form"
              className="bg-blue-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Z83 Form Generator
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}