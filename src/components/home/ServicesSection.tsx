// src/components/home/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import { Code2, LayoutDashboard, ShoppingCart, Smartphone, PenTool, Headphones } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern frameworks like React, Next.js, and Node.js. We ensure optimal performance, SEO friendliness, and seamless user experiences across all devices.",
    featured: true,
  },
  {
    icon: LayoutDashboard,
    title: "Custom Software Solutions",
    description:
      "Scalable software solutions designed to streamline your unique business processes. From ERPs to specialized management systems, we build tools that drive efficiency.",
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Setup",
    description:
      "End-to-end online store development with secure payment gateways. We integrate local Bangladeshi payment methods like bKash, Nagad, and SSLCommerz for smooth transactions.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Prebuilt Websites",
    description:
      "Ready-to-launch, cost-effective website packages for startups and small businesses. Get online quickly with professional templates customized to your brand.",
    featured: true,
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User-centric design that ensures intuitive navigation and engaging digital experiences. We create wireframes, prototypes, and high-fidelity designs that convert visitors into customers.",
    featured: true,
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, updates, and security monitoring for your peace of mind. We ensure your digital assets remain secure, fast, and up-to-date.",
    featured: true,
  },
];

const getInitialDirection = (index: number) => {
  const position = index % 3;
  if (position === 0) return { opacity: 0, x: -50, y: 0 }; 
  if (position === 1) return { opacity: 0, x: 0, y: 50 };  
  return { opacity: 0, x: 50, y: 0 };                   
};

const ServicesSection = () => {
  return (
    <section className="bg-[#f5f8fc] py-20 px-6 lg:px-16 w-full overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 mb-3">
          What We Do
        </p>
        <h2 className="text-4xl font-extrabold text-[#0d2247] mb-4">
          Our Services
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed text-base">
          Comprehensive IT solutions tailored to elevate your business in the
          digital landscape.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={getInitialDirection(index)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ y: -8 }} 
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: (index % 3) * 0.12, 
                ease: [0.21, 0.47, 0.32, 0.98], 
              }}
              style={{ willChange: "transform, opacity" }} 
              className={`group relative overflow-hidden rounded-2xl p-8 transition-colors duration-300 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl ${
                service.featured
                  ? "bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] border-2 border-slate-100"
                  : "bg-white/70 hover:bg-white border border-transparent"
              }`}
            >
              <div>
                {/* Blob decoration */}
                <div
                  className="absolute -top-5 -right-5 w-24 h-24 rounded-full opacity-30 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, #a5d8f3 20%, #c8ecff 90%, transparent 80%)",
                  }}
                />

                {/* Icon box */}
                <div className="relative z-10 w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ease-out">
                  <Icon className="w-5 h-5 text-cyan-500" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  className={`relative z-10 font-bold mb-3 ${
                    service.featured
                      ? "text-[#0d2247] text-xl"
                      : "text-[#0d2247] text-lg"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Animated Underline for ALL cards on hover */}
              <div className="relative z-10 mt-6 h-0.5 w-full overflow-hidden rounded-full">
                <div className="h-full w-full bg-linear-to-r from-cyan-400 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
