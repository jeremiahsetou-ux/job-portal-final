'use client';

import { Star, ExternalLink } from 'lucide-react';

export interface AffiliateBoxProps {
  name: string;
  rating: number;
  description: string;
  url: string;
}

export function AffiliateBox({ name, rating, description, url }: AffiliateBoxProps) {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-0.5 text-yellow-500 shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? 'currentColor' : 'none'}
              className={i < rating ? 'text-yellow-500' : 'text-muted-foreground/30'}
            />
          ))}
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="sponsored nofollow"
        className="mt-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
      >
        Get Started <ExternalLink size={14} />
      </a>
    </div>
  );
}

export interface AffiliateGridProps {
  items: AffiliateBoxProps[];
}

export function AffiliateGrid({ items }: AffiliateGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <AffiliateBox key={idx} {...item} />
      ))}
    </div>
  );
}