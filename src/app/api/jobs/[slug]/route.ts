import { NextRequest, NextResponse } from 'next/server'
import { notFound } from 'next/navigation'

interface Job {
  id: string
  slug: string
  title: string
  company: string
  description: string
  location: string
  salary?: string
  jobType: string
  category: string
  applyUrl?: string
  postedDate: string
  requirements: string[]
}

const mockJobs: Job[] = [
  { 
    id: '1', 
    slug: 'senior-software-developer', 
    title: 'Senior Software Developer', 
    company: 'Standard Bank', 
    location: 'Johannesburg, Gauteng', 
    salary: 'R45,000 - R65,000 per month', 
    jobType: 'full-time', 
    category: 'IT & Software', 
    applyUrl: 'https://standardbank.com/careers', 
    postedDate: '2026-04-08', 
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
    jobType: 'full-time', 
    category: 'Marketing', 
    applyUrl: 'https://sasol.com/careers', 
    postedDate: '2026-04-07', 
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
    jobType: 'remote', 
    category: 'IT & Software', 
    applyUrl: 'https://techcorp.co.za/careers', 
    postedDate: '2026-04-06', 
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
    jobType: 'full-time', 
    category: 'Government', 
    applyUrl: '#', 
    postedDate: '2026-04-05', 
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
    jobType: 'full-time', 
    category: 'Customer Service', 
    applyUrl: 'https://financeltd.co.za/careers', 
    postedDate: '2026-04-04', 
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
]

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const job = mockJobs.find(j => j.slug === slug)

  if (!job) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 })
  }

  return NextResponse.json({ job })
}