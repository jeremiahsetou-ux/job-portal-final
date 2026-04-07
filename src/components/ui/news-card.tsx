import Link from 'next/link';
import { ArrowRight, User, Clock } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt?: string;
  author?: string;
  publishedAt: string;
  slug: string;
}

export function NewsCard({ id, title, excerpt, author, publishedAt, slug }: NewsCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
      <Link href={`/news/${slug}`}>
        <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
          {title}
        </h3>
      </Link>
      {excerpt && (
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{excerpt}</p>
      )}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        {author && (
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {author}
          </span>
        )}
        <time dateTime={publishedAt} className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formattedDate}
        </time>
      </div>
      <Link
        href={`/news/${slug}`}
        className="text-primary hover:underline flex items-center gap-1 mt-3 text-sm font-medium"
      >
        Read more <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}

interface NewsCardCompactProps {
  title: string;
  publishedAt: string;
  slug: string;
}

export function NewsCardCompact({ title, publishedAt, slug }: NewsCardCompactProps) {
  return (
    <Link href={`/news/${slug}`} className="block py-2">
      <h4 className="font-medium text-sm hover:text-primary">{title}</h4>
      <time dateTime={publishedAt} className="text-xs text-muted-foreground">
        {new Date(publishedAt).toLocaleDateString()}
      </time>
    </Link>
  );
}