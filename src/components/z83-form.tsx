'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Download, FileText, User, GraduationCap, Briefcase, AlertCircle, Check } from 'lucide-react';

interface Z83FormData {
  // Personal Details
  surname: string;
  firstNames: string;
  dateOfBirth: string;
  idNumber: string;
  gender: string;
  nationality: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  // Education
  highestQualification: string;
  institution: string;
  yearCompleted: string;
  // Experience
  employer1: string;
  position1: string;
  dates1: string;
  employer2: string;
  position2: string;
  dates2: string;
}

const initialData: Z83FormData = {
  surname: '',
  firstNames: '',
  dateOfBirth: '',
  idNumber: '',
  gender: '',
  nationality: 'South African',
  phone: '',
  email: '',
  address: '',
  city: '',
  postalCode: '',
  highestQualification: '',
  institution: '',
  yearCompleted: '',
  employer1: '',
  position1: '',
  dates1: '',
  employer2: '',
  position2: '',
  dates2: '',
};

const steps = [
  { id: 1, title: 'Personal Details', icon: User },
  { id: 2, title: 'Education', icon: GraduationCap },
  { id: 3, title: 'Work Experience', icon: Briefcase },
];

export function Z83Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Z83FormData>(initialData);

  const updateField = (field: keyof Z83FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.surname && formData.firstNames && formData.idNumber && formData.email;
      case 2:
        return formData.highestQualification && formData.institution;
      case 3:
        return true;
      default:
        return true;
    }
  };

  const handleGeneratePDF = () => {
    alert('Z83 PDF would be generated here. The form data would be converted to the official government Z83 format.');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                currentStep >= step.id
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'border-muted-foreground/30 text-muted-foreground/30'
              }`}
            >
              {currentStep > step.id ? (
                <Check className="w-5 h-5" />
              ) : (
                <step.icon size={18} />
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 md:w-24 h-0.5 mx-2 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Personal Details */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Personal Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Surname <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) => updateField('surname', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">First Names <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.firstNames}
                onChange={(e) => updateField('firstNames', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">ID Number <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.idNumber}
                onChange={(e) => updateField('idNumber', e.target.value)}
                placeholder="13 digit SA ID"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateField('dateOfBirth', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="071 234 5678"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Physical Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => updateField('address', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => updateField('city', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => updateField('postalCode', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Education */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Education & Qualifications</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Highest Qualification <span className="text-red-500">*</span></label>
            <select
              value={formData.highestQualification}
              onChange={(e) => updateField('highestQualification', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
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
            <label className="block text-sm font-medium mb-1">Institution <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => updateField('institution', e.target.value)}
              placeholder="University or TVET college"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Year Completed</label>
            <input
              type="text"
              value={formData.yearCompleted}
              onChange={(e) => updateField('yearCompleted', e.target.value)}
              placeholder="e.g. 2020"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
        </div>
      )}

      {/* Step 3: Work Experience */}
      {currentStep === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-medium mb-3">Most Recent Employment</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Employer</label>
                <input
                  type="text"
                  value={formData.employer1}
                  onChange={(e) => updateField('employer1', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Position</label>
                <input
                  type="text"
                  value={formData.position1}
                  onChange={(e) => updateField('position1', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">Dates (From - To)</label>
              <input
                type="text"
                value={formData.dates1}
                onChange={(e) => updateField('dates1', e.target.value)}
                placeholder="e.g. Jan 2020 - Present"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-medium mb-3">Previous Employment (if applicable)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Employer</label>
                <input
                  type="text"
                  value={formData.employer2}
                  onChange={(e) => updateField('employer2', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Position</label>
                <input
                  type="text"
                  value={formData.position2}
                  onChange={(e) => updateField('position2', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-yellow-800">
                <p className="font-medium mb-1">Important Notes</p>
                <ul className="space-y-1 text-xs">
                  <li>• Print the generated form and complete in BLUE ink</li>
                  <li>• Write in BLOCK CAPITAL letters</li>
                  <li>• Do not use correction fluid (Tipp-Ex)</li>
                  <li>• Sign and date the declaration section</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t">
        <button
          onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
            currentStep === 1
              ? 'text-muted-foreground/50 cursor-not-allowed'
              : 'hover:bg-muted'
          }`}
        >
          <ChevronLeft size={18} /> Back
        </button>

        {currentStep < 3 ? (
          <button
            onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium ${
              canProceed()
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground/50 cursor-not-allowed'
            }`}
          >
            Next <ChevronRight size={18} />
          </button>
        ) : (
          <button
            onClick={handleGeneratePDF}
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Download size={18} /> Generate PDF
          </button>
        )}
      </div>
    </div>
  );
}