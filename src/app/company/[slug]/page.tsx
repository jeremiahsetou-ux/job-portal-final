"use client";

import React from 'react';
import { Building2, MapPin, Briefcase, ExternalLink, ChevronRight, Star, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// TypeScript interface
interface CompanyData {
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
}

// Company Database - 25+ Major South African Employers
const ALL_COMPANIES: Record<string, CompanyData> = {
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
  'fnb': {
    name: 'FNB (First National Bank)',
    description: 'FNB is one of South Africa\'s oldest and most trusted banks, offering innovative banking solutions to millions of customers.',
    industry: 'Banking & Financial Services',
    employees: '42,000+',
    headquarters: 'Johannesburg, GP',
    website: 'https://www.fnb.co.za',
    careersUrl: 'https://www.fnb.co.za/careers',
    logo: 'FNB',
    color: 'bg-green-500',
    benefits: ['Banking Benefits', 'Medical Aid', 'Pension Fund', 'Innovation Culture'],
    jobs: [
      { title: 'Private Banker', location: 'Johannesburg, GP', type: 'Permanent', posted: '1 day ago', salary: 'R450k - R650k' },
      { title: 'Digital Product Owner', location: 'Sandton, GP', type: 'Permanent', posted: '3 days ago', salary: 'R650k - R950k' },
      { title: 'Graduate Programme', location: 'Johannesburg, GP', type: 'Graduate', posted: '1 week ago', salary: 'R20k pm stipend' },
    ]
  },
  'nedbank': {
    name: 'Nedbank',
    description: 'Nedbank is one of the largest banks in South Africa, offering a wide range of wholesale and retail banking services.',
    industry: 'Banking & Financial Services',
    employees: '28,000+',
    headquarters: 'Sandton, Johannesburg',
    website: 'https://www.nedbank.co.za',
    careersUrl: 'https://www.nedbank.co.za/content/nedbank/desktop/gt/en/personal/about-us/careers.html',
    logo: 'NB',
    color: 'bg-green-700',
    benefits: ['Medical Aid', 'Pension Fund', 'Staff Loans', 'Career Development'],
    jobs: [
      { title: 'Credit Analyst', location: 'Sandton, GP', type: 'Permanent', posted: '2 days ago', salary: 'R400k - R550k' },
      { title: 'Client Services Consultant', location: 'Cape Town, WC', type: 'Permanent', posted: '4 days ago', salary: 'R180k - R250k' },
    ]
  },
  'woolworths': {
    name: 'Woolworths',
    description: 'Woolworths Holdings Limited is a South African multinational retail company that owns the South African retail chain Woolworths.',
    industry: 'Retail',
    employees: '45,000+',
    headquarters: 'Cape Town, WC',
    website: 'https://www.woolworths.co.za',
    careersUrl: 'https://www.woolworths.co.za/careers',
    logo: 'WW',
    color: 'bg-emerald-600',
    benefits: ['Staff Discount', 'Medical Aid', 'Pension Fund', 'Wellness Programme'],
    jobs: [
      { title: 'Food Buyer', location: 'Cape Town, WC', type: 'Permanent', posted: '3 days ago', salary: 'R450k - R650k' },
      { title: 'Store Manager', location: 'Johannesburg, GP', type: 'Permanent', posted: '5 days ago', salary: 'R350k - R480k' },
      { title: 'Beauty Consultant', location: 'Various', type: 'Permanent', posted: 'Daily', salary: 'R12k - R18k' },
    ]
  },
  'pick-n-pay': {
    name: 'Pick n Pay',
    description: 'Pick n Pay is the second largest supermarket chain store in South Africa, offering groceries and clothing.',
    industry: 'Retail',
    employees: '80,000+',
    headquarters: 'Cape Town, WC',
    website: 'https://www.picknpay.co.za',
    careersUrl: 'https://www.picknpay.co.za/careers',
    logo: 'PnP',
    color: 'bg-red-500',
    benefits: ['Staff Discount', 'Medical Aid', 'Career Growth', 'Training'],
    jobs: [
      { title: 'Department Manager', location: 'Durban, KZN', type: 'Permanent', posted: '2 days ago', salary: 'R220k - R320k' },
      { title: 'Cashier', location: 'Various', type: 'Permanent', posted: 'Daily', salary: 'Market Related' },
    ]
  },
  'dischem': {
    name: 'Dis-Chem',
    description: 'Dis-Chem is a leading retail pharmacy chain in South Africa, offering healthcare products and services.',
    industry: 'Healthcare / Retail',
    employees: '18,000+',
    headquarters: 'Midrand, GP',
    website: 'https://www.dischem.co.za',
    careersUrl: 'https://www.dischem.co.za/careers',
    logo: 'DC',
    color: 'bg-blue-500',
    benefits: ['Medical Aid', 'Product Discount', 'Pension Fund', 'Wellness Benefits'],
    jobs: [
      { title: 'Pharmacist', location: 'Johannesburg, GP', type: 'Permanent', posted: '1 day ago', salary: 'R450k - R650k' },
      { title: 'Clinic Sister', location: 'Cape Town, WC', type: 'Permanent', posted: '3 days ago', salary: 'R280k - R380k' },
      { title: 'Sales Assistant', location: 'Various', type: 'Permanent', posted: 'Daily', salary: 'R8k - R12k' },
    ]
  },
  'anglo-american': {
    name: 'Anglo American',
    description: 'Anglo American is a global mining company with significant operations in South Africa, including platinum and diamonds.',
    industry: 'Mining',
    employees: '45,000+',
    headquarters: 'Johannesburg, GP',
    website: 'https://www.angloamerican.com',
    careersUrl: 'https://www.angloamerican.com/careers',
    logo: 'AA',
    color: 'bg-red-700',
    benefits: ['Medical Aid', 'Pension Fund', 'Housing Allowance', 'Skills Development'],
    jobs: [
      { title: 'Mining Engineer', location: 'Rustenburg, NW', type: 'Permanent', posted: '1 day ago', salary: 'R700k - R950k' },
      { title: 'Artisan: Fitter', location: 'Limpopo', type: 'Permanent', posted: '4 days ago', salary: 'R350k - R480k' },
      { title: 'Safety Officer', location: 'Northern Cape', type: 'Permanent', posted: '6 days ago', salary: 'R400k - R550k' },
    ]
  },
  'de-beers': {
    name: 'De Beers',
    description: 'De Beers is the world\'s leading diamond company, with operations in South Africa including Venetia Mine.',
    industry: 'Mining / Diamonds',
    employees: '20,000+',
    headquarters: 'Johannesburg, GP',
    website: 'https://www.debeersgroup.com',
    careersUrl: 'https://www.debeersgroup.com/careers',
    logo: 'DB',
    color: 'bg-slate-700',
    benefits: ['Medical Aid', 'Pension Fund', 'Performance Bonus', 'Training'],
    jobs: [
      { title: 'Diamond Sorter', location: 'Limpopo', type: 'Permanent', posted: '3 days ago', salary: 'R180k - R280k' },
      { title: 'Mine Surveyor', location: 'Venetia Mine, Limpopo', type: 'Permanent', posted: '5 days ago', salary: 'R450k - R600k' },
    ]
  },
  'south32': {
    name: 'South32',
    description: 'South32 is a globally diversified mining and metals company with operations in South Africa and Australia.',
    industry: 'Mining',
    employees: '15,000+',
    headquarters: 'Perth, Australia / Johannesburg, SA',
    website: 'https://www.south32.net',
    careersUrl: 'https://www.south32.net/careers',
    logo: 'S32',
    color: 'bg-teal-600',
    benefits: ['Medical Aid', 'Pension Fund', 'Share Plan', 'Wellness Programme'],
    jobs: [
      { title: 'Metallurgical Engineer', location: 'Middelburg, MP', type: 'Permanent', posted: '2 days ago', salary: 'R650k - R850k' },
      { title: 'Mechanical Foreman', location: 'Hotazel, NC', type: 'Permanent', posted: '4 days ago', salary: 'R450k - R600k' },
    ]
  },
  'sibanye-stillwater': {
    name: 'Sibanye-Stillwater',
    description: 'Sibanye-Stillwater is a leading international precious metals mining company with operations in South Africa and the US.',
    industry: 'Mining',
    employees: '80,000+',
    headquarters: 'Westonaria, GP',
    website: 'https://www.sibanyestillwater.com',
    careersUrl: 'https://www.sibanyestillwater.com/careers',
    logo: 'SSW',
    color: 'bg-blue-900',
    benefits: ['Medical Aid', 'Pension Fund', 'Housing', 'Performance Bonus'],
    jobs: [
      { title: 'Gold Plant Operator', location: 'Westonaria, GP', type: 'Permanent', posted: '2 days ago', salary: 'R280k - R380k' },
      { title: 'Shift Boss', location: 'Carletonville, GP', type: 'Permanent', posted: '5 days ago', salary: 'R450k - R600k' },
    ]
  },
  'telkom': {
    name: 'Telkom',
    description: 'Telkom is South Africa\'s largest integrated communications company, providing voice, data and IT services.',
    industry: 'Telecommunications',
    employees: '15,000+',
    headquarters: 'Centurion, GP',
    website: 'https://www.telkom.co.za',
    careersUrl: 'https://www.telkom.co.za/careers',
    logo: 'TK',
    color: 'bg-blue-500',
    benefits: ['Medical Aid', 'Pension Fund', 'Product Benefits', 'Skills Development'],
    jobs: [
      { title: 'Network Architect', location: 'Centurion, GP', type: 'Permanent', posted: '1 day ago', salary: 'R700k - R950k' },
      { title: 'Field Technician', location: 'Various', type: 'Permanent', posted: 'Daily', salary: 'R200k - R300k' },
    ]
  },
  'tiger-brands': {
    name: 'Tiger Brands',
    description: 'Tiger Brands is South Africa\'s largest food company, manufacturing and marketing iconic brands loved by millions.',
    industry: 'FMCG / Food Manufacturing',
    employees: '20,000+',
    headquarters: 'Johannesburg, GP',
    website: 'https://www.tigerbrands.com',
    careersUrl: 'https://www.tigerbrands.com/careers',
    logo: 'TB',
    color: 'bg-orange-500',
    benefits: ['Medical Aid', 'Pension Fund', 'Product Discount', 'Career Development'],
    jobs: [
      { title: 'Production Supervisor', location: 'Johannesburg, GP', type: 'Permanent', posted: '2 days ago', salary: 'R350k - R480k' },
      { title: 'Quality Assurance Officer', location: 'Cape Town, WC', type: 'Permanent', posted: '5 days ago', salary: 'R280k - R380k' },
    ]
  },
  'unilever': {
    name: 'Unilever South Africa',
    description: 'Unilever is a global FMCG company with strong brands like Sunlight, Omo, and Dove in South Africa.',
    industry: 'FMCG',
    employees: '3,500+',
    headquarters: 'Johannesburg, GP',
    website: 'https://www.unilever.co.za',
    careersUrl: 'https://www.unilever.co.za/careers',
    logo: 'UL',
    color: 'bg-blue-400',
    benefits: ['Medical Aid', 'Pension Fund', 'Flexible Working', 'Global Mobility'],
    jobs: [
      { title: 'Brand Manager', location: 'Johannesburg, GP', type: 'Permanent', posted: '3 days ago', salary: 'R550k - R750k' },
      { title: 'Supply Chain Analyst', location: 'Durban, KZN', type: 'Permanent', posted: '1 week ago', salary: 'R380k - R500k' },
    ]
  },
};

// Default company data for companies not in the database yet
const DEFAULT_COMPANY: CompanyData = {
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

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = ALL_COMPANIES[slug] || { 
    ...DEFAULT_COMPANY, 
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) 
  };

  const otherCompanies = Object.keys(ALL_COMPANIES).filter(key => key !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100 mb-4 sm:mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <Link href="/company" className="hover:underline">Companies</Link>
            <ChevronRight size={14} />
            <span className="truncate">{company.name}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
            <div className={`w-20 h-20 sm:w-24 sm:h-24 ${company.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg flex-shrink-0`}>
              {company.logo}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{company.name} Careers</h1>
              <p className="text-blue-100 text-base sm:text-lg max-w-2xl">{company.description}</p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3 sm:mt-4 text-xs sm:text-sm">
                <span className="flex items-center gap-2">
                  <Building2 size={16} className="text-yellow-300 flex-shrink-0" />
                  <span className="truncate">{company.industry}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-yellow-300 flex-shrink-0" />
                  <span className="truncate">{company.headquarters}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Users size={16} className="text-yellow-300 flex-shrink-0" />
                  {company.employees} Employees
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-3 w-full sm:w-auto mt-4 md:mt-0">
              <a
                href={company.careersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                Visit Careers Site <ExternalLink size={16} className="flex-shrink-0" />
              </a>
              <Link
                href="/find-jobs"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                <Briefcase size={16} className="flex-shrink-0" /> View All Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="text-blue-600 flex-shrink-0" size={20} />
                  Available Positions
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {company.jobs.length} jobs
                  </span>
                </h2>
                <a
                  href={company.careersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline flex items-center gap-1 text-sm"
                >
                  View on careers site <ArrowRight size={14} />
                </a>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {company.jobs.map((job, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-3 sm:p-4 hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base sm:text-lg truncate">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="flex-shrink-0" />
                            <span className="truncate">{job.location}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="flex-shrink-0" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                        <span className="font-semibold text-slate-700 text-sm">{job.salary}</span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${job.type === 'Permanent' ? 'bg-blue-100 text-blue-700' : job.type === 'Graduate' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <a href={company.careersUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
                        Apply Now <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">About {company.name}</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{company.description}</p>
              <div className="mt-4 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
                  <span className="text-xs sm:text-sm text-slate-500">Industry</span>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">{company.industry}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
                  <span className="text-xs sm:text-sm text-slate-500">Company Size</span>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">{company.employees} employees</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
                  <span className="text-xs sm:text-sm text-slate-500">Headquarters</span>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">{company.headquarters}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
                  <span className="text-xs sm:text-sm text-slate-500">Website</span>
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline text-sm sm:text-base break-all">
                    {company.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-4 sm:space-y-6">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                <Star className="text-yellow-500 flex-shrink-0" size={18} />
                Employee Benefits
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {company.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-600 text-sm sm:text-base">
                    <TrendingUp size={14} className="text-green-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-4 sm:p-6 text-white">
              <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Stats</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Open Positions</span>
                  <span className="font-bold text-lg sm:text-xl">{company.jobs.length}+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Locations</span>
                  <span className="font-bold text-lg sm:text-xl">{new Set(company.jobs.map(j => j.location)).size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-sm">Avg. Salary Range</span>
                  <span className="font-bold text-sm sm:text-base">R150k - R950k</span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6">
              <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Similar Employers</h3>
              <div className="space-y-2 sm:space-y-3">
                {otherCompanies.map((slug) => {
                  const otherCompany = ALL_COMPANIES[slug];
                  return (
                    <Link key={slug} href={`/company/${slug}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className={`w-10 h-10 ${otherCompany.color} rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {otherCompany.logo.substring(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm truncate">{otherCompany.name}</p>
                        <p className="text-xs text-slate-500">{otherCompany.jobs.length} jobs</p>
                      </div>
                      <ArrowRight size={14} className="text-slate-400 flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
