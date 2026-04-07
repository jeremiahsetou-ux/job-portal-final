import { SiteProvider } from '@/lib/site-context';

export default async function SitesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;

  return (
    <SiteProvider siteId={siteId}>
      {children}
    </SiteProvider>
  );
}