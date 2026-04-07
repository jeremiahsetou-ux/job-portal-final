import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateNewsArticleSchema } from '@/components/json-ld';

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

const mockPosts = [
  {
    id: '1',
    slug: 'remote-work-trends-2026',
    title: 'Remote Work Trends in South Africa 2026',
    content: 'Remote work continues to grow in South Africa, with more companies offering flexible work arrangements. This trend has been accelerated by better internet infrastructure and the adoption of collaboration tools. Companies are now offering remote positions as a standard benefit, attracting talent from across the country.',
    author: 'JobHelper Team',
    publishedAt: '2026-04-01',
  },
  {
    id: '2',
    slug: 'top-matric-learnerships-2026',
    title: 'Top Matric Learnerships for 2026',
    content: 'Looking for opportunities after matric? Learnerships are a great way to gain skills and qualifications while earning. Top companies like Standard Bank, Sasol, and Shoprite offer learnerships in various fields.',
    author: 'JobHelper Team',
    publishedAt: '2026-03-28',
  },
  {
    id: '3',
    slug: 'ace-government-interview',
    title: 'How to Ace Your Government Job Interview',
    content: 'Government jobs are competitive, but with the right preparation, you can stand out. Learn about the interview process, common questions, and how to showcase your skills effectively.',
    author: 'JobHelper Team',
    publishedAt: '2026-03-25',
  },
];

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} - JobHelper.co.za`,
    description: post.content.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  const jsonLd = generateNewsArticleSchema({
    headline: post.title,
    description: post.content.substring(0, 160),
    author: post.author,
    datePublished: post.publishedAt,
    url: `https://jobhelper.co.za/news/${post.slug}`,
  });
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>By {post.author}</span>
          <time dateTime={post.publishedAt}>{formattedDate}</time>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p>{post.content}</p>
      </div>
    </article>
  );
}