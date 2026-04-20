"use client";

import { motion } from "framer-motion";
import { Users, Sprout, HeartHandshake } from "lucide-react";

export default function TrustAudience() {
  return (
    <section id="trust" className="bg-sere-earth-50 relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="decoration-number">05</div>
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-sere-earth-100 relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-sere-green-600 rounded-full flex items-center justify-center text-white font-bold text-center p-4 text-sm transform rotate-12 shadow-xl hidden md:flex z-20 border-4 border-white">
              Farmer Trusted
            </div>
            <h3 className="text-2xl font-bold text-sere-earth-900 mb-6">Why Trust Sere?</h3>
            <div className="space-y-6">
              <p className="text-sere-earth-700 leading-relaxed italic">
                "We didn't build this in a lab. We built it in the field, listening to real farmers who were tired of losing control to big hatcheries."
              </p>
              <div className="pt-6 border-t border-sere-earth-100 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-sere-green-700">Practical</div>
                  <p className="text-xs text-sere-earth-500 uppercase tracking-widest mt-1">Simple tech that works</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sere-green-700">Honest</div>
                  <p className="text-xs text-sere-earth-500 uppercase tracking-widest mt-1">Grounded messaging</p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-sere-green-100">
                  <img src="/images/farmer.png" alt="Farmer" className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-bold text-sere-earth-900">Sere Innovations</div>
                  <div className="text-sm text-sere-earth-500 italic">Field-Grounded Team</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Final Vision Statement - Built from the Brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto text-center px-6 py-16 rounded-[4rem] bg-sere-green-950 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our vision is bigger than a machine.
            </h2>
            <p className="text-xl text-sere-green-100/70 leading-relaxed max-w-2xl mx-auto">
              We believe in making practical technology accessible at the grassroots level. Sere Innovations is here to increase farmer independence, build confidence, and unlock long-term income potential for every small farm.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 text-sere-green-400 font-bold uppercase tracking-widest text-sm">
              Helping farmers hatch their own future
            </div>
          </div>

          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sere-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sere-green-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </motion.div>
      </div>
    </section>
  );
}
