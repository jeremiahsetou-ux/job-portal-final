'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Z83Form } from '@/components/z83-form';
import { Navbar } from '@/components/navbar';


export default function Z83FormPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Z83 Form Generator</h1>
            <p className="text-primary-foreground/80 mt-2">
              Complete the official government job application form online and download as PDF.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Z83Form />
        </div>
      </main>
      
    </div>
  );
}