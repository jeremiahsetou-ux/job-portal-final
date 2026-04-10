import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

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
  _createdAt,
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
  const { category, limit = 20, offset = 0 } = options || {}
  
  let filter = 'isActive == true'
  if (category) {
    filter += ' && category->slug.current == $category'
  }

  const query = `
    *[_type == "jobPosting" && ${filter}]
    | order(_createdAt desc)[$offset...$offset + $limit] {
      ${JOB_FIELDS}
    }
  `

  return client.fetch(query, { category, offset, limit })
}

export async function getJobBySlug(slug: string): Promise<any | null> {
  const query = `
    *[_type == "jobPosting" && slug.current == $slug][0] {
      ${JOB_FIELDS}
    }
  `

  return client.fetch(query, { slug })
}

export async function getArticles(options?: {
  category?: string
  limit?: number
  offset?: number
}): Promise<any[]> {
  const { category, limit = 20, offset = 0 } = options || {}
  
  let filter = ''
  if (category) {
    filter = ' && category->slug.current == $category'
  }

  const query = `
    *[_type == "article"$filter]
    | order(publishDate desc)[$offset...$offset + $limit] {
      ${ARTICLE_FIELDS}
    }
  `

  return client.fetch(query, { category, offset, limit })
}

export async function getArticleBySlug(slug: string): Promise<any | null> {
  const query = `
    *[_type == "article" && slug.current == $slug][0] {
      ${ARTICLE_FIELDS},
      content
    }
  `

  return client.fetch(query, { slug })
}

export async function getRelatedArticles(keyword: string, limit = 3): Promise<any[]> {
  const query = `
    *[_type == "article" && (targetKeyword match $keyword || targetKeyword in themeWords)]
    | order(publishDate desc)[0...$limit] {
      ${ARTICLE_FIELDS}
    }
  `

  return client.fetch(query, { keyword: `*${keyword}*`, limit })
}

export async function getCategories(): Promise<any[]> {
  const query = `
    *[_type == "category" && !defined(parentCategory)] | order(name asc) {
      ${CATEGORY_FIELDS},
      "subcategories": *[_type == "category" && references(^._id)] {
        ${CATEGORY_FIELDS}
      }
    }
  `

  return client.fetch(query)
}

export async function getFeaturedJobs(limit = 10): Promise<any[]> {
  const query = `
    *[_type == "jobPosting" && isActive == true]
    | order(_createdAt desc)[0...$limit] {
      ${JOB_FIELDS}
    }
  `

  return client.fetch(query, { limit })
}

export async function getFeaturedArticles(limit = 6): Promise<any[]> {
  const query = `
    *[_type == "article" && isFeatured == true]
    | order(publishDate desc)[0...$limit] {
      ${ARTICLE_FIELDS}
    }
  `

  return client.fetch(query, { limit })
}