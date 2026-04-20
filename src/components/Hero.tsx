"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section:
 * Chose a clean, white background to keep the focus on the product image.
 * Added a small 'ping' animation to the 'Empowering' badge to grab attention 
 * without being too 'techy' or noisy for a rural audience.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[110px] md:pt-[150px] pb-20 md:pb-32 bg-white">
      {/* Premium Background Pattern Layer */}
      <div className="absolute inset-0 hero-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="sere-badge bg-sere-green-50 text-sere-green-700 border border-sere-green-200">
              <span className="flex h-2 w-2 rounded-full bg-sere-green-500 mr-2 animate-pulse"></span>
              Trusted by 500+ Indian Farmers
            </div>
            <div className="sere-badge bg-sere-earth-100 text-sere-earth-700 border border-sere-earth-200">
              100% Grounded
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-sere-earth-900 mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tighter">
            Build Your Own <br className="hidden lg:block" />
            <span className="text-sere-green-700 relative inline-block">
              Hatchery
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C50 2 150 2 198 6" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <div className="flex items-center gap-5 text-lg md:text-xl font-bold text-sere-earth-400 mb-10 tracking-tight">
            <span className="hover:text-sere-green-700 transition-colors uppercase tracking-widest text-sm">Smart</span>
            <span className="w-1.5 h-1.5 bg-sere-green-500 rounded-full animate-pulse"></span>
            <span className="hover:text-sere-green-700 transition-colors uppercase tracking-widest text-sm">Simple</span>
            <span className="w-1.5 h-1.5 bg-sere-green-500 rounded-full animate-pulse"></span>
            <span className="hover:text-sere-green-700 transition-colors uppercase tracking-widest text-sm">Affordable</span>
          </div>

          <p className="text-xl text-sere-earth-600 mb-10 max-w-lg leading-relaxed font-medium">
            Helping small farmers gain independence with reliable incubation technology that is easy to use and affordable to own.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#inquiry" className="btn-primary group !px-10 !py-4 shadow-[0_20px_40px_-10px_rgba(22,163,74,0.3)]">
              Start Your Batch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="btn-secondary !px-10 !py-4">
              Watch Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Backdrop Aura Glow */}
          <div className="aura-glow top-0 right-0 w-[400px] h-[400px] bg-sere-green-200/30"></div>
          <div className="aura-glow bottom-0 left-0 w-[300px] h-[300px] bg-sere-earth-200/20"></div>

          {/* Floating Image Container */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square md:aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white ring-1 ring-sere-earth-100"
          >
            <Image
              src="/images/hero.png"
              alt="Sere Innovations Smart Incubator"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Floating Trust Badge */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-sere-earth-100 z-20 flex items-center gap-5"
          >
            <div className="relative">
              <div className="w-14 h-14 bg-sere-green-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-sere-green-500/20">
                95%
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-sere-green-500 rounded-full animate-ping"></div>
            </div>
            <div>
              <div className="font-black text-sere-earth-900 text-lg leading-none">Hatch Rate</div>
              <div className="text-xs font-bold text-sere-earth-500 mt-1 uppercase tracking-widest">Field Tested</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
