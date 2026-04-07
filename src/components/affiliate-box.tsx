import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface AffiliateBoxProps {
  title: string;
  description: string;
  rating?: number;
  affiliateLink: string;
  ctaText?: string;
}

export function AffiliateBox({ 
  title, 
  description, 
  rating = 5, 
  affiliateLink,
  ctaText = 'Get Started'
}: AffiliateBoxProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < rating ? 'currentColor' : 'none'} 
              className={i < rating ? 'text-yellow-500' : 'text-slate-300'}
            />
          ))}
        </div>
      </div>
      <Link
        href={affiliateLink}
        target="_blank"
        rel="sponsored nofollow"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
      >
        {ctaText} <ExternalLink size={14} />
      </Link>
    </div>
  );
}

interface AffiliateGridProps {
  items: AffiliateBoxProps[];
}

export function AffiliateGrid({ items }: AffiliateGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <AffiliateBox key={idx} {...item} />
      ))}
    </div>
  );
}