import { FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corrections Log - JobHelper',
  description: 'Public log of corrections and retractions made by JobHelper.',
};

export default function CorrectionsLogPage() {
  const corrections = [
    {
      date: '2026-04-07',
      article: 'Top 50 Highest Paying Jobs in SA 2026',
      type: 'Factual',
      description: 'Corrected salary range for Software Developer position - changed from "R850k-R1.2m" to "R600k-R1m" based on verified market data.',
      action: 'Inline correction with note added',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[200px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Corrections Log
            </h1>
            <p className="text-xl text-gray-200">
              Transparency in our journalism
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <p className="text-muted-foreground mb-8">
          This page contains a public record of all significant corrections and retractions made to JobHelper articles. We believe in full transparency with our readers.
        </p>

        {corrections.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No corrections have been made yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {corrections.map((correction, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(correction.date).toLocaleDateString('en-ZA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-1">
                      {correction.article}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    correction.type === 'Factual' ? 'bg-yellow-100 text-yellow-800' :
                    correction.type === 'Significant' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {correction.type}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Error:</span> {correction.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Action taken:</span> {correction.action}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            To report an error in any of our articles, please contact us at{' '}
            <a href="mailto:info@jobhelper.co.za" className="text-primary hover:underline">
              info@jobhelper.co.za
            </a>{' '}
            with "Correction Request" in the subject line.
          </p>
        </div>
      </div>
    </div>
  );
}