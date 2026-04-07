import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const SITES = [
  { id: 'hub', subdomain: 'jobhelper', name: 'JobHelper Hub', description: 'Daily news & affiliate HQ' },
  { id: 'z83', subdomain: 'z83', name: 'Z83 Government', description: 'Z83 AI PDF generator' },
  { id: 'remote', subdomain: 'remote', name: 'Remote Jobs', description: 'International/remote for SA' },
  { id: 'jse', subdomain: 'jse', name: 'JSE Careers', description: 'JSE grad programmes' },
  { id: 'matric', subdomain: 'matric', name: 'Matric Hub', description: 'Learnerships & internships' },
  { id: 'cv', subdomain: 'cv', name: 'CV Builder', description: 'AI resume builder reviews' },
  { id: 'learn', subdomain: 'learn', name: 'Skills Hub', description: 'Coursera/GetSmarter courses' },
  { id: 'interview', subdomain: 'interview', name: 'Interview Prep', description: 'Salary guides & mock interviews' },
  { id: 'freelance', subdomain: 'freelance', name: 'Freelance Gigs', description: 'Upwork/Fiverr guides' },
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
  const hostname = request.headers.get('host') || request.nextUrl.host;
  const url = request.nextUrl;

  const subdomain = hostname.split('.')[0];
  
  if (hostname.includes('localhost') || hostname === 'jobhelper.co.za') {
    return NextResponse.next();
  }

  const site = getSiteFromSubdomain(subdomain);
  
  if (site) {
    url.pathname = `/sites/${site.id}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};