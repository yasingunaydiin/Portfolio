import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'], variable: "--font-sans"});

export const metadata: Metadata = {
  title: "Portfolio of Yasin Gunaydin",
  description: "This is what I have created as a front-end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
