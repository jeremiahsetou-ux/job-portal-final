import { NextRequest, NextResponse } from 'next/server';

let posts = [
  {
    id: '1',
    title: 'How to Write a Winning CV in South Africa',
    slug: 'how-to-write-winning-cv-south-africa',
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
    author: 'JobHelper Team',
    published: true,
    publishedAt: '2026-04-01T00:00:00Z',
    categoryId: '1',
    siteId: 'main',
  },
  {
    id: '2',
    title: 'Top 50 Highest Paying Jobs in SA 2026',
    slug: 'top-50-highest-paying-jobs-sa-2026',
    excerpt: 'Discover the highest paying jobs in South Africa this year.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4a4d4b?w=600&h=400&fit=crop',
    author: 'JobHelper Team',
    published: true,
    publishedAt: '2026-03-28T00:00:00Z',
    categoryId: '5',
    siteId: 'main',
  },
  {
    id: '3',
    title: 'Government Jobs Guide: Z83 Form Explained',
    slug: 'government-jobs-guide-z83-form',
    excerpt: 'Everything you need to know about the Z83 government job application form.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop',
    author: 'JobHelper Team',
    published: true,
    publishedAt: '2026-03-25T00:00:00Z',
    categoryId: '1',
    siteId: 'main',
  },
  {
    id: '4',
    title: 'Remote Work Trends in South Africa',
    slug: 'remote-work-trends-south-africa',
    excerpt: 'Remote work is growing in South Africa. Learn which companies offer flexible arrangements.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1593642532407-56b8b7d6c61a?w=600&h=400&fit=crop',
    author: 'JobHelper Team',
    published: true,
    publishedAt: '2026-03-20T00:00:00Z',
    categoryId: '5',
    siteId: 'main',
  },
  {
    id: '5',
    title: 'How to Ace Your Job Interview',
    slug: 'how-to-ace-job-interview',
    excerpt: 'Master the interview process with these proven tips.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1567014302777-0a1292e51c0c?w=600&h=400&fit=crop',
    author: 'JobHelper Team',
    published: true,
    publishedAt: '2026-03-15T00:00:00Z',
    categoryId: '3',
    siteId: 'main',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const siteId = searchParams.get('siteId') || 'main';
  const categoryId = searchParams.get('categoryId');

  let filteredPosts = posts.filter(post => post.siteId === siteId && post.published);

  if (categoryId && categoryId !== 'All') {
    filteredPosts = filteredPosts.filter(post => post.categoryId === categoryId);
  }

  return NextResponse.json({ posts: filteredPosts, total: filteredPosts.length });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, slug, excerpt, content, imageUrl, author, categoryId, siteId } = body;

  const newPost = {
    id: String(Date.now()),
    title,
    slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
    excerpt,
    content,
    imageUrl: imageUrl || '',
    author: author || 'JobHelper Team',
    published: true,
    publishedAt: new Date().toISOString(),
    categoryId: categoryId || null,
    siteId: siteId || 'main',
  };

  posts.push(newPost);

  return NextResponse.json({ post: newPost }, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, title, slug, excerpt, content, imageUrl, author, categoryId, published } = body;

  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title: title ?? posts[postIndex].title,
    slug: slug ?? posts[postIndex].slug,
    excerpt: excerpt ?? posts[postIndex].excerpt,
    content: content ?? posts[postIndex].content,
    imageUrl: imageUrl ?? posts[postIndex].imageUrl,
    author: author ?? posts[postIndex].author,
    categoryId: categoryId ?? posts[postIndex].categoryId,
    published: published ?? posts[postIndex].published,
  };

  return NextResponse.json({ post: posts[postIndex] });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Post ID required' }, { status: 400 });
  }

  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  posts.splice(postIndex, 1);

  return NextResponse.json({ success: true });
}
