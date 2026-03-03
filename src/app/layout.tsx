// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Configuration des polices
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: "AVLYTECH | Agence Digitale & Cybersécurité",
  description: "Solutions numériques modernes, transformation digitale et sécurité informatique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}