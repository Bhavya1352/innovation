"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, TrendingDown, Clock, ShieldAlert, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Dependency",
    description: "Relying on external hatcheries creates operational delays and transport stress for your birds."
  },
  {
    icon: Clock,
    title: "Cycle Uncertainty",
    description: "Waiting for hatchery slots means you lose control over your own production timeline."
  },
  {
    icon: AlertCircle,
    title: "Hidden Losses",
    description: "High procurement costs and variable chick quality reduce your farm's profit potential."
  }
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="bg-sere-earth-50">
      <div className="section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="sere-h2">
            The Traditional Struggle
          </h2>
          <p className="text-sere-earth-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Running a small poultry farm shouldn't mean being at the mercy of large hatcheries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((item, index) => (
            <div
              key={index}
              className="sere-card"
            >
              <div className="sere-card-icon">
                <item.icon size={20} />
              </div>
              <h3 className="text-xl font-bold text-sere-earth-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sere-earth-600 leading-relaxed text-sm font-medium">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white text-sere-earth-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-xl border border-sere-earth-100">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center text-sere-green-700 font-bold mb-4 tracking-[0.2em] uppercase text-xs">
              <CheckCircle2 className="mr-2 w-4 h-4" /> The Sere Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
              A smarter way to grow <br className="hidden md:block" /> your farm on-site.
            </h2>
            <p className="text-xl text-sere-earth-600 mb-10 leading-relaxed font-medium text-balance">
              We built Sere Innovations to break the loop. Our smart incubation systems give you the technology of a large-scale hatchery in a simple, affordable, and practical package.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-sere-green-50 p-2 rounded-lg text-sere-green-700 border border-sere-green-100">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span className="font-bold block text-lg text-sere-earth-900 leading-tight">100% Independence</span>
                  <p className="text-xs text-sere-earth-400 mt-1 uppercase font-bold tracking-widest">Self-reliance defined</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-sere-green-50 p-2 rounded-lg text-sere-green-700 border border-sere-green-100">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span className="font-bold block text-lg text-sere-earth-900 leading-tight">Biosecurity Gate</span>
                  <p className="text-xs text-sere-earth-400 mt-1 uppercase font-bold tracking-widest">Total pathogen control</p>
                </div>
              </div>
            </div>

            <div className="bg-sere-earth-50 rounded-2xl p-8 border border-sere-earth-100">
              <h4 className="font-bold text-sere-earth-900 mb-6 flex items-center gap-2">
                <TrendingDown className="text-sere-green-600" size={18} />
                Operational Impact analysis
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Direct Procurement", old: "₹35", new: "₹10", status: "70% Saved" },
                  { label: "Logistics Latency", old: "14 Days", new: "0 Days", status: "On-site" },
                  { label: "Cycle Management", old: "Limited", new: "Total", status: "Precision" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 bg-white rounded-xl border border-sere-earth-100">
                    <div>
                      <div className="text-sere-earth-400 text-[10px] uppercase font-black tracking-[0.1em]">{row.label}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sere-earth-400 line-through text-xs font-medium">{row.old}</span>
                        <ArrowRight className="w-3 h-3 text-sere-earth-200" />
                        <span className="text-sere-green-700 font-black">{row.new}</span>
                      </div>
                    </div>
                    <div className="bg-sere-green-50 text-sere-green-700 px-3 py-1 rounded border border-sere-green-100 text-[10px] font-black uppercase">
                      {row.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
