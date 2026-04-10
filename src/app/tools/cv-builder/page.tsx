import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'CV Builder – Create Professional South African CVs | JobHelper',
  description: 'Create professional CVs tailored for South African employers. AI-powered templates coming soon.',
};

export default function CVBuilderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="container mx-auto px-4 text-center text-white">
            <FileText className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CV Builder</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Create professional CVs tailored for South African employers
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-8">
                Our AI-powered CV builder is under development. Create professional resumes with South African formatting and keywords optimized for local employers.
              </p>
              <div className="bg-muted/30 rounded-xl p-8">
                <h3 className="font-semibold text-lg mb-4">In the meantime, you can:</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/tools/cv-templates" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90"
                  >
                    <Download className="w-5 h-5" />
                    Download Templates
                  </Link>
                  <Link 
                    href="/career-advice" 
                    className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10"
                  >
                    <FileText className="w-5 h-5" />
                    CV Writing Tips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">CV Tips for South Africa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Keep it Concise</h3>
                <p className="text-sm text-muted-foreground">2-3 pages maximum. Recruiters spend 6-7 seconds scanning.</p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Use Keywords</h3>
                <p className="text-sm text-muted-foreground">Include ATS keywords from the job description.</p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Highlight Achievements</h3>
                <p className="text-sm text-muted-foreground">Use numbers - "Increased sales by 25%" is stronger than "Responsible for sales".</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/career-advice" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All CV Tips <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}