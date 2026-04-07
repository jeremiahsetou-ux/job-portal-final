'use client';

import React, { useState } from 'react';
import { SITES } from '@/middleware';
import { Building2, Users, FileText, Plus, Search, ChevronDown, LayoutDashboard, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const [selectedSite, setSelectedSite] = useState<string>(SITES[0].id);
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Admin Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Admin Dashboard</h1>
              <p className="text-slate-400 text-sm">Manage your job portal network</p>
            </div>
          </div>

          {/* Site Selector */}
          <div className="relative">
            <select
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value as typeof SITES[number]['id'])}
              className="appearance-none bg-slate-700 text-white px-4 py-2 pr-10 rounded-lg border border-slate-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SITES.map((site) => (
                <option key={site.id} value={site.id}>
                  {site.name} ({site.subdomain}.jobhelper.co.za)
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 border-r border-slate-700 min-h-screen py-6">
          <nav className="px-4 space-y-2">
            <Link
              href="/admin"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/jobs"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'jobs' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <FileText size={18} />
              <span>Jobs</span>
            </Link>
            <Link
              href="/admin/posts"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'posts' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <FileText size={18} />
              <span>Posts</span>
            </Link>
            <Link
              href="/admin/users"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Users size={18} />
              <span>Users</span>
            </Link>
            <Link
              href="/admin/settings"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <FileText className="text-blue-400" size={24} />
                <span className="text-green-400 text-sm">+12%</span>
              </div>
              <p className="text-3xl font-bold text-white">1,247</p>
              <p className="text-slate-400 text-sm">Active Jobs</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <Users className="text-purple-400" size={24} />
                <span className="text-green-400 text-sm">+8%</span>
              </div>
              <p className="text-3xl font-bold text-white">3,891</p>
              <p className="text-slate-400 text-sm">Total Users</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <Building2 className="text-yellow-400" size={24} />
                <span className="text-green-400 text-sm">+15%</span>
              </div>
              <p className="text-3xl font-bold text-white">156</p>
              <p className="text-slate-400 text-sm">Companies</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <FileText className="text-green-400" size={24} />
                <span className="text-green-400 text-sm">+22%</span>
              </div>
              <p className="text-3xl font-bold text-white">89</p>
              <p className="text-slate-400 text-sm">Applications</p>
            </div>
          </div>

          {/* Jobs Table */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
              <h2 className="text-white font-bold text-lg">Recent Jobs</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Plus size={16} />
                Add Job
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-slate-300 text-sm font-semibold">Job Title</th>
                  <th className="px-6 py-3 text-left text-slate-300 text-sm font-semibold">Company</th>
                  <th className="px-6 py-3 text-left text-slate-300 text-sm font-semibold">Location</th>
                  <th className="px-6 py-3 text-left text-slate-300 text-sm font-semibold">Type</th>
                  <th className="px-6 py-3 text-left text-slate-300 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {[
                  { title: 'Software Developer', company: 'Standard Bank', location: 'Johannesburg', type: 'Permanent', status: 'Active' },
                  { title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', type: 'Permanent', status: 'Active' },
                  { title: 'Government Clerk', company: 'DPSA', location: 'Pretoria', type: 'Government', status: 'Active' },
                  { title: 'Sales Consultant', company: 'Vodacom', location: 'Cape Town', type: 'Permanent', status: 'Active' },
                  { title: 'Process Engineer', company: 'Sasol', location: 'Secunda', type: 'Permanent', status: 'Active' },
                ].map((job, idx) => (
                  <tr key={idx} className="hover:bg-slate-700/50">
                    <td className="px-6 py-4 text-white font-medium">{job.title}</td>
                    <td className="px-6 py-4 text-slate-300">{job.company}</td>
                    <td className="px-6 py-4 text-slate-300">{job.location}</td>
                    <td className="px-6 py-4 text-slate-300">{job.type}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}