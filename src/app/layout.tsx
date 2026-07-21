// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingSocials from "@/components/shared/FloatingSocials";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  preload: false,
});

export const metadata: Metadata = {
  title: "Quantum Code Labs",
  description:
    "Quantum Code Labs is a place to learn quantum computing and coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Global Floating Socials (Telegram & WhatsApp) */}
        <FloatingSocials /> 
      </body>
    </html>
  );
}
