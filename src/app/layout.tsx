import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "JobHelper — South African Jobs & Career Portal",
    template: "%s | JobHelper",
  },
  description: "Find government jobs, remote work, learnerships, and career advice in South Africa. Updated daily.",
  keywords: [
    "jobs in South Africa",
    "government jobs",
    "remote work",
    "learnerships",
    "career advice",
    "CV builder",
    "Z83 form",
    "South Africa jobs",
    "job portal",
    "employment",
  ],
  authors: [{ name: "Jeremiah Setou" }],
  creator: "JobHelper",
  publisher: "JobHelper",
  metadataBase: new URL("https://jobhelper.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://jobhelper.co.za",
    siteName: "JobHelper",
    title: "JobHelper — South African Jobs & Career Portal",
    description: "Find government jobs, remote work, learnerships, and career advice in South Africa. Updated daily.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JobHelper - South Africa's #1 Job Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JobHelper — South African Jobs & Career Portal",
    description: "Find government jobs, remote work, learnerships, and career advice in South Africa.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
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
        <CookieConsent />
      </body>
    </html>
  );
}