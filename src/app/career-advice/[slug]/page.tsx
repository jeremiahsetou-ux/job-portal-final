import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp, MessageCircle, ChevronRight, Eye, BookOpen } from 'lucide-react';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorBio: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  image: string;
  featured: boolean;
}

const ARTICLES: Record<string, Article> = {
  'how-to-write-winning-cv-south-africa': {
    id: 1,
    slug: 'how-to-write-winning-cv-south-africa',
    title: 'How to Write a Winning CV in South Africa (2024)',
    excerpt: 'Learn the secrets of crafting a CV that gets noticed by South African recruiters. Our comprehensive guide covers format, content, and common mistakes to avoid.',
    category: 'cv-writing',
    author: 'Sarah Mitchell',
    authorBio: 'Career Coach with 10+ years of experience helping South Africans land their dream jobs.',
    publishedAt: '2024-03-15',
    updatedAt: '2024-03-15',
    readTime: 8,
    image: 'CV',
    featured: true,
    content: `
## Why Your CV Matters

Your CV is often your first—and sometimes only—chance to make an impression on a potential employer. In South Africa's competitive job market, having a professionally crafted CV can be the difference between getting an interview and being overlooked.

## The Perfect South African CV Format

### 1. Contact Details
- Full name (prominently displayed)
- Phone number (South African format: +27 XXX XXX XXXX)
- Email address
- LinkedIn profile (optional but recommended)
- Location (city only, not full address)

### 2. Personal Profile
Write 2-3 sentences about yourself, your professional background, and what you're looking for. This is your "elevator pitch."

### 3. Work Experience
List your experience in reverse chronological order. Include:
- Job title
- Company name
- Dates (Month Year - Month Year)
- Key responsibilities and achievements

### 4. Education
- Degree/qualification
- Institution
- Year completed

### 5. Skills
Include both technical and soft skills relevant to the position.

### 6. References
"Available upon request" is acceptable in South Africa.

## Common Mistakes to Avoid

1. **Too long** - Keep it to 2-3 pages maximum
2. **Too generic** - Tailor each CV to the specific job
3. **Typos** - Proofread multiple times
4. **Fake information** - Always be honest
5. **Poor formatting** - Keep it clean and professional

## Pro Tips

- Use action verbs: "Managed," "Led," "Developed," "Achieved"
- Quantify achievements where possible
- Use keywords from the job description
- Keep fonts professional (Arial, Calibri)
- Save as PDF to preserve formatting

## Conclusion

A winning CV takes time and effort, but the rewards are worth it. Follow these tips, and you'll be one step closer to landing your dream job in South Africa.
    `,
  },
  'top-50-highest-paying-jobs-south-africa-2024': {
    id: 2,
    slug: 'top-50-highest-paying-jobs-south-africa-2024',
    title: 'Top 50 Highest Paying Jobs in South Africa 2024',
    excerpt: 'Discover the highest paying careers in SA, from IT to finance. Includes salary ranges and required qualifications for each profession.',
    category: 'salary-guides',
    author: 'James Cooper',
    authorBio: 'HR Specialist and salary data analyst with expertise in the South African job market.',
    publishedAt: '2024-03-12',
    updatedAt: '2024-03-12',
    readTime: 6,
    image: '$$$',
    featured: true,
    content: `
## Highest Paying Careers in South Africa

Looking to maximize your earning potential? Here's our comprehensive guide to the highest-paying jobs in South Africa for 2024.

### Technology Sector
1. **Software Architect** - R1.2M - R2M
2. **Data Scientist** - R800K - R1.5M
3. **Cybersecurity Specialist** - R700K - R1.2M
4. **AI/Machine Learning Engineer** - R900K - R1.5M
5. **DevOps Engineer** - R600K - R1M

### Finance & Accounting
6. **Investment Banker** - R1M - R2.5M
7. **Actuary** - R800K - R1.5M
8. **Chartered Accountant** - R600K - R1.2M
9. **Financial Controller** - R700K - R1.2M
10. **Risk Manager** - R650K - R1M

### Medical & Healthcare
11. **Surgeon** - R1.5M - R3M
12. **Specialist Physician** - R1.2M - R2M
13. **Dentist** - R600K - R1.2M
14. **Pharmacist** - R500K - R800K

### Engineering
15. **Petroleum Engineer** - R800K - R1.5M
16. **Mining Engineer** - R700K - R1.2M
17. **Electrical Engineer** - R500K - R900K
18. **Civil Engineer** - R450K - R800K

### Management
19. **CEO/Managing Director** - R2M - R5M
20. **Operations Director** - R1M - R2M
21. **HR Director** - R800K - R1.5M

## Tips for Landing High-Paying Jobs

1. **Invest in education** - Advanced degrees pay off
2. **Gain experience** - Build your track record
3. **Network** - Connections matter
4. **Negotiate** - Don't accept the first offer
5. **Keep learning** - Stay relevant
    `,
  },
  'government-jobs-guide-z83-form': {
    id: 3,
    slug: 'government-jobs-guide-z83-form',
    title: 'Complete Guide to Government Jobs: Z83 Form Explained',
    excerpt: 'Everything you need to know about applying for government positions in South Africa. Master the Z83 form and improve your chances.',
    category: 'government-jobs',
    author: 'Priya Naidoo',
    authorBio: 'Former government HR officer with 15 years of experience in public sector recruitment.',
    publishedAt: '2024-03-10',
    updatedAt: '2024-03-10',
    readTime: 10,
    image: 'GOV',
    featured: true,
    content: `
## Government Jobs in South Africa

The South African government is one of the largest employers in the country. Government jobs offer competitive salaries, job security, and excellent benefits.

## Understanding the Z83 Form

The Z83 form is the official application form for all government positions. It's your gateway to working in the public sector.

### Part A: Personal Details
- Full names and surname
- Identity number
- Contact details
- Language proficiencies

### Part B: Employment Record
List all your work experience, including:
- Public service
- Private sector
- Voluntary work

### Part C: Educational Qualifications
- Matric certificate
- Tertiary education
- Professional qualifications

### Part D: References
Provide references from previous employers.

## Tips for Success

1. **Complete every section** - Incomplete forms are rejected
2. **Be honest** - False information leads to disqualification
3. **Use correct terminology** - Match job ad language
4. **Apply early** - Don't wait until the deadline
5. **Keep copies** - Save your application

## Conclusion

Government jobs are an excellent career choice. Master the Z83 form, and you'll be on your way to a fulfilling public service career.
    `,
  },
  'interview-questions-answers-south-africa': {
    id: 4,
    slug: 'interview-questions-answers-south-africa',
    title: 'Common Interview Questions and How to Answer Them',
    excerpt: 'Prepare for your next interview with our guide to the most asked questions in South African job interviews.',
    category: 'interview-tips',
    author: 'Michael Ross',
    authorBio: 'Recruitment expert who has conducted 1,000+ interviews at top South African companies.',
    publishedAt: '2024-03-08',
    updatedAt: '2024-03-08',
    readTime: 7,
    image: 'INT',
    featured: false,
    content: `
## Ace Your Interview

Preparation is key to interview success. Here are the most common questions and how to answer them.

### "Tell us about yourself"
Focus on professional experience relevant to the job.

### "What are your strengths?"
Choose strengths that match the job requirements.

### "What is your greatest weakness?"
Be honest but show how you're working to improve.

### "Why do you want to work here?"
Show you've researched the company.

### "Where do you see yourself in 5 years?"
Demonstrate ambition and loyalty.

### "Why should we hire you?"
Highlight your unique value proposition.

## Preparation Tips

1. Practice out loud
2. Research the company
3. Prepare questions to ask
4. Dress appropriately
5. Arrive on time
    `,
  },
  'how-to-negotiate-salary-south-africa': {
    id: 5,
    slug: 'how-to-negotiate-salary-south-africa',
    title: 'How to Negotiate Your Salary in South Africa',
    excerpt: 'Don\'t leave money on the table. Learn effective salary negotiation strategies that work in the SA market.',
    category: 'salary-guides',
    author: 'Lisa Johnson',
    authorBio: 'Certified compensation specialist helping professionals maximize their earning potential.',
    publishedAt: '2024-03-05',
    updatedAt: '2024-03-05',
    readTime: 5,
    image: 'SAL',
    featured: false,
    content: `
## Know Your Worth

Salary negotiation is a critical skill. Here's how to negotiate with confidence in South Africa.

## Research Market Rates
- Use salary surveys
- Check job portals
- Network with peers

## Build Your Case
- Document your achievements
- Quantify your impact
- Highlight unique skills

## The Negotiation
- Wait for the offer
- Don't reveal your number first
- Be professional but firm
- Consider total compensation

## Conclusion
Don't accept the first offer without negotiating. You might be leaving significant money on the table.
    `,
  },
  'graduate-programmes-south-africa-2024': {
    id: 6,
    slug: 'graduate-programmes-south-africa-2024',
    title: 'Best Graduate Programmes in South Africa 2024',
    excerpt: 'Top graduate programmes offered by leading South African companies. Apply now and kickstart your career.',
    category: 'career-growth',
    author: 'David Kim',
    authorBio: 'Career development specialist focused on youth employment and graduate opportunities.',
    publishedAt: '2024-03-03',
    updatedAt: '2024-03-03',
    readTime: 6,
    image: 'GRAD',
    featured: false,
    content: `
## Graduate Programmes

A graduate programme can be your stepping stone to a successful career. Here are the best in South Africa:

### Top Companies
1. **Standard Bank Graduate Programme**
2. **Sasol graduate Development**
3. **Absa Graduate Rotational**
4. **Eskom Graduate Internship**
5. **MTN Graduate Programme**

## Benefits
- Mentorship
- Training
- Rotation exposure
- Competitive salary

## How to Apply
1. Research programmes
2. Prepare your CV
3. Apply early
4. Prepare for assessments
    `,
  },
  'cv-vs-resume-differences-south-africa': {
    id: 7,
    slug: 'cv-vs-resume-differences-south-africa',
    title: 'CV vs Resume: What\'s the Difference?',
    excerpt: 'Do you need a CV or a resume? Understand the key differences and when to use each.',
    category: 'cv-writing',
    author: 'Sarah Mitchell',
    authorBio: 'Career Coach with 10+ years of experience helping South Africans land their dream jobs.',
    publishedAt: '2024-03-01',
    updatedAt: '2024-03-01',
    readTime: 4,
    image: 'CVR',
    featured: false,
    content: `
## CV vs Resume: What's the Difference?

In South Africa, we typically use "CV" but understand when each is appropriate.

## CV (Curriculum Vitae)
- 2-3+ pages
- Complete career history
- Detailed descriptions
- Used for: Academic, government, comprehensive applications

## Resume
- 1-2 pages
- Focused on relevant experience
- Concise bullet points
- Used for: Private sector, specific role applications

## When to Use Which
- Traditional SA jobs: CV
- International applications: Check the country
- Specific role: Resume
    `,
  },
  'soft-skills-south-africa-employers-want': {
    id: 8,
    slug: 'soft-skills-south-africa-employers-want',
    title: 'Soft Skills SA Employers Want in 2024',
    excerpt: 'Beyond qualifications, employers are looking for these essential soft skills. Boost your employability today.',
    category: 'career-growth',
    author: 'James Cooper',
    authorBio: 'HR Specialist and salary data analyst with expertise in the South African job market.',
    publishedAt: '2024-02-28',
    updatedAt: '2024-02-28',
    readTime: 5,
    image: 'SKL',
    featured: false,
    content: `
## Essential Soft Skills

Technical skills get you the interview, but soft skills get you the job.

## Top 10 Soft Skills Employers Want

1. **Communication** - Clear, professional writing and speaking
2. **Teamwork** - Working effectively with others
3. **Problem-solving** - Critical thinking and solutions
4. **Adaptability** - Flexibility in changing environments
5. **Time management** - Meeting deadlines
6. **Leadership** - Taking initiative
7. **Emotional intelligence** - Understanding others
8. **Creativity** - Innovative thinking
9. **Collaboration** - Working across teams
10. **Work ethic** - Reliability and dedication

## How to Develop These Skills
- Practice in real situations
- Seek feedback
- Take on challenges
- Learn from others

## Conclusion
Invest in developing these soft skills to stand out in the job market.
    `,
  },
};

const CATEGORIES = [
  { id: 'all', name: 'All Articles' },
  { id: 'job-search', name: 'Job Search' },
  { id: 'interview-tips', name: 'Interview Tips' },
  { id: 'cv-writing', name: 'CV Writing' },
  { id: 'career-growth', name: 'Career Growth' },
  { id: 'salary-guides', name: 'Salary Guides' },
  { id: 'government-jobs', name: 'Government Jobs' },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  
  if (!article) {
    return { title: 'Article Not Found - JobHelper' };
  }

  return {
    title: `${article.title} - JobHelper Career Advice`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map(slug => ({ slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  const getCategoryName = (id: string) => {
    const cat = CATEGORIES.find(c => c.id === id);
    return cat?.name || id;
  };

  const relatedArticles = Object.values(ARTICLES)
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SEO */}
      <head>
        <title>{article.title} - JobHelper Career Advice</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "description": article.excerpt,
              "author": {
                "@type": "Person",
                "name": article.author
              },
              "datePublished": article.publishedAt,
              "dateModified": article.updatedAt,
            })
          }}
        />
      </head>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <Link href="/career-advice" className="hover:underline">Career Advice</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 truncate max-w-[200px]">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Article Header */}
        <header className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link 
              href={`/career-advice?category=${article.category}`}
              className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
            >
              {getCategoryName(article.category)}
            </Link>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock size={14} /> {article.readTime} min read
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{article.author}</p>
                <p className="text-sm text-slate-500">{article.authorBio}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar size={16} /> {article.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Eye size={16} /> 1.2K views
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
          <div className="prose prose-slate max-w-none">
            {article.content.split('\n').map((line, idx) => {
              const trimmed = line.trim();
              if (trimmed.startsWith('## ')) {
                return <h2 key={idx} className="text-xl font-bold text-slate-900 mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={idx} className="text-lg font-semibold text-slate-900 mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
              }
              if (trimmed.startsWith('1. ')) {
                return <li key={idx} className="text-slate-600 ml-4 mb-2">{trimmed.replace(/^\d+\. /, '')}</li>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={idx} className="text-slate-600 ml-4 mb-2">{trimmed.replace('- ', '')}</li>;
              }
              if (trimmed === '') {
                return <br key={idx} />;
              }
              if (!trimmed.startsWith('#')) {
                return <p key={idx} className="text-slate-600 mb-4">{trimmed}</p>;
              }
              return null;
            })}
          </div>

          {/* Share & Save */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
                <ThumbsUp size={18} /> Helpful
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-600">
                <Bookmark size={18} /> Save
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white">
              <Share2 size={18} /> Share
            </button>
          </div>
        </article>

        {/* Author Box */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm text-blue-600 font-semibold">Written by</p>
              <h3 className="font-bold text-lg text-slate-900">{article.author}</h3>
              <p className="text-slate-600 text-sm">{article.authorBio}</p>
              <button className="text-blue-600 font-semibold text-sm mt-2 hover:underline">
                View more articles →
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map(related => (
                <Link
                  key={related.id}
                  href={`/career-advice/${related.slug}`}
                  className="group"
                >
                  <div className="h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-2xl font-black text-white/30">{related.image}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{related.readTime} min read</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="text-center mt-8">
          <Link 
            href="/career-advice"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            <ArrowLeft size={18} /> Back to Career Advice
          </Link>
        </div>
      </div>
    </div>
  );
}