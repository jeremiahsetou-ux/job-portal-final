import { Mail, FileText, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Guidelines & Corrections Policy - JobHelper',
  description: 'JobHelper editorial guidelines, corrections policy, and commitment to accurate journalism.',
};

export default function EditorialGuidelinesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Editorial Guidelines
            </h1>
            <p className="text-xl text-gray-200">
              & Corrections Policy
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

        {/* 1. Our Commitment */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed">
            JobHelper is committed to providing accurate, fair, and transparent journalism. We strive to deliver reliable information that empowers South Africans in their career journeys. Our editorial team upholds the highest standards of integrity in all content published on our platform.
          </p>
        </section>

        {/* 2. Editorial Independence */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Editorial Independence</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• <span className="font-medium text-foreground">No pay-for-play:</span> We do not accept payment for favorable coverage of any employer, product, or service.</li>
            <li>• <span className="font-medium text-foreground">Sponsored content:</span> Clearly labelled as "Sponsored" or "Advertisement" and distinct from editorial content.</li>
            <li>• <span className="font-medium text-foreground">Affiliate links:</span> Always disclosed with "sponsored" labels or rel="nofollow" attributes.</li>
            <li>• <span className="font-medium text-foreground">Editorial decisions:</span> Made free from influence by advertisers, partners, or external parties.</li>
          </ul>
        </section>

        {/* 3. Accuracy & Fact-Checking */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Accuracy & Fact-Checking</h2>
          <p className="text-muted-foreground mb-4">Every article goes through rigorous fact-checking:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• Source verification</li>
            <li>• Cross-referencing multiple sources</li>
            <li>• Expert review for technical content</li>
            <li>• Quotation accuracy checks</li>
            <li>• Data validation for statistics</li>
            <li>• Date verification for time-sensitive content</li>
          </ul>
        </section>

        {/* 4. Corrections Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Corrections Policy</h2>
          <p className="text-muted-foreground mb-4">
            If you spot an error, please report it to <span className="text-foreground font-medium">info@jobhelper.co.za</span> with "Correction Request" in the subject line.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border font-medium">Type</th>
                  <th className="text-left p-3 border font-medium">Description</th>
                  <th className="text-left p-3 border font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Minor</td>
                  <td className="p-3 border text-muted-foreground">Typos, grammatical errors, formatting</td>
                  <td className="p-3 border text-muted-foreground">Silently corrected</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Factual</td>
                  <td className="p-3 border text-muted-foreground">Incorrect names, dates, numbers</td>
                  <td className="p-3 border text-muted-foreground">Inline correction with note</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Significant</td>
                  <td className="p-3 border text-muted-foreground">Major inaccuracies affecting meaning</td>
                  <td className="p-3 border text-muted-foreground">Major correction notice + log entry</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Retraction</td>
                  <td className="p-3 border text-muted-foreground">Misleading or harmful content</td>
                  <td className="p-3 border text-muted-foreground">Public retraction notice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Correction notice format: <span className="italic">[Correction: Original text was incorrect. Correct text.]</span>
          </p>
        </section>

        {/* 5. Sources & Attribution */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Sources & Attribution</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li><span className="font-medium text-foreground">Primary sources:</span> Official statements, press releases, government documents, direct interviews</li>
            <li><span className="font-medium text-foreground">Secondary sources:</span> Credible news outlets, academic research, industry reports</li>
            <li><span className="font-medium text-foreground">Anonymous sources:</span> Only used in exceptional cases where information cannot be obtained otherwise, with editorial approval</li>
            <li><span className="font-medium text-foreground">Attribution:</span> All sources clearly cited with publication date when available</li>
          </ul>
        </section>

        {/* 6. Plagiarism & Originality */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Plagiarism & Originality</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• All content published on JobHelper is original</li>
            <li>• Direct quotations are clearly marked with quotation marks and proper attribution</li>
            <li>• Summarized content links back to the original source</li>
            <li>• Plagiarism detection tools are used to verify originality</li>
            <li>• Any borrowed ideas or data are attributed to the source</li>
          </ul>
        </section>

        {/* 7. Diversity & Inclusion */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Diversity & Inclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to representing the diversity of South African job seekers. Our content uses inclusive language that avoids stereotypes and respects all demographic groups. We feature opportunities from across all provinces, industries, and employment sectors.
          </p>
        </section>

        {/* 8. Conflicts of Interest */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Conflicts of Interest</h2>
          <p className="text-muted-foreground leading-relaxed">
            JobHelper staff must disclose any financial or personal conflicts of interest that could influence content. This includes ownership in companies we write about, employment relationships, or family connections to featured organizations. Disclosures are recorded and available upon request.
          </p>
        </section>

        {/* 9. User-Generated Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. User-Generated Content</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Comments on articles are moderated for relevance and appropriateness</li>
            <li>• Offensive, discriminatory, or spammy content is removed</li>
            <li>• User guidelines are provided for comment sections</li>
            <li>• Users retain ownership of their submitted content but grant JobHelper a license to display</li>
          </ul>
        </section>

        {/* 10. Corrections Log */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Corrections Log</h2>
          <p className="text-muted-foreground mb-4">
            We maintain a public log of all significant corrections and retractions. This promotes transparency and allows readers to see our commitment to accuracy.
          </p>
          <a
            href="/corrections-log"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <FileText className="w-4 h-4" />
            View Corrections Log
            <ExternalLink className="w-3 h-3" />
          </a>
        </section>

        {/* 11. Contact for Editorial Concerns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact for Editorial Concerns</h2>
          <div className="bg-muted/30 p-6 rounded-lg border">
            <p className="text-muted-foreground mb-4">
              For editorial concerns, corrections, or feedback about our journalism:
            </p>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
                <p className="text-xs text-muted-foreground">(Include "Editorial Concern" in subject line)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}