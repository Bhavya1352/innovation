"use client";

import { motion } from "framer-motion";
import { Users, Sprout, HeartHandshake } from "lucide-react";

export default function TrustAudience() {
  return (
    <section id="trust" className="bg-sere-earth-50 relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-sere-earth-100 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-sere-green-700 rounded-full flex items-center justify-center text-white font-bold text-center p-2 md:p-4 text-[8px] md:text-[10px] uppercase tracking-widest leading-tight transform rotate-12 shadow-xl z-20 border-2 md:border-4 border-white">
              Farmer <br /> Verified
            </div>
            <h3 className="text-3xl font-black text-sere-earth-900 mb-6 tracking-tight font-display">Why Trust Sere?</h3>
            <div className="space-y-6">
              <p className="text-xl text-sere-earth-700 leading-relaxed italic font-medium">
                "We didn't build this in a lab. We built it in the field, listening to real farmers who were tired of losing control to big hatcheries."
              </p>
              <div className="pt-8 border-t border-sere-earth-100 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-black text-sere-green-700">Practical</div>
                  <p className="text-[10px] text-sere-earth-400 uppercase tracking-widest font-black mt-2">Engineered for farmers</p>
                </div>
                <div>
                  <div className="text-2xl font-black text-sere-green-700">Honest</div>
                  <p className="text-[10px] text-sere-earth-400 uppercase tracking-widest font-black mt-2">Transparent Support</p>
                </div>
              </div>
              <div className="pt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden relative border-2 border-sere-green-100 bg-sere-green-50 flex items-center justify-center font-black text-sere-green-700">
                  SI
                </div>
                <div>
                  <div className="font-bold text-sere-earth-900">Sere Innovations</div>
                  <div className="text-sm text-sere-earth-500 italic font-medium">Field-Grounded Team</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-32 max-w-4xl mx-auto text-center px-6 py-12 md:py-20 rounded-[2rem] md:rounded-[3rem] bg-sere-green-950 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">
              Our vision is for every farm.
            </h2>
            <p className="text-lg md:text-xl text-sere-green-100/70 leading-relaxed max-w-2xl mx-auto font-medium">
              We believe in making practical technology accessible at the grassroots level. Sere Innovations is here to increase farmer independence, build confidence, and unlock long-term income potential for every small farm.
            </p>
            <div className="mt-10 pt-10 border-t border-white/10 text-sere-green-400 font-bold uppercase tracking-[0.2em] text-xs">
              Helping farmers hatch their own future
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-sere-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sere-green-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </motion.div>
      </div>
    </section>
  );
}
