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

  const hatcheryCost = chicksPerMonth * 30; // ₹30 avg from hatchery
  const sereCost = chicksPerMonth * 10;     // ₹10 with Sere
  const monthlySavings = hatcheryCost - sereCost;
  const yearlySavings = monthlySavings * 12;

  // Helper to safely format numbers only on client
  const formatNumber = (num: number) => {
    if (!isMounted) return num.toString();
    return num.toLocaleString('en-IN');
  };

  return (
    <section className="bg-sere-green-950 text-white overflow-hidden py-16 md:py-24 relative">
      <div className="section-padding relative z-10">
        <div className="decoration-number text-white/5">04</div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sere-badge bg-sere-green-800 text-sere-green-100">Smart Tool</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Calculate your <span className="text-sere-green-400">Monthly Growth</span>
            </h2>
            <p className="text-lg md:text-xl text-sere-green-200/80 mb-10 leading-relaxed">
              Don't just take our word for it. See how much you can personally save by switching from commercial hatcheries to Sere Innovations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sere-green-100">
                <div className="w-6 h-6 rounded-full bg-sere-green-600 flex items-center justify-center text-[10px]">✓</div>
                <span>Recover your investment in 4 months</span>
              </div>
              <div className="flex items-center gap-4 text-sere-green-100">
                <div className="w-6 h-6 rounded-full bg-sere-green-600 flex items-center justify-center text-[10px]">✓</div>
                <span>Zero dependency on third-party pricing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-sere-earth-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
          >
            {/* Visual Grainy Overlay for Premium Feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-[2.5rem]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-sere-green-50 text-sere-green-700 rounded-2xl">
                  <Calculator size={24} />
                </div>
                <h3 className="text-xl font-bold">Profit Estimation</h3>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-medium text-sere-earth-600 uppercase tracking-wider">Numbers of chicks per month</label>
                  <span className="text-2xl font-bold text-sere-green-700">{chicksPerMonth}</span>
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
                <div className="flex justify-between mt-2 text-[10px] text-sere-earth-400 font-bold uppercase">
                  <span>50 Chicks</span>
                  <span>2,000 Chicks</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-sere-earth-50 rounded-2xl border border-sere-earth-100">
                  <div className="flex items-center gap-2 text-sere-earth-500 mb-2 text-xs font-bold uppercase">
                    <Wallet size={14} />
                    Monthly Savings
                  </div>
                  <div className="text-3xl font-bold text-sere-earth-900">₹{formatNumber(monthlySavings)}</div>
                </div>
                <div className="p-6 bg-sere-green-700 text-white rounded-2xl shadow-lg transform md:-rotate-2">
                  <div className="flex items-center gap-2 text-sere-green-100 mb-2 text-xs font-bold uppercase">
                    <TrendingUp size={14} />
                    Yearly Potential
                  </div>
                  <div className="text-3xl font-bold">₹{formatNumber(yearlySavings)}</div>
                </div>
              </div>
              
              <p className="mt-8 text-center text-xs text-sere-earth-400 italic">
                *Estimated based on average market rates and feed optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
