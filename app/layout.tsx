import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import {  HeroSection } from "@/components/sections/HeroSection";
import Footer from "@/components/features/layout/Footer";
import { Geist } from 'next/font/google'
const geist = Geist({
  subsets: ['latin'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
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
        className={`${geist.className} ${plusJakartaSans.variable} antialiased font-poppins`}
      >
        <HeroSection/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}