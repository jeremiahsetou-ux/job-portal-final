'use client';

import { Search, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  siteId?: string;
}

export function SearchBar({ siteId }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (location) params.set('l', location);
    if (category) params.set('category', category);
    router.push(`/find-jobs?${params.toString()}`);
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-2 flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Job title, keywords or company"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
        <MapPin className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="City or Province"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="flex-1 px-4 border rounded-lg bg-transparent outline-none"
      >
        <option value="">All Categories</option>
        <option value="IT">IT & Tech</option>
        <option value="Finance">Finance</option>
        <option value="Retail">Retail</option>
        <option value="Government">Government</option>
        <option value="Engineering">Engineering</option>
        <option value="Healthcare">Healthcare</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary/90"
      >
        Search
      </button>
    </div>
  );
}