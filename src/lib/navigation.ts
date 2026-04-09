export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const SILOS: NavItem[] = [
  {
    title: "Government Jobs",
    href: "/government-jobs",
  },
  {
    title: "Remote & Gig Jobs",
    href: "/remote-gig-jobs",
  },
  {
    title: "Career Advice",
    href: "/career-advice",
  },
  {
    title: "Learnerships & Internships",
    href: "/learnerships-internships",
  },
  {
    title: "News & Updates",
    href: "/news-updates",
  },
];

export const TOOLS: NavItem = {
  title: "Tools",
  href: "/tools",
  children: [
    {
      title: "CV Builder",
      href: "/tools/cv-builder",
    },
    {
      title: "Z83 Form",
      href: "/tools/z83-form",
    },
  ],
};

export const HEADER_LINKS: (NavItem | NavItem[])[] = [
  ...SILOS,
  TOOLS,
];

export function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}