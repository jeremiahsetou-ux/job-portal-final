import { NextRequest, NextResponse } from 'next/server'

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
}

const mockJobs: Job[] = [
  { id: '1', slug: 'senior-software-developer', title: 'Senior Software Developer', company: 'Standard Bank', location: 'Johannesburg', salary: 'R45,000 - R65,000', jobType: 'full-time', category: 'IT & Software', applyUrl: 'https://standardbank.com/careers', postedDate: '2026-04-08', description: 'We are looking for an experienced Senior Software Developer to join our dynamic team.' },
  { id: '2', slug: 'marketing-manager', title: 'Marketing Manager', company: 'Sasol', location: 'Johannesburg', salary: 'R55,000 - R75,000', jobType: 'full-time', category: 'Marketing', applyUrl: 'https://sasol.com/careers', postedDate: '2026-04-07', description: 'Join our marketing team at Sasol and help shape the future of our brand.' },
  { id: '3', slug: 'data-analyst-remote', title: 'Data Analyst - Remote', company: 'Tech Corp', location: 'Remote', salary: 'R30,000 - R45,000', jobType: 'remote', category: 'IT & Software', applyUrl: 'https://techcorp.co.za/careers', postedDate: '2026-04-06', description: 'Tech Corp is looking for a skilled Data Analyst to join our growing team.' },
  { id: '4', slug: 'government-clerk', title: 'Government Clerk', company: 'Department of Home Affairs', location: 'Pretoria', salary: 'R18,000 - R25,000', jobType: 'full-time', category: 'Government', applyUrl: '#', postedDate: '2026-04-05', description: 'The Department of Home Affairs is seeking dedicated individuals for Clerk positions.' },
  { id: '5', slug: 'customer-success-manager', title: 'Customer Success Manager', company: 'Finance Ltd', location: 'Cape Town', salary: 'R35,000 - R50,000', jobType: 'full-time', category: 'Customer Service', applyUrl: 'https://financeltd.co.za/careers', postedDate: '2026-04-04', description: 'Finance Ltd is seeking a Customer Success Manager to ensure client satisfaction.' },
  { id: '6', slug: 'hr-coordinator', title: 'HR Coordinator', company: 'MTN South Africa', location: 'Johannesburg', salary: 'R25,000 - R35,000', jobType: 'full-time', category: 'Human Resources', applyUrl: 'https://mtn.com/careers', postedDate: '2026-04-03', description: 'MTN is looking for an HR Coordinator to join our People team.' },
  { id: '7', slug: 'electrical-engineer', title: 'Electrical Engineer', company: 'Eskom', location: 'Johannesburg', salary: 'R40,000 - R55,000', jobType: 'full-time', category: 'Engineering', applyUrl: 'https://eskom.co.za/careers', postedDate: '2026-04-02', description: 'Eskom seeks experienced Electrical Engineers for our generation division.' },
  { id: '8', slug: 'sales-representative', title: 'Sales Representative', company: 'Shoprite', location: 'Durban', salary: 'R15,000 - R25,000', jobType: 'full-time', category: 'Sales', applyUrl: 'https://shoprite.com/careers', postedDate: '2026-04-01', description: 'Shoprite is seeking results-driven Sales Representatives.' },
  { id: '9', slug: 'graphic-designer', title: 'Graphic Designer', company: 'Creative Agency', location: 'Cape Town', salary: 'R20,000 - R30,000', jobType: 'full-time', category: 'Design', applyUrl: 'https://creativeagency.co.za', postedDate: '2026-03-31', description: 'Creative Agency needs a talented Graphic Designer.' },
  { id: '10', slug: 'nurse', title: 'Professional Nurse', company: 'Netcare', location: 'Johannesburg', salary: 'R30,000 - R45,000', jobType: 'full-time', category: 'Healthcare', applyUrl: 'https://netcare.co.za/careers', postedDate: '2026-03-30', description: 'Netcare is seeking Professional Nurses for our hospitals.' },
  { id: '11', slug: 'teacher', title: 'High School Teacher', company: 'Department of Education', location: 'Durban', salary: 'R25,000 - R35,000', jobType: 'full-time', category: 'Education', applyUrl: '#', postedDate: '2026-03-29', description: 'The Department of Education is seeking qualified High School Teachers.' },
  { id: '12', slug: 'bookkeeper', title: 'Bookkeeper', company: 'Accounting Firm', location: 'Cape Town', salary: 'R18,000 - R25,000', jobType: 'part-time', category: 'Finance', applyUrl: 'https://accountingfirm.co.za', postedDate: '2026-03-28', description: 'Accounting firm seeks experienced Bookkeeper.' },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const category = searchParams.get('category') || ''
  const location = searchParams.get('location') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  let filteredJobs = [...mockJobs]

  if (category) {
    filteredJobs = filteredJobs.filter(job => 
      job.category.toLowerCase().includes(category.toLowerCase())
    )
  }

  if (location) {
    filteredJobs = filteredJobs.filter(job => 
      job.location.toLowerCase().includes(location.toLowerCase())
    )
  }

  const total = filteredJobs.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex)

  return NextResponse.json({
    jobs: paginatedJobs,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    },
  })
}