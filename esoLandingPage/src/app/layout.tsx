import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BackgroundDoodles } from "@/components/ui/BackgroundDoodles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GROW with Coach Esohe | 12-Week Identity-Based Transformation",
  description: "Stop setting goals you don't keep. Start becoming the person who achieves them naturally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
      >
        <BackgroundDoodles />
        <Header />
        <main className="min-h-screen pt-20 relative z-10">
          {children}
        </main>
        <FloatingWhatsApp />
        <footer className="py-8 text-center text-sm text-gray-500 bg-secondary/30 relative z-10">
          <p>© {new Date().getFullYear()} Coach Esohe. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
