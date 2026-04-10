'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const BREADCRUMB_MAP: Record<string, { label: string; href: string }[]> = {
  '/jobs': [
    { label: 'Home', href: '/' },
    { label: 'Find Jobs', href: '/find-jobs' },
  ],
  '/government-jobs': [
    { label: 'Home', href: '/' },
    { label: 'Government Jobs', href: '/government-jobs' },
  ],
  '/remote-gig-jobs': [
    { label: 'Home', href: '/' },
    { label: 'Remote & Gig Jobs', href: '/remote-gig-jobs' },
  ],
  '/career-advice': [
    { label: 'Home', href: '/' },
    { label: 'Career Advice', href: '/career-advice' },
  ],
  '/learnerships-internships': [
    { label: 'Home', href: '/' },
    { label: 'Learnerships & Internships', href: '/learnerships-internships' },
  ],
  '/news-updates': [
    { label: 'Home', href: '/' },
    { label: 'News & Updates', href: '/news-updates' },
  ],
  '/tools': [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
  ],
  '/tools/cv-builder': [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'CV Builder', href: '/tools/cv-builder' },
  ],
  '/tools/z83-form': [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Z83 Form', href: '/tools/z83-form' },
  ],
  '/about': [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ],
  '/contact': [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ],
  '/privacy-policy': [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
  '/terms': [
    { label: 'Home', href: '/' },
    { label: 'Terms', href: '/terms' },
  ],
};

function getJobBreadcrumbs(pathname: string, slug: string): BreadcrumbItem[] {
  const categorySlug = pathname.replace('/jobs/', '').replace(`/${slug}`, '').replace('/jobs', '');
  
  const baseCrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Find Jobs', href: '/find-jobs' },
  ];

  const categoryMap: Record<string, string> = {
    'it-software': 'IT & Software',
    'marketing': 'Marketing',
    'government': 'Government',
    'customer-service': 'Customer Service',
    'human-resources': 'Human Resources',
    'engineering': 'Engineering',
    'sales': 'Sales',
    'design': 'Design',
    'healthcare': 'Healthcare',
    'education': 'Education',
    'finance': 'Finance',
  };

  const category = categoryMap[categorySlug.replace('-', '')] || categorySlug;
  if (category && category !== 'jobs') {
    baseCrumbs.push({ label: category, href: `/find-jobs?category=${category}` });
  }

  return baseCrumbs;
}

function getArticleBreadcrumbs(pathname: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Career Advice', href: '/career-advice' },
  ];
}

function buildBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathname.startsWith('/jobs/')) {
    const slug = pathSegments[1];
    return getJobBreadcrumbs(pathname, slug);
  }

  if (pathname.startsWith('/career-advice/') && pathSegments.length > 1) {
    return getArticleBreadcrumbs(pathname);
  }

  const exactMatch = BREADCRUMB_MAP[pathname];
  if (exactMatch) {
    return exactMatch;
  }

  const prefixMatch = Object.keys(BREADCRUMB_MAP).find((key) => pathname.startsWith(key));
  if (prefixMatch) {
    const baseCrumbs = BREADCRUMB_MAP[prefixMatch];
    const lastCrumb = pathSegments[pathSegments.length - 1];
    const label = lastCrumb
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return [...baseCrumbs, { label, href: pathname }];
  }

  const dynamicBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ];

  for (const segment of pathSegments) {
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    dynamicBreadcrumbs.push({ label });
  }

  return dynamicBreadcrumbs;
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="container mx-auto px-4 py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index === 0 ? (
              crumb.href ? (
                <Link href={crumb.href} className="text-muted-foreground hover:text-primary">
                  <Home className="w-4 h-4" />
                </Link>
              ) : (
                <Home className="w-4 h-4 text-muted-foreground" />
              )
            ) : (
              <>
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                {crumb.href && index < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="text-muted-foreground hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}