import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

const posts = [
  { 
    id: '1', 
    title: 'Remote Work Trends in South Africa 2026', 
    slug: 'remote-work-trends-2026', 
    excerpt: 'Remote work continues to grow in South Africa with more companies offering flexible arrangements.',
    content: 'Remote work continues to grow in South Africa with more companies offering flexible arrangements. This shift has opened up new opportunities for job seekers across the country.',
    publishedAt: '2026-04-01',
    siteId: 'main',
    author: 'JobHelper Team',
    published: true,
  },
  { 
    id: '2', 
    title: 'Top Matric Learnerships for 2026', 
    slug: 'top-matric-learnerships-2026', 
    excerpt: 'Looking for opportunities after matric? Here are the best learnerships available.',
    content: 'Looking for opportunities after matric? Here are the best learnerships available in 2026.',
    publishedAt: '2026-03-28',
    siteId: 'matric',
    author: 'JobHelper Team',
    published: true,
  },
  { 
    id: '3', 
    title: 'How to Ace Your Government Job Interview', 
    slug: 'ace-government-interview', 
    excerpt: 'Government jobs are competitive. Learn the tips to stand out.',
    content: 'Government jobs are competitive. Learn the tips to stand out in your Z83 interview.',
    publishedAt: '2026-03-25',
    siteId: 'z83',
    author: 'JobHelper Team',
    published: true,
  },
  { 
    id: '4', 
    title: 'How to Write a Winning CV', 
    slug: 'write-winning-cv', 
    excerpt: 'Your CV is your first impression. Make it count with these tips.',
    content: 'Your CV is your first impression. Make it count with these tips.',
    publishedAt: '2026-03-20',
    siteId: 'main',
    author: 'Sarah Johnson',
    published: true,
  },
  { 
    id: '5', 
    title: 'Top 50 Highest Paying Jobs in South Africa', 
    slug: 'highest-paying-jobs-sa', 
    excerpt: 'Discover the highest paying careers in the South African job market.',
    content: 'Discover the highest paying careers in the South African job market.',
    publishedAt: '2026-03-15',
    siteId: 'main',
    author: 'JobHelper Team',
    published: true,
  },
  { 
    id: '6', 
    title: 'Z83 Form Complete Guide', 
    slug: 'z83-form-guide', 
    excerpt: 'Everything you need to know about filling out the Z83 form.',
    content: 'Everything you need to know about filling out the Z83 form for government jobs.',
    publishedAt: '2026-03-10',
    siteId: 'z83',
    author: 'JobHelper Team',
    published: true,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const siteId = searchParams.get('siteId') || 'main';

  const filteredPosts = posts.filter(post => post.siteId === siteId && post.published);

  return NextResponse.json({ posts: filteredPosts, total: filteredPosts.length });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { title, content, slug, author, siteId } = body;

  const newPost = {
    id: String(posts.length + 1),
    title,
    content,
    slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
    publishedAt: new Date().toISOString(),
    siteId: siteId || 'main',
    author: author || 'JobHelper Team',
    published: true,
    excerpt: content?.substring(0, 150) || '',
  };

  posts.push(newPost);

  return NextResponse.json({ post: newPost }, { status: 201 });
}