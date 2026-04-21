"use client";

import { ShieldCheck, TrendingUp, Zap, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Projected 300% ROI",
    description: "By internalizing the hatching cycle, your cost per bird drops by nearly 70%, boosting direct profit."
  },
  {
    icon: ShieldCheck,
    title: "Complete Independence",
    description: "No more reliance on commercial hatcheries. Control your own stock, timing, and biosecurity."
  },
  {
    icon: Zap,
    title: "Plug-and-Play Simplicity",
    description: "Built for farmers, not engineers. Automated turning and climate logic mean zero technical learning curve."
  },
  {
    icon: HeartHandshake,
    title: "Built on Confidence",
    description: "Local production builds local trust. Strengthen your farm's reputation as a self-reliant supplier."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-sere-green-950 text-white">
      <div className="section-padding">
        <div className="max-w-4xl mb-16">
          <span className="text-sere-green-400 font-bold uppercase tracking-[0.2em] text-xs">Direct Impact</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">Hatch more than just birds. <br /> Hatch Independence.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl flex gap-6 items-start hover:bg-white/10 transition-colors">
              <div className="mt-1 w-12 h-12 bg-sere-green-900 border border-sere-green-800 rounded-xl flex items-center justify-center text-sere-green-400 shrink-0">
                <benefit.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sere-green-100/60 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
