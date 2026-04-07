'use client';

import { useState } from 'react';
import { SITES } from '@/middleware';
import { Building2, Plus, Pencil, Trash2, Search, ChevronDown } from 'lucide-react';

const mockJobs = [
  { id: '1', title: 'Software Developer', company: 'Standard Bank', location: 'Johannesburg', status: 'ACTIVE' },
  { id: '2', title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', status: 'ACTIVE' },
  { id: '3', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', status: 'ACTIVE' },
];

export default function AdminPage() {
  const [selectedSite, setSelectedSite] = useState('main');
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-xl">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your job portal</p>
            </div>
          </div>

          {/* Site Selector */}
          <div className="relative">
            <select
              value={selectedSite}
              onChange={(e) => setSelectedSite(e.target.value)}
              className="appearance-none bg-secondary px-4 py-2 pr-10 rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {SITES.map((site) => (
                <option key={site.id} value={site.id}>
                  {site.name} ({site.subdomain}.jobhelper.co.za)
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-56 bg-card border-r min-h-screen py-6">
          <nav className="px-4 space-y-1">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left ${
                activeTab === 'jobs'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary'
              }`}
            >
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Jobs</span>
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left ${
                activeTab === 'news'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-secondary'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">News</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {activeTab === 'jobs' ? 'Jobs' : 'News Posts'}
            </h2>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
              <Plus className="w-4 h-4" />
              Add {activeTab === 'jobs' ? 'Job' : 'Post'}
            </button>
          </div>

          {/* Jobs Table */}
          {activeTab === 'jobs' && (
            <div className="bg-card border rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Title</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Company</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Location</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockJobs.map((job) => (
                    <tr key={job.id} className="hover:bg-secondary/50">
                      <td className="px-4 py-3 font-medium">{job.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{job.company}</td>
                      <td className="px-4 py-3 text-muted-foreground">{job.location}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 hover:bg-secondary rounded">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 hover:bg-secondary rounded text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}