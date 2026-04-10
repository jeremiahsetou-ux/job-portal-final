# JobHelper - South African Job Portal

A Next.js job portal website with SEO optimization, route groups, and Sanity CMS integration.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **CMS:** Sanity (headless)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"

# Database (if using)
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="your-secret"
```

## Deployment to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Add environment variables in project settings:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set to your Vercel URL)
5. Click Deploy

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (advice)/          # Career advice route group
│   ├── (government)/       # Government jobs route group
│   ├── (learnerships)/      # Learnerships route group
│   ├── (news)/             # News route group
│   ├── (remote)/           # Remote jobs route group
│   ├── api/                # API routes
│   └── jobs/[slug]/        # Job detail pages
├── components/             # React components
├── lib/                   # Utilities, Sanity client
│   └── sanity/            # Sanity queries
└── types/                 # TypeScript types

sanity/
├── schemas/               # Sanity schema definitions
└── sanity.config.ts      # Sanity configuration

scripts/
└── theme-article-generator.ts  # Article generation tool
```

## Scripts

```bash
# Generate themed article
npx ts-node scripts/theme-article-generator.ts --keyword "teaching jobs" --template 1

# Build for production
npm run build

# Lint
npm run lint
```