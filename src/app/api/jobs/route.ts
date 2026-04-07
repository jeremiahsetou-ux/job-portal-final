import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// Mock jobs data - replace with Prisma query
const jobs = [
  { id: '1', title: 'Software Developer', company: 'Standard Bank', location: 'Johannesburg', salary: 'R850k - R1.2m', category: 'IT', siteId: 'main', createdAt: new Date() },
  { id: '2', title: 'Marketing Manager', company: 'Sasol', location: 'Sandton', salary: 'R600k - R850k', category: 'Marketing', siteId: 'main', createdAt: new Date() },
  { id: '3', title: 'Government Clerk', company: 'Dept of Home Affairs', location: 'Pretoria', salary: 'R180k - R280k', category: 'Government', siteId: 'z83', createdAt: new Date() },
  { id: '4', title: 'Data Analyst - Remote', company: 'Tech Corp', location: 'Remote', salary: 'R500k - R700k', category: 'IT', siteId: 'remote', createdAt: new Date() },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const siteId = searchParams.get('siteId') || 'main';
  const q = searchParams.get('q');
  const location = searchParams.get('l');
  const category = searchParams.get('category');

  let filteredJobs = jobs.filter(job => job.siteId === siteId);

  if (q) {
    filteredJobs = filteredJobs.filter(job =>
      job.title.toLowerCase().includes(q.toLowerCase()) ||
      job.company.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter(job =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (category) {
    filteredJobs = filteredJobs.filter(job => job.category === category);
  }

  return NextResponse.json({ jobs: filteredJobs, total: filteredJobs.length });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { title, company, location, salary, category, description, applyUrl, siteId } = body;

  const newJob = {
    id: String(jobs.length + 1),
    title,
    company,
    location,
    salary,
    category,
    description,
    applyUrl,
    siteId: siteId || 'main',
    createdAt: new Date(),
  };

  jobs.push(newJob);

  return NextResponse.json({ job: newJob }, { status: 201 });
}