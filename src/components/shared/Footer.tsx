// src/components/shared/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../../public/logo.png";

const serviceLinks = [
  "Website Development",
  "Custom Software Solutions",
  "Prebuilt Websites",
  "E-Commerce Setup",
  "UI/UX Design",
  "Maintenance & Support",
];

const quickLinks = [
  "About",
  "Portfolio",
  "Pricing",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
];

const transitionConfig = {
  duration: 0.8,
  ease: [0.21, 0.47, 0.32, 0.98] as const,
};

const Footer = () => {
  return (
    <footer className="bg-[#0b1628] border-t border-[#1e3a5f]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-0 pt-16 pb-8">
        
        {/* Main grid: Mobile a 2-column, Desktop a 4-column */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 mb-12">
          
          {/* Col 1: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transitionConfig}
            style={{ willChange: "transform, opacity" }}
            /* Mobile-e Card, Desktop-e Normal View */
            className="col-span-2 lg:col-span-1 bg-[#132136] lg:bg-transparent border border-[#1e3a5f]/60 lg:border-none rounded-2xl lg:rounded-none p-6 lg:p-0 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Image src={logo} alt="QuantumCodeLabs Logo" height={100} width={100} style={{ width: "auto", height: "auto" }} className="object-contain" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge IT solutions, custom 
              software, and digital transformation strategies.
            </p>

            {/* Social icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#1e324f] lg:bg-transparent border border-[#2a4569] lg:border-[#1e3a5f] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#1e324f] lg:bg-transparent border border-[#2a4569] lg:border-[#1e3a5f] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Col 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transitionConfig, delay: 0.1 }}
            style={{ willChange: "transform, opacity" }}
            /* Mobile-e Card, Desktop-e Normal View */
            className="col-span-1 bg-[#132136] lg:bg-transparent border border-[#1e3a5f]/60 lg:border-none rounded-2xl lg:rounded-none p-5 sm:p-6 lg:p-0"
          >
            <h4 className="text-white font-bold text-base mb-4 sm:mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-slate-400 text-xs sm:text-sm hover:text-cyan-400 transition-colors block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transitionConfig, delay: 0.2 }}
            style={{ willChange: "transform, opacity" }}
            /* Mobile-e Card, Desktop-e Normal View */
            className="col-span-1 bg-[#132136] lg:bg-transparent border border-[#1e3a5f]/60 lg:border-none rounded-2xl lg:rounded-none p-5 sm:p-6 lg:p-0"
          >
            <h4 className="text-white font-bold text-base mb-4 sm:mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-slate-400 text-xs sm:text-sm hover:text-cyan-400 transition-colors block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transitionConfig, delay: 0.3 }}
            style={{ willChange: "transform, opacity" }}
            /* Mobile-e Card, Desktop-e Normal View */
            className="col-span-2 lg:col-span-1 bg-[#132136] lg:bg-transparent border border-[#1e3a5f]/60 lg:border-none rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-0 flex flex-col"
          >
            <h4 className="text-white font-bold text-base mb-5 text-center lg:text-left">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center lg:items-start justify-center lg:justify-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Rangpur, Bangladesh</span>
              </li>
              <li className="flex items-center lg:items-start justify-center lg:justify-start gap-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">+8801736340278</span>
              </li>
              <li className="flex items-center lg:items-start justify-center lg:justify-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm break-all">quantumcodelags@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e3a5f]/60" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...transitionConfig, delay: 0.4 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-center sm:text-left"
        >
          <p className="text-slate-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} QuantumCodeLabs. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm">
            Payment Partners:{" "}
            <span className="font-bold text-slate-300">Payoneer</span>
            <span className="mx-2 text-slate-600">|</span>
            <span className="font-bold text-slate-300">Stripe</span>
            <span className="mx-2 text-slate-600">|</span>
            <span className="font-bold text-slate-300">Visa Card</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
