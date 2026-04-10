// Mock Sanity client - replace with actual next-sanity import when ready
// import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Mock client for now
export const client = {
  fetch: async () => [],
}

export const JOB_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  company,
  description,
  location,
  salary,
  jobType,
  closingDate,
  "category": category->{name, "slug": slug.current},
  applyUrl,
  isActive,
`

export const ARTICLE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishDate,
  targetKeyword,
  themeWords,
  "category": category->{name, "slug": slug.current},
  "featuredImage": featuredImage{
    asset->{
      url,
      metadata {
        lqip
      }
    },
    alt
  },
  isFeatured,
`

export const CATEGORY_FIELDS = `
  _id,
  name,
  "slug": slug.current,
  description,
  "parentCategory": parentCategory->{
    name,
    "slug": slug.current
  },
`

export async function getJobs(options?: {
  category?: string
  limit?: number
  offset?: number
}): Promise<any[]> {
  return []
}

export async function getJobBySlug(slug: string): Promise<any | null> {
  return null
}

export async function getArticles(options?: {
  category?: string
  limit?: number
  offset?: number
}): Promise<any[]> {
  return []
}

export async function getArticleBySlug(slug: string): Promise<any | null> {
  return null
}

export async function getRelatedArticles(keyword: string, limit = 3): Promise<any[]> {
  return []
}

export async function getCategories(): Promise<any[]> {
  return []
}

export async function getFeaturedJobs(limit = 10): Promise<any[]> {
  return []
}

export async function getFeaturedArticles(limit = 6): Promise<any[]> {
  return []
}