import React from 'react';
import { MapPin, Clock, Building2, Briefcase, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  posted: string;
  sector?: string;
  isRemote?: boolean;
}

export function JobCard({ title, company, location, salary, type, posted, sector, isRemote }: JobCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold text-sm flex-shrink-0">
            {company.substring(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">{title}</h3>
            <p className="text-slate-500 text-sm">{company}</p>
            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {location}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {posted}
              </span>
            </div>
          </div>
        </div>
        {isRemote && (
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0">
            Remote
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <span className="text-slate-600 font-semibold text-sm">{salary}</span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            sector === 'Government' ? 'bg-green-100 text-green-700' :
            sector === 'JSE' ? 'bg-blue-100 text-blue-700' :
            'bg-slate-100 text-slate-700'
          }`}>
            {sector || type}
          </span>
        </div>
      </div>
      <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
        View Details <ExternalLink size={14} />
      </button>
    </div>
  );
}

interface JobCardCompactProps extends JobCardProps {
  href?: string;
}

export function JobCardCompact({ title, company, location, type, posted, href = '/find-jobs' }: JobCardCompactProps) {
  return (
    <Link href={href} className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 text-sm truncate">{title}</h3>
      <p className="text-slate-500 text-xs mt-1">{company}</p>
      <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <MapPin size={10} /> {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={10} /> {posted}
        </span>
      </div>
    </Link>
  );
}