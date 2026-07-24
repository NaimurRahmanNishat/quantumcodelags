// src/components/service/ServicesSection.tsx
"use client";
import {
  Globe,
  Code2,
  ShoppingCart,
  LayoutTemplate,
  Paintbrush2,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern frameworks like React, Next.js, and Tailwind. From information portals to appointment management, we craft solutions across all industries.",
    features: [
      "Custom Websites",
      "Corporate Websites",
      "Landing Pages",
      "CMS Integration",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    description:
      "Scalable software solutions designed to streamline your unique business processes — from ERP to specialized management systems, we build tools that work for your efficiency.",
    features: ["Cloud ERP", "HR Software", "Inventory Systems", "POS Software"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Setup",
    description:
      "End-to-end online store setup with secure payment gateways. We integrate local Bangladeshi payment methods like bKash, Nagad, and City payment for seamless transactions.",
    features: [
      "Shopify / WooCommerce",
      "Payment Integration",
      "Inventory Management",
      "SSLCommerz / bKash",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Prebuilt Websites",
    description:
      "Affordable, ready-to-deploy website packages for startups and small businesses. Get online quickly with professional templates customized to your brand.",
    features: [
      "Low Investment",
      "Quick Delivery",
      "Custom Branding",
      "1-year Maintenance",
    ],
  },
  {
    icon: Paintbrush2,
    title: "UI/UX Design",
    description:
      "User-friendly designs that ensures intuitive navigation and engaging digital experiences. We create wireframes, prototypes, and high-fidelity designs that convert visitors into loyal customers.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Brand Identity",
    ],
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support, updates, and security monitoring for your digital asset. We ensure your digital products remain secure, reliable, and up-to-date.",
    features: [
      "Performance Monitoring",
      "Bug Fixing",
      "Content Updates",
      "24/7 Support",
    ],
  },
];

const serviceCardVariants = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // 1. Left
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // 2. Right
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }, // 3. Top
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },  // 4. Bottom
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // 5. Left
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // 6. Right
];

const ServicesSection = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto"
          >
            Comprehensive IT solutions tailored to elevate your business in the digital landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const variant = serviceCardVariants[idx % serviceCardVariants.length];

            return (
              <motion.div
                key={idx}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between"
              >
                <div>
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Key Features
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-5">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group pt-2">
                  Request this service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
