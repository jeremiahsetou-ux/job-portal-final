import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const SITES = [
  { id: 'main', subdomain: 'jobhelper', name: 'JobHelper Hub', description: 'Daily job news & affiliate HQ' },
  { id: 'remote', subdomain: 'remote', name: 'Remote Jobs', description: 'International/remote for SA' },
  { id: 'matric', subdomain: 'matric', name: 'Matric Hub', description: 'Learnerships & internships' },
  { id: 'cv', subdomain: 'cv', name: 'CV Builder', description: 'AI resume builder reviews' },
  { id: 'z83', subdomain: 'z83', name: 'Z83 Government', description: 'Government jobs & Z83 form' },
  { id: 'jse', subdomain: 'jse', name: 'JSE Careers', description: 'JSE grad programmes' },
  { id: 'freelance', subdomain: 'freelance', name: 'Freelance Gigs', description: 'Upwork/Fiverr guides' },
  { id: 'learn', subdomain: 'learn', name: 'Skills Hub', description: 'Coursera/GetSmarter courses' },
  { id: 'interview', subdomain: 'interview', name: 'Interview Prep', description: 'Salary guides & mock interviews' },
  { id: 'careerchange', subdomain: 'careerchange', name: 'Career Switch', description: 'Retrenchment & mid-career help' },
  { id: 'portfolios', subdomain: 'portfolios', name: 'Portfolios', description: 'Namecheap/hosting affiliates' },
] as const;

export type SiteId = typeof SITES[number]['id'];

export function getSiteFromSubdomain(subdomain: string | null): typeof SITES[number] | null {
  if (!subdomain) return SITES[0];
  const site = SITES.find(s => s.subdomain === subdomain.toLowerCase());
  return site || null;
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Get subdomain from hostname
  const subdomain = hostname.split('.')[0];

  // Skip for localhost, main domain, or api routes
  if (
    hostname.includes('localhost') ||
    hostname === 'jobhelper.co.za' ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/_next') ||
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const site = getSiteFromSubdomain(subdomain);

  if (site) {
    // Rewrite to the site-specific route
    url.pathname = `/sites/${site.id}${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};