'use client';

import { useState, useEffect } from 'react';
import { Building2, FileText, Plus, Pencil, Trash2, Search, X, Check, ChevronDown, LogOut } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  status: string;
  description?: string;
  applyUrl?: string;
  remote?: boolean;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  imageUrl?: string;
  author: string;
  categoryId?: string;
  published?: boolean;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'posts'>('jobs');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [jobForm, setJobForm] = useState({
    title: '', company: '', location: '', category: '', description: '', applyUrl: '', remote: false,
  });
  
  const [postForm, setPostForm] = useState({
    title: '', excerpt: '', content: '', imageUrl: '', author: 'JobHelper Team', categoryId: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  async function fetchData() {
    setLoading(true);
    try {
      const [jobsRes, postsRes, catsRes] = await Promise.all([
        fetch('/api/admin/jobs'),
        fetch('/api/admin/posts'),
        fetch('/api/categories'),
      ]);
      const jobsData = await jobsRes.json();
      const postsData = await postsRes.json();
      const catsData = await catsRes.json();
      setJobs(jobsData.jobs || []);
      setPosts(postsData.posts || []);
      setCategories(catsData.categories || []);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleAddJob = async () => {
    try {
      const res = await fetch('/api/admin/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobForm),
      });
      if (res.ok) {
        const newJob = await res.json();
        setJobs([...jobs, newJob.job]);
        setShowJobForm(false);
        setJobForm({ title: '', company: '', location: '', category: '', description: '', applyUrl: '', remote: false });
      }
    } catch (error) {
      console.error('Failed to add job:', error);
    }
  };

  const handleUpdateJob = async () => {
    if (!editingJob) return;
    try {
      const res = await fetch('/api/admin/jobs', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingJob),
      });
      if (res.ok) {
        const updated = await res.json();
        setJobs(jobs.map(j => j.id === editingJob.id ? updated.job : j));
        setEditingJob(null);
        setShowJobForm(false);
      }
    } catch (error) {
      console.error('Failed to update job:', error);
    }
  };

  const handleDeleteJob = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    try {
      const res = await fetch(`/api/admin/jobs?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setJobs(jobs.filter(j => j.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete job:', error);
    }
  };

  const openEditJob = (job: Job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      company: job.company,
      location: job.location,
      category: job.category,
      description: job.description || '',
      applyUrl: job.applyUrl || '',
      remote: job.remote || false,
    });
    setShowJobForm(true);
  };

  const handleAddPost = async () => {
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...postForm,
          categoryId: postForm.categoryId || null,
        }),
      });
      if (res.ok) {
        const newPost = await res.json();
        setPosts([...posts, newPost.post]);
        setShowPostForm(false);
        setPostForm({ title: '', excerpt: '', content: '', imageUrl: '', author: 'JobHelper Team', categoryId: '' });
      }
    } catch (error) {
      console.error('Failed to add post:', error);
    }
  };

  const handleUpdatePost = async () => {
    if (!editingPost) return;
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingPost),
      });
      if (res.ok) {
        const updated = await res.json();
        setPosts(posts.map(p => p.id === editingPost.id ? updated.post : p));
        setEditingPost(null);
        setShowPostForm(false);
      }
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const res = await fetch(`/api/admin/posts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const openEditPost = (post: Post) => {
    setEditingPost(post);
    setPostForm({
      title: post.title,
      excerpt: post.excerpt || '',
      content: post.content || '',
      imageUrl: post.imageUrl || '',
      author: post.author,
      categoryId: post.categoryId || '',
    });
    setShowPostForm(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-card border rounded-xl p-8">
          <div className="text-center mb-6">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-muted-foreground">Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="admin@jobhelper.co.za" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

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
              <p className="text-sm text-muted-foreground">Manage jobs and content</p>
            </div>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-56 bg-card border-r min-h-screen py-6">
          <nav className="px-4 space-y-1">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left ${
                activeTab === 'jobs' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Jobs</span>
            </button>
            <button
              onClick={() => setActiveTab('posts')}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left ${
                activeTab === 'posts' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">News Posts</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {activeTab === 'jobs' ? 'Manage Jobs' : 'Manage News Posts'}
            </h2>
            <button
              onClick={() => {
                if (activeTab === 'jobs') {
                  setEditingJob(null);
                  setJobForm({ title: '', company: '', location: '', category: '', description: '', applyUrl: '', remote: false });
                  setShowJobForm(true);
                } else {
                  setEditingPost(null);
                  setPostForm({ title: '', excerpt: '', content: '', imageUrl: '', author: 'JobHelper Team', categoryId: '' });
                  setShowPostForm(true);
                }
              }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
            >
              <Plus className="w-4 h-4" />
              Add {activeTab === 'jobs' ? 'Job' : 'Post'}
            </button>
          </div>

          {/* Jobs Table */}
          {activeTab === 'jobs' && (
            <div className="bg-card border rounded-xl overflow-hidden">
              {loading ? (
                <div className="p-8 text-center text-muted-foreground">Loading...</div>
              ) : jobs.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">No jobs found. Add your first job!</div>
              ) : (
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Company</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Location</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Category</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                      <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {jobs.map((job) => (
                      <tr key={job.id} className="hover:bg-secondary/50">
                        <td className="px-4 py-3 font-medium">{job.title}</td>
                        <td className="px-4 py-3 text-muted-foreground">{job.company}</td>
                        <td className="px-4 py-3 text-muted-foreground">{job.location}</td>
                        <td className="px-4 py-3 text-muted-foreground">{job.category}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{job.status}</span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => openEditJob(job)} className="p-1.5 hover:bg-secondary rounded"><Pencil className="w-4 h-4" /></button>
                            <button onClick={() => handleDeleteJob(job.id)} className="p-1.5 hover:bg-secondary rounded text-destructive"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Posts Table */}
          {activeTab === 'posts' && (
            <div className="bg-card border rounded-xl overflow-hidden">
              {loading ? (
                <div className="p-8 text-center text-muted-foreground">Loading...</div>
              ) : posts.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">No posts found. Add your first post!</div>
              ) : (
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Slug</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Author</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Category</th>
                      <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-secondary/50">
                        <td className="px-4 py-3 font-medium">{post.title}</td>
                        <td className="px-4 py-3 text-muted-foreground text-sm">{post.slug}</td>
                        <td className="px-4 py-3 text-muted-foreground">{post.author}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {categories.find(c => c.id === post.categoryId)?.name || 'Uncategorized'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => openEditPost(post)} className="p-1.5 hover:bg-secondary rounded"><Pencil className="w-4 h-4" /></button>
                            <button onClick={() => handleDeletePost(post.id)} className="p-1.5 hover:bg-secondary rounded text-destructive"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Add/Edit Job Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{editingJob ? 'Edit Job' : 'Add New Job'}</h3>
              <button onClick={() => { setShowJobForm(false); setEditingJob(null); }} className="p-1 hover:bg-secondary rounded"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <input value={jobForm.title} onChange={(e) => setJobForm({...jobForm, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company *</label>
                <input value={jobForm.company} onChange={(e) => setJobForm({...jobForm, company: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Location *</label>
                  <input value={jobForm.location} onChange={(e) => setJobForm({...jobForm, location: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select value={jobForm.category} onChange={(e) => setJobForm({...jobForm, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Select category</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Government">Government</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Retail">Retail</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea value={jobForm.description} onChange={(e) => setJobForm({...jobForm, description: e.target.value})} rows={3} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Apply URL</label>
                <input value={jobForm.applyUrl} onChange={(e) => setJobForm({...jobForm, applyUrl: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remote" checked={jobForm.remote} onChange={(e) => setJobForm({...jobForm, remote: e.target.checked})} className="rounded" />
                <label htmlFor="remote" className="text-sm">Remote position</label>
              </div>
              <div className="flex gap-2 pt-4">
                <button onClick={() => { setShowJobForm(false); setEditingJob(null); }} className="flex-1 px-4 py-2 border rounded-lg hover:bg-secondary">Cancel</button>
                <button onClick={editingJob ? handleUpdateJob : handleAddJob} className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  {editingJob ? 'Update Job' : 'Add Job'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Post Modal */}
      {showPostForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{editingPost ? 'Edit Post' : 'Add New Post'}</h3>
              <button onClick={() => { setShowPostForm(false); setEditingPost(null); }} className="p-1 hover:bg-secondary rounded"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <input value={postForm.title} onChange={(e) => setPostForm({...postForm, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Excerpt *</label>
                <textarea value={postForm.excerpt} onChange={(e) => setPostForm({...postForm, excerpt: e.target.value})} rows={2} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea value={postForm.content} onChange={(e) => setPostForm({...postForm, content: e.target.value})} rows={4} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input value={postForm.imageUrl} onChange={(e) => setPostForm({...postForm, imageUrl: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select value={postForm.categoryId} onChange={(e) => setPostForm({...postForm, categoryId: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 pt-4">
                <button onClick={() => { setShowPostForm(false); setEditingPost(null); }} className="flex-1 px-4 py-2 border rounded-lg hover:bg-secondary">Cancel</button>
                <button onClick={editingPost ? handleUpdatePost : handleAddPost} className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                  {editingPost ? 'Update Post' : 'Add Post'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}