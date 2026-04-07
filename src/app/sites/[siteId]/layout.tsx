import { SiteProvider } from '@/lib/site-context';
import { SITES } from '@/middleware';

export default function SitesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ siteId: string }>;
}) {
  return (
    <SiteProvider siteId={(params as { siteId: string }).siteId}>
      {children}
    </SiteProvider>
  );
}