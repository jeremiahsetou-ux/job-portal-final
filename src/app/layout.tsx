import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "JobHelper.co.za - #1 Job Portal in South Africa",
  description: "Search thousands of jobs across South Africa. Build your CV and apply with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>
              JobHelper
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/find-jobs" className="text-sm font-medium hover:text-primary">Find Jobs</Link>
              <Link href="/cv-builder" className="text-sm font-medium hover:text-primary">CV Builder</Link>
              <Link href="/z83-form" className="text-sm font-medium hover:text-primary">Z83 Form</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/sign-in" className="text-sm font-medium hover:text-primary hidden sm:inline-flex">Sign In</Link>
              <Link href="/post-job" className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90">
                Post a Job
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t py-8 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between gap-8">
              <div>
                <h4 className="font-semibold mb-4">For Job Seekers</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/find-jobs" className="block hover:text-primary">Find Jobs</Link>
                  <Link href="/cv-builder" className="block hover:text-primary">CV Builder</Link>
                  <Link href="/z83-form" className="block hover:text-primary">Z83 Form</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Popular</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/jse" className="block hover:text-primary">JSE Companies</Link>
                  <Link href="/matric" className="block hover:text-primary">Matric Jobs</Link>
                  <Link href="/remote" className="block hover:text-primary">Remote Jobs</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <Link href="/about" className="block hover:text-primary">About Us</Link>
                  <Link href="/contact" className="block hover:text-primary">Contact</Link>
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              © 2026 JobHelper.co.za — Helping South Africans find jobs
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}