'use client';

import { User, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface NewsCardProps {
  id: string;
  headline: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl?: string;
}

export function NewsCard({ id, headline, date, author, excerpt, imageUrl }: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageSrc = imageUrl || `https://images.unsplash.com/photo-1567014302777-0a1292e51c0c?w=600&h=400&fit=crop`;

  return (
    <Link
      href={`/news/${id}`}
      className="group bg-card border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {headline}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {author}
          </span>
          <time dateTime={date} className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formattedDate}
          </time>
        </div>

        <div className="mt-4 pt-3 border-t flex items-center gap-2 text-sm text-primary font-medium">
          Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export interface NewsCardCompactProps {
  id: string;
  headline: string;
  date: string;
}

export function NewsCardCompact({ id, headline, date }: NewsCardCompactProps) {
  return (
    <Link
      href={`/news/${id}`}
      className="block py-3 border-b last:border-b-0 hover:bg-muted/50 transition-colors"
    >
      <h4 className="font-medium text-sm mb-1">{headline}</h4>
      <time dateTime={date} className="text-xs text-muted-foreground">
        {new Date(date).toLocaleDateString()}
      </time>
    </Link>
  );
}