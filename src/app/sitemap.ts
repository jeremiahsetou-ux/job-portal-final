import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jobhelper.co.za";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/accessibility",
    "/social-media-policy",
    "/paia-manual",
    "/editorial-guidelines",
    "/corrections-log",
    "/find-jobs",
    "/news",
    "/cv-builder",
    "/z83-form",
    "/government-jobs",
    "/remote-work",
    "/career-advice",
    "/salary-trends",
    "/z83-tools",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}