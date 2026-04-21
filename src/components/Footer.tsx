"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
  };

  return (
    <footer id="inquiry" className="bg-sere-earth-900 text-white pt-24 pb-12">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to start your <span className="text-sere-green-400">hatching journey?</span>
            </h2>
            <p className="text-xl text-sere-earth-300 mb-12 max-w-lg leading-relaxed">
              Join the growing community of self-reliant poultry farmers. Contact us today for a demo or product inquiry.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sere-earth-800 rounded-full flex items-center justify-center text-sere-green-400">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-sere-earth-400">Call Us</div>
                  <div className="font-bold">+91 00000 00000</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sere-earth-800 rounded-full flex items-center justify-center text-sere-green-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-sere-earth-400">Email Us</div>
                  <div className="font-bold">hello@sereinnovations.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sere-earth-800 rounded-full flex items-center justify-center text-sere-green-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-sere-earth-400">Location</div>
                  <div className="font-bold">Rural Innovation Hub, Karnataka, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-sere-earth-900 p-8 md:p-10 rounded-3xl shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold mb-8">Enquire Now</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-sere-green-50 border-2 border-sere-green-200 p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-sere-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
                <h4 className="text-xl font-bold text-sere-green-900 mb-2">Thank you, Farmer!</h4>
                <p className="text-sere-green-800">Our team will call you back within 24 hours to discuss your hatchery needs.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-sere-green-700 underline font-medium text-sm"
                >
                  Edit message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-sere-earth-600 mb-2">Full Name</label>
                    <input id="full-name" name="full-name" required type="text" className="sere-input" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sere-earth-600 mb-2">Phone Number</label>
                    <input id="phone" name="phone" required type="tel" className="sere-input" placeholder="Contact number" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-sere-earth-600 mb-2">Interest</label>
                  <select id="interest" name="interest" className="sere-input">
                    <option>Request a Demo</option>
                    <option>Book a Product Introduction</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sere-earth-600 mb-2">Message (Optional)</label>
                  <textarea id="message" name="message" rows={4} className="sere-input" placeholder="Tell us about your farm..."></textarea>
                </div>
                <button 
                  disabled={formStatus === 'submitting'}
                  type="submit" 
                  className="btn-primary w-full"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                       Sending...
                    </span>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="pt-12 border-t border-sere-earth-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight mb-2 hover:text-sere-green-400 transition-colors block">
              Sere Innovations
            </Link>
            <p className="text-sere-earth-400 text-sm italic">Helping farmers hatch their own future</p>
          </div>
          <div className="text-sere-earth-500 text-sm">
            &copy; {new Date().getFullYear()} Sere Innovations. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
