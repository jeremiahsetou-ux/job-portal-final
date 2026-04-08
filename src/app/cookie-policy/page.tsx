import { Mail, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy – JobHelper',
  description: 'JobHelper Cookie Policy - Learn about how we use cookies and your choices.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-200">
              How we use cookies
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 p-4 bg-muted/50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Effective Date:</span> 7 April 2026
          </p>
        </div>

        {/* 1. What Are Cookies? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. What Are Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience. Cookies can be temporary (session cookies) or permanent (persistent cookies).
          </p>
        </section>

        {/* 2. How We Use Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Cookies</h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Essential Cookies</h3>
              <p className="text-sm text-muted-foreground">
                Required for basic website functionality. These cookies enable core features like page navigation and secure areas. The website cannot function without these cookies.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Performance/Analytics Cookies</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand how visitors interact with our website by collecting and reporting information anonymously. Used to improve site performance and user experience.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Advertising Cookies</h3>
              <p className="text-sm text-muted-foreground">
                Used to deliver relevant ads and marketing campaigns. These cookies track your browsing activity to help advertisers show personalized content.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Affiliate Tracking Cookies</h3>
              <p className="text-sm text-muted-foreground">
                Used to track referrals from partner websites. When you click an affiliate link, a cookie is stored to credit the referral for commission purposes.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Functionality Cookies</h3>
              <p className="text-sm text-muted-foreground">
                Allow enhanced functionality and personalization, such as remembering your preferences and settings.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Third-Party Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Third-Party Cookies</h2>
          <p className="text-muted-foreground mb-4">The following third parties may set cookies on your device:</p>
          <ul className="space-y-3 text-muted-foreground">
            <li><span className="font-medium text-foreground">Google (AdSense):</span> For advertising and ad personalization</li>
            <li><span className="font-medium text-foreground">Google (Analytics):</span> For website analytics and performance</li>
            <li><span className="font-medium text-foreground">Affiliate Networks:</span> For tracking referrals and commissions</li>
            <li><span className="font-medium text-foreground">Vercel:</span> For hosting and infrastructure</li>
          </ul>
        </section>

        {/* 4. Your Consent */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Your Consent</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you first visit JobHelper, a cookie banner will display at the bottom of your screen. You can choose to "Accept All" cookies or "Reject Non-Essential" cookies. Your preference will be stored in localStorage and the banner will not appear again unless you clear your browser settings.
          </p>
        </section>

        {/* 5. How to Control Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. How to Control Cookies</h2>
          <p className="text-muted-foreground mb-4">You can manage or disable cookies through your browser settings. Here's how for popular browsers:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Chrome</h3>
              <p className="text-sm text-muted-foreground">
                Settings → Privacy → Cookies → Block third-party cookies
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Firefox</h3>
              <p className="text-sm text-muted-foreground">
                Options → Privacy → Enhanced Tracking Protection
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Safari</h3>
              <p className="text-sm text-muted-foreground">
                Preferences → Privacy → Prevent cross-site tracking
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <h3 className="font-medium text-foreground mb-2">Edge</h3>
              <p className="text-sm text-muted-foreground">
                Settings → Cookies and site permissions
              </p>
            </div>
          </div>
        </section>

        {/* 6. Cookie Duration */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Cookie Duration</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><span className="font-medium text-foreground">Session Cookies:</span> Temporary cookies that are deleted when you close your browser. Used for things like keeping you logged in during a session.</li>
            <li><span className="font-medium text-foreground">Persistent Cookies:</span> Remain on your device for a set period (ranging from a few days to 26 months). Used for analytics, advertising preferences, and functionality remembering.</li>
          </ul>
        </section>

        {/* 7. Updates to This Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Updates to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we use cookies.
          </p>
        </section>

        {/* 8. Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact Us</h2>
          <div className="bg-muted/30 p-6 rounded-lg border">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
                <p className="text-xs text-muted-foreground mt-1">
                  (Include "Cookie Policy" in subject line)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}