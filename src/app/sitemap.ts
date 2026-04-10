import { MetadataRoute } from "next";

const baseUrl = "https://jobhelper.co.za";

const STATIC_PAGES = [
  { path: "", changefreq: "daily" as const, priority: 1 },
  { path: "/about", changefreq: "weekly" as const, priority: 0.8 },
  { path: "/contact", changefreq: "weekly" as const, priority: 0.7 },
  { path: "/privacy-policy", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/terms", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/cookie-policy", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/accessibility", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/social-media-policy", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/paia-manual", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/editorial-guidelines", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/corrections-log", changefreq: "monthly" as const, priority: 0.6 },
  { path: "/find-jobs", changefreq: "daily" as const, priority: 0.9 },
  { path: "/cv-builder", changefreq: "weekly" as const, priority: 0.8 },
  { path: "/tools/z83-form", changefreq: "weekly" as const, priority: 0.8 },
];

const SILO_PAGES = [
  { path: "/government-jobs", changefreq: "daily" as const, priority: 0.9 },
  { path: "/remote-gig-jobs", changefreq: "daily" as const, priority: 0.9 },
  { path: "/career-advice", changefreq: "daily" as const, priority: 0.9 },
  { path: "/learnerships-internships", changefreq: "daily" as const, priority: 0.9 },
  { path: "/news-updates", changefreq: "daily" as const, priority: 0.9 },
];

interface Job {
  slug: string;
  postedDate: string;
}

interface Article {
  slug: string;
  publishDate: string;
}

async function fetchJobs(): Promise<Job[]> {
  try {
    const res = await fetch(`${baseUrl}/api/jobs?limit=100`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.jobs || [];
  } catch (error) {
    console.error("Failed to fetch jobs for sitemap:", error);
    return [];
  }
}

async function fetchArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${baseUrl}/api/articles?limit=100`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("Failed to fetch articles for sitemap:", error);
    return [];
  }
}

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const page of STATIC_PAGES) {
    sitemapEntries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changefreq,
      priority: page.priority,
    });
  }

  for (const silo of SILO_PAGES) {
    sitemapEntries.push({
      url: `${baseUrl}${silo.path}`,
      lastModified: now,
      changeFrequency: silo.changefreq,
      priority: silo.priority,
    });
  }

  const jobs = await fetchJobs();
  for (const job of jobs) {
    sitemapEntries.push({
      url: `${baseUrl}/jobs/${job.slug}`,
      lastModified: new Date(job.postedDate || now.toISOString()),
      changeFrequency: "daily" as const,
      priority: 0.8,
    });
  }

  const articles = await fetchArticles();
  for (const article of articles) {
    sitemapEntries.push({
      url: `${baseUrl}/career-advice/${article.slug}`,
      lastModified: new Date(article.publishDate || now.toISOString()),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    });
  }

  return sitemapEntries;
}