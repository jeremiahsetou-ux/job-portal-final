'use client';

import { ArrowLeft, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const PROVIDERS = [
  { name: 'Namecheap', desc: 'Domains & Hosting', commission: '20-35%' },
  { name: 'Vercel', desc: 'Hosting Platform', commission: 'Free' },
  { name: 'Carrd', desc: 'One-page Sites', commission: '$50' },
  { name: 'Webflow', desc: 'No-code Builder', commission: '$100' },
];

export default function PortfoliosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Portfolio & Websites</h1>
          <p className="text-primary-foreground/80 mt-2">Build your personal brand online</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Tools to Build Your Portfolio</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROVIDERS.map((provider, idx) => (
            <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">{provider.name}</h3>
              <p className="text-sm text-muted-foreground">{provider.desc}</p>
              <div className="mt-3 pt-3 border-t">
                <span className="text-xs text-muted-foreground">Commission: {provider.commission}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}