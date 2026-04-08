import { Mail, Phone, Scale } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement – JobHelper',
  description: 'JobHelper Accessibility Statement - Our commitment to making our website accessible to everyone.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-gray-200">
              Our commitment to inclusivity
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
            JobHelper is committed to making our website usable for everyone, including people with disabilities. We believe that the internet should be accessible to all users regardless of their abilities or the assistive technologies they use. We are continuously working to improve the accessibility of our website.
          </p>
        </section>

        {/* 2. Accessibility Standards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Accessibility Standards</h2>
          <p className="text-muted-foreground leading-relaxed">
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone. The guidelines have three levels of accessibility: A, AA, and AAA.
          </p>
        </section>

        {/* 3. Accessibility Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Accessibility Features</h2>
          <p className="text-muted-foreground mb-4">Our website includes the following accessibility features:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border font-medium">Feature</th>
                  <th className="text-left p-3 border font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Keyboard Navigation</td>
                  <td className="p-3 border text-muted-foreground">All interactive elements accessible via keyboard (Tab, Enter, Escape)</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Semantic HTML</td>
                  <td className="p-3 border text-muted-foreground">Proper heading structure, landmarks, and ARIA attributes</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Alt Text for Images</td>
                  <td className="p-3 border text-muted-foreground">All images have descriptive alternative text</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Colour Contrast</td>
                  <td className="p-3 border text-muted-foreground">Text meets WCAG AA contrast ratio (4.5:1 for normal text)</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Responsive Design</td>
                  <td className="p-3 border text-muted-foreground">Content adapts to different screen sizes and zoom levels</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Clear Link Text</td>
                  <td className="p-3 border text-muted-foreground">Links have descriptive text indicating destination</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Form Labels</td>
                  <td className="p-3 border text-muted-foreground">All form fields have associated labels</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Focus Indicators</td>
                  <td className="p-3 border text-muted-foreground">Visible focus indicators on all interactive elements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Areas for Improvement */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Areas for Improvement</h2>
          <p className="text-muted-foreground mb-4">We are aware of the following areas that may need improvement:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <span className="font-medium text-foreground">PDF Documents:</span> Some older PDFs may not be fully accessible. We are working to remediate these.</li>
            <li>• <span className="font-medium text-foreground">Third-Party Content:</span> Some embedded content from third parties may not meet accessibility standards.</li>
            <li>• <span className="font-medium text-foreground">Video Captions:</span> We are working to add captions to all video content. This is a future improvement.</li>
          </ul>
        </section>

        {/* 5. Assistive Technologies Supported */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Assistive Technologies Supported</h2>
          <p className="text-muted-foreground mb-4">Our website is designed to work with the following assistive technologies:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• <span className="font-medium text-foreground">Screen Readers:</span> JAWS, NVDA, VoiceOver</li>
            <li>• <span className="font-medium text-foreground">Speech Recognition:</span> Dragon NaturallySpeaking</li>
            <li>• <span className="font-medium text-foreground">Browser Zoom:</span> Up to 200% without loss of functionality</li>
            <li>• <span className="font-medium text-foreground">Screen Magnifiers:</span> ZoomText, MAGic</li>
          </ul>
        </section>

        {/* 6. Feedback and Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Feedback and Contact</h2>
          <p className="text-muted-foreground mb-4">
            We welcome your feedback on the accessibility of JobHelper. Please let us know if you encounter accessibility barriers:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Email</span>
              </div>
              <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
              <p className="text-xs text-muted-foreground mt-2">We respond within 5 business days</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Phone</span>
              </div>
              <p className="text-sm text-muted-foreground">069 708 6808</p>
              <p className="text-xs text-muted-foreground mt-2">Monday–Friday, 9am–5pm SAST</p>
            </div>
          </div>
        </section>

        {/* 7. Enforcement and Complaints */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Enforcement and Complaints</h2>
          <div className="bg-muted/30 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">South African Human Rights Commission</span>
            </div>
            <p className="text-muted-foreground">
              If you believe we have not addressed your accessibility concern, you have the right to lodge a complaint with the South African Human Rights Commission (SAHRC). Visit{' '}
              <a href="https://www.sahrc.org.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                sahrc.org.za
              </a>{' '}
              for more information on how to file a complaint.
            </p>
          </div>
        </section>

        {/* 8. Continuous Improvement */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Continuous Improvement</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to continuous improvement. We conduct periodic accessibility audits to identify and address issues. Our team regularly reviews new accessibility standards and implements improvements to ensure our website remains accessible to all users.
          </p>
        </section>
      </div>
    </div>
  );
}