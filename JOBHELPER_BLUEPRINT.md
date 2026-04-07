# 🚀 JOBHELPER.CO.ZA — The Complete AI‑Powered Blueprint

## 📌 Status
- ✅ Domain: `jobhelper.co.za` (live)
- ✅ Git repository (GitHub)
- ✅ Vercel deployment (auto‑deploys from `main` branch)
- 🚧 Next.js app scaffold ready (we build from here)

---

## 🎯 Core Strategy (From Tom Dupuis' $150k/Year Model)

> *"Solve one specific pain point better than anyone else. Recommend one high‑ticket solution. Recurring commissions win."*

Tom made $150k/year promoting **WordPress hosting** (high‑ticket, recurring).  
For job seekers, we replace hosting with **job search tools** that have recurring or high‑value commissions:

| Pain Point | Affiliate Solution | Commission |
|------------|--------------------|------------|
| "My CV gets rejected" | JobWinner AI (resume builder) | 30% recurring lifetime |
| "I need skills" | Coursera / GetSmarter | 45% / 10% |
| "I fear scams" | NordVPN | 100% + 30% recurring |
| "I need a portfolio website" | Namecheap (domain + hosting) | 20‑35% |
| "Where are the legit remote jobs?" | FlexJobs | ~$12 per sale |

**Our promise:** Every article, tool, and newsletter helps South Africans get hired — and we earn when they succeed.

---

## 🧠 Architecture: 11 Sites, One Next.js Codebase

We run **1 main hub + 10 satellite sites** using Next.js **multi‑tenant middleware** (single deployment, 11 domains/subdomains).

| Site | Focus |
|------|-------|
| `jobhelper.co.za` | Daily job news, market trends, affiliate HQ |
| `remote.jobhelper.co.za` | Remote & WFH jobs in SA |
| `matric.jobhelper.co.za` | No‑matric jobs & learnerships |
| `cv.jobhelper.co.za` | AI CV builders, templates, Z83 help |
| `z83.jobhelper.co.za` | Government jobs, Z83 guide |
| `jse.jobhelper.co.za` | JSE company careers & grad programmes |
| `freelance.jobhelper.co.za` | Gig economy, Upwork, Fiverr |
| `learn.jobhelper.co.za` | Online courses, certs, skills |
| `interview.jobhelper.co.za` | Interview prep, salary negotiation |
| `careerchange.jobhelper.co.za` | Mid‑career switches, retrenchment |
| `portfolios.jobhelper.co.za` | Build a personal website / portfolio |

**All 11 sites** will be submitted to Google News individually via Publisher Center.

---

## 🛠️ Development with Kilo (VS Code)

We use **Kilo Code** (open‑source AI agent) inside VS Code to generate, debug, and deploy.

### Kilo Setup
1. Install "Kilo Code" from VS Code Marketplace.
2. Choose a model: **Gemini 2.5 Pro**, **Claude 4 Sonnet**, or **GPT-5**.
3. Open your project folder (where `jobhelper.co.za` lives).

### Your First Kilo Prompt (Full App)
Paste this into Kilo's chat panel:

> *"I am building jobhelper.co.za – a Next.js 15 (App Router) job portal for South Africa. Already have Git + Vercel. Generate the full app with:*
> - *TypeScript + Tailwind CSS*
> - *NextAuth.js (email/password + Google sign‑in)*
> - *PostgreSQL + Prisma (Job model: title, company, location, description, applyUrl, createdAt)*
> - *Public job listing page with search/filter (title, location, category)*
> - *Admin dashboard at /admin (protected) to add/edit/delete jobs*
> - *Individual job page with `JobPosting` JSON‑LD schema*
> - *Simple news section (title, content, date) with `NewsArticle` schema*
> - *Responsive header/footer, Tailwind styling*
> - *Deployment ready for Vercel (no build errors)"*

This will generate the entire foundation in minutes.

---

## 🎨 UI Component Prompts (Use with Vercel v0 or Kilo)

You can ask Kilo (or copy/paste into v0) to generate specific UI pieces:

### 1. Job Search & Filter Bar
> *"Create a responsive job search component with Tailwind CSS. Include: text input for title, select dropdown for location (Cape Town, JHB, Durban, Remote), select for category (IT, Finance, Retail, Government), and a 'Search' button. On submit, it updates the URL query parameters and fetches new results via API."*

### 2. Job Card (Listing Page)
> *"Design a job card component showing: job title, company name, location (with remote badge), posted date, and a 'View Details' button. Use a clean, modern card with hover effect. Mobile‑first."*

### 3. Admin Job Form
> *"Generate a form for an admin to add/edit a job. Fields: title (text), company (text), location (text), category (select), description (rich text editor), applyUrl (url). Use React Hook Form + Zod validation. Submit to `/api/admin/jobs`."*

### 4. News Article Card (Google News Ready)
> *"Create a news card for job market updates. Display: headline, publication date (ISO format), author name, and a 2‑line excerpt. Include a 'Read more' link. Ensure the card has semantic HTML and a `<time>` tag with datetime attribute."*

### 5. Affiliate Product Recommendation Box
> *"Build a callout box for affiliate products. Example: 'Struggling with your CV? Try JobWinner AI – 30% recurring commission for us. Show product name, description, rating (stars), and a button 'Get Started'. Add `rel='sponsored nofollow'` to the link."*

---

## 🗞️ Google News Integration (Automatic – No Application)

Since 2024, Google News is **fully automated**. We must meet these requirements:

| Requirement | How We Implement |
|-------------|------------------|
| `NewsArticle` schema | JSON‑LD injected in every news post |
| News sitemap | Custom API route: `/api/news-sitemap.xml` (returns last 1000 articles with `<news:news>` tags) |
| Clear publication date | Visible between headline and text + `<time datetime>` |
| Author bio | Each author has a page with bio, photo, and email |
| HTTPS + fast LCP | Vercel + Next.js guarantees this |
| No thin affiliate content | Every news article has 500+ original words |

### Kilo Prompt for News Sitemap
> *"Create a dynamic XML sitemap for Google News at `app/news-sitemap.xml/route.ts`. It should fetch the 1000 most recent news articles from my Prisma `Post` model (fields: slug, title, publishedAt, categories). Output proper XML with `<urlset xmlns:news="http://www.google.com/schemas/sitemap-news/0.84">`."*

### Submit to Google
1. After deployment, go to **Google Search Console**.
2. Add each property (e.g., `remote.jobhelper.co.za`).
3. Submit `sitemap.xml` and `news-sitemap.xml`.
4. Go to **Google Publisher Center** → Add publication (for each site) – this helps Google understand your brand.

---

## 💰 Monetisation Blueprint ($150k/Year Goal)

| Revenue Stream | Products | Commission | Monthly Target (Scale) |
|----------------|----------|------------|------------------------|
| **Affiliate (recurring)** | JobWinner, NordVPN, VisualCV | 30‑100% + recurring | $3k – $6k |
| **Affiliate (one‑time)** | Coursera, GetSmarter, FlexJobs | 10‑45% | $1.5k – $3k |
| **Programmatic Ads** | AdSense / Mediavine | CPM based | $1k – $4k |
| **Premium Job Alerts** | WhatsApp/Email daily curated jobs | R49/user/month | $500 – $2k |
| **Sponsored Posts** | Recruitment agencies | Flat fee | $500 – $2k |

**Year‑2 realistic total:** $72k – $180k  
**Stretch (Year 3):** $250k+

---

## 🤖 AI Tools to Accelerate (Beyond Kilo)

| Tool | Use |
|------|-----|
| **Bolt.new** | Generate full‑stack Next.js app from prompt (alternative to Kilo) |
| **Vercel v0** | UI components (paste the prompts above) |
| **Lovable** | Clone existing websites into React |
| **Zeitpub / Auto Writer** | Auto‑generate Google News optimised articles |
| **AI Schema Markup Generator** | Bulk generate JSON‑LD for all job listings |

---

## 📅 7‑Day Launch Plan (With Kilo)

### Day 1 – Core App
- Run the full‑app Kilo prompt.
- Set up Prisma + PostgreSQL (Supabase free tier).
- Deploy to Vercel – ensure `jobhelper.co.za` works.

### Day 2 – Admin & Job CRUD
- Generate admin dashboard (Kilo prompt: *"Create admin panel with job list, edit, delete, and add form"*).
- Protect routes with NextAuth.js.

### Day 3 – UI Components
- Use v0 or Kilo to build: job search bar, job cards, news cards, affiliate boxes.
- Integrate into pages.

### Day 4 – Google News Setup
- Generate `NewsArticle` schema on news posts.
- Create `/api/news-sitemap.xml`.
- Submit to Google Search Console + Publisher Center.

### Day 5 – Affiliate Integration
- Add cloaked affiliate links (use **ThirstyAffiliates** style – or custom Node.js middleware).
- Write 5 cornerstone articles (each 1000+ words) recommending 1 product naturally.
- Ensure all links have `rel="sponsored nofollow"`.

### Day 6 – Launch First 3 Satellites
- Use multi‑tenant middleware to add `remote.jobhelper.co.za`, `cv.jobhelper.co.za`, `z83.jobhelper.co.za`.
- Copy content templates.
- Submit each to Google News.

### Day 7 – Testing & Go Live
- Test all forms, search, affiliate links.
- Set up Google Analytics (or Plausible).
- Announce on social media / LinkedIn.

---

## 🧪 Sample Prompts for Satellites (Kilo / Bolt)

### For `cv.jobhelper.co.za`
> *"Create a Next.js site under subdomain `cv.jobhelper.co.za`. Focus on CV building. Include: blog with `NewsArticle` schema, product reviews of AI resume builders (JobWinner, VisualCV), affiliate links with `sponsored`, and a 'Create CV' tool that redirects to our affiliate partner. Use the same Tailwind theme as main site."*

### For `remote.jobhelper.co.za`
> *"Build a remote job board for South Africans. Scrape (or manually add) remote jobs from trusted companies. Each job post has `JobPosting` schema. Add a newsletter signup for 'Remote jobs weekly' (ConvertKit). Promote NordVPN affiliate banner – 'Secure your remote job search'."*

---

## 📊 Success Metrics (Monthly Review)

| Metric | Target (Month 6) |
|--------|------------------|
| Total pageviews (all sites) | 200k |
| Google News clicks | 20k |
| Affiliate conversions | 500 |
| Premium job alert subscribers | 300 |
| Sponsored posts sold | 2 |
| Revenue | $5k+ |

---

## ⚠️ Risks & How Kilo Helps Mitigate

| Risk | Mitigation (via Kilo) |
|------|-----------------------|
| Google News rejects site | Generate more original content (use AI writer with human editing). Resubmit after 3 months. |
| Affiliate links look spammy | Kilo can add `sponsored` and `nofollow` automatically. Enforce 500+ words per article. |
| Low traffic to 11 sites | Focus Kilo's efforts on **one satellite** until it reaches 10k visits/month, then clone. |
| AdSense PIN never arrives (SA post) | Skip AdSense; use Mediavine/Ezoic or double down on affiliate + premium alerts. |

---

## 🚀 Next Immediate Steps (Today)

1. **Open VS Code** with your `jobhelper.co.za` folder.
2. **Open Kilo Code** chat panel.
3. **Paste the "First Kilo Prompt"** (full app generation).
4. **Run `npm run dev`** – see your app locally.
5. **Push to Git** → Vercel auto‑deploys.
6. **Celebrate** – your new jobhelper.co.za is alive.

---

## 🌟 Final Words

You have:
- ✅ A live domain + Vercel + Git
- ✅ A proven $150k affiliate strategy (Tom Dupuis)
- ✅ An AI agent (Kilo) inside VS Code
- ✅ A complete blueprint with prompts

**There is nothing stopping you from building this today.**

Let's get South Africans hired — and earn while doing it.

— The JobHelper Team  
`#BuiltWithKilo` `#NextJS` `#GoogleNews` `#ZAJobs`