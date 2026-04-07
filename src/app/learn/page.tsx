'use client';

import { ArrowLeft, GraduationCap, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const COURSES = [
  { name: 'Project Management Professional', provider: 'GetSmarter', price: 'R12,500' },
  { name: 'Data Science Bootcamp', provider: 'Coursera', price: 'R8,900' },
  { name: 'Digital Marketing', provider: 'GetSmarter', price: 'R9,800' },
  { name: 'Python Programming', provider: 'Coursera', price: 'Free' },
  { name: 'UX Design Fundamentals', provider: 'GetSmarter', price: 'R11,200' },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Skills & Courses</h1>
          <p className="text-primary-foreground/80 mt-2">Upgrade your skills with online courses</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Recommended Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSES.map((course, idx) => (
            <div key={idx} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">{course.name}</h3>
              <p className="text-sm text-muted-foreground">{course.provider}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <span className="font-semibold">{course.price}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}