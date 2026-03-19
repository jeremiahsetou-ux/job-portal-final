import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobHelper.co.za | Find Jobs, Learnerships & Government Vacancies in South Africa",
  description:
    "Find the latest jobs, learnerships, and government vacancies in South Africa. Use our free CV builder and Z83 form guide to apply successfully.",
  keywords: [
    "jobs in South Africa",
    "learnerships 2026",
    "government jobs South Africa",
    "Z83 form download",
    "CV builder South Africa",
    "jobs Johannesburg",
    "jobs Durban",
    "jobs Pretoria",
  ],
  authors: [{ name: "JobHelper" }],
  openGraph: {
    title: "JobHelper.co.za",
    description:
      "Find jobs, learnerships and government vacancies in South Africa.",
    url: "https://jobhelper.co.za",
    siteName: "JobHelper",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}