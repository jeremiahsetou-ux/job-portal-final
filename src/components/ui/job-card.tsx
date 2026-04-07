'use client';

import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type?: string;
  posted: string;
  isRemote?: boolean;
  siteId?: string;
}

export function JobCard({ id, title, company, location, salary, type, posted, isRemote, siteId }: JobCardProps) {
  return (
    <div className="border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        {isRemote && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Remote</span>
        )}
      </div>
      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {posted}
        </span>
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t">
        <span className="font-semibold">{salary}</span>
        <Link
          href={`/jobs/${id}`}
          className="text-primary hover:underline flex items-center gap-1"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

interface JobCardCompactProps extends Omit<JobCardProps, 'salary' | 'type'> {
  href?: string;
}

export function JobCardCompact({ id, title, company, location, posted, href = '/find-jobs' }: JobCardCompactProps) {
  return (
    <Link
      href={`${href}/${id}`}
      className="block bg-card border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{company}</p>
      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {posted}
        </span>
      </div>
    </Link>
  );
}