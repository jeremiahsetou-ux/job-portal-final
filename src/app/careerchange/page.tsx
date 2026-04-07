'use client';

import { ArrowLeft, RefreshCw, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

const TIPS = [
  { title: 'Identify Transferable Skills', desc: 'Your existing skills may apply to new roles.' },
  { title: 'Network in New Industry', desc: 'Connect with people in your target field.' },
  { title: 'Consider Entry Level', desc: 'Be willing to start at a lower level.' },
  { title: 'Get Certified', desc: 'Boost your chances with relevant certifications.' },
];

export default function CareerChangePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Career Change & Retrenchment</h1>
          <p className="text-primary-foreground/80 mt-2">Switch careers with confidence</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Tips for Switching Careers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {TIPS.map((tip, idx) => (
            <div key={idx} className="bg-card border rounded-xl p-5">
              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Need Help?</h3>
          <p className="text-sm text-muted-foreground">Our career advisors can help you navigate a career change. Contact us for personalized guidance.</p>
        </div>
      </div>
    </div>
  );
}