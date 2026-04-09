// Job types
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  category?: string;
  description?: string;
  applyUrl?: string;
  remote?: boolean;
  createdAt: string;
  postedAt?: string;
  status?: string;
}

// News/Article types
export interface NewsPost {
  id: string;
  title: string;
  headline?: string;
  slug: string;
  excerpt?: string;
  content?: string;
  imageUrl?: string;
  author: string;
  categoryId?: string;
  published?: boolean;
  publishedAt?: string;
  date?: string;
}

// Category types
export interface Category {
  id: string;
  name: string;
  slug: string;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'user';
}

// Form types
export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}