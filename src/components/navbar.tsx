'use client';

import * as React from 'react';
import { Briefcase, Menu, X, User, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/find-jobs', label: 'Jobs' },
    { href: '/career-advice', label: 'News' },
    { href: '/cv-builder', label: 'Tools' },
    { href: '/z83-form', label: 'Z83' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <span>JobHelper</span>
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/sign-in"
              className="text-sm font-medium hover:text-primary flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>
            <Link
              href="/post-job"
              className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Post a Job
            </Link>
          </div>

          {/* Menu Button - visible on all sizes */}
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        {mobileOpen && (
          <nav className="border-t py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-4 space-y-3">
              <Link
                href="/sign-in"
                className="flex items-center gap-2 py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <User className="w-4 h-4" /> Sign In
              </Link>
              <Link
                href="/post-job"
                className="block bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Post a Job
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}