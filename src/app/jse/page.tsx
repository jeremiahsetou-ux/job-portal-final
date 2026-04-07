'use client';

import { ArrowLeft, MapPin, ExternalLink, Building2 } from 'lucide-react';
import Link from 'next/link';

const JSE_COMPANIES = [
  { name: 'Standard Bank', sector: 'Banking', jobs: 245 },
  { name: 'Sasol', sector: 'Mining', jobs: 189 },
  { name: 'Shoprite', sector: 'Retail', jobs: 156 },
  { name: 'MTN', sector: 'Telecom', jobs: 98 },
  { name: 'Absa', sector: 'Banking', jobs: 87 },
  { name: 'Nedbank', sector: 'Banking', jobs: 76 },
  { name: 'FNB', sector: 'Banking', jobs: 65 },
  { name: 'Discovery', sector: 'Insurance', jobs: 54 },
  { name: 'Sanlam', sector: 'Insurance', jobs: 48 },
  { name: 'Old Mutual', sector: 'Insurance', jobs: 42 },
];

export default function JSEPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">JSE Company Careers</h1>
          <p className="text-primary-foreground/80 mt-2">Direct links to career portals of top JSE-listed companies</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Hiring Companies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {JSE_COMPANIES.map((company, idx) => (
            <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">{company.name}</h3>
              <p className="text-sm text-muted-foreground">{company.sector}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <span className="text-sm font-medium">{company.jobs} jobs</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}