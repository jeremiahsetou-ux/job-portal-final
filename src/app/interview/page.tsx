'use client';

import { ArrowLeft, DollarSign, Users, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const TIPS = [
  { title: 'Research the Company', description: 'Learn about their mission, values, and recent news before your interview.' },
  { title: 'Practice Common Questions', description: 'Prepare answers for "Tell me about yourself" and "Why do you want this job?"' },
  { title: 'Dress Professionally', description: 'Even for video interviews, dress as you would for in-person.' },
  { title: 'Prepare Your Own Questions', description: 'Have 3-5 questions ready to ask the interviewer.' },
];

const SALARIES = [
  { role: 'Software Developer', min: 350000, max: 1200000 },
  { role: 'Marketing Manager', min: 400000, max: 800000 },
  { role: 'Accountant', min: 250000, max: 600000 },
  { role: 'HR Manager', min: 350000, max: 700000 },
];

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Interview Prep & Salary</h1>
          <p className="text-primary-foreground/80 mt-2">Ace your interview and negotiate your salary</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Interview Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {TIPS.map((tip, idx) => (
              <div key={idx} className="bg-card border rounded-xl p-5">
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Salary Guides</h2>
          <div className="bg-card border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Role</th>
                  <th className="px-4 py-3 text-left font-medium">Annual Salary (ZA)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {SALARIES.map((salary, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 font-medium">{salary.role}</td>
                    <td className="px-4 py-3">
                      <span className="text-green-600 font-semibold">
                        R{((salary.min / 1000)).toFixed(0)}k - R{((salary.max / 1000)).toFixed(0)}k
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}