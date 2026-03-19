"use client";

import React from 'react';
import { Building2, MapPin, Briefcase, ExternalLink, ChevronRight, Star, TrendingUp, Users, Clock, Bookmark, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Company Database - This can be moved to a separate file or database later
const COMPANIES: Record<string, {
  name: string;
  description: string;
  industry: string;
  employees: string;
  headquarters: string;
  website: string;
  careersUrl: string;
  logo: string;
  color: string;
  benefits: string[];
  jobs: { title: string; location: string; type: string; posted: string; salary: string }[];
}> = {
  'sasol': {
    name: 'Sasol',
    description: 'Sasol is a global chemicals and energy company. We harness our knowledge and expertise to integrate sophisticated technologies and processes into world-scale operating facilities.',
    industry: 'Chemicals & Energy',
    employees: '30,000+',
    headquarters: 'Sandton, Johannesburg',
    website: 'https://www.sasol.com',
    careersUrl: 'https://www.sasol.com/careers',
    logo: 'SS',
    color: 'bg-green-600',
    benefits: ['Medical Aid', 'Pension Fund', 'Performance Bonuses', 'Skills Development'],
    jobs: [
      { title: 'Process Engineer', location: 'Secunda, MP', type: 'Permanent', posted: '2 days ago', salary: 'R650k - R850k' },
      { title: 'Chemical Technician', location: 'Sasolburg, FS', type: 'Permanent', posted: '1 week ago', salary: 'R350k - R450k' },
      { title: 'Graduate Programme 2026', location: 'Various', type: 'Graduate', posted: '3 days ago', salary: 'R20k pm stipend' },
    ]
  },
  'standard-bank': {
    name: 'Standard Bank',
    description: 'Standard Bank is Africa\'s largest bank by assets. We provide banking and financial services across 20 African countries and 5 global financial centres.',
    industry: 'Banking & Financial Services',
    employees: '50,000+',
    headquarters: 'Rosebank, Johannesburg',
    website: 'https://www.standardbank.com',
    careersUrl: 'https://www.standardbank.com/careers',
    logo: 'SB',
    color: 'bg-blue-600',
    benefits: ['Medical Aid', 'Pension Fund', 'Staff Banking Benefits', 'Leadership Development'],
    jobs: [
      { title: 'Senior Business Analyst', location: 'Johannesburg, GP', type: 'Permanent', posted: '1 day ago', salary: 'R700k - R950k' },
      { title: 'Relationship Manager', location: 'Cape Town, WC', type: 'Permanent', posted: '4 days ago', salary: 'R550k - R750k' },
      { title: 'IT Graduate Programme', location: 'Johannesburg, GP', type: 'Graduate', posted: '2 weeks ago', salary: 'R22k pm stipend' },
    ]
  },
  'shoprite': {
    name: 'Shoprite',
    description: 'Shoprite Holdings is Africa\'s largest food retailer. We operate 2,900+ stores across Africa, serving 35 million customers weekly.',
    industry: 'Retail',
    employees: '150,000+',
    headquarters: 'Brackenfell, Cape Town',
    website: 'https://www.shopriteholdings.co.za',
    careersUrl: 'https://www.shopriteholdings.co.za/careers.html',
    logo: 'SR',
    color: 'bg-red-600',
    benefits: ['Staff Discount', 'Medical Aid', 'Career Growth', 'Training Academy'],
    jobs: [
      { title: 'Store Manager', location: 'Durban, KZN', type: 'Permanent', posted: '3 days ago', salary: 'R280k - R380k' },
      { title: 'Bakery Manager', location: 'Pretoria, GP', type: 'Permanent', posted: '1 week ago', salary: 'R180k - R250k' },
      { title: 'Cashier', location: 'Various', type: 'Permanent', posted: 'Daily', salary: 'Market Related' },
    ]
  },
  'eskom': {
    name: 'Eskom',
    description: 'Eskom is South Africa\'s primary electricity supplier. We generate, transmit and distribute electricity to industrial, mining, commercial and residential customers.',
    industry: 'Energy & Utilities',
    employees: '40,000+',
    headquarters: 'Sunninghill, Johannesburg',
    website: 'https://www.eskom.co.za',
    careersUrl: 'https://www.eskom.co.za/careers',
    logo: 'ES',
    color: 'bg-yellow-500',
    benefits: ['Pension Fund', 'Medical Aid', 'Housing Allowance', 'Skills Training'],
    jobs: [
      { title: 'Electrical Engineer', location: 'Megawatt Park, GP', type: 'Permanent', posted: '5 days ago', salary: 'R600k - R850k' },
      { title: 'Artisan: Electrical', location: 'Various Power Stations', type: 'Permanent', posted: '2 weeks ago', salary: 'R350k - R480k' },
      { title: 'Plant Operator', location: 'Mpumalanga', type: 'Permanent', posted: '1 week ago', salary: 'R280k - R380k' },
    ]
  },
  'transnet': {
    name: 'Transnet',
    description: 'Transnet is the largest and most crucial part of the freight logistics chain that delivers goods to each and every South African.',
    industry: 'Transport & Logistics',
    employees: '55,000+',
    headquarters: 'Carlton Centre, Johannesburg',
    website: 'https://www.transnet.net',
    careersUrl: 'https://www.transnet.net/Careers/Pages/default.aspx',
    logo: 'TR',
    color: 'bg-blue-800',
    benefits: ['Pension Fund', 'Medical Aid', 'Travel Benefits', 'Training Programmes'],
    jobs: [
      { title: 'Train Driver', location: 'Johannesburg, GP', type: 'Permanent', posted: '3 days ago', salary: 'R250k - R350k' },
      { title: 'Harbor Crane Operator', location: 'Durban, KZN', type: 'Permanent', posted: '1 week ago', salary: 'R300k - R420k' },
      { title: 'Supply Chain Manager', location: 'Cape Town, WC', type: 'Permanent', posted: '4 days ago', salary: 'R650k - R850k' },
    ]
  },
  'mtn': {
    name: 'MTN',
    description: 'MTN is Africa\'s largest mobile network operator. We provide cellular network access and ICT solutions to over 280 million subscribers.',
    industry: 'Telecommunications',
    employees: '20,000+',
    headquarters: 'Fairlands, Johannesburg',
    website: 'https://www.mtn.com',
    careersUrl: 'https://www.mtn.com/careers',
    logo: 'MTN',
    color: 'bg-yellow-400',
    benefits: ['Cellular Benefits', 'Medical Aid', 'Performance Bonuses', 'Global Opportunities'],
    jobs: [
      { title: 'Network Engineer', location: 'Johannesburg, GP', type: 'Permanent', posted: '2 days ago', salary: 'R550k - R750k' },
      { title: 'Sales Consultant', location: 'Various Malls', type: 'Permanent', posted: 'Daily', salary: 'R12k - R18k + Comm' },
      { title: 'Digital Marketing Specialist', location: 'Cape Town, WC', type: 'Permanent', posted: '1 week ago', salary: 'R450k - R600k' },
    ]
  },
  'absa': {
    name: 'Absa',
    description: 'Absa Group Limited is one of South Africa\'s largest financial services providers. We offer personal and business banking, credit cards, corporate banking, and wealth management.',
    industry: 'Banking & Financial Services',
    employees: '35,000+',
    headquarters: 'Johannesburg, GP',
    website: 'https://www.absa.co.za',
    careersUrl: 'https://www.absa.co.za/careers',
    logo: 'AB',
    color: 'bg-red-500',
    benefits: ['Banking Benefits', 'Medical Aid', 'Pension Fund', 'Wellness Programme'],
    jobs: [
      { title: 'Branch Manager', location: 'Pretoria, GP', type: 'Permanent', posted: '3 days ago', salary: 'R450k - R650k' },
      { title: 'Personal Banker', location: 'Johannesburg, GP', type: 'Permanent', posted: '1 week ago', salary: 'R220k - R320k' },
      { title: 'Data Analyst', location: 'Cape Town, WC', type: 'Permanent', posted: '5 days ago', salary: 'R500k - R700k' },
    ]
  },
  'vodacom': {
    name: 'Vodacom',
    description: 'Vodacom is a leading African mobile communication company providing a wide range of communication services including mobile voice, messaging, data and converged services.',
    industry: 'Telecommunications',
    employees: '8,000+',
    headquarters: 'Midrand, Johannesburg',
    website: 'https://www.vodacom.co.za',
    careersUrl: 'https://www.vodacom.co.za/vodacom/careers',
    logo: 'VD',
    color: 'bg-red-600',
    benefits: ['Airtime Benefits', 'Medical Aid', 'Pension Fund', 'Learning & Development'],
    jobs: [
      { title: 'Retail Store Manager', location: 'Sandton, GP', type: 'Permanent', posted: '2 days ago', salary: 'R350k - R480k' },
      { title: 'Network Operations Center Technician', location: 'Midrand, GP', type: 'Permanent', posted: '1 week ago', salary: 'R300k - R420k' },
      { title: 'Customer Service Representative', location: 'Centurion, GP', type: 'Permanent', posted: '3 days ago', salary: 'R150k - R220k' },
    ]
  },
};

// Default company data for companies not in the database yet
const DEFAULT_COMPANY = {
  name: 'Company',
  description: 'This employer is actively hiring in South Africa. Browse their latest vacancies and apply today.',
  industry: 'Various',
  employees: '1,000+',
  headquarters: 'South Africa',
  website: '#',
  careersUrl: '#',
  logo: 'CO',
  color: 'bg-blue-600',
  benefits: ['Competitive Salary', 'Career Growth', 'Training Opportunities'],
  jobs: [
    { title: 'General Worker', location: 'Various', type: 'Permanent', posted: 'Recently', salary: 'Market Related' },
    { title: 'Administrator', location: 'Johannesburg, GP', type: 'Permanent', posted: 'Recently', salary: 'Market Related' },
  ]
};

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = COMPANIES[params.slug] || { ...DEFAULT_COMPANY, name: params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) };

  const otherCompanies = Object.keys(COMPANIES).filter(key => key !== params.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <Link href="/company" className="hover:underline">Companies</Link>
            <ChevronRight size={14} />
            <span>{company.name}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Company Logo */}
            <div className={`w-24 h-24 ${company.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
              {company.logo}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{company.name} Careers</h1>
              <p className="text-blue-100 text-lg max-w-2xl">{company.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm">
                <span className="flex items-center gap-2">
                  <Building2 size={16} className="text-yellow-300" />
                  {company.industry}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-yellow-300" />
                  {company.headquarters}
                </span>
                <span className="flex items-center gap-2">
                  <Users size={16} className="text-yellow-300" />
                  {company.employees} Employees
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a 
                href={company.careersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
              >
                Visit Careers Site <ExternalLink size={18} />
              </a>
              <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Save Company
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Job Listings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Jobs Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Available Positions</h2>
              <span className="text-slate-500">{company.jobs.length} jobs found</span>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {company.jobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.posted}</span>
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <button className="text-slate-300 hover:text-blue-600 transition-colors">
                      <Bookmark size={20} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <span className="font-semibold text-slate-700">{job.salary}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Info Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About {company.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {company.description} {company.name} is committed to creating employment opportunities 
                for South Africans and offers competitive benefits and career development programmes.
              </p>
              
              <h3 className="font-bold text-slate-900 mb-3">Employee Benefits</h3>
              <div className="grid grid-cols-2 gap-3">
                {company.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600">
                    <Star size={16} className="text-yellow-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Company Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Industry</span>
                  <span className="font-semibold text-slate-900">{company.industry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Employees</span>
                  <span className="font-semibold text-slate-900">{company.employees}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Open Jobs</span>
                  <span className="font-semibold text-slate-900">{company.jobs.length}+</span>
                </div>
              </div>
            </div>

            {/* Official Website */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Official Website</h3>
              <p className="text-sm text-blue-700 mb-4">Visit {company.name}'s official website for more information.</p>
              <a 
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Visit Website <ExternalLink size={16} />
              </a>
            </div>

            {/* Other Companies */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Other Top Employers</h3>
              <div className="space-y-3">
                {otherCompanies.map((companyKey) => {
                  const otherCompany = COMPANIES[companyKey];
                  return (
                    <Link 
                      key={companyKey}
                      href={`/company/${companyKey}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className={`w-10 h-10 ${otherCompany.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
                        {otherCompany.logo}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 text-sm">{otherCompany.name}</p>
                        <p className="text-xs text-slate-500">{otherCompany.jobs.length} jobs</p>
                      </div>
                      <ChevronRight size={16} className="text-slate-400" />
                    </Link>
                  );
                })}
              </div>
              <Link 
                href="/company"
                className="block text-center text-blue-600 font-semibold mt-4 hover:underline"
              >
                View All Companies
              </Link>
            </div>

            {/* Job Alert */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Get Job Alerts</h3>
              <p className="text-sm text-blue-100 mb-4">Be the first to know when {company.name} posts new jobs.</p>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border-0 mb-3 text-slate-900 placeholder:text-slate-400"
              />
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dynamic route - handles all company slugs at runtime
