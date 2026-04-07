'use client';

import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  postedAt: string;
  remote?: boolean;
  onClick?: () => void;
}

export function JobCard({ id, title, company, location, postedAt, remote, onClick }: JobCardProps) {
  return (
    <div className="group bg-card border rounded-xl p-5 hover:border-primary hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        {remote && (
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
            Remote
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {postedAt}
        </span>
      </div>

      <Link
        href={`/jobs/${id}`}
        onClick={onClick}
        className="w-full mt-2 border border-primary text-primary font-medium py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
      >
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export interface JobCardCompactProps {
  id: string;
  title: string;
  company: string;
  location: string;
  postedAt: string;
}

export function JobCardCompact({ id, title, company, location, postedAt }: JobCardCompactProps) {
  return (
    <Link
      href={`/jobs/${id}`}
      className="block bg-card border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all"
    >
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{company}</p>
      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {postedAt}
        </span>
      </div>
    </Link>
  );
}