import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vasanth Kumar — Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable web applications, SaaS products, CRM systems, and business solutions using React, Next.js, Laravel, PHP, and WordPress.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Laravel", "PHP", "WordPress", "Chennai", "Vasanth Kumar"],
  authors: [{ name: "Vasanth Kumar" }],
  openGraph: {
    title: "Vasanth Kumar — Full Stack Developer",
    description: "Building Scalable Web Applications, SaaS Products, CRM Systems & Business Solutions",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
