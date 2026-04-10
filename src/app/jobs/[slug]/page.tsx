import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, DollarSign, Briefcase, ArrowRight, Calendar, User } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsCard } from '@/components/news-card';
import { Breadcrumbs } from '@/components/breadcrumbs';

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  description: string;
  location: string;
  salary?: string;
  applyUrl?: string;
  category: string;
  postedDate: string;
  jobType: string;
  requirements: string[];
}

const mockJobs: Job[] = [
  {
    id: '1',
    slug: 'senior-software-developer',
    title: 'Senior Software Developer',
    company: 'Standard Bank',
    location: 'Johannesburg, Gauteng',
    salary: 'R45,000 - R65,000 per month',
    applyUrl: 'https://standardbank.com/careers',
    category: 'IT & Software',
    postedDate: '2026-04-08',
    jobType: 'Full-time',
    description: `We are looking for an experienced Senior Software Developer to join our dynamic team at Standard Bank.

As a senior member of our development team, you will be responsible for designing, developing, and maintaining enterprise-grade applications. You will mentor junior developers and contribute to our technical strategy.

**What You'll Do:**
- Design and implement scalable software solutions
- Lead technical discussions and code reviews
- Mentor junior developers
- Collaborate with product and design teams
- Ensure code quality and best practices`,
    requirements: [
      '5+ years of software development experience',
      'Proficiency in Java, Python, or JavaScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong problem-solving skills',
      'Excellent communication skills',
    ],
  },
  {
    id: '2',
    slug: 'marketing-manager',
    title: 'Marketing Manager',
    company: 'Sasol',
    location: 'Johannesburg, Gauteng',
    salary: 'R55,000 - R75,000 per month',
    applyUrl: 'https://sasol.com/careers',
    category: 'Marketing',
    postedDate: '2026-04-07',
    jobType: 'Full-time',
    description: `Join our marketing team at Sasol and help shape the future of our brand.

We are seeking a creative and strategic Marketing Manager to lead our marketing initiatives across South Africa.

**Key Responsibilities:**
- Develop and execute marketing strategies
- Manage marketing campaigns and budgets
- Analyze market trends and competitor activity
- Lead a team of marketing professionals`,
    requirements: [
      '7+ years in marketing, preferably in energy/chemical sector',
      'Strategic thinking and creativity',
      'Strong analytical skills',
      'Experience with digital marketing',
      'Proven leadership abilities',
    ],
  },
  {
    id: '3',
    slug: 'data-analyst-remote',
    title: 'Data Analyst - Remote',
    company: 'Tech Corp',
    location: 'Remote (South Africa)',
    salary: 'R30,000 - R45,000 per month',
    applyUrl: 'https://techcorp.co.za/careers',
    category: 'IT & Software',
    postedDate: '2026-04-06',
    jobType: 'Remote',
    description: `Tech Corp is looking for a skilled Data Analyst to join our growing team.

This is a fully remote position perfect for data professionals in South Africa.

**What You'll Do:**
- Analyze large datasets to identify trends
- Create dashboards and reports
- Collaborate with stakeholders
- Support business decisions with data insights`,
    requirements: [
      '3+ years of data analysis experience',
      'Proficiency in SQL and Excel',
      'Experience with BI tools (Tableau/Power BI)',
      'Strong analytical mindset',
      'Ability to work independently',
    ],
  },
  {
    id: '4',
    slug: 'government-clerk',
    title: 'Government Clerk',
    company: 'Department of Home Affairs',
    location: 'Pretoria, Gauteng',
    salary: 'R18,000 - R25,000 per month',
    applyUrl: '#',
    category: 'Government',
    postedDate: '2026-04-05',
    jobType: 'Full-time',
    description: `The Department of Home Affairs is seeking dedicated individuals for Clerk positions.

**DPSA Circular 2026**

This is a government position offering job security and benefits.

**Key Duties:**
- Process applications and documents
- Provide customer service
- Maintain records
- Assist with administrative tasks`,
    requirements: [
      'Matric certificate',
      'Basic computer skills',
      'Good communication skills',
      'South African citizen',
      'No criminal record',
    ],
  },
  {
    id: '5',
    slug: 'customer-success-manager',
    title: 'Customer Success Manager',
    company: 'Finance Ltd',
    location: 'Cape Town, Western Cape',
    salary: 'R35,000 - R50,000 per month',
    applyUrl: 'https://financeltd.co.za/careers',
    category: 'Customer Service',
    postedDate: '2026-04-04',
    jobType: 'Full-time',
    description: `Finance Ltd is seeking a Customer Success Manager to ensure client satisfaction.

**About the Role:**
- Onboard new customers
- Address client concerns
- Drive customer retention
- Identify upsell opportunities`,
    requirements: [
      '4+ years in customer success or similar role',
      'Financial services background preferred',
      'Strong relationship-building skills',
      'Problem-solving abilities',
      'Experience with CRM systems',
    ],
  },
];

const mockArticles = [
  {
    id: '1',
    headline: 'How to Write a Winning CV in South Africa',
    date: '2026-04-07',
    author: 'JobHelper Team',
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    headline: 'Top CV Formats for SA Employers',
    date: '2026-04-04',
    author: 'JobHelper Team',
    excerpt: 'Which CV format works best for different industries in South Africa.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    headline: 'How to Ace Your Job Interview',
    date: '2026-04-05',
    author: 'JobHelper Team',
    excerpt: 'Master the interview process with these proven tips and preparation strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1567014302777-0a1292e51c0c?w=600&h=400&fit=crop',
  },
];

export const revalidate = 3600;

export async function generateStaticParams() {
  return mockJobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug);

  if (!job) {
    return { title: 'Job Not Found' };
  }

  return {
    title: `${job.title} at ${job.company} | JobHelper`,
    description: `${job.title} at ${job.company} in ${job.location}. ${job.salary || job.jobType}. Apply now on JobHelper.`,
    openGraph: {
      title: `${job.title} at ${job.company} | JobHelper`,
      description: job.description.substring(0, 160),
      type: 'website',
    },
  };
}

function generateJobPostingSchema(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: job.company,
      value: job.id,
    },
    datePosted: job.postedDate,
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: job.jobType.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location.split(',')[0],
        addressRegion: job.location.split(',')[1]?.trim() || 'South Africa',
        addressCountry: 'ZA',
      },
    },
    baseSalary: job.salary ? {
      '@type': 'MonetaryAmount',
      currency: 'ZAR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: parseInt(job.salary.match(/R(\d+)/)?.[1] || '0'),
        maxValue: parseInt(job.salary.match(/R(\d+).*R(\d+)/)?.[2] || job.salary.match(/R(\d+)/)?.[1] || '0'),
        unitText: 'MONTH',
      },
    } : undefined,
  };
}

function getRelatedArticles(category: string) {
  const categoryKeywords: Record<string, string[]> = {
    'IT & Software': ['CV', 'interview', 'tech'],
    'Marketing': ['CV', 'interview', 'career'],
    'Government': ['CV', 'government', 'interview'],
    'Customer Service': ['CV', 'interview', 'career'],
    'Finance': ['CV', 'interview', 'career'],
  };
  return mockArticles.slice(0, 3);
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const jsonLd = generateJobPostingSchema(job);
  const formattedDate = new Date(job.postedDate).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const relatedArticles = getRelatedArticles(job.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <Link
              href="/find-jobs"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Jobs
            </Link>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {job.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {formattedDate}
                  </span>
                </div>
              </div>
              {job.salary && (
                <div className="flex items-center gap-2 text-lg font-semibold text-green-600">
                  <DollarSign className="w-5 h-5" />
                  {job.salary}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Job Description</h2>
                <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
                  {job.description}
                </div>
              </section>

              {job.requirements.length > 0 && (
                <section className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Job Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground block mb-1">Job Type</span>
                    <span className="font-medium">{job.jobType}</span>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground block mb-1">Location</span>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  {job.salary && (
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <span className="text-sm text-muted-foreground block mb-1">Salary</span>
                      <span className="font-medium text-green-600">{job.salary}</span>
                    </div>
                  )}
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground block mb-1">Posted</span>
                    <span className="font-medium">{formattedDate}</span>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Apply for this position</h3>
                  <a
                    href={job.applyUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium text-center hover:bg-primary/90 transition-colors mb-4"
                  >
                    Apply Now
                  </a>
                  <p className="text-sm text-muted-foreground text-center">
                    Or apply through the company website
                  </p>
                </div>

                <div className="mt-6 bg-muted/30 rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Similar Jobs</h3>
                  <div className="space-y-3">
                    {mockJobs.filter(j => j.id !== job.id && j.category === job.category).slice(0, 2).map((similarJob) => (
                      <Link
                        key={similarJob.id}
                        href={`/jobs/${similarJob.slug}`}
                        className="block p-3 bg-card border rounded-lg hover:border-primary transition-colors"
                      >
                        <span className="font-medium text-sm block mb-1">{similarJob.title}</span>
                        <span className="text-xs text-muted-foreground">{similarJob.company}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Career Advice</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}