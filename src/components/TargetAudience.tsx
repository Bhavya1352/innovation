"use client";

import { UserCircle2, Rocket, GraduationCap, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    icon: UserCircle2,
    title: "Small Poultry Farmers",
    description: "Farmers producing eggs who want to hatch their own chicks and vertically integrate for higher margins."
  },
  {
    icon: Rocket,
    title: "Agri-Entrepreneurs",
    description: "Individuals looking to start a local chick production business in their village clusters."
  },
  {
    icon: GraduationCap,
    title: "Rural Youth",
    description: "Young minds exploring modern income-generation opportunities with precision technology."
  },
  {
    icon: Microscope,
    title: "Early Tech Adopters",
    description: "Forward-thinking farms looking for high-yield incubation tech to optimize their unit economics."
  }
];

export default function TargetAudience() {
  return (
    <section id="who-it-is-for" className="bg-white py-24 border-t border-sere-earth-100">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="sere-h2">Who is Sere for?</h2>
          <p className="text-sere-earth-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Our systems are built for anyone who wants to take charge of their poultry growth, regardless of their technical background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className="sere-card group"
            >
              <div className="sere-card-icon group-hover:bg-sere-green-500 group-hover:text-white transition-all">
                <group.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-sere-earth-900 mb-3 tracking-tight">{group.title}</h3>
              <p className="text-sere-earth-500 text-sm leading-relaxed font-medium">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
