import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface ThemeWord {
  phrase: string;
  count: number;
}

interface ArticleTemplate {
  name: string;
  title: string;
  headings: string[];
}

const TEMPLATES: ArticleTemplate[] = [
  {
    name: 'Reasons Why',
    title: '10 Reasons Why {keyword} Matters in 2026',
    headings: [
      '1. Career Growth Opportunities',
      '2. Industry Demand and Stability',
      '3. Skill Development Benefits',
      '4. Salary and Compensation Trends',
      '5. Work-Life Balance Considerations',
      '6. Industry Innovations and Trends',
      '7. Networking and Professional Connections',
      '8. Job Security Factors',
      '9. Entry Requirements and Accessibility',
      '10. Future Outlook and Predictions',
    ],
  },
  {
    name: 'Step-by-Step',
    title: 'How to Get Started with {keyword}: A Complete Guide',
    headings: [
      'Understanding the Basics',
      'Step 1: Research and Preparation',
      'Step 2: Identify Your Goals',
      'Step 3: Build Essential Skills',
      'Step 4: Create Your Action Plan',
      'Step 5: Execute and Track Progress',
      'Step 6: Measure Your Results',
      'Common Mistakes to Avoid',
      'Tips for Success',
      'Next Steps',
    ],
  },
  {
    name: 'What You Need to Know',
    title: 'Everything You Need to Know About {keyword}',
    headings: [
      'Introduction',
      'What is {keyword}?',
      'Why It Matters',
      'Key Benefits',
      'Common Challenges',
      'How to Get Started',
      'Best Practices',
      'Industry Examples',
      'Future Trends',
      'Conclusion',
    ],
  },
  {
    name: 'Interview Questions',
    title: 'Top {keyword} Interview Questions and How to Answer Them',
    headings: [
      'Common {keyword} Interview Questions',
      'Question 1: Tell us about your experience',
      'Question 2: What are your strengths?',
      'Question 3: How do you handle challenges?',
      'Question 4: Where do you see yourself in 5 years?',
      'Question 5: Why should we hire you?',
      'Sample Answers and Tips',
      'Questions to Ask the Employer',
      'Final Preparation Tips',
    ],
  },
  {
    name: 'Salary Guide',
    title: '{keyword} Salary Guide: What to Expect in South Africa',
    headings: [
      'Average Salaries by Experience Level',
      'Entry-Level Salaries',
      'Mid-Career Salaries',
      'Senior-Level Salaries',
      'Salary by Province',
      'Johannesburg',
      'Cape Town',
      'Durban',
      'Factors Affecting Salary',
      'Negotiation Tips',
    ],
  },
];

function extractPhrases(text: string): ThemeWord[] {
  const words = text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
  const twoWordPhrases: Record<string, number> = {};
  const threeWordPhrases: Record<string, number> = {};

  for (let i = 0; i < words.length - 1; i++) {
    const twoWord = words[i] + ' ' + words[i + 1];
    twoWordPhrases[twoWord] = (twoWordPhrases[twoWord] || 0) + 1;
  }

  for (let i = 0; i < words.length - 2; i++) {
    const threeWord = words[i] + ' ' + words[i + 1] + ' ' + words[i + 2];
    threeWordPhrases[threeWord] = (threeWordPhrases[threeWord] || 0) + 1;
  }

  const allPhrases: ThemeWord[] = [];
  
  Object.entries(twoWordPhrases).forEach(([phrase, count]) => {
    if (count >= 2 && phrase.length > 8) {
      allPhrases.push({ phrase, count });
    }
  });
  
  Object.entries(threeWordPhrases).forEach(([phrase, count]) => {
    if (count >= 2 && phrase.length > 10) {
      allPhrases.push({ phrase, count });
    }
  });

  return allPhrases.sort((a, b) => b.count - a.count);
}

function generateArticle(
  keyword: string,
  templateIndex: number,
  themeWords: string[]
): string {
  const template = TEMPLATES[templateIndex];
  const title = template.title.replace(/{keyword}/g, keyword);
  
  let markdown = `# ${title}\n\n`;
  markdown += `**Target Keyword:** ${keyword}\n`;
  markdown += `**Theme Words:** ${themeWords.join(', ')}\n`;
  markdown += `**Template:** ${template.name}\n`;
  markdown += `**Date:** ${new Date().toISOString().split('T')[0]}\n\n`;
  
  markdown += `## Introduction\n\n`;
  markdown += `[Write your introduction here - 2-3 paragraphs about ${keyword}]\n\n`;

  template.headings.forEach((heading) => {
    const processedHeading = heading.replace(/{keyword}/g, keyword);
    markdown += `## ${processedHeading}\n\n`;
    markdown += `[Write content for this section]\n\n`;
  });

  markdown += `## Conclusion\n\n`;
  markdown += `[Write your conclusion here - summarize key points and include a call to action]\n\n`;

  markdown += `---\n\n`;
  markdown += `## Meta Information\n\n`;
  markdown += `- **Word Count Target:** 1500-2000 words\n`;
  markdown += `- **Primary Keyword:** ${keyword}\n`;
  markdown += `- **Secondary Keywords:** ${themeWords.slice(0, 5).join(', ')}\n`;
  markdown += `- **Suggested Read Time:** 7-10 minutes\n`;

  return markdown;
}

function runCLI() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║         JobHelper Theme Article Generator               ║
╚══════════════════════════════════════════════════════════╝

Usage: npx ts-node scripts/theme-article-generator.ts [options]

Options:
  --keyword <text>      Main keyword (e.g., "general worker duties")
  --template <number>   Template number (1-5, see below)
  --words <text>        Comma-separated theme words
  --input <file>        Read keywords from a file (one per line)
  --output <file>       Output file path (default: articles/<keyword>.md)

Templates:
  1. Reasons Why      - "10 Reasons Why {keyword} Matters"
  2. Step-by-Step    - "How to Get Started with {keyword}"
  3. What You Need   - "Everything About {keyword}"
  4. Interview Qs   - "Top {keyword} Interview Questions"
  5. Salary Guide   - "{keyword} Salary Guide SA"

Examples:
  npx ts-node scripts/theme-article-generator.ts --keyword "general worker" --template 1
  npx ts-node scripts/theme-article-generator.ts --keyword "teaching jobs" --words "education,school,learn" --output my-article.md
`);
    return;
  }

  let keyword = '';
  let templateIndex = 0;
  let themeWords: string[] = [];
  let outputPath = '';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--keyword' && args[i + 1]) {
      keyword = args[i + 1];
      i++;
    } else if (arg === '--template' && args[i + 1]) {
      const num = parseInt(args[i + 1]);
      if (num >= 1 && num <= 5) {
        templateIndex = num - 1;
      }
      i++;
    } else if (arg === '--words' && args[i + 1]) {
      themeWords = args[i + 1].split(',').map(w => w.trim());
      i++;
    } else if (arg === '--output' && args[i + 1]) {
      outputPath = args[i + 1];
      i++;
    } else if (arg === '--input' && args[i + 1]) {
      try {
        const content = readFileSync(args[i + 1], 'utf-8');
        const lines = content.split('\n').filter(line => line.trim());
        console.log(`\nFound ${lines.length} keywords in file:\n`);
        lines.forEach((kw, idx) => {
          console.log(`  ${idx + 1}. ${kw}`);
        });
        console.log('\nUse --keyword to specify which one to generate.');
      } catch (e) {
        console.error('Error reading input file:', e);
      }
      i++;
    }
  }

  if (!keyword) {
    console.error('Error: Please provide a keyword using --keyword');
    process.exit(1);
  }

  if (themeWords.length === 0) {
    console.log('\nNo theme words provided. You can add them manually in the output.');
  }

  const markdown = generateArticle(keyword, templateIndex, themeWords);
  
  if (!outputPath) {
    const slug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    outputPath = `articles/${slug}.md`;
  }

  const outputDir = join(process.cwd(), outputPath).split('/').slice(0, -1).join('/');
  
  try {
    writeFileSync(join(process.cwd(), outputPath), markdown);
    console.log(`\n✅ Article generated: ${outputPath}`);
  } catch (e) {
    console.log('\n📄 Generated Article:\n');
    console.log(markdown);
    console.log('\n(Output file write failed, see above)');
  }

  console.log('\n📋 Available Templates:');
  TEMPLATES.forEach((t, idx) => {
    console.log(`  ${idx + 1}. ${t.name} - ${t.title.replace('{keyword}', keyword)}`);
  });

  console.log('\n✨ Done! Edit the markdown file to add your content.');
}

runCLI();