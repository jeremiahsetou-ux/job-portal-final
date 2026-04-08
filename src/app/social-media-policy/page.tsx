import { Mail, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Policy – JobHelper',
  description: 'JobHelper Social Media Policy - Guidelines for our official social media presence.',
};

export default function SocialMediaPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Social Media Policy
            </h1>
            <p className="text-xl text-gray-200">
              Guidelines for our online community
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

        {/* 1. Purpose */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Purpose</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Social Media Policy outlines the guidelines for JobHelper's official social media accounts. It applies to all users who interact with JobHelper on social platforms and explains how we manage our online presence. The policy ensures consistent, professional, and responsible communication across all channels.
          </p>
        </section>

        {/* 2. Official Accounts */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Official Accounts</h2>
          <p className="text-muted-foreground mb-4">JobHelper maintains the following official social media accounts:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg border">
              <p className="font-medium text-foreground">Facebook</p>
              <p className="text-sm text-muted-foreground">@JobHelperSA</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <p className="font-medium text-foreground">Twitter/X</p>
              <p className="text-sm text-muted-foreground">@JobHelperSA</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <p className="font-medium text-foreground">LinkedIn</p>
              <p className="text-sm text-muted-foreground">/company/jobhelper</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border">
              <p className="font-medium text-foreground">WhatsApp</p>
              <p className="text-sm text-muted-foreground">Opt-in broadcast list</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Note: These are our only official accounts. We are not responsible for any unofficial accounts claiming to be JobHelper.
          </p>
        </section>

        {/* 3. What We Post */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. What We Post</h2>
          <p className="text-muted-foreground mb-4">Our social media content includes:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Job listings and employment opportunities</li>
            <li>• News articles and career insights</li>
            <li>• Career advice and job search tips</li>
            <li>• Responses to user questions and comments</li>
            <li>• Updates about new features and services</li>
            <li>• Industry news relevant to job seekers</li>
          </ul>
        </section>

        {/* 4. What We Do Not Post */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. What We Do Not Post</h2>
          <p className="text-muted-foreground mb-4">We do not post or engage with:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Political endorsements or partisan content</li>
            <li>• Discriminatory content based on race, gender, religion, age, disability, or any other protected characteristic</li>
            <li>• Personal information about individuals without consent</li>
            <li>• Content that violates the rights of others</li>
            <li>• Defamatory or misleading information</li>
          </ul>
        </section>

        {/* 5. User Interaction & Moderation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. User Interaction & Moderation</h2>
          <p className="text-muted-foreground leading-relaxed">
            We welcome constructive engagement on our social media platforms. However, we reserve the right to hide, delete, or block users who post: hate speech, spam, false information, personal attacks, or any content that violates our community guidelines. We may also report violations to the relevant platform and law enforcement if necessary.
          </p>
        </section>

        {/* 6. Disclaimer: Third-Party Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Disclaimer: Third-Party Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            Links to external websites, articles, or resources shared on our social media accounts are not endorsements of those sites or their content. We share third-party content for informational purposes only. We are not responsible for the accuracy, privacy practices, or availability of external sites.
          </p>
        </section>

        {/* 7. Disclaimer: No Professional Advice */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Disclaimer: No Professional Advice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Content posted on JobHelper's social media accounts is for informational purposes only and does not constitute professional advice. We are not legal, financial, or career advisors. Users should seek professional guidance for their specific circumstances. JobHelper does not accept responsibility for decisions made based on our social media content.
          </p>
        </section>

        {/* 8. Copyright and Sharing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Copyright and Sharing</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• You are welcome to share our posts with proper credit to @JobHelperSA</li>
            <li>• You may quote short excerpts with a link to the original article</li>
            <li>• Do not republish full articles without our written permission</li>
            <li>• Images and graphics are copyrighted and may not be used without attribution</li>
          </ul>
        </section>

        {/* 9. Reporting Concerns */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Reporting Concerns</h2>
          <p className="text-muted-foreground mb-4">
            If you see content on our social media accounts that violates this policy or concerns you, please report it:
          </p>
          <div className="bg-muted/30 p-6 rounded-lg border">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Include "Social Media Concern" in the subject line
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}