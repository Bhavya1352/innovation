"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[110px] md:pt-[150px] pb-20 md:pb-32 bg-white">
      <div className="hero-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="sere-badge">
              <span className="flex h-2 w-2 rounded-full bg-sere-green-500 mr-2 animate-pulse"></span>
              Precision Incubation for Indian Farms
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-sere-earth-900 mb-8 leading-tight tracking-tighter">
            Build Your Own <br className="hidden lg:block" />
            <span className="text-sere-green-700">Hatchery Future.</span>
          </h1>

          <p className="text-xl text-sere-earth-600 mb-10 max-w-lg leading-relaxed font-medium">
            Helping small farmers gain independence with reliable incubation technology. Starting at just <span className="text-sere-earth-900 font-bold underline decoration-sere-green-400 decoration-4">₹10,000</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#inquiry" className="btn-primary group">
              Start Your Batch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="btn-secondary">
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
          <div className="aura-glow top-0 right-0 w-[400px] h-[400px] bg-sere-green-200"></div>
          <div className="aura-glow bottom-0 left-0 w-[300px] h-[300px] bg-sere-earth-200"></div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white ring-1 ring-sere-earth-100"
          >
            <Image
              src="/images/hero.png"
              alt="Sere Innovations Smart Incubator"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-xl shadow-lg border border-sere-earth-100 z-20 flex items-center gap-3 md:gap-5 max-w-[calc(100%-2rem)]">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-sere-green-700 text-white rounded-xl flex items-center justify-center font-black text-lg md:text-xl shrink-0">
              95%
            </div>
            <div>
              <div className="font-black text-sere-earth-900 text-base md:text-lg leading-none">Hatch Rate</div>
              <div className="text-[10px] font-bold text-sere-earth-500 mt-1 uppercase tracking-widest italic">Verified Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
