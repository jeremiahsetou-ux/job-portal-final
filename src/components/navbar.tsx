'use client';

import * as React from 'react';
import { Briefcase, User, LogIn, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { SILOS, TOOLS } from '@/lib/navigation';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

          {/* Desktop Menu Button - triggers Sheet on all sizes */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 space-y-1">
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
                
                <div className="border-t my-4" />
                
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}