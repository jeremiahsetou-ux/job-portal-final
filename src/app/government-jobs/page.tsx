import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, Briefcase, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { NewsCard } from '@/components/news-card';

export const metadata: Metadata = {
  title: 'Government Jobs South Africa – DPSA Circulars & Vacancies | JobHelper',
  description: 'Find the latest government job vacancies in South Africa. DPSA circulars, civil service jobs, and Z83 form guides.',
};

const GOVERNMENT_JOBS = [
  { id: '1', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', category: 'Government', postedAt: '5 hours ago', remote: false },
  { id: '2', title: 'Admin Officer', company: 'SARS', location: 'Johannesburg', category: 'Government', postedAt: '1 day ago', remote: false },
  { id: '3', title: 'Data Capturer', company: 'National Treasury', location: 'Cape Town', category: 'Government', postedAt: '2 days ago', remote: false },
  { id: '4', title: 'HR Coordinator', company: 'Dept of Education', location: 'Durban', category: 'Government', postedAt: '3 days ago', remote: false },
];

const NEWS_ARTICLES = [
  { id: '1', headline: 'DPSA Salary Adjustment 2026 - What You Need to Know', date: '2026-04-05', author: 'JobHelper Team', excerpt: 'The Department of Public Service and Administration has announced new salary scales for government employees effective April 2026.', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop' },
  { id: '2', headline: 'How to Complete the Z83 Form Correctly', date: '2026-04-03', author: 'JobHelper Team', excerpt: 'Step-by-step guide to completing the Z83 government job application form without errors.', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop' },
  { id: '3', headline: 'Top Government Departments Hiring in 2026', date: '2026-03-28', author: 'JobHelper Team', excerpt: 'Which government departments have the most open positions and how to apply.', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop' },
];

export default function GovernmentJobsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Government Jobs South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              DPSA Circulars, Civil Service Vacancies & Government Employment Opportunities
            </p>
            <Link
              href="/z83-form"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              <FileText className="w-5 h-5" />
              Fill Z83 Form Online
            </Link>
          </div>
        </section>

        {/* News Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Latest Government Job News</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {NEWS_ARTICLES.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Current Government Vacancies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {GOVERNMENT_JOBS.map((job) => (
                <div key={job.id} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.postedAt}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/find-jobs?category=Government" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View All Government Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Z83 Tools Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Z83 Form Helper</h2>
              <p className="text-muted-foreground mb-6">
                Applying for government jobs? Use our interactive Z83 form to complete your application correctly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/z83-form" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90">
                  Fill Z83 Form Online
                </Link>
                <Link href="/z83-form#download" className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10">
                  Download Blank Form
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}