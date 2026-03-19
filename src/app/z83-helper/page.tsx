"use client";

import React, { useState } from 'react';
import { Download, ChevronRight, AlertCircle, CheckCircle2, FileText, HelpCircle, Info, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const formSections = [
  {
    id: 'position',
    title: 'Position Details',
    icon: FileText,
    fields: [
      { label: 'Reference Number', placeholder: 'e.g. DPSA/12345', tip: 'Must match the vacancy circular exactly' },
      { label: 'Position Title', placeholder: 'e.g. Administrative Clerk', tip: 'Copy exactly as advertised' },
      { label: 'Department', placeholder: 'e.g. Department of Health', tip: 'Full department name' },
    ]
  },
  {
    id: 'personal',
    title: 'Personal Details',
    icon: Info,
    fields: [
      { label: 'Surname', placeholder: 'Your last name', tip: 'As per ID document' },
      { label: 'First Names', placeholder: 'Your full first names', tip: 'As per ID document' },
      { label: 'Date of Birth', placeholder: 'DD/MM/YYYY', tip: 'Format must be exact' },
      { label: 'ID Number', placeholder: '13 digit South African ID', tip: 'Or passport number for non-citizens' },
    ]
  },
  {
    id: 'contact',
    title: 'Contact Information',
    icon: ExternalLink,
    fields: [
      { label: 'Physical Address', placeholder: 'Street address', tip: 'Full residential address' },
      { label: 'City/Town', placeholder: 'e.g. Pretoria', tip: '' },
      { label: 'Postal Code', placeholder: 'e.g. 0001', tip: '' },
      { label: 'Cell Phone', placeholder: 'e.g. 071 234 5678', tip: 'Primary contact number' },
      { label: 'Email', placeholder: 'your@email.com', tip: 'Check spelling carefully' },
    ]
  },
];

const importantNotes = [
  {
    title: 'Blue Ink Only',
    description: 'Complete the form using blue ink. Black ink is not accepted for government applications.',
    type: 'warning'
  },
  {
    title: 'Capital Letters',
    description: 'Write in clear block capital letters throughout the form for readability.',
    type: 'info'
  },
  {
    title: 'No Tipp-Ex',
    description: 'Do not use correction fluid. If you make a mistake, start with a fresh form.',
    type: 'warning'
  },
  {
    title: 'Attach Documents',
    description: 'Certified copies of ID, qualifications, and driver\'s license (if required).',
    type: 'info'
  },
];

export default function Z83Helper() {
  const [activeTab, setActiveTab] = useState('guide');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-green-100 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span>Z83 Helper</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Z83 Application Form Guide</h1>
          <p className="text-green-100 mt-2 max-w-2xl">
            Master the official South African government job application form. Follow our step-by-step guide to avoid common mistakes.
          </p>

          {/* Download Button */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-50 transition-colors shadow-lg">
              <Download size={20} /> Download Z83 Form (PDF)
            </button>
            <button className="bg-green-800 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-900 transition-colors border border-green-500">
              <ExternalLink size={20} /> Visit DPSA Website
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'guide' ? 'bg-green-100 text-green-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
          >
            <BookOpen size={18} /> Step-by-Step Guide
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'tips' ? 'bg-green-100 text-green-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
          >
            <HelpCircle size={18} /> Important Tips
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'faq' ? 'bg-green-100 text-green-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
          >
            <Info size={18} /> FAQ
          </button>
        </div>

        {activeTab === 'guide' && (
          <div className="space-y-8">
            {/* Progress Indicator */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Form Completion Progress</h3>
              <div className="flex gap-2">
                {formSections.map((section, index) => (
                  <div key={section.id} className="flex-1">
                    <div className="h-2 bg-slate-200 rounded-full mb-2">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                    <p className="text-xs text-slate-500">Step {index + 1}</p>
                    <p className="text-sm font-semibold text-slate-700">{section.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Sections */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {formSections.map((section) => (
                  <div key={section.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <section.icon className="text-green-600" size={24} />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {section.fields.map((field, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-lg p-4">
                          <label className="block font-semibold text-slate-700 mb-2">{field.label}</label>
                          <input
                            type="text"
                            placeholder={field.placeholder}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-green-500 outline-none"
                          />
                          {field.tip && (
                            <p className="text-sm text-slate-500 mt-2 flex items-center gap-1">
                              <Info size={14} /> {field.tip}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Declaration Section */}
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-yellow-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-yellow-900 mb-2">Important: Declaration Section</h3>
                      <p className="text-yellow-800 text-sm leading-relaxed">
                        Do not forget to sign and date the declaration at the bottom of the form.
                        Unsigned forms are automatically rejected. The date must be within 3 months
                        of the vacancy closing date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Before You Submit
                  </h3>
                  <ul className="space-y-3 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      Reference number matches vacancy
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      All fields completed in blue ink
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      Form is signed and dated
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      Certified documents attached
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      Contact details are correct
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Need Help?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Having trouble with your Z83 form? Our career advisors can help.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid md:grid-cols-2 gap-6">
            {importantNotes.map((note, index) => (
              <div key={index} className={`rounded-xl p-6 border ${note.type === 'warning'
                ? 'bg-orange-50 border-orange-200'
                : 'bg-blue-50 border-blue-200'
                }`}>
                <div className="flex items-start gap-3">
                  {note.type === 'warning' ? (
                    <AlertCircle className="text-orange-600 shrink-0" size={24} />
                  ) : (
                    <Info className="text-blue-600 shrink-0" size={24} />
                  )}
                  <div>
                    <h3 className={`font-bold mb-2 ${note.type === 'warning' ? 'text-orange-900' : 'text-blue-900'
                      }`}>
                      {note.title}
                    </h3>
                    <p className={`text-sm ${note.type === 'warning' ? 'text-orange-800' : 'text-blue-800'
                      }`}>
                      {note.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y">
            {[
              { q: 'Where can I get the official Z83 form?', a: 'You can download it from the DPSA website or use our download link above. Make sure you have the latest version.' },
              { q: 'Can I type the form instead of writing?', a: 'No, the Z83 form must be completed by hand using blue ink. Typed forms are not accepted.' },
              { q: 'What documents must I attach?', a: 'Certified copy of ID, certified copies of qualifications, and driver\'s license if the job requires driving.' },
              { q: 'How long is the form valid?', a: 'The form is valid for 3 months from the date of signature. Make sure to update the date if reapplying.' },
              { q: 'Can I email the form?', a: 'Most departments require physical submission unless the vacancy specifically states email applications are accepted.' },
            ].map((faq, index) => (
              <div key={index} className="p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-green-600" />
                  {faq.q}
                </h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
