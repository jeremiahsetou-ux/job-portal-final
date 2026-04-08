import { Mail, Phone, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – JobHelper',
  description: 'JobHelper Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
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
            <span className="font-medium">Responsible Party:</span> Jeremiah Setou (Sole Proprietor)
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="font-medium">Last Updated:</span> 7 April 2026
          </p>
        </div>

        {/* 1. Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to protecting your privacy under the Protection of Personal Information Act (POPIA). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website. By using JobHelper, you consent to the practices described in this policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border font-medium">Category</th>
                  <th className="text-left p-3 border font-medium">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Identity Data</td>
                  <td className="p-3 border text-muted-foreground">Name, username, or similar identifier</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Contact Data</td>
                  <td className="p-3 border text-muted-foreground">Email address, phone number, physical address</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Technical Data</td>
                  <td className="p-3 border text-muted-foreground">IP address, browser type, operating system, access times</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Usage Data</td>
                  <td className="p-3 border text-muted-foreground">Pages viewed, time spent on pages, click paths</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Communication Data</td>
                  <td className="p-3 border text-muted-foreground">Messages sent through contact forms, job alerts preferences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. How We Collect Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Collect Your Information</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><span className="font-medium text-foreground">Directly from you:</span> When you fill out contact forms, subscribe to job alerts, or communicate with us.</li>
            <li><span className="font-medium text-foreground">Automatically via cookies:</span> When you browse our website, we automatically collect technical and usage data.</li>
            <li><span className="font-medium text-foreground">From third parties:</span> Analytics providers (Google Analytics), advertising partners, and affiliate networks.</li>
          </ul>
        </section>

        {/* 4. Lawful Basis for Processing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Lawful Basis for Processing</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><span className="font-medium text-foreground">Consent:</span> When you explicitly agree to receive job alerts or newsletters.</li>
            <li><span className="font-medium text-foreground">Legitimate interests:</span> To improve our services, analyze traffic, and display relevant ads.</li>
            <li><span className="font-medium text-foreground">Contractual necessity:</span> To process job applications submitted through our platform.</li>
            <li><span className="font-medium text-foreground">Legal obligation:</span> To comply with applicable laws and respond to legal requests.</li>
          </ul>
        </section>

        {/* 5. How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. How We Use Your Information</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• To operate and maintain our website</li>
            <li>• To send you job alerts and newsletters</li>
            <li>• To respond to your inquiries and provide customer support</li>
            <li>• To analyze traffic and improve user experience</li>
            <li>• To display targeted advertising and sponsored content</li>
            <li>• To enforce our terms of service and prevent fraud</li>
          </ul>
        </section>

        {/* 6. Disclosure of Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Disclosure of Your Information</h2>
          <p className="text-muted-foreground mb-4">We may share your information with:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">Service providers:</span> Vercel (hosting), Supabase (database), Google Analytics (analytics)</li>
            <li><span className="font-medium text-foreground">Advertising partners:</span> Google AdSense, Meta Ads, other ad networks</li>
            <li><span className="font-medium text-foreground">Affiliate networks:</span> For commission-based product recommendations</li>
            <li><span className="font-medium text-foreground">Legal authorities:</span> When required by law or to protect our rights</li>
          </ul>
        </section>

        {/* 7. Cookies and Tracking Technologies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies and Tracking Technologies</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">Essential cookies:</span> Required for basic website functionality</li>
            <li><span className="font-medium text-foreground">Analytics cookies:</span> Google Analytics to understand how visitors use our site</li>
            <li><span className="font-medium text-foreground">Advertising cookies:</span> To deliver relevant ads and track ad performance</li>
            <li><span className="font-medium text-foreground">Affiliate cookies:</span> To track referrals for commission-based partnerships</li>
          </ul>
        </section>

        {/* 8. Data Retention */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Data Retention</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border font-medium">Data Type</th>
                  <th className="text-left p-3 border font-medium">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Contact form submissions</td>
                  <td className="p-3 border text-muted-foreground">12 months</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Analytics data</td>
                  <td className="p-3 border text-muted-foreground">26 months</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Email subscriptions</td>
                  <td className="p-3 border text-muted-foreground">Until unsubscribed</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Server logs</td>
                  <td className="p-3 border text-muted-foreground">90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. Your Rights Under POPIA */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Your Rights Under POPIA</h2>
          <p className="text-muted-foreground mb-4">You have the following rights:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• Right to access your personal information</li>
            <li>• Right to rectification of inaccurate data</li>
            <li>• Right to erasure ("right to be forgotten")</li>
            <li>• Right to object to processing</li>
            <li>• Right to withdraw consent</li>
            <li>• Right to lodge a complaint with the Information Regulator</li>
          </ul>
        </section>

        {/* 10. Security Measures */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Security Measures</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• HTTPS encryption for all data in transit</li>
            <li>• Secure hosting on Vercel's platform</li>
            <li>• Regular security updates and patches</li>
            <li>• Limited access to personal data</li>
            <li>• Automated monitoring for suspicious activity</li>
          </ul>
        </section>

        {/* 11. Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Physical Address</p>
                <p className="text-sm text-muted-foreground">8128 Mahlangu Street, Mohlakeng, Randfontein, 1759</p>
              </div>
            </div>
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
          </div>
        </section>
      </div>
    </div>
  );
}