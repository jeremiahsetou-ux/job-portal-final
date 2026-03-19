// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-bold text-blue-600 text-xl">JOBHELPER.co.za</Link>
            <nav className="flex gap-6">
              <Link href="/find-jobs" className="hover:text-blue-600">Find Jobs</Link>
              <Link href="/cv-builder" className="hover:text-blue-600">CV Builder</Link>

              <Link href="/z83-helper" className="hover:text-blue-600">Z83 Guide</Link>
              <Link href="/sign-in" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign In</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-900 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h4 className="font-bold mb-2">JOBHELPER.co.za</h4>
              <p>Helping South Africans find jobs, learnerships, and government vacancies.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Cities</h4>
              <p>Johannesburg</p>
              <p>Cape Town</p>
              <p>Pretoria</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Tools</h4>
              <Link href="/cv-builder" className="block hover:underline">CV Builder</Link>
              <Link href="/z83-helper" className="block hover:underline">Z83 Form</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}