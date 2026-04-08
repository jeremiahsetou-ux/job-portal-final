import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        {/* Affiliate Disclaimer */}
        <div className="bg-muted rounded-lg p-4 mb-8 text-sm text-muted-foreground">
          <p>
            <strong>Affiliate Disclosure:</strong> JobHelper.co.za contains affiliate links. We may earn a commission when you click on links to products and services.
            This helps support our free service. We only recommend products we trust.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/find-jobs" className="block hover:text-primary">Find Jobs</Link>
              <Link href="/cv-builder" className="block hover:text-primary">CV Builder</Link>
              <Link href="/z83-form" className="block hover:text-primary">Z83 Form</Link>
              <Link href="/career-advice" className="block hover:text-primary">Career Advice</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/news" className="block hover:text-primary">News</Link>
              <Link href="/learn" className="block hover:text-primary">Learn & Upskill</Link>
              <Link href="/matric" className="block hover:text-primary">Matric & Learnerships</Link>
              <Link href="/remote" className="block hover:text-primary">Remote Jobs</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/about" className="block hover:text-primary">About Us</Link>
              <Link href="/contact" className="block hover:text-primary">Contact</Link>
              <Link href="/editorial-guidelines" className="block hover:text-primary">Editorial Guidelines</Link>
              <Link href="/careers" className="block hover:text-primary">Careers</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal & Policy</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="block hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-primary">Terms & Conditions</Link>
              <Link href="/cookie-policy" className="block hover:text-primary">Cookie Policy</Link>
              <Link href="/accessibility" className="block hover:text-primary">Accessibility</Link>
              <Link href="/social-media-policy" className="block hover:text-primary">Social Media Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/paia-manual" className="text-muted-foreground hover:text-primary">PAIA Manual</Link>
            <Link href="/corrections-log" className="text-muted-foreground hover:text-primary">Corrections Log</Link>
            <Link href="/advertise" className="text-muted-foreground hover:text-primary">Advertise</Link>
            <Link href="/sitemap.xml" className="text-muted-foreground hover:text-primary">Sitemap</Link>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 JobHelper.co.za — Helping South Africans find jobs
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-primary">Cookies</Link>
            <Link href="/accessibility" className="hover:text-primary">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}