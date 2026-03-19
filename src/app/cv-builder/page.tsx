"use client";

import React, { useState } from 'react';
import { Download, Plus, Trash2, ChevronRight, User, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, FileText, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CVBuilder() {
  const [activeSection, setActiveSection] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    jobTitle: '',
  });

  const [experiences, setExperiences] = useState([
    { id: 1, company: '', position: '', startDate: '', endDate: '', description: '' }
  ]);

  const [education, setEducation] = useState([
    { id: 1, institution: '', degree: '', year: '' }
  ]);

  const [skills, setSkills] = useState(['']);

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), company: '', position: '', startDate: '', endDate: '', description: '' }]);
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now(), institution: '', degree: '', year: '' }]);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span>CV Builder</span>
          </div>
          <h1 className="text-3xl font-bold">Create Your Professional CV</h1>
          <p className="text-blue-100 mt-2">Build a South African standard CV in minutes</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
                    activeSection === section.id 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <section.icon size={20} />
                  <span className="font-semibold">{section.label}</span>
                  {activeSection === section.id && <CheckCircle2 size={16} className="ml-auto" />}
                </button>
              ))}
            </div>

            {/* Preview Button */}
            <button className="w-full mt-4 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Eye size={18} /> Preview CV
            </button>

            {/* Download Button */}
            <button className="w-full mt-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <Download size={18} /> Download PDF
            </button>
          </aside>

          {/* Main Form Area */}
          <div className="flex-1">
            {activeSection === 'personal' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <User className="text-blue-600" /> Personal Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Software Developer"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                      <input 
                        type="email" 
                        placeholder="john@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                      <input 
                        type="tel" 
                        placeholder="+27 71 234 5678"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="e.g. Johannesburg, GP"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Professional Summary</label>
                  <textarea 
                    rows={4}
                    placeholder="Write a brief summary of your professional background..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none resize-none"
                    value={formData.summary}
                    onChange={(e) => setFormData({...formData, summary: e.target.value})}
                  />
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="text-blue-600" /> Work Experience
                  </h2>
                  <button 
                    onClick={addExperience}
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus size={18} /> Add Experience
                  </button>
                </div>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="border border-slate-200 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-slate-700">Experience {index + 1}</h3>
                        {experiences.length > 1 && (
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="Company Name"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Job Title"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Start Date (e.g. Jan 2020)"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="End Date (or 'Present')"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                      </div>
                      <textarea 
                        rows={3}
                        placeholder="Describe your responsibilities and achievements..."
                        className="w-full mt-4 px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none resize-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="text-blue-600" /> Education
                  </h2>
                  <button 
                    onClick={addEducation}
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus size={18} /> Add Education
                  </button>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={edu.id} className="border border-slate-200 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-slate-700">Education {index + 1}</h3>
                        {education.length > 1 && (
                          <button className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="Institution"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Degree/Certificate"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Year Completed"
                          className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Award className="text-blue-600" /> Skills
                  </h2>
                  <button 
                    onClick={addSkill}
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus size={18} /> Add Skill
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="e.g. Microsoft Excel"
                        className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none"
                        value={skill}
                        onChange={(e) => {
                          const newSkills = [...skills];
                          newSkills[index] = e.target.value;
                          setSkills(newSkills);
                        }}
                      />
                      {skills.length > 1 && (
                        <button 
                          onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                          className="text-red-500 hover:text-red-700 px-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Tip</h4>
                  <p className="text-sm text-blue-700">Include both hard skills (technical) and soft skills (communication, leadership) relevant to your target job.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
