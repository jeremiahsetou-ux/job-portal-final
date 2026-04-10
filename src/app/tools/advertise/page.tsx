import { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, Mail, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Advertise with JobHelper | Reach South African Job Seekers',
  description: 'Promote your brand, products, and services to our growing audience of job seekers and career-minded professionals.',
};

export default function AdvertisePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-700">
          <div className="container mx-auto px-4 text-center text-white">
            <Megaphone className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advertise with JobHelper</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Promote your brand to our growing audience of job seekers
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Why Advertise on JobHelper?</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Monthly Visitors</p>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12K+</div>
                  <p className="text-sm text-muted-foreground">Active Job Listings</p>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">850+</div>
                  <p className="text-sm text-muted-foreground">Company Partners</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Advertising Options</h2>
              <div className="space-y-6 mb-12">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Banner Advertising</h3>
                      <p className="text-sm text-muted-foreground">Display ads on key pages</p>
                    </div>
                    <span className="text-primary font-bold">From R2,000/month</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Homepage banner placement</li>
                    <li>• Category page sidebar</li>
                    <li>• Responsive ad sizes</li>
                  </ul>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Sponsored Listings</h3>
                      <p className="text-sm text-muted-foreground">Boost your job visibility</p>
                    </div>
                    <span className="text-primary font-bold">From R500/month</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Top of search results</li>
                    <li>• Featured badge</li>
                    <li>• 30-day duration</li>
                  </ul>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Content Partnerships</h3>
                      <p className="text-sm text-muted-foreground">Sponsored articles and guides</p>
                    </div>
                    <span className="text-primary font-bold">Custom Quote</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dedicated article features</li>
                    <li>• Newsletter inclusion</li>
                    <li>• Social media promotion</li>
                  </ul>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Affiliate Programs</h3>
                      <p className="text-sm text-muted-foreground">Earn commission on referrals</p>
                    </div>
                    <span className="text-primary font-bold">30% Commission</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CV writing services</li>
                    <li>• Online courses</li>
                    <li>• Job search tools</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Get Started</h2>
                <p className="text-muted-foreground mb-6">
                  Contact our advertising team to discuss your campaign goals and get a customized quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:advertise@jobhelper.co.za?subject=Advertising Inquiry - JobHelper" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Brand?</h2>
              <p className="text-muted-foreground mb-6">
                Join hundreds of companies advertising on JobHelper to reach South Africa's best talent.
              </p>
              <a 
                href="mailto:advertise@jobhelper.co.za" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                advertise@jobhelper.co.za <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}