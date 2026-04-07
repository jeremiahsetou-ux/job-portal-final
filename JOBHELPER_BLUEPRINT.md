# 🚀 JOBHELPER.CO.ZA — Multi‑Tenant AI Masterplan (Hybrid Global + Local)

## 📌 Status & Stack
- **Domain:** `jobhelper.co.za` (Main Hub) – live on Vercel + Git
- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **Database:** PostgreSQL (Supabase) + Prisma ORM
- **Deployment:** Vercel (wildcard subdomain support: `*.jobhelper.co.za`)
- **AI Agent:** Kilo Code (VS Code)

---

## 🎯 Hybrid Strategy: Global High‑Ticket + Local SA Trust‑Builders

We combine **global affiliate commissions** (Tom Dupuis model) with **high‑volume South African local traffic**.

### 1. Global High‑Ticket Affiliates
| Pain Point | Affiliate Solution | Commission |
|------------|--------------------|------------|
| CV rejection | JobWinner AI / VisualCV | 30% recurring |
| Skill gaps | Coursera / GetSmarter | 10–45% |
| Privacy / scams | NordVPN | 100% + 30% recurring |
| Remote tools | FlexJobs / Fiverr | CPA (flat fee) |

### 2. Local "Trust‑Builders" (SA Specific)
- **Z83 AI Form Generator** – interactive PDF filler that matches official government layout
- **JSE Company Directory** – direct links to career portals (Sasol, Standard Bank, Shoprite, etc.)
- **Matric‑only Hub** – verified learnerships & internships for youth market

---

## 🧠 Architecture: 11 Sites, One Codebase

Multi‑tenant middleware serves 11 "sites" from a single Vercel deployment.

| Subdomain | Focus | Key Anchor |
|-----------|-------|-------------|
| `jobhelper.co.za` | The Hub | Daily news & affiliate HQ |
| `z83.jobhelper.co.za` | Government | Z83 AI PDF generator |
| `remote.jobhelper.co.za` | WFH | International/remote for SA |
| `jse.jobhelper.co.za` | Corporate | JSE grad programmes |
| `matric.jobhelper.co.za` | Entry level | Learnerships & internships |
| `cv.jobhelper.co.za` | Career tools | AI resume builder reviews |
| `learn.jobhelper.co.za` | Skills | Coursera/GetSmarter courses |
| `interview.jobhelper.co.za` | Prep | Salary guides & mock interviews |
| `freelance.jobhelper.co.za` | Gig work | Upwork/Fiverr guides |
| `careerchange.jobhelper.co.za` | Switching | Retrenchment & mid‑career help |
| `portfolios.jobhelper.co.za` | Personal sites | Namecheap/hosting affiliates |

---

## 🛠️ The Ultimate Kilo Prompt (Full Engine)

**Instructions:** Open Kilo Code in VS Code, paste this prompt to generate the entire foundation.

> *“I am building jobhelper.co.za using Next.js 15 (App Router). This is a multi‑tenant application serving 11 subdomains from one codebase. Generate the foundation with:*
>
> * **Tech:** TypeScript, Tailwind CSS, Shadcn UI, Lucide‑react.
> * **Auth:** NextAuth.js (Google + Email) with role‑based access (Admin/User).
> * **Database:** Prisma + PostgreSQL. **CRITICAL:** Include a `siteId` (String) field in `Job`, `Post`, and `Category` models to partition data per subdomain.
> * **Middleware:** Implement a `middleware.ts` that detects the subdomain and rewrites to `app/sites/[siteId]/`.
> * **Admin Dashboard:** A single `/admin` route with a **Site Selector dropdown** to manage content for any satellite.
> * **SEO:** Dynamic JSON‑LD (`JobPosting` / `NewsArticle`) based on the active site.
> * **Layouts:** A base Shadcn UI layout consistent across all sites but allowing site‑specific branding.”*

---

## 🎨 UI Component Prompts (Use with Vercel v0 or Kilo)

### 1. Z83 AI Tool (Viral Entry Point)
> *“Create a multi‑step Shadcn UI form for a Z83 application. Include fields: Personal Details, Education, Experience. Add a ‘Generate PDF’ button that triggers client‑side PDF generation using `jspdf` to match the official SA Z83 layout.”*

### 2. Job Card with Local Context
> *“Design a responsive job card showing: Job Title, Company, Location (with a ‘Remote’ badge option), and ‘Sector’ (e.g., Government, JSE, Private). Add a ‘View Details’ button. Use clean border/shadow hover effect.”*

### 3. Affiliate Callout Box
> *“Build a ‘Recommended Tool’ box with title, 5‑star rating, 2‑sentence description, and a ‘Get Started’ button. Ensure the link includes `rel=‘sponsored nofollow’` and is styled as a primary CTA.”*

### 4. Admin Site Selector (for Dashboard)
> *“Create a dropdown component for the admin panel that lists all 11 subdomains. When a site is selected, all subsequent API calls (jobs, posts, categories) are filtered by that `siteId`.”*

---

## 🗞️ Google News Integration (Automated)

- **`NewsArticle` schema:** JSON‑LD injected automatically into every blog post.
- **Dynamic News Sitemap:** API route at `/api/news-sitemap.xml` returning last 1000 articles.
- **Transparency:** Every article must have a clear author bio and publication date.

**Submission:** After deployment, add each subdomain to Google Search Console and Google Publisher Center.

---

## 💰 Monetisation Blueprint ($150k/Year Goal)

| Stream | Product / Tool | Monthly Target |
|--------|----------------|----------------|
| Affiliate (recurring) | JobWinner, NordVPN, SaaS tools | $4,000 |
| Affiliate (one‑time) | Coursera, GetSmarter, FlexJobs | $2,000 |
| Programmatic ads | Ezoic / Mediavine | $3,000 |
| Premium leads | WhatsApp Job Alerts (R49/mo) | $1,500 |
| Micro‑fees | Professional Z83 formatting (R20) | $500 |
| **Total (scale)** | | **$11,000+** |

---

## 📅 7‑Day "Lekker" Launch Plan

| Day | Focus | Action |
|-----|-------|--------|
| **1** | The Engine | Run the Ultimate Kilo Prompt. Connect Supabase + Prisma. |
| **2** | Command Centre | Build Admin Dashboard with Site Switcher. |
| **3** | Z83 Magnet | Build the Z83 multi‑step PDF tool – viral entry point. |
| **4** | JSE Index | Seed 50 links to JSE career portals using the Job model. |
| **5** | Content | Write 3 cornerstone articles for remote, matric, and z83 satellites. |
| **6** | Indexing | Add all subdomains to Google Search Console + Publisher Center. |
| **7** | Launch | Go live on LinkedIn/Facebook. Start WhatsApp alert list. |

---

## ⚠️ Critical Technical Guardrails

- **Wildcard Domains:** In Vercel, add `*.jobhelper.co.za` to the domains list.
- **Environment Variables:** Store `DATABASE_URL`, `NEXTAUTH_SECRET`, etc., securely in Vercel.
- **Compliance:** All affiliate links must use `rel="sponsored nofollow"`.
- **Site‑Aware Queries:** Always filter by `siteId` when fetching data for a subdomain.

---

## 🚀 Final Advice

**Focus on the Z83 satellite first.**  
It solves a high‑friction problem in South Africa and will generate the "trust signals" Google needs to rank all your other sites.

Open Kilo, paste the Ultimate Prompt, and let’s get South Africans hired.

— The JobHelper Team  
`#MultiTenant` `#NextJS` `#GoogleNews` `#ZAJobs`
