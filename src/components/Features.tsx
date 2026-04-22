"use client";

import { motion } from "framer-motion";
import { Thermometer, Droplets, RotateCw, Settings2, Zap, Battery, Boxes, ShieldCheck, ArrowUpRight, Wallet } from "lucide-react";

const technicalSpecs = [
  {
    icon: Thermometer,
    title: "Thermal Stability",
    description: "PID-controlled heating elements maintain ±0.1°C variance, critical for embryo development."
  },
  {
    icon: Droplets,
    title: "Hygrometry",
    description: "Multi-stage humidity management with automatic ventilation for optimal eggshell gas exchange."
  },
  {
    icon: RotateCw,
    title: "Rotation Logic",
    description: "Programmable 90° turning cycles to prevent membrane adhesion and improve hatchability."
  },
  {
    icon: Settings2,
    title: "UI Calibration",
    description: "Simplified interface with factory-calibrated sensors for immediate floor deployment."
  },
  {
    icon: Battery,
    title: "Dual Power Mode",
    description: "Seamless transition to 12V backup systems to protect cycles during grid failures."
  },
  {
    icon: Boxes,
    title: "Modular Trays",
    description: "Swappable tray systems compatible with chicken, duck, and quail egg dimensions."
  },
  {
    icon: ShieldCheck,
    title: "Field Hardened",
    description: "Enclosures built to withstand dusty farm environments and high-humidity environments."
  },
  {
    icon: Zap,
    title: "Candling Support",
    description: "Integrated high-intensity inspection lamps for rapid embryo monitoring and batch density checks."
  },
  {
    icon: Wallet,
    title: "Affordable Setup",
    description: "Priced at approximately ₹10,000 to ensure that precision technology is accessible to every small farm."
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white border-y border-sere-earth-100">
      <div className="section-padding">
        <div className="mb-20 text-center">
          <h2 className="sere-h2">
            Engineering for Resilience
          </h2>
          <p className="text-sere-earth-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Every Sere system is designed to be more than just "smart"—it needs to be durable, repairable, and reliable on the farm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {technicalSpecs.map((spec, index) => (
            <div key={index} className="sere-card group hover:border-sere-green-500">
              <div className="sere-card-icon group-hover:bg-sere-green-600 group-hover:text-white transition-all">
                <spec.icon size={20} />
              </div>
              <h4 className="text-base font-bold text-sere-earth-900 mb-3 tracking-tight">{spec.title}</h4>
              <p className="text-sm text-sere-earth-500 leading-relaxed font-medium">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-sere-green-950 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 text-white overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <span className="text-sere-green-400 font-bold text-xs uppercase tracking-widest mb-4 block">Economic Impact</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Recover your investment in 4-5 cycles.</h3>
              <p className="text-sere-green-100/70 mb-10 max-w-md leading-relaxed">
                We've optimized our supply chain and manufacturing to ensure that localized hatching becomes your most profitable farm activity.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-sere-green-500 text-xs font-bold uppercase mb-2">Cycle Hatchability</div>
                  <div className="text-2xl font-bold text-white">92-95%</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-sere-green-500 text-xs font-bold uppercase mb-2">Est. Lifecycle</div>
                  <div className="text-2xl font-bold text-white">7+ Years</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-8 bg-white rounded-2xl text-sere-earth-900 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold uppercase tracking-widest text-xs text-sere-earth-400">Yield Analysis</span>
                  <div className="px-2 py-1 bg-sere-green-50 text-sere-green-700 rounded text-[10px] font-black italic">FY25 Data</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-sere-earth-500 font-medium">Commercial Procurement</span>
                    <span className="font-bold">₹35.00 / bird</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-sere-green-50 -mx-4 px-4 py-3 rounded-lg border border-sere-green-100">
                    <span className="text-sere-green-800 font-bold">Sere In-House Production</span>
                    <span className="text-sere-green-900 font-black">₹10.20 / bird</span>
                  </div>
                  <div className="pt-4 border-t border-sere-earth-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-sere-earth-400 uppercase tracking-tighter">Net ROI GAIN</span>
                    <span className="text-sere-green-600 font-black">~243.1% Potential</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-sere-green-200/50 italic leading-relaxed">
                  *Calculations based on average feed conversion ratios (FCR) and standard energy consumption patterns in rural environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
