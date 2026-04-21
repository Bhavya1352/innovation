"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import ProfitCalculator from "@/components/ProfitCalculator";
import TargetAudience from "@/components/TargetAudience";
import TrustAudience from "@/components/TrustAudience";
import Footer from "@/components/Footer";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#problem" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#inquiry" },
  ];

  return (
    <main className="min-h-screen">
      <nav
        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 rounded-2xl border bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-sere-earth-100 py-4"
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-black text-sere-green-900 tracking-tighter group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-sere-green-600 rounded-lg flex items-center justify-center text-white shadow-sm transition-transform">
              <span className="font-black text-xl">S</span>
            </div>
            <span>Sere Innovations</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-sere-earth-50/50 p-1.5 rounded-xl border border-sere-earth-100/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-bold text-sere-earth-700 hover:text-sere-green-700 rounded-lg hover:bg-white hover:shadow-sm transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#inquiry" className="ml-4 bg-sere-green-600 hover:bg-sere-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0">
              Enquire Now
            </a>
          </div>

          <button
            className="md:hidden text-sere-earth-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-sere-earth-100 p-6 md:hidden shadow-2xl rounded-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-sere-earth-700 p-4 bg-sere-earth-50 rounded-xl hover:bg-sere-green-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#inquiry"
                className="mt-2 bg-sere-green-600 text-white p-4 rounded-xl text-center font-bold text-lg shadow-lg shadow-sere-green-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </nav>

      <Hero />
      <ProblemSolution />
      <Features />
      <ProfitCalculator />
      <TargetAudience />
      <TrustAudience />
      <Footer />
    </main>
  );
}
