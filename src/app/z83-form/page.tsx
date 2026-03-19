"use client";

import React from 'react';
import { Download, CheckCircle, AlertTriangle, ArrowLeft, Printer, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';

export default function Z83Helper() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Nav */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-blue-600">
            <ArrowLeft size={20} /> Back
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-6">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Z83 Form Download & How to Fill (2026 Guide)
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Download the official Z83 form PDF and learn how to fill it correctly.
            Avoid common mistakes that cause government job applications to be rejected.
          </p>
        </div>

        {/* DOWNLOAD */}
        <div className="bg-blue-600 text-white rounded-3xl p-10 text-center mb-16">
          <h2 className="text-2xl font-black mb-4">
            Download Z83 Form PDF
          </h2>

          <a
            href="/z83-form-2026.pdf"
            download
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            Download Now
          </a>
        </div>

        {/* STEP BY STEP */}
        <section className="mb-16">
          <h2 className="text-2xl font-black mb-6">
            How to Fill Z83 Form Step by Step
          </h2>

          <div className="space-y-4 text-slate-600">
            <p><strong>Step 1:</strong> Fill in the job reference number exactly as shown.</p>
            <p><strong>Step 2:</strong> Provide your personal details clearly.</p>
            <p><strong>Step 3:</strong> Complete your qualifications and work experience.</p>
            <p><strong>Step 4:</strong> Sign and date the form.</p>
          </div>
        </section>

        {/* TIPS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-bold mb-4">Printing Tips</h3>
            <ul className="space-y-3">
              <li>✔ Use black ink</li>
              <li>✔ Print clearly</li>
              <li>✔ Do not fold pages</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-bold mb-4 text-red-500">Common Mistakes</h3>
            <ul className="space-y-3">
              <li>❌ Missing signature</li>
              <li>❌ Wrong reference number</li>
              <li>❌ Using correction fluid</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center mb-16">
          <h3 className="text-xl font-bold mb-4">
            Need a CV for your application?
          </h3>
          <Link href="/cv-builder" className="bg-blue-600 px-6 py-3 rounded-xl font-bold">
            Create Free CV
          </Link>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-black mb-6">
            Z83 Form FAQ
          </h2>

          <div className="space-y-6 text-slate-600">
            <div>
              <h4 className="font-bold">Where can I download the Z83 form?</h4>
              <p>You can download the latest Z83 form directly from this page.</p>
            </div>

            <div>
              <h4 className="font-bold">Is the Z83 form still used in 2026?</h4>
              <p>Yes, the 2021 version is still the official format used for government jobs.</p>
            </div>

            <div>
              <h4 className="font-bold">Do I need a CV with Z83?</h4>
              <p>Yes, always attach a CV when applying.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}