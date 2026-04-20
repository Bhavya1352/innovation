"use client";

import { motion } from "framer-motion";
import { Thermometer, Droplets, RotateCw, Heart, ShieldCheck, Calendar, Shield, Search, Zap, Wallet, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Precision Temperature",
    description: "Automatic thermal stabilization ensured for maximum hatching success."
  },
  {
    icon: Droplets,
    title: "Humidity Control",
    description: "Automated moisture management tailored for every stage of the cycle."
  },
  {
    icon: RotateCw,
    title: "Automatic Egg Turning",
    description: "Mimics natural brooding behavior without requiring manual intervention."
  },
  {
    icon: Heart,
    title: "Farmer-Friendly",
    description: "Designed for easy operation without needing advanced technical knowledge."
  },
  {
    icon: ShieldCheck,
    title: "Hatchery Independence",
    description: "Reduce your dependence on external hatcheries and gain self-reliance."
  },
  {
    icon: Calendar,
    title: "Local Cycle Control",
    description: "Complete authority over your own hatching cycles at the farm level."
  },
  {
    icon: Shield,
    title: "Trustworthy Usage",
    description: "A simple, reliable, and grounded experience built for daily farm use."
  },
  {
    icon: Search,
    title: "Batch Candling",
    description: "Integrated monitoring support for easy visibility of your batch progress."
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-sere-earth-50 relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="decoration-number">03</div>
        <div className="text-center mb-10">
          <h2 className="sere-h2">
            Designed for the Indian Farm
          </h2>
          <p className="text-sere-earth-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We know the ground reality—unreliable power, dust, and the need for simple tech. Sere was built to handle it all.
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="group sere-card"
            >
              <div className="sere-card-icon">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-sere-earth-900 mb-3">{feature.title}</h3>
              <p className="text-sere-earth-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Human Touch: Price Comparison / ROI Analysis */}
        <div className="mb-24 bg-white border-2 border-sere-green-100 rounded-3xl overflow-hidden">
          <div className="bg-sere-green-50 p-6 border-b border-sere-green-100">
            <h3 className="text-xl font-bold text-sere-green-900">How much do you save?</h3>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-100">
                <span className="text-red-700 font-medium font-outfit">Commercial Hatchery Cost</span>
                <span className="text-red-700 font-bold">₹25 - ₹35 / Chick</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100 scale-105 shadow-sm">
                <span className="text-green-700 font-medium">Hatching with Sere</span>
                <span className="text-green-700 font-bold">₹8 - ₹12 / Chick</span>
              </div>
              <p className="text-sm text-sere-earth-500 italic">
                *Calculation includes electricity, feed, and egg sourcing costs. Break-even achieved within 4-5 batches.
              </p>
            </div>
            <div className="bg-sere-earth-900 text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">Battery Backup Ready</h4>
              <p className="text-sere-earth-300 mb-6 leading-relaxed">
                We know power cuts are common. Sere Incubators are compatible with standard 12V inverters, ensuring your hatching process never stops, even during a blackout.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-sere-green-700 rounded-full text-xs font-bold uppercase tracking-wider">Inverter Compatible</span>
                <span className="px-3 py-1 bg-sere-green-700 rounded-full text-xs font-bold uppercase tracking-wider">Low Power Draw</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center bg-sere-green-50 rounded-3xl p-8 md:p-12"
        >
          <div>
            <h3 className="text-3xl font-bold text-sere-green-900 mb-6">Built by Farmers, For Farmers</h3>
            <ul className="space-y-4">
              {[
                "Increased confidence in your hatching success",
                "Full independence from commercial hatcheries",
                "Greater cost efficiency per chick",
                "Simpler, auto-controlled operations",
                "Long-term income potential for your farm"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center text-sere-green-800 font-medium">
                  <span className="w-6 h-6 bg-sere-green-200 text-sere-green-700 rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/process.png" alt="Process" className="object-cover w-full h-full" />
          </div>
        </motion.div>
        {/* Technical Depth: The 21-Day Cycle Reference */}
        <div className="mt-12 pt-12 border-t border-sere-earth-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sere-earth-200 rounded-full flex items-center justify-center font-bold text-sere-earth-700">21</div>
            <p className="text-sm font-medium text-sere-earth-700 max-w-xs">
              Optimized for the standard 21-day chicken egg cycle with precise humidity ramp-up.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs bg-sere-earth-100 px-3 py-1 rounded text-sere-earth-600">Dust Resistant</span>
            <span className="text-xs bg-sere-earth-100 px-3 py-1 rounded text-sere-earth-600">Shock Proof</span>
            <span className="text-xs bg-sere-earth-100 px-3 py-1 rounded text-sere-earth-600">Washable Trays</span>
          </div>
        </div>
      </div>
    </section>
  );
}
