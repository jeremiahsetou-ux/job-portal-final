'use client';

import { useState } from 'react';
import { ArrowLeft, Download, FileText, Mail, Phone, MapPin, Briefcase, GraduationCap, User } from 'lucide-react';
import Link from 'next/link';

interface CVData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
}

export default function CVBuilderPage() {
  const [cvData, setCVData] = useState<CVData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const updateField = (field: keyof CVData, value: string) => {
    setCVData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = () => {
    alert('CV will download. Use this as a template to create your professional CV.');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">CV Builder</h1>
          <p className="text-primary-foreground/80 mt-2">
            Create a professional CV ready for South African employers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={cvData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={cvData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={cvData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="071 234 5678"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                value={cvData.address}
                onChange={(e) => updateField('address', e.target.value)}
                placeholder="123 Main St, Johannesburg"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold">Professional Details</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Summary</label>
              <textarea
                value={cvData.summary}
                onChange={(e) => updateField('summary', e.target.value)}
                placeholder="Brief professional summary..."
                rows={4}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Work Experience</label>
              <textarea
                value={cvData.experience}
                onChange={(e) => updateField('experience', e.target.value)}
                placeholder="Company, Position, Dates, Responsibilities..."
                rows={4}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Education</label>
              <textarea
                value={cvData.education}
                onChange={(e) => updateField('education', e.target.value)}
                placeholder="Degree, Institution, Year..."
                rows={4}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Skills</label>
              <textarea
                value={cvData.skills}
                onChange={(e) => updateField('skills', e.target.value)}
                placeholder="JavaScript, Python, Project Management..."
                rows={3}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary resize-none"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full mt-8 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2"
        >
          <Download size={18} /> Download CV Template
        </button>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Tips for a Great CV</h3>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• Keep it to 2 pages maximum</li>
            <li>• Use clean, professional fonts (Arial, Calibri)</li>
            <li>• Include relevant keywords from the job ad</li>
            <li>• Quantify achievements where possible</li>
            <li>• Proofread for spelling and grammar errors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}