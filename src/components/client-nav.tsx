"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";

export default function ClientNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            JobHelper
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/find-jobs" className="text-sm font-medium hover:text-primary">Find Jobs</Link>
            <Link href="/jse" className="text-sm font-medium hover:text-primary">JSE Companies</Link>
            <Link href="/matric" className="text-sm font-medium hover:text-primary">Learnerships</Link>
            <Link href="/remote" className="text-sm font-medium hover:text-primary">Remote</Link>
            <Link href="/z83-form" className="text-sm font-medium hover:text-primary">Z83 Form</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/sign-in" className="text-sm font-medium hover:text-primary hidden sm:inline-flex">Sign In</Link>
            <Link href="/post-job" className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90">
              Post a Job
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-4 flex flex-col gap-3 px-4">
            <Link href="/find-jobs" className="py-2" onClick={() => setMobileMenuOpen(false)}>Find Jobs</Link>
            <Link href="/jse" className="py-2" onClick={() => setMobileMenuOpen(false)}>JSE Companies</Link>
            <Link href="/matric" className="py-2" onClick={() => setMobileMenuOpen(false)}>Learnerships</Link>
            <Link href="/remote" className="py-2" onClick={() => setMobileMenuOpen(false)}>Remote</Link>
            <Link href="/z83-form" className="py-2" onClick={() => setMobileMenuOpen(false)}>Z83 Form</Link>
            <Link href="/sign-in" className="py-2" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
          </nav>
        )}
      </header>
    </>
  );
}