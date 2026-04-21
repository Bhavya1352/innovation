"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Wallet } from "lucide-react";

export default function ProfitCalculator() {
  const [chicksPerMonth, setChicksPerMonth] = useState(500);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hatcheryCost = chicksPerMonth * 30;
  const sereCost = chicksPerMonth * 10;
  const monthlySavings = hatcheryCost - sereCost;
  const yearlySavings = monthlySavings * 12;

  const formatNumber = (num: number) => {
    if (!isMounted) return num.toString();
    return num.toLocaleString('en-IN');
  };

  return (
    <section className="bg-sere-green-950 text-white overflow-hidden py-24 relative">
      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sere-badge bg-sere-green-900 border-sere-green-800 text-sere-green-400">Yield Calculator</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              Analyze your <span className="text-sere-green-400">Savings Potential.</span>
            </h2>
            <p className="text-lg md:text-xl text-sere-green-200/60 mb-10 leading-relaxed font-medium">
              Switching to on-site hatching isn't just about independence—it's a fundamental shift in your farm's unit economics and productivity.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sere-green-300">
                <div className="w-8 h-8 rounded-lg bg-sere-green-900 border border-sere-green-800 flex items-center justify-center text-xs">✓</div>
                <span className="font-bold">Recover investment in 4-5 cycles</span>
              </div>
              <div className="flex items-center gap-4 text-sere-green-300">
                <div className="w-8 h-8 rounded-lg bg-sere-green-900 border border-sere-green-800 flex items-center justify-center text-xs">✓</div>
                <span className="font-bold">Eliminate dependencies on third-party pricing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-sere-earth-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sere-green-50 text-sere-green-700 rounded-xl border border-sere-green-100">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-xl font-black">Economic Estimation</h3>
                </div>
                <div className="hidden sm:block px-3 py-1 bg-sere-earth-50 rounded text-[10px] font-black text-sere-earth-400 uppercase tracking-widest">Verified Logic</div>
              </div>

              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black text-sere-earth-400 uppercase tracking-[0.2em]">Numbers of chicks / Month</label>
                  <span className="text-3xl font-black text-sere-green-700">{chicksPerMonth}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={chicksPerMonth}
                  onChange={(e) => setChicksPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-sere-earth-100 rounded-lg appearance-none cursor-pointer accent-sere-green-600"
                />
                <div className="flex justify-between mt-4 text-[10px] text-sere-earth-300 font-black uppercase tracking-widest">
                  <span>50 UNITS</span>
                  <span>2,000 UNITS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-sere-earth-50 rounded-xl border border-sere-earth-200">
                  <div className="flex items-center gap-2 text-sere-earth-500 mb-2 text-[10px] font-black uppercase tracking-widest">
                    <Wallet size={14} />
                    Monthly Net Grain
                  </div>
                  <div className="text-3xl font-black text-sere-earth-900 tracking-tighter">₹{formatNumber(monthlySavings)}</div>
                </div>
                <div className="p-6 bg-sere-green-700 text-white rounded-xl border border-sere-green-600 shadow-xl shadow-sere-green-900/40">
                  <div className="flex items-center gap-2 text-sere-green-100 mb-2 text-[10px] font-black uppercase tracking-widest">
                    <TrendingUp size={14} />
                    Annual Potential
                  </div>
                  <div className="text-3xl font-black tracking-tighter">₹{formatNumber(yearlySavings)}</div>
                </div>
              </div>

              <p className="mt-10 text-center text-[10px] text-sere-earth-400 font-bold uppercase tracking-widest italic opacity-50">
                *Estimated based on average Indian poultry market rates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
