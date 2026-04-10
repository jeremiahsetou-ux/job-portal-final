'use client';

interface JobPostingData {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  applyUrl?: string;
}

interface NewsArticleData {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function JobPostingSchema({ job }: { job: JobPostingData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: job.company,
      value: job.title,
    },
    datePosted: job.datePosted,
    validThrough: job.validThrough || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: job.employmentType || 'FULL_TIME',
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
    ...(job.salary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'ZAR',
        value: {
          '@type': 'QuantitativeValue',
          minValue: parseInt(job.salary.match(/R(\d+)/)?.[1] || '0'),
          maxValue: parseInt(job.salary.match(/R(\d+).*R(\d+)/)?.[2] || job.salary.match(/R(\d+)/)?.[1] || '0'),
          unitText: 'MONTH',
        },
      },
    }),
    ...(job.applyUrl && {
      applicationContact: {
        '@type': 'ContactPoint',
        url: job.applyUrl,
        applicationProcedure: 'Apply online',
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function NewsArticleSchema({ article }: { article: NewsArticleData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
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
        url: 'https://jobhelper.co.za/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JobHelper.co.za',
    description: 'South Africa\'s #1 Job Market Intelligence - Find government jobs, remote work, learnerships, and career advice.',
    url: 'https://jobhelper.co.za',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jobhelper.co.za/find-jobs?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}