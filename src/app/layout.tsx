import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}