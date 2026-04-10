import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Mail, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Post a Job on JobHelper | Advertise Your Vacancies',
  description: 'Employers: Reach thousands of South African job seekers. Post your job vacancies on JobHelper.',
};

export default function PostAJobPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700">
          <div className="container mx-auto px-4 text-center text-white">
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Post a Job</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Reach thousands of qualified South African job seekers
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Why Post on JobHelper?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Wide Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Access our growing audience of 50,000+ monthly visitors seeking jobs across South Africa.
                  </p>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Targeted Audience</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach candidates in specific categories: government, remote work, learnerships, and more.
                  </p>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Fast Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Your job listing goes live immediately and stays active for 30 days.
                  </p>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Affordable Rates</h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive pricing to fit your recruitment budget.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">How to Post a Job</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <h3 className="font-semibold">Send us your job details</h3>
                      <p className="text-sm text-muted-foreground">Email your job description to advertise@jobhelper.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <h3 className="font-semibold">We'll create your listing</h3>
                      <p className="text-sm text-muted-foreground">Our team formats and publishes your job within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <h3 className="font-semibold">Start receiving applications</h3>
                      <p className="text-sm text-muted-foreground">Candidates apply directly or via the contact details you provide.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="mailto:advertise@jobhelper.co.za?subject=Post a Job - JobHelper" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary/90"
                >
                  <Mail className="w-5 h-5" />
                  Email to Post a Job
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Or contact us at: <a href="tel:+27123456789" className="text-primary">+27 12 345 6789</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our team can assist with writing job descriptions and optimizing your listing for better results.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}