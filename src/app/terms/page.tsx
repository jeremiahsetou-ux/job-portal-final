import { Mail, Phone, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions – JobHelper',
  description: 'JobHelper Terms and Conditions - Read our terms of service for using our website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-200">
              Effective Date: 7 April 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 p-4 bg-muted/50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Owner:</span> Jeremiah Setou
          </p>
        </div>

        {/* 1. Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to JobHelper. By using our website, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms govern your use of the JobHelper website and all associated services.
          </p>
        </section>

        {/* 2. Definitions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Definitions</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">"Site":</span> The JobHelper website located at jobhelper.co.za and all subdomains.</li>
            <li><span className="font-medium text-foreground">"User":</span> Any person who accesses or uses the Site.</li>
            <li><span className="font-medium text-foreground">"Content":</span> All text, images, videos, articles, and other materials on the Site.</li>
            <li><span className="font-medium text-foreground">"Affiliate Links":</span> Links to third-party products or services for which we receive commission.</li>
            <li><span className="font-medium text-foreground">"We/Us/Our":</span> JobHelper and its owner, Jeremiah Setou.</li>
          </ul>
        </section>

        {/* 3. Acceptance of Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using JobHelper, you warrant that you are at least 16 years of age and have the legal capacity to enter into these terms. You agree to use the Site lawfully and in accordance with these Terms and Conditions.
          </p>
        </section>

        {/* 4. Our Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Our Services</h2>
          <p className="text-muted-foreground mb-4">JobHelper provides the following services:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• News articles and career guides</li>
            <li>• Job listings and opportunities</li>
            <li>• Career tools (CV builder, Z83 form)</li>
            <li>• Affiliate product recommendations</li>
            <li>• Job alerts and newsletters</li>
            <li>• Educational resources</li>
          </ul>
        </section>

        {/* 5. Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All original content on JobHelper, including articles, images, logos, and design, is owned by JobHelper and is protected by South African and international copyright laws. You may not reproduce, distribute, or modify any content without our prior written consent.
          </p>
        </section>

        {/* 6. User Conduct */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. User Conduct</h2>
          <p className="text-muted-foreground mb-4">You agree not to:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Post false or misleading information</li>
            <li>• Send spam or unsolicited communications</li>
            <li>• Upload or transmit viruses or malware</li>
            <li>• Scrape or automated data collection</li>
            <li>• Engage in illegal activities</li>
            <li>• Harass or defame other users</li>
          </ul>
        </section>

        {/* 7. Job Listings & Third-Party Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Job Listings & Third-Party Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            JobHelper publishes job listings from third-party employers. We do not guarantee the accuracy, legitimacy, or availability of these positions. Users should verify job postings independently. We are not responsible for any employment decisions made based on third-party listings.
          </p>
        </section>

        {/* 8. Affiliate Links & Advertising */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Affiliate Links & Advertising</h2>
          <p className="text-muted-foreground leading-relaxed">
            JobHelper may contain affiliate links to third-party products or services. We may earn a commission when you purchase through these links. Affiliate links are marked with "sponsored" labels or rel="nofollow" attributes. We are not responsible for third-party products or services.
          </p>
        </section>

        {/* 9. Disclaimer of Warranties */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Site is provided "as is" and "as available" without any warranties, express or implied. We do not warrant that the Site will be error-free, secure, or continuously available. Use of the Site is at your own risk.
          </p>
        </section>

        {/* 10. Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by law, JobHelper and its owner shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability arising from these Terms shall not exceed R100 (One Hundred Rand).
          </p>
        </section>

        {/* 11. Indemnification */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">11. Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to indemnify, defend, and hold harmless JobHelper and its owner from any claims, damages, losses, or expenses arising from your use of the Site, your violation of these Terms, or your infringement of any third-party rights.
          </p>
        </section>

        {/* 12. User-Generated Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">12. User-Generated Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you submit comments, reviews, or other content to JobHelper, you grant us a perpetual, irrevocable, royalty-free license to display, reproduce, and modify such content. You represent that you have the right to grant this license.
          </p>
        </section>

        {/* 13. Links to Other Websites */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">13. Links to Other Websites</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Site may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of these external sites. Linking to third-party sites does not imply endorsement.
          </p>
        </section>

        {/* 14. Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">14. Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may suspend or terminate your access to the Site at any time for violations of these Terms. Upon termination, your right to use the Site ceases immediately. All provisions that by their nature should survive termination shall remain in effect.
          </p>
        </section>

        {/* 15. Governing Law & Dispute Resolution */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">15. Governing Law & Dispute Resolution</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms shall be governed by the laws of the Republic of South Africa. Any disputes arising from these Terms shall be resolved through binding arbitration in Johannesburg, South Africa, under the Arbitration Act of 1965.
          </p>
        </section>

        {/* 16. Changes to These Terms */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">16. Changes to These Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms at any time. The Effective Date at the top indicates the latest revision. Continued use of the Site after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* 17. Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">17. Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">069 708 6808</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">8128 Mahlangu Street, Mohlakeng, Randfontein, 1759</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}