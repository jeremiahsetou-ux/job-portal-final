import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ArrowRight, AlertCircle } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Z83 Application Form – Fill Online & Download PDF | JobHelper',
  description: 'Download the official Z83 government job application form. Fill online or print and complete manually.',
};

export default function Z83FormPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4 text-center text-white">
            <FileText className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Z83 Application Form</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Official government job application form - Download or fill online
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Important Information</h3>
                    <p className="text-sm text-muted-foreground">
                      The Z83 form is the official application form for all government jobs in South Africa. 
                      All applicants must complete this form when applying for positions in the public sector.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Download Official Z83 Form</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Z83 (January 2016)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Current version of the Z83 form. Use this for all government job applications.
                  </p>
                  <a 
                    href="https://www.dpsa.gov.za/dpsa2g/documents/z83.doc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Z83 Fillable (Word)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fillable version - type your details and print.
                  </p>
                  <a 
                    href="https://www.dpsa.gov.za/dpsa2g/documents/z83.docx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/10"
                  >
                    <Download className="w-4 h-4" />
                    Download Word
                  </a>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Interactive Form Coming Soon</h2>
                <p className="text-muted-foreground mb-6">
                  We're developing an online Z83 form builder that will help you:
                </p>
                <ul className="space-y-3 mb-6">
                  <li>✅ Auto-fill your personal details</li>
                  <li>✅ Ensure all required fields are completed</li>
                  <li>✅ Save and edit your application</li>
                  <li>✅ Export to PDF ready for submission</li>
                </ul>
                <Link href="/career-advice" className="text-primary font-medium hover:underline">
                  Learn how to complete Z83 correctly →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Z83 Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Complete All Sections</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure every required field is filled. Incomplete forms are often rejected automatically.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Use Black Ink</h3>
                <p className="text-sm text-muted-foreground">
                  If printing, use black ink only. Write neatly and legibly in capital letters.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Attach Additional Pages</h3>
                <p className="text-sm text-muted-foreground">
                  You can attach a separate CV and certified copies of qualifications.
                </p>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-2">One Application Per Job</h3>
                <p className="text-sm text-muted-foreground">
                  Submit separate Z83 forms for each position you apply for.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}