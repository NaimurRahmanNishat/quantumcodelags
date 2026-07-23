// src/components/shared/BottomCTA.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const BottomCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const features = [
    "Free Consultation",
    "Fast Delivery",
    "24/7 Support",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mt-16 px-4 text-center relative overflow-hidden mb-12 sm:mb-16 lg:mb-20"
    >
      <div className=" max-w-7xl mx-auto bg-[#091527] rounded-3xl">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center py-4">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-6 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Let&apos;s Work Together
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight leading-tight"
        >
          Ready to Transform Your Business?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-4 leading-relaxed"
        >
          Let&apos;s discuss your project requirements and find the perfect digital solution for your needs.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="bg-[#00a3e0] hover:bg-[#008cc0] text-white font-semibold px-7 py-2.5 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] mb-10 text-sm sm:text-base cursor-pointer"
        >
          Get a Free Consultation
          <ArrowRight size={18} />
        </motion.button>

        {/* Bottom Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-400 font-medium border-t border-slate-800/60 pt-6 w-full"
        >
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </motion.div>
  );
};

export default BottomCTA;
