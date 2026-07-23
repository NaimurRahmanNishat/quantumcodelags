// src/components/home/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import StarRating from "../shared/StarRating";

const testimonials = [
  {
    initial: "S",
    name: "Sarah Ahmed",
    role: "Founder, TechStart",
    quote:
      '"The custom software they built for us streamlined our operations and saved us countless hours every week."',
  },
  {
    initial: "D",
    name: "Dr. Hasan Mahmud",
    role: "Director, City Clinic",
    quote:
      '"Professional, timely, and highly skilled. The hospital management system is exactly what we needed."',
  },
  {
    initial: "M",
    name: "Alex Mills",
    role: "CEO, The Royal Retail",
    quote:
      '"QuantumCodeLabs transformed our offline business into a thriving e-commerce store. Their support is outstanding."',
  },
];

const cardDirections = [
  { x: -60, y: 0 }, 
  { x: 0, y: 60 }, 
  { x: 60, y: 0 },  
];

const transitionConfig = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
};

const Testimonials = () => {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top left, #dbeafe 0%, #f0f7ff 30%, #ffffff 60%, #f0f7ff 80%, #dbeafe 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-0">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transitionConfig}
          className="text-center mb-14"
        >
          <p className="text-[13px] font-semibold tracking-[0.18em] text-teal-500 uppercase mb-3">
            Client Love
          </p>
          <h2 className="text-[2rem] font-bold text-[#1a2a4a] mb-4 leading-tight">
            Client Testimonials
          </h2>
          <p className="text-gray-500 text-[15px]">
            Don&apos;t just take our word for it. Hear from the businesses
            we&apos;ve helped.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const dir = cardDirections[i % cardDirections.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: dir.x, y: dir.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  ...transitionConfig,
                  delay: i * 0.12, 
                }}
                whileHover={{ 
                  y: -8, 
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.01)" 
                }}
                className="group relative rounded-2xl p-7 bg-[#e4eef7] border border-transparent cursor-default"
              >
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 right-6 text-6xl font-serif leading-none select-none text-[#c5d8ea] group-hover:text-[#b8cfe0] transition-colors duration-300"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  “
                </span>

                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <p className="mt-4 text-[13.5px] italic text-[#2c3e60] leading-relaxed mb-5 pr-4">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-[#93a8c0] mb-5 rounded-full" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a2a4a] flex items-center justify-center shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1a2a4a] leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-teal-500 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
