'use client';

import Link from 'next/link';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface JobListingProps {
  title: string;
  company: string;
  location: string;
  postedDate: string;
  salary?: string;
  applyUrl?: string;
  category?: string;
}

export function JobListing({
  title,
  company,
  location,
  postedDate,
  salary,
  applyUrl,
  category,
}: JobListingProps) {
  const jobSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex-1">
          {category && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded mb-3">
              {category}
            </span>
          )}
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
          
          <p className="text-muted-foreground mb-3">{company}</p>
          
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {postedDate}
            </span>
          </div>

          {salary && (
            <div className="flex items-center gap-1 text-sm text-green-600 font-medium mb-4">
              <DollarSign className="w-4 h-4" />
              {salary}
            </div>
          )}
        </div>

        <Link
          href={`/jobs/${jobSlug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-auto"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}