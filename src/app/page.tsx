import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">

      <h1 className="text-4xl md:text-6xl font-black mb-6 text-center">
        Find Your Next Job in <span className="text-blue-600 italic">South Africa</span>
      </h1>
      <p className="text-center text-slate-600 mb-12">
        Jobs, Learnerships, and Government Vacancies from top employers.
      </p>

      {/* Search */}
      <div className="max-w-2xl mx-auto flex gap-2 mb-12">
        <input type="text" placeholder="Job title..." className="flex-1 border rounded px-4 py-2"/>
        <input type="text" placeholder="City..." className="flex-1 border rounded px-4 py-2"/>
        <button className="bg-blue-600 text-white px-6 rounded font-bold">Search</button>
      </div>

      {/* Latest Jobs */}
      <h2 className="text-2xl font-bold mb-4">Latest Jobs in South Africa</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border p-4 rounded">Cashier - Shoprite<br/><Link href="#" className="text-blue-600">View Job →</Link></div>
        <div className="border p-4 rounded">Admin Clerk - Government<br/><Link href="#" className="text-blue-600">View Job →</Link></div>
        <div className="border p-4 rounded">General Worker - Transnet<br/><Link href="#" className="text-blue-600">View Job →</Link></div>
      </div>

      {/* Browse Categories */}
      <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link href="#" className="border p-6 rounded hover:shadow">Learnerships</Link>
        <Link href="#" className="border p-6 rounded hover:shadow">Government Jobs</Link>
        <Link href="/cv-builder" className="border p-6 rounded hover:shadow">Free CV Builder</Link>
      </div>

    </div>
  );
}