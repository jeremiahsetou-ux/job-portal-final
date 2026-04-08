import { Mail, Phone, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About JobHelper – Empowering South Africa\'s Workforce',
  description: 'JobHelper is an independent South African news and information portal dedicated to empowering job seekers across the nation.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About JobHelper
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Empowering South Africa's Workforce
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            JobHelper is an independent South African news and information portal dedicated to empowering job seekers across the nation. Our mission is to bridge the gap between talent and opportunity by providing timely, accurate, and actionable news, insights, and resources.
          </p>
        </section>

        {/* Ownership & Governance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Ownership & Governance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            JobHelper is a private media publication wholly owned and operated by Jeremiah Setou, a South African citizen and resident of Randfontein, Gauteng. The publication operates as a sole proprietorship under the laws of the Republic of South Africa.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">Full Legal Name:</span> Jeremiah Setou</li>
            <li><span className="font-medium text-foreground">Jurisdiction:</span> Republic of South Africa</li>
          </ul>
        </section>

        {/* Our Editorial Standards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Our Editorial Standards</h2>
          <p className="text-muted-foreground mb-4">Every news article, market report, and guide published on JobHelper is held to the following standards:</p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">Accuracy & Verification</span> – Facts are checked against primary sources or official statements</li>
            <li><span className="font-medium text-foreground">Corrections & Transparency</span> – Errors are corrected promptly with visible notices</li>
            <li><span className="font-medium text-foreground">Originality</span> – All news articles are original content</li>
            <li><span className="font-medium text-foreground">Independence</span> – Editorial decisions are made free from outside influence</li>
          </ol>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Our Team</h2>
          <div className="bg-muted/30 rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-2">Jeremiah Setou – Founder & Editor-in-Chief</h3>
            <p className="text-muted-foreground">
              Jeremiah is the founder of JobHelper. He oversees all editorial operations, business strategy, and legal compliance. He is the designated Information Officer for POPIA and PAIA purposes.
            </p>
          </div>
        </section>

        {/* Legal Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Legal Compliance</h2>
          <p className="text-muted-foreground mb-4">JobHelper is fully committed to complying with South African laws including:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• Protection of Personal Information Act (POPIA)</li>
            <li>• Promotion of Access to Information Act (PAIA)</li>
            <li>• Electronic Communications and Transactions (ECT) Act</li>
            <li>• Consumer Protection Act (CPA)</li>
          </ul>
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border">
            <p className="text-foreground"><span className="font-medium">Information Officer:</span> Jeremiah Setou – info@jobhelper.co.za</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Physical Address</p>
                <p className="text-sm text-muted-foreground">8128 Mahlangu Street, Mohlakeng, Randfontein, 1759, South Africa</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">069 708 6808</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}