import { NextResponse } from 'next/server';

const categories = [
  { id: '1', name: 'Career Advice', slug: 'career-advice' },
  { id: '2', name: 'Industry News', slug: 'industry-news' },
  { id: '3', name: 'Interview Tips', slug: 'interview-tips' },
  { id: '4', name: 'Skills Development', slug: 'skills-development' },
  { id: '5', name: 'Job Market Trends', slug: 'job-market-trends' },
  { id: '6', name: 'Remote Work', slug: 'remote-work' },
  { id: '7', name: 'Government Jobs', slug: 'government-jobs' },
  { id: '8', name: 'Entry Level', slug: 'entry-level' },
];

export async function GET() {
  return NextResponse.json({ categories });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, slug } = body;

  const newCategory = {
    id: String(categories.length + 1),
    name,
    slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
  };

  categories.push(newCategory);

  return NextResponse.json({ category: newCategory }, { status: 201 });
}
