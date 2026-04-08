import { NextRequest, NextResponse } from 'next/server';

let jobs = [
  { id: '1', title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', category: 'IT', description: 'We are looking for an experienced software developer...', applyUrl: 'https://example.com/apply', remote: false, postedAt: new Date().toISOString(), siteId: 'main', status: 'ACTIVE' },
  { id: '2', title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', category: 'Marketing', description: 'Join our marketing team...', applyUrl: 'https://example.com/apply', remote: false, postedAt: new Date().toISOString(), siteId: 'main', status: 'ACTIVE' },
  { id: '3', title: 'Data Analyst - Remote', company: 'Tech Corp', location: 'Remote', category: 'IT', description: 'Analyze data and provide insights...', applyUrl: 'https://example.com/apply', remote: true, postedAt: new Date().toISOString(), siteId: 'main', status: 'ACTIVE' },
  { id: '4', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', category: 'Government', description: 'Clerk position available...', applyUrl: 'https://example.com/apply', remote: false, postedAt: new Date().toISOString(), siteId: 'main', status: 'ACTIVE' },
  { id: '5', title: 'Financial Analyst', company: 'Absa', location: 'Johannesburg', category: 'Finance', description: 'Looking for a financial analyst...', applyUrl: 'https://example.com/apply', remote: false, postedAt: new Date().toISOString(), siteId: 'main', status: 'ACTIVE' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const siteId = searchParams.get('siteId') || 'main';
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filteredJobs = jobs.filter(job => job.siteId === siteId);

  if (category && category !== 'All') {
    filteredJobs = filteredJobs.filter(job => job.category === category);
  }

  if (search) {
    filteredJobs = filteredJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({ jobs: filteredJobs, total: filteredJobs.length });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, company, location, category, description, applyUrl, remote, siteId } = body;

  const newJob = {
    id: String(Date.now()),
    title,
    company,
    location,
    category: category || 'Other',
    description,
    applyUrl,
    remote: remote || false,
    postedAt: new Date().toISOString(),
    siteId: siteId || 'main',
    status: 'ACTIVE',
  };

  jobs.push(newJob);

  return NextResponse.json({ job: newJob }, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, title, company, location, category, description, applyUrl, remote, status } = body;

  const jobIndex = jobs.findIndex(j => j.id === id);
  if (jobIndex === -1) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }

  jobs[jobIndex] = {
    ...jobs[jobIndex],
    title: title ?? jobs[jobIndex].title,
    company: company ?? jobs[jobIndex].company,
    location: location ?? jobs[jobIndex].location,
    category: category ?? jobs[jobIndex].category,
    description: description ?? jobs[jobIndex].description,
    applyUrl: applyUrl ?? jobs[jobIndex].applyUrl,
    remote: remote ?? jobs[jobIndex].remote,
    status: status ?? jobs[jobIndex].status,
  };

  return NextResponse.json({ job: jobs[jobIndex] });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Job ID required' }, { status: 400 });
  }

  const jobIndex = jobs.findIndex(j => j.id === id);
  if (jobIndex === -1) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }

  jobs.splice(jobIndex, 1);

  return NextResponse.json({ success: true });
}
