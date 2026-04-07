import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

const posts = [
  { 
    id: '1', 
    title: 'Remote Work Trends in South Africa 2026', 
    slug: 'remote-work-trends-2026', 
    content: 'Remote work continues to grow in South Africa...',
    publishedAt: new Date('2026-04-01'),
    siteId: 'main',
    author: 'JobHelper Team',
    published: true,
  },
  { 
    id: '2', 
    title: 'Top Matric Learnerships for 2026', 
    slug: 'top-matric-learnerships-2026', 
    content: 'Looking for opportunities after matric?',
    publishedAt: new Date('2026-03-28'),
    siteId: 'matric',
    author: 'JobHelper Team',
    published: true,
  },
  { 
    id: '3', 
    title: 'How to Ace Your Government Job Interview', 
    slug: 'ace-government-interview', 
    content: 'Government jobs are competitive...',
    publishedAt: new Date('2026-03-25'),
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
    publishedAt: new Date(),
    siteId: siteId || 'main',
    author: author || 'JobHelper Team',
    published: true,
  };

  posts.push(newPost);

  return NextResponse.json({ post: newPost }, { status: 201 });
}