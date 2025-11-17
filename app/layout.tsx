import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";
import { Banner } from "@/components/sections/Banner";

const geistSans = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans",
});

const geistMono = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Subnet Marketplace",
  description: "A marketplace for premium AI prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Banner/>
        {children}
      </body>
    </html>
  );
}
