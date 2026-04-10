import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, Download, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/navbar';


export const metadata: Metadata = {
  title: 'Z83 Form Helper & Government Job Tools | JobHelper',
  description: 'Interactive Z83 form, download blank forms, government job guides, and application tips for South Africans.',
};

const Z83_RESOURCES = [
  { title: 'Interactive Z83 Form', description: 'Complete your Z83 form online with our step-by-step wizard', icon: FileText, link: '/z83-form' },
  { title: 'Download Blank Z83', description: 'Get the official blank Z83 form PDF for manual completion', icon: Download, link: '/z83-form#download' },
  { title: 'Z83 Guide', description: 'Step-by-step instructions for completing each section correctly', icon: BookOpen, link: '/z83-form#guide' },
];

const GUIDE_SECTIONS = [
  { section: 'Section A', description: 'Personal Information', tips: 'Fill in your full names as per ID document' },
  { section: 'Section B', description: 'Declaration', tips: 'Read carefully and sign where indicated' },
  { section: 'Section C', description: 'Employment History', tips: 'List all employment, starting with most recent' },
  { section: 'Section D', description: 'Education & Training', tips: 'Include matric and all post-matric qualifications' },
  { section: 'Section E', description: 'References', tips: 'Provide at least two employment references' },
];

export default function Z83ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Z83 Form Helper
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Government Job Application Tools & Z83 Form Resources
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

        {/* Z83 Tools */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Z83 Form Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Z83_RESOURCES.map((resource) => (
                <Link key={resource.title} href={resource.link} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <resource.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Z83 Form Section Guide</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDE_SECTIONS.map((item) => (
                <div key={item.section} className="bg-card border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-semibold">{item.section}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-xs text-primary">{item.tips}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Z83 Form Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Common Mistakes to Avoid</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Leaving sections blank</li>
                    <li>• Using non-black ink</li>
                    <li>• Not signing the form</li>
                    <li>• Missing supporting documents</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Application Checklist</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Z83 form (signed)</li>
                    <li>• CV (max 4 pages)</li>
                    <li>• Certified ID copy</li>
                    <li>• Relevant certificates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government Jobs CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Find Government Jobs</h2>
              <p className="text-gray-200 mb-6 max-w-xl mx-auto">
                Browse all available government job vacancies across South Africa
              </p>
              <Link
                href="/government-jobs"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
              >
                Browse Government Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}