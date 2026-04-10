import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/government-jobs" className="block hover:text-primary">
                Government Jobs
              </Link>
              <Link href="/remote-gig-jobs" className="block hover:text-primary">
                Remote & Gig Jobs
              </Link>
              <Link href="/career-advice" className="block hover:text-primary">
                Career Advice
              </Link>
              <Link href="/jobs" className="block hover:text-primary">
                Find Jobs
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/news-updates" className="block hover:text-primary">
                News & Updates
              </Link>
              <Link href="/learnerships-internships" className="block hover:text-primary">
                Learnerships & Internships
              </Link>
              <Link href="/career-advice?category=skills" className="block hover:text-primary">
                Learn & Upskill
              </Link>
              <Link href="/career-advice/matric-success" className="block hover:text-primary">
                Matric Success
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/about" className="block hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-primary">
                Contact
              </Link>
              <Link href="/editorial-guidelines" className="block hover:text-primary">
                Editorial Guidelines
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal & Policy</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="block hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-primary">
                Terms
              </Link>
              <Link href="/cookie-policy" className="block hover:text-primary">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="block hover:text-primary">
                Accessibility
              </Link>
              <Link href="/paia-manual" className="block hover:text-primary">
                PAIA Manual
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tools & Advertise</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/tools/cv-builder" className="block hover:text-primary">
                CV Builder
              </Link>
              <Link href="/tools/z83-form" className="block hover:text-primary">
                Z83 Form
              </Link>
              <Link href="/tools/post-a-job" className="block hover:text-primary">
                Post a Job
              </Link>
              <Link href="/tools/advertise" className="block hover:text-primary">
                Advertise with Us
              </Link>
              <Link href="/sitemap" className="block hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 JobHelper.co.za — Helping South Africans find jobs
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary">
              Cookies
            </Link>
            <Link href="/accessibility" className="hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}