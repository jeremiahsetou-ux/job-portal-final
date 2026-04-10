'use client';

import * as React from 'react';
import { Briefcase, Menu, X, User, LogIn, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { SILOS, TOOLS } from '@/lib/navigation';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <span>JobHelper</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {SILOS.map((silo) => (
              <Link
                key={silo.href}
                href={silo.href}
                className="text-sm font-medium hover:text-primary"
              >
                {silo.title}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary flex items-center gap-1">
                Tools <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {TOOLS.children?.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block px-4 py-2 text-sm hover:bg-muted"
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/sign-in" className="text-sm font-medium hover:text-primary">
              Sign In
            </Link>
            <Link
              href="/tools/post-a-job"
              className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Post a Job
            </Link>
          </div>

          <button
            className="p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t py-4 md:hidden space-y-1">
            {SILOS.map((silo) => (
              <Link
                key={silo.href}
                href={silo.href}
                className="block py-3 px-4 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {silo.title}
              </Link>
            ))}
            
            <div className="border-t my-2" />
            
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Tools</span>
            </div>
            {TOOLS.children?.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block py-2.5 px-6 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {tool.title}
              </Link>
            ))}

            <div className="border-t my-4" />
            
            <Link
              href="/sign-in"
              className="flex items-center gap-2 py-2 px-4 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              <User className="w-4 h-4" /> Sign In
            </Link>
            <Link
              href="/tools/post-a-job"
              className="block mx-4 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md text-center"
              onClick={() => setMobileOpen(false)}
            >
              Post a Job
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}