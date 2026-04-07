'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Download, FileText, User, GraduationCap, Briefcase, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  referenceNumber: string;
  positionTitle: string;
  department: string;
  surname: string;
  firstNames: string;
  dateOfBirth: string;
  idNumber: string;
  gender: string;
  nationality: string;
  physicalAddress: string;
  city: string;
  postalCode: string;
  cellPhone: string;
  email: string;
  highestQualification: string;
  institution: string;
  yearCompleted: string;
  employmentHistory: string;
}

const initialData: FormData = {
  referenceNumber: '',
  positionTitle: '',
  department: '',
  surname: '',
  firstNames: '',
  dateOfBirth: '',
  idNumber: '',
  gender: '',
  nationality: 'South African',
  physicalAddress: '',
  city: '',
  postalCode: '',
  cellPhone: '',
  email: '',
  highestQualification: '',
  institution: '',
  yearCompleted: '',
  employmentHistory: '',
};

const steps = [
  { id: 'position', title: 'Position Details', icon: FileText },
  { id: 'personal', title: 'Personal Details', icon: User },
  { id: 'education', title: 'Education', icon: GraduationCap },
  { id: 'experience', title: 'Experience', icon: Briefcase },
];

export default function Z83FormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isGenerating, setIsGenerating] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

const generatePDF = () => {
    setIsGenerating(true);
    alert('The Z83 form will download. Please print and fill in blue ink.');
    setTimeout(() => setIsGenerating(false), 1000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.referenceNumber && formData.positionTitle;
      case 1:
        return formData.surname && formData.firstNames && formData.idNumber;
      case 2:
        return formData.highestQualification && formData.institution;
      case 3:
        return true;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-green-100 mb-4">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <ArrowLeft size={14} /> Home
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Z83 AI Form Generator</h1>
          <p className="text-green-100 mt-2 max-w-xl">
            Complete the form below and generate a properly formatted PDF ready for government applications.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                  index <= currentStep
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                <step.icon size={20} />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    index < currentStep ? 'bg-green-600' : 'bg-slate-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Cards */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          {currentStep === 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Position Details</h2>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Reference Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.referenceNumber}
                  onChange={(e) => updateField('referenceNumber', e.target.value)}
                  placeholder="e.g. DPSA/12345"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                />
                <p className="text-xs text-slate-500 mt-1">Must match the vacancy circular exactly</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Position Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.positionTitle}
                  onChange={(e) => updateField('positionTitle', e.target.value)}
                  placeholder="e.g. Administrative Clerk"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Department</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => updateField('department', e.target.value)}
                  placeholder="e.g. Department of Health"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Personal Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Surname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.surname}
                    onChange={(e) => updateField('surname', e.target.value)}
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    First Names <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstNames}
                    onChange={(e) => updateField('firstNames', e.target.value)}
                    placeholder="Your full first names"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateField('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.idNumber}
                    onChange={(e) => updateField('idNumber', e.target.value)}
                    placeholder="13 digit SA ID"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => updateField('gender', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Nationality</label>
                  <select
                    value={formData.nationality}
                    onChange={(e) => updateField('nationality', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  >
                    <option value="South African">South African</option>
                    <option value="Permanent Resident">Permanent Resident</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Education & Qualifications</h2>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Highest Qualification <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.highestQualification}
                  onChange={(e) => updateField('highestQualification', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                >
                  <option value="">Select qualification</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Matric">Matric</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Honours Degree">Honours Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Institution <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => updateField('institution', e.target.value)}
                  placeholder="e.g. University of Pretoria"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Year Completed</label>
                <input
                  type="text"
                  value={formData.yearCompleted}
                  onChange={(e) => updateField('yearCompleted', e.target.value)}
                  placeholder="e.g. 2020"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Contact & Experience</h2>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Physical Address</label>
                <input
                  type="text"
                  value={formData.physicalAddress}
                  onChange={(e) => updateField('physicalAddress', e.target.value)}
                  placeholder="Full residential address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">City/Town</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    placeholder="e.g. Pretoria"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => updateField('postalCode', e.target.value)}
                    placeholder="e.g. 0001"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Cell Phone</label>
                  <input
                    type="text"
                    value={formData.cellPhone}
                    onChange={(e) => updateField('cellPhone', e.target.value)}
                    placeholder="e.g. 071 234 5678"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Employment History</label>
                <textarea
                  value={formData.employmentHistory}
                  onChange={(e) => updateField('employmentHistory', e.target.value)}
                  placeholder="List previous employers, positions, and dates..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft size={18} />
              Back
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                {isGenerating ? (
                  <>Generating...</>
                ) : (
                  <>
                    <Download size={18} />
                    Generate PDF
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-yellow-900">Important Tips</h3>
              <ul className="text-sm text-yellow-800 mt-2 space-y-1">
                <li>• Use BLUE ink when signing the printed form</li>
                <li>• Write in BLOCK CAPITAL letters</li>
                <li>• Do not use correction fluid (Tipp-Ex)</li>
                <li>• Attach certified copies of ID and qualifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}