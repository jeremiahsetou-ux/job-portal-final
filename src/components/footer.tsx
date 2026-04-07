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
            <h4 className="font-semibold mb-4">Companies</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/post-job" className="block hover:text-primary">Post a Job</Link>
              <Link href="/pricing" className="block hover:text-primary">Pricing</Link>
              <Link href="/enterprise" className="block hover:text-primary">Enterprise</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/blog" className="block hover:text-primary">Blog</Link>
              <Link href="/salary-guide" className="block hover:text-primary">Salary Guide</Link>
              <Link href="/interview-tips" className="block hover:text-primary">Interview Tips</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/about" className="block hover:text-primary">About Us</Link>
              <Link href="/contact" className="block hover:text-primary">Contact</Link>
              <Link href="/careers" className="block hover:text-primary">Careers</Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 JobHelper.co.za — Helping South Africans find jobs
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}