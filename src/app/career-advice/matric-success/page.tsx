import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Matric Success - Career Resources for Matriculants | JobHelper',
  description: 'Resources and opportunities for South African matriculants. Learnerships, entry-level jobs, and career guidance.',
};

export default function MatricSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-700">
          <div className="container mx-auto px-4 text-center text-white">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Matric Success</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Career resources and opportunities for South African matriculants
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-8">
                We're building dedicated resources for matriculants looking to start their careers.
                In the meantime, explore these options:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/learnerships-internships" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90">
                  Learnerships
                </Link>
                <Link href="/career-advice" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10">
                  Career Advice
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}