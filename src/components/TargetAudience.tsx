"use client";

import { UserCircle2, Rocket, GraduationCap, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    icon: UserCircle2,
    title: "Small Poultry Farmers",
    description: "Farmers producing eggs who want to hatch their own chicks and save costs."
  },
  {
    icon: Rocket,
    title: "Agri-Entrepreneurs",
    description: "Individuals looking to start a local chick production business."
  },
  {
    icon: GraduationCap,
    title: "Rural Youth",
    description: "Young minds exploring modern income-generation opportunities in their villages."
  },
  {
    icon: Microscope,
    title: "Early Tech Adopters",
    description: "Forward-thinking farmers looking for practical tech to improve yield."
  }
];

export default function TargetAudience() {
  return (
    <section id="who-it-is-for" className="bg-white py-24 border-t border-sere-earth-100">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="sere-h2">Who is Sere for?</h2>
          <p className="text-sere-earth-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our systems are built for anyone who wants to take charge of their poultry growth, regardless of their technical background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-sere-earth-50 border border-sere-earth-100 hover:border-sere-green-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sere-green-600 mb-6 shadow-sm">
                <group.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-sere-earth-900 mb-2">{group.title}</h3>
              <p className="text-sere-earth-500 text-sm leading-relaxed">{group.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
