'use client';

import { useState } from 'react';
import { Search, MapPin, Briefcase, Building2, ArrowRight, ChevronRight, Users, TrendingUp, FileText, Download, GraduationCap, Zap } from 'lucide-react';
import Link from 'next/link';

const FEATURED_JOBS = [
  { id: 1, title: 'Software Developer', company: 'Standard Bank', location: 'Johannesburg', salary: 'R850k - R1.2m', type: 'Permanent', posted: '2d ago' },
  { id: 2, title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', salary: 'R600k - R850k', type: 'Permanent', posted: '1d ago' },
  { id: 3, title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', salary: 'R180k - R280k', type: 'Government', posted: '5h ago' },
  { id: 4, title: 'Sales Consultant', company: 'Vodacom', location: 'Cape Town', salary: 'R15k - R25k + Comm', type: 'Permanent', posted: '3d ago' },
];

const CATEGORIES = [
  { name: 'IT & Tech', jobs: 1245 },
  { name: 'Government', jobs: 892 },
  { name: 'Banking', jobs: 654 },
  { name: 'Retail', jobs: 543 },
  { name: 'Engineering', jobs: 432 },
  { name: 'Healthcare', jobs: 321 },
];

const TOP_COMPANIES = [
  { name: 'Standard Bank', jobs: 245, color: 'bg-blue-600' },
  { name: 'Sasol', jobs: 189, color: 'bg-green-600' },
  { name: 'Shoprite', jobs: 156, color: 'bg-red-600' },
  { name: 'MTN', jobs: 98, color: 'bg-yellow-500' },
  { name: 'Absa', jobs: 87, color: 'bg-red-500' },
  { name: 'Eskom', jobs: 76, color: 'bg-yellow-600' },
];

const CITIES = [
  { name: 'Johannesburg', jobs: 2450 },
  { name: 'Cape Town', jobs: 1832 },
  { name: 'Durban', jobs: 1245 },
  { name: 'Pretoria', jobs: 987 },
  { name: 'Port Elizabeth', jobs: 543 },
  { name: 'Bloemfontein', jobs: 321 },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>#1 Job Portal in South Africa</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Find Your <span className="text-primary">Dream Job</span> Today
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Search thousands of jobs across South Africa. Build your CV and apply with confidence.
            </p>

            {/* Search */}
            <div className="bg-card rounded-xl shadow-lg p-2 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
              <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Job title, keywords or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="City or Province"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
              <Link
                href={`/find-jobs?q=${encodeURIComponent(searchQuery)}&l=${encodeURIComponent(location)}`}
                className="bg-primary text-primary-foreground font-medium px-8 py-3 rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                Search Jobs
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Link href="/find-jobs?type=Remote" className="text-sm text-muted-foreground hover:text-primary">Remote</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/matric" className="text-sm text-muted-foreground hover:text-primary">Matric Jobs</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/jse" className="text-sm text-muted-foreground hover:text-primary">JSE Careers</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/z83-form" className="text-sm text-muted-foreground hover:text-primary">Z83 Form</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12,450</p>
                <p className="text-sm text-muted-foreground">Active Jobs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">850+</p>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Monthly Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Popular Categories</h2>
            <Link href="/find-jobs" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                href={`/find-jobs?category=${encodeURIComponent(cat.name)}`}
                className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all text-center"
              >
                <h3 className="font-semibold">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cat.jobs} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <Link href="/find-jobs" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              View all jobs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_JOBS.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="font-semibold mb-1">{job.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  <span>{job.posted}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="font-semibold text-sm">{job.salary}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Career Tools</h2>
            <p className="text-muted-foreground">Everything you need to land your dream job</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/cv-builder" className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">CV Builder</h3>
              <p className="text-sm text-muted-foreground">Create a professional CV in minutes</p>
            </Link>
            <Link href="/z83-form" className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Z83 Form Generator</h3>
              <p className="text-sm text-muted-foreground">Complete and download the official form</p>
            </Link>
            <Link href="/career-advice" className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Career Advice</h3>
              <p className="text-sm text-muted-foreground">Tips, guides and career growth</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Top Hiring Companies</h2>
            <Link href="/company" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TOP_COMPANIES.map((company, idx) => (
              <Link
                key={idx}
                href={`/company/${company.name.toLowerCase().replace(' ', '-')}`}
                className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all text-center"
              >
                <div className={`w-12 h-12 ${company.color} rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-3`}>
                  {company.name.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="font-semibold text-sm">{company.name}</h3>
                <p className="text-xs text-muted-foreground">{company.jobs} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by City */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Browse by City</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CITIES.map((city, idx) => (
              <Link
                key={idx}
                href={`/jobs/${city.name.toLowerCase().replace(' ', '-')}`}
                className="bg-card border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all text-center"
              >
                <MapPin className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{city.name}</h3>
                <p className="text-xs text-muted-foreground">{city.jobs} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join thousands of South Africans who found their perfect career match through JobHelper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/find-jobs"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-white/90"
            >
              Search Jobs
            </Link>
            <Link
              href="/cv-builder"
              className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-md hover:bg-primary-foreground/90"
            >
              Build Your CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}