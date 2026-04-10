import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Navbar } from '@/components/navbar';


export const metadata: Metadata = {
  title: 'Learnerships & Internships in South Africa 2026 | JobHelper',
  description: 'Find learnerships, internships, and graduate programs in South Africa. SETA-funded training with stipends available.',
};

const LEARNERSHIPS = [
  { id: '1', title: 'ICT Learnership - NQF Level 4', company: 'MICT SETA', location: 'Johannesburg', category: 'ICT', duration: '12 months', stipend: 'R3,500/month', closing: '2026-04-20' },
  { id: '2', title: 'Business Administration NQF 4', company: 'Services SETA', location: 'Cape Town', category: 'Business', duration: '12 months', stipend: 'R3,500/month', closing: '2026-04-25' },
  { id: '3', title: 'Marketing Learnership NQF 5', company: 'W&RSETA', location: 'Durban', category: 'Marketing', duration: '12 months', stipend: 'R4,000/month', closing: '2026-04-15' },
  { id: '4', title: 'Finance Learnership NQF 4', company: 'Finance SETA', location: 'Pretoria', category: 'Finance', duration: '12 months', stipend: 'R3,500/month', closing: '2026-04-30' },
];

const INTERNSHIPS = [
  { id: 'i1', title: 'Finance Graduate Programme 2026', company: 'Standard Bank', location: 'Johannesburg', category: 'Finance', duration: '12 months', stipend: 'R12,000/month', closing: '2026-04-30' },
  { id: 'i2', title: 'HR Internship', company: 'MTN South Africa', location: 'Johannesburg', category: 'HR', duration: '6 months', stipend: 'R8,000/month', closing: '2026-04-18' },
  { id: 'i3', title: 'IT Graduate Development', company: 'SAPS', location: 'Pretoria', category: 'IT', duration: '12 months', stipend: 'R10,000/month', closing: '2026-04-22' },
  { id: 'i4', title: 'Marketing Internship', company: 'Coca-Cola', location: 'Johannesburg', category: 'Marketing', duration: '6 months', stipend: 'R9,000/month', closing: '2026-04-12' },
];

export default function LearnershipsInternshipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-orange-600 to-amber-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learnerships & Internships in South Africa 2026
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Entry-level programs with training stipends and career opportunities
            </p>
            <Link href="/matric" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              <GraduationCap className="w-5 h-5" />
              For Matriculants
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">What is a Learnership?</h2>
              <p className="text-muted-foreground mb-4">
                A learnership is a structured learning program that combines theory with practical workplace experience. 
                Upon completion, you receive a nationally recognized qualification. Most learnerships include a monthly stipend.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✅ NQF accredited qualifications</li>
                <li>✅ Monthly stipend during training</li>
                <li>✅ Practical work experience</li>
                <li>✅ Career placement opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Available Learnerships</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {LEARNERSHIPS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-green-600 font-medium">💰 {job.stipend}</span>
                    <span className="text-orange-600 font-medium">📅 Closes: {job.closing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Graduate Internships</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {INTERNSHIPS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {job.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-green-600 font-medium">💰 {job.stipend}</span>
                    <span className="text-orange-600 font-medium">📅 Closes: {job.closing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3 font-bold">1</div>
                  <h3 className="font-semibold mb-2">Check Requirements</h3>
                  <p className="text-sm text-muted-foreground">Most learnerships require matric or equivalent. Check specific job requirements.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3 font-bold">2</div>
                  <h3 className="font-semibold mb-2">Submit Application</h3>
                  <p className="text-sm text-muted-foreground">Apply directly through the company or SETA website with your CV and ID.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3 font-bold">3</div>
                  <h3 className="font-semibold mb-2">Attend Interview</h3>
                  <p className="text-sm text-muted-foreground">If shortlisted, attend the interview and skills assessment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}