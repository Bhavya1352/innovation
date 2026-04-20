import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Sere Innovations | Smart Incubation for Poultry Farmers",
  description: "Helping farmers hatch their own future with affordable, easy-to-use smart incubators. Reduce dependence and increase self-reliance.",
  keywords: ["poultry farming", "egg incubator", "smart farming", "agri-tech", "hatchery", "Sere Innovations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen bg-sere-earth-50">
        {children}
      </body>
    </html>
  );
}
