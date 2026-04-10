import { NextRequest, NextResponse } from 'next/server'

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  targetKeyword: string
  themeWords: string[]
  category: string
  featuredImage?: string
}

const mockArticles: Article[] = [
  { 
    id: '1', 
    slug: 'how-to-write-winning-cv-south-africa', 
    title: 'How to Write a Winning CV in South Africa', 
    excerpt: 'Learn the essential tips and tricks to create a CV that stands out to South African employers.', 
    content: 'Creating a winning CV is essential for job seekers in South Africa...', 
    author: 'JobHelper Team', 
    publishDate: '2026-04-07', 
    targetKeyword: 'CV writing', 
    themeWords: ['CV', 'resume', 'job application', 'interview'],
    category: 'Career Advice',
    featuredImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
  },
  { 
    id: '2', 
    slug: 'ace-your-job-interview', 
    title: 'How to Ace Your Job Interview', 
    excerpt: 'Master the interview process with these proven tips and preparation strategies.', 
    content: 'Interviews can be nerve-wracking, but with proper preparation...', 
    author: 'Sarah Johnson', 
    publishDate: '2026-04-05', 
    targetKeyword: 'job interview', 
    themeWords: ['interview', 'preparation', 'questions'],
    category: 'Career Advice',
    featuredImage: 'https://images.unsplash.com/photo-1567014302777-0a1292e51c0c?w=600&h=400&fit=crop',
  },
  { 
    id: '3', 
    slug: 'remote-work-guide-south-africa', 
    title: 'Remote Work: A Complete Guide for South Africans', 
    excerpt: 'Everything you need to know about finding and succeeding in remote work opportunities.', 
    content: 'Remote work has become increasingly popular in South Africa...', 
    author: 'JobHelper Team', 
    publishDate: '2026-04-03', 
    targetKeyword: 'remote work', 
    themeWords: ['remote', 'work from home', 'freelance'],
    category: 'Remote Work',
    featuredImage: 'https://images.unsplash.com/photo-1593642532407-56b8b7d6c61a?w=600&h=400&fit=crop',
  },
  { 
    id: '4', 
    slug: 'top-matric-learnerships-2026', 
    title: 'Top Matric Learnerships for 2026', 
    excerpt: 'Looking for opportunities after matric? Learnerships are a great way to gain skills.', 
    content: 'Looking for opportunities after matric? Learnerships are a great way to gain skills...', 
    author: 'JobHelper Team', 
    publishDate: '2026-03-28', 
    targetKeyword: 'learnerships', 
    themeWords: ['matric', 'learnership', 'training', 'entry-level'],
    category: 'Learnerships',
    featuredImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
  },
  { 
    id: '5', 
    slug: 'dpsa-salary-adjustment-2026', 
    title: 'DPSA Salary Adjustment 2026 - What You Need to Know', 
    excerpt: 'The Department of Public Service and Administration has announced new salary scales.', 
    content: 'The Department of Public Service and Administration has announced new salary scales...', 
    author: 'JobHelper Team', 
    publishDate: '2026-04-09', 
    targetKeyword: 'government jobs', 
    themeWords: ['DPSA', 'salary', 'government', 'civil service'],
    category: 'Government',
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848d66c85d?w=600&h=400&fit=crop',
  },
  { 
    id: '6', 
    slug: 'z83-form-explained', 
    title: 'Government Jobs Guide: Z83 Form Explained', 
    excerpt: 'Everything you need to know about the Z83 government job application form.', 
    content: 'Everything you need to know about the Z83 government job application form...', 
    author: 'JobHelper Team', 
    publishDate: '2026-04-04', 
    targetKeyword: 'Z83 form', 
    themeWords: ['Z83', 'government', 'application', 'DPSA'],
    category: 'Government',
    featuredImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const category = searchParams.get('category') || ''
  const keyword = searchParams.get('keyword') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  let filteredArticles = [...mockArticles]

  if (category) {
    filteredArticles = filteredArticles.filter(article => 
      article.category.toLowerCase().includes(category.toLowerCase())
    )
  }

  if (keyword) {
    filteredArticles = filteredArticles.filter(article => 
      article.targetKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
      article.themeWords.some(word => word.toLowerCase().includes(keyword.toLowerCase()))
    )
  }

  const total = filteredArticles.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex)

  return NextResponse.json({
    articles: paginatedArticles,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    },
  })
}