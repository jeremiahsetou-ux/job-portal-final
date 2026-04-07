'use client';

import { Search, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (filters: { title: string; location: string; category: string }) => void;
}

const LOCATIONS = [
  'Johannesburg',
  'Cape Town',
  'Durban',
  'Pretoria',
  'Port Elizabeth',
  'Bloemfontein',
  'Remote',
];

const CATEGORIES = [
  'IT & Technology',
  'Finance & Banking',
  'Retail & Sales',
  'Government',
  'Engineering',
  'Healthcare',
  'Marketing',
  'Admin & Office',
];

export function SearchBar({ onSearch }: SearchBarProps) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ title, location, category });
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-2 flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Job title, keywords or company"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 bg-transparent outline-none min-w-0"
        />
      </div>

      <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
        <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 bg-transparent outline-none min-w-0"
        >
          <option value="">All Locations</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="flex-1 flex items-center gap-3 px-4 border rounded-lg">
        <Briefcase className="w-5 h-5 text-muted-foreground shrink-0" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 bg-transparent outline-none min-w-0"
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="bg-primary text-primary-foreground font-medium px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Search Jobs
      </button>
    </div>
  );
}