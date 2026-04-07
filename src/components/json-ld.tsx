interface JobPostingSchema {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
}

interface NewsArticleSchema {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
}

export function generateJobPostingSchema(job: JobPostingSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'ZA',
      },
    },
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType || 'FULL_TIME',
  };
}

export function generateNewsArticleSchema(article: NewsArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'JobHelper.co.za',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jobhelper.co.za/logo.png',
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}