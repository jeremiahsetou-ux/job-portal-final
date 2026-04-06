"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <Link href="/" className="font-bold text-blue-600 text-lg sm:text-xl">JOBHELPER.co.za</Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                <Link href="/find-jobs" className="hover:text-blue-600 text-sm lg:text-base">Find Jobs</Link>
                <Link href="/cv-builder" className="hover:text-blue-600 text-sm lg:text-base">CV Builder</Link>
                <Link href="/z83-helper" className="hover:text-blue-600 text-sm lg:text-base">Z83 Guide</Link>
                <Link href="/career-advice" className="hover:text-blue-600 text-sm lg:text-base">Career Advice</Link>
                <Link href="/sign-in" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm lg:text-base">Sign In</Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-3">
                <Link 
                  href="/find-jobs" 
                  className="hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Find Jobs
                </Link>
                <Link 
                  href="/cv-builder" 
                  className="hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CV Builder
                </Link>
                <Link 
                  href="/z83-helper" 
                  className="hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Z83 Guide
                </Link>
                <Link 
                  href="/career-advice" 
                  className="hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Career Advice
                </Link>
                <Link 
                  href="/sign-in" 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </nav>
            )}
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-900 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h4 className="font-bold mb-2">JOBHELPER.co.za</h4>
              <p>Helping South Africans find jobs, learnerships, and government vacancies.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Cities</h4>
              <p>Johannesburg</p>
              <p>Cape Town</p>
              <p>Pretoria</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Tools</h4>
              <Link href="/cv-builder" className="block hover:underline">CV Builder</Link>
              <Link href="/z83-helper" className="block hover:underline">Z83 Form</Link>
              <Link href="/career-advice" className="block hover:underline">Career Advice</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}