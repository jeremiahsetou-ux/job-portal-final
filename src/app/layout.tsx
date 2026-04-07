import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";
import ClientNav from "@/components/client-nav";

export const metadata: Metadata = {
  title: "JobHelper.co.za - #1 Job Portal in South Africa",
  description: "Search thousands of jobs across South Africa. Build your CV and apply with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ClientNav />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center text-sm text-muted-foreground">
              © 2026 JobHelper.co.za — Helping South Africans find jobs
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}