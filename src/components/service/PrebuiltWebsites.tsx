"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const websites = [
  {
    image:
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Hospital Management System",
    description:
      "A fully integrated hospital management platform built for modern healthcare operations.",
    price: "$8,000",
    features: [
      "Patient Management",
      "Doctor Profiles",
      "Appointment Booking",
      "Invoice & Billing",
      "Pharmacy Module",
      "Lab Reporting",
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Personal Portfolio Website",
    description:
      "Showcase your work and skills with a clean, modern personal portfolio built to impress.",
    price: "$1,000",
    features: [
      "About Section",
      "Portfolio Gallery",
      "Skills Showcase",
      "Contact Form",
      "Blog Section",
      "Fast Loading",
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "E-Commerce Platform",
    description:
      "Full-featured selling store with payment integration to boost your online sales.",
    price: "$4,000",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "bKash/Nagad Integration",
      "Order Management",
      "Admin Dashboard",
      "Mobile Responsive",
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Business Starter Complete Website",
    description:
      "A perfect digital home for small businesses and startups with personal and professional appeal.",
    price: "$2,000",
    features: [
      "5 Pages",
      "Contact Form",
      "Service Listing",
      "About Us",
      "Blog Section",
      "1-Year Support",
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Restaurant Management System",
    description:
      "Streamline your restaurant operations with table booking, menus, and easy digital ordering.",
    price: "$5,500",
    features: [
      "Digital Menu",
      "Table Reservation",
      "Order Management",
      "Kitchen Display",
      "Simple Billing",
      "Payment Integration",
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "School Management System",
    description:
      "Manage your school efficiently with student records, attendance, results, and appointment tracking.",
    price: "$4,000",
    features: [
      "Student Records",
      "Attendance System",
      "Exam & Results",
      "Teacher Profiles",
      "Parent Notifications",
      "Fee Management",
    ],
  },
];

// কার্ড অ্যানিমেশনের বিভিন্ন ডিরেকশন সেটআপ
const cardVariants = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // Left
  { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } }, // Top
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // Right
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // Left
  { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },  // Bottom
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // Right
];

const PrebuiltWebsites = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Animation */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Ready-to-Launch Websites
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto"
          >
            Fast, affordable, and professionally prebuilt websites tailored for the
            Bangladeshi entrepreneur.
          </motion.p>
        </div>

        {/* Grid Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site, idx) => {
            // কার্ডের ইনডেক্স অনুযায়ী ডিরেকশন বেছে নেওয়া হবে
            const variant = cardVariants[idx % cardVariants.length];

            return (
              <motion.div
                key={idx}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="h-44 overflow-hidden relative">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {site.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    {site.description}
                  </p>
                  <p className="text-2xl font-bold text-blue-700 mb-4">
                    {site.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {site.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrebuiltWebsites;
