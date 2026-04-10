import { Metadata } from 'next';
import Link from 'next/link';
import { Map, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sitemap | JobHelper - All Pages',
    description: 'Complete list of all pages on JobHelper.co.za - Find government jobs, remote work, career advice, learnerships, and more.',
  };
}

const SILO_PAGES = [
  { title: 'Government Jobs', href: '/government-jobs', description: 'DPSA circulars and public service vacancies' },
  { title: 'Remote & Gig Jobs', href: '/remote-gig-jobs', description: 'Work from home and freelance opportunities' },
  { title: 'Career Advice', href: '/career-advice', description: 'CV tips, interview guides, and career strategies' },
  { title: 'Learnerships & Internships', href: '/learnerships-internships', description: 'Entry-level programs and training' },
  { title: 'News & Updates', href: '/news-updates', description: 'Latest job market news and trends' },
];

const TOOLS_PAGES = [
  { title: 'CV Builder', href: '/cv-builder', description: 'Create a professional CV online' },
  { title: 'Z83 Form', href: '/tools/z83-form', description: 'Fill government job application form' },
  { title: 'Find Jobs', href: '/find-jobs', description: 'Browse all job listings' },
];

const COMPANY_PAGES = [
  { title: 'About Us', href: '/about', description: 'Learn about JobHelper' },
  { title: 'Contact', href: '/contact', description: 'Get in touch with us' },
  { title: 'Editorial Guidelines', href: '/editorial-guidelines', description: 'Our content standards' },
];

const LEGAL_PAGES = [
  { title: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle your data' },
  { title: 'Terms & Conditions', href: '/terms', description: 'Usage terms and conditions' },
  { title: 'Cookie Policy', href: '/cookie-policy', description: 'Cookie usage information' },
  { title: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' },
  { title: 'PAIA Manual', href: '/paia-manual', description: 'Information Manual (PAIA)' },
  { title: 'Social Media Policy', href: '/social-media-policy', description: 'Social media guidelines' },
  { title: 'Corrections Log', href: '/corrections-log', description: 'Content corrections and updates' },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4 text-center text-white">
            <Map className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              All pages on JobHelper.co.za - Find what you need quickly
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">1</span>
                  Job Categories
                </h2>
                <ul className="space-y-3">
                  {SILO_PAGES.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="block hover:text-primary">
                        <span className="font-medium">{page.title}</span>
                        <span className="text-sm text-muted-foreground block">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">2</span>
                  Tools & Resources
                </h2>
                <ul className="space-y-3">
                  {TOOLS_PAGES.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="block hover:text-primary">
                        <span className="font-medium">{page.title}</span>
                        <span className="text-sm text-muted-foreground block">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">3</span>
                  Company
                </h2>
                <ul className="space-y-3">
                  {COMPANY_PAGES.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="block hover:text-primary">
                        <span className="font-medium">{page.title}</span>
                        <span className="text-sm text-muted-foreground block">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">4</span>
                  Legal & Policy
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {LEGAL_PAGES.map((page) => (
                    <Link key={page.href} href={page.href} className="block hover:text-primary p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium">{page.title}</span>
                      <span className="text-xs text-muted-foreground block">{page.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}