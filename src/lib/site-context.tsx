'use client';

import { createContext, useContext, ReactNode } from 'react';
import { SITES, type SiteId } from '@/middleware';

export interface Site {
  id: SiteId;
  subdomain: string;
  name: string;
  description: string;
}

interface SiteContextType {
  currentSite: Site;
  sites: typeof SITES;
}

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children, siteId }: { children: ReactNode; siteId: string }) {
  const site = SITES.find(s => s.id === siteId) || SITES[0];

  return (
    <SiteContext.Provider value={{ currentSite: site, sites: SITES }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within SiteProvider');
  }
  return context;
}