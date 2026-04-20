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
          <p className="text-sere-earth-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Running a small poultry farm shouldn't mean being at the mercy of large hatcheries.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="sere-card"
            >
              <div className="sere-card-icon">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-sere-earth-900 mb-3">{item.title}</h3>
              <p className="text-sere-earth-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-sere-earth-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-xl border border-sere-earth-100"
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center text-sere-green-700 font-bold mb-4 tracking-wider uppercase text-sm">
              <CheckCircle2 className="mr-2 w-5 h-5" /> The Sere Solution
            </div>
            <h2 className="sere-h2">
              A smarter way to grow your farm, right at your doorstep.
            </h2>
            <p className="text-xl text-sere-earth-600 mb-8 leading-relaxed text-balance">
              We built Sere Innovations to break the loop. Our smart incubation systems give you the technology of a large-scale hatchery in a simple, affordable, and practical package.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-sere-green-100 p-2 rounded-full text-sere-green-700">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <span className="font-bold block text-lg text-sere-earth-900 leading-tight">100% Independence</span>
                  <p className="text-xs text-sere-earth-500 mt-1">No more waiting for vendors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-sere-green-100 p-2 rounded-full text-sere-green-700">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <span className="font-bold block text-lg text-sere-earth-900 leading-tight">High Profit Margins</span>
                  <p className="text-xs text-sere-earth-500 mt-1">Lower cost per chick from day one.</p>
                </div>
              </div>
            </div>

            {/* Sharp Comparison Table */}
            <div className="bg-sere-earth-50 rounded-3xl p-8 border border-sere-earth-100">
              <h4 className="font-bold text-sere-earth-900 mb-6 flex items-center gap-2">
                <TrendingDown className="text-sere-green-600" size={20} />
                Impact Analysis
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Cost Per Chick", old: "₹35", new: "₹10", status: "70% Saved" },
                  { label: "Cycle Control", old: "Dependent", new: "Total", status: "Independent" },
                  { label: "Operation", old: "Manual", new: "Auto", status: "Simpler" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 p-4 bg-white rounded-xl border border-sere-earth-100">
                    <div>
                      <div className="text-sere-earth-400 text-[10px] uppercase font-bold tracking-tight">{row.label}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sere-earth-400 line-through text-xs">{row.old}</span>
                        <ArrowRight className="w-3 h-3 text-sere-earth-300" />
                        <span className="text-sere-green-700 font-bold">{row.new}</span>
                      </div>
                    </div>
                    <div className="bg-sere-green-50 text-sere-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase whitespace-nowrap">
                      {row.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
