'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Download, FileText, User, GraduationCap, Briefcase, AlertCircle } from 'lucide-react';

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

export function Z83Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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

  const generatePDF = () => {
    alert('Z83 form will download. Please print and fill in blue ink.');
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                index <= currentStep
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'border-muted-foreground text-muted-foreground'
              }`}
            >
              <step.icon size={18} />
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-1 mx-2 ${
                  index < currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      {currentStep === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Position Details</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Reference Number *</label>
            <input
              type="text"
              value={formData.referenceNumber}
              onChange={(e) => updateField('referenceNumber', e.target.value)}
              placeholder="e.g. DPSA/12345"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Position Title *</label>
            <input
              type="text"
              value={formData.positionTitle}
              onChange={(e) => updateField('positionTitle', e.target.value)}
              placeholder="e.g. Administrative Clerk"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => updateField('department', e.target.value)}
              placeholder="e.g. Department of Health"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Personal Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Surname *</label>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) => updateField('surname', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">First Names *</label>
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
              <label className="block text-sm font-medium mb-1">ID Number *</label>
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
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Education</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Highest Qualification *</label>
            <select
              value={formData.highestQualification}
              onChange={(e) => updateField('highestQualification', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            >
              <option value="">Select qualification</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Matric">Matric</option>
              <option value="Certificate">Certificate</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Honours Degree">Honours Degree</option>
              <option value="Master's Degree">Master's Degree</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Institution *</label>
            <input
              type="text"
              value={formData.institution}
              onChange={(e) => updateField('institution', e.target.value)}
              placeholder="e.g. University of Pretoria"
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

      {currentStep === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact & Experience</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Physical Address</label>
            <input
              type="text"
              value={formData.physicalAddress}
              onChange={(e) => updateField('physicalAddress', e.target.value)}
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
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Cell Phone</label>
              <input
                type="text"
                value={formData.cellPhone}
                onChange={(e) => updateField('cellPhone', e.target.value)}
                placeholder="e.g. 071 234 5678"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Employment History</label>
            <textarea
              value={formData.employmentHistory}
              onChange={(e) => updateField('employmentHistory', e.target.value)}
              rows={4}
              placeholder="List previous employers, positions, and dates..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary resize-none"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
            currentStep === 0
              ? 'text-muted-foreground cursor-not-allowed'
              : 'hover:bg-muted'
          }`}
        >
          <ChevronLeft size={18} /> Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium ${
              canProceed()
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            Next <ChevronRight size={18} />
          </button>
        ) : (
          <button
            onClick={generatePDF}
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Download size={18} /> Generate PDF
          </button>
        )}
      </div>

      {/* Tips */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-yellow-900 text-sm">Important Tips</h4>
            <ul className="text-xs text-yellow-800 mt-1 space-y-1">
              <li>• Use BLUE ink when signing the printed form</li>
              <li>• Write in BLOCK CAPITAL letters</li>
              <li>• Do not use correction fluid (Tipp-Ex)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}