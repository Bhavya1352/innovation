"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeveloperBadge() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCardOpen((prev) => !prev);
  };

  const socials = [
    {
      label: "in",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bhavya-mishra-7a3b09324/",
      hoverColor: "from-sky-500 to-blue-600 shadow-blue-500/25",
    },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Floating Developer Portfolio Card - Centered above the badge */}
      <AnimatePresence>
        {isCardOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute bottom-16 left-1/2 w-80 bg-stone-905 bg-stone-900/95 border border-white/10 backdrop-blur-2xl p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-4 z-50 text-white overflow-hidden"
            style={{
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
            }}
          >
            {/* Green/Gold background glowing orb inside the card */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-sere-green-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-sere-accent/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsCardOpen(false)}
              className="absolute top-3 right-3 text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close card"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Card Header */}
            <div className="flex items-center gap-3 mt-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sere-green-600 to-sere-accent p-[2px] shadow-md">
                <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center font-black text-lg text-white">
                  B
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  Bhavya Mishra
                  <span className="w-2 h-2 rounded-full bg-sere-green-400 animate-pulse" />
                </h4>
                <span className="text-xs font-medium text-stone-400">
                  Frontend Developer
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/10 w-full" />

            {/* Bio Description */}
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              I design and build high-performance web applications with clean interactions, modern aesthetics, and seamless animations. Let's create something outstanding!
            </p>

            {/* Call to Action */}
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://www.linkedin.com/in/bhavya-mishra-7a3b09324/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-sere-green-600 to-sere-green-700 hover:from-sere-green-700 hover:to-sere-green-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-sere-green-600/15 active:scale-[0.98] cursor-pointer"
              >
                Connect on LinkedIn
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pill-Shaped Badge (Static layout) */}
      <div
        className="flex items-center bg-stone-950/90 border border-white/10 rounded-full shadow-lg overflow-hidden p-2 select-none relative"
        style={{
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
        }}
      >
        {/* Subtle green ambient light glow */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 bg-sere-green-500/20 rounded-full blur-2xl pointer-events-none z-0" />

        {/* Custom logo representing Bhavya (B + Arrow in green/gold gradient) */}
        <div
          onClick={handleLogoClick}
          className={`w-10 h-10 bg-stone-900 border border-white/10 rounded-full flex items-center justify-center shadow-inner relative group cursor-pointer transition-all duration-300 active:scale-95 z-10 ${
            isCardOpen ? "ring-2 ring-sere-green-500/50" : ""
          }`}
        >
          <div className="absolute inset-0 bg-sere-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-transform duration-500 group-hover:rotate-12"
          >
            <defs>
              <linearGradient id="b-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <path
              d="M 9 6 H 14.5 C 16.8 6, 18.5 7.2, 18.5 9.5 C 18.5 11.2, 17.2 12, 15 12 H 9 V 22 H 16 C 18.2 22, 19.8 20.8, 19.8 18.5 C 19.8 16.2, 18.2 15, 15.5 15"
              stroke="url(#b-logo-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 9 5 V 23"
              stroke="url(#b-logo-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 17 9.5 L 21.5 5 M 21.5 5 H 17.5 M 21.5 5 V 9"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Credit Info Text */}
        <div
          onClick={handleLogoClick}
          className="flex flex-col pl-2 cursor-pointer group/txt z-10"
        >
          <span className="text-[8px] font-black text-stone-400 tracking-[0.18em] leading-none uppercase transition-colors group-hover/txt:text-sere-green-400">
            Developed By
          </span>
          <span className="text-sm font-extrabold text-white tracking-tight leading-normal mt-0.5 group-hover/txt:text-white/90">
            Bhavya
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 w-[1px] bg-white/15 mx-3 z-10" />

        {/* Social Link */}
        <div className="flex items-center gap-1.5 pr-2 z-10">
          {socials.map((social) => (
            <div
              key={social.label}
              className="relative"
              onMouseEnter={() => setHoveredSocial(social.name)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredSocial === social.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-11 left-1/2 -translate-x-1/2 bg-stone-900 border border-white/10 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap z-30"
                  >
                    {social.name}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[10px] font-black tracking-normal text-stone-300 hover:text-white hover:border-transparent hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-gradient-to-br hover:shadow-lg ${social.hoverColor}`}
              >
                {social.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
