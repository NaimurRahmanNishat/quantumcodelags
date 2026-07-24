// src/app/about/page.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import officeImg from "../../../public/about.png";
import { Target, Eye, Ribbon, Users, CheckCircle, Lightbulb } from "lucide-react";


const transitionConfig = {
  duration: 0.8,
  ease: [0.8, 1, 0.3, 1] as const, 
};

// Core Values Array for Staggered Animation
const coreValues = [
  {
    icon: Ribbon,
    title: "Excellence",
    description: "We never compromise on the quality of our code or design.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build for your specific needs.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "Transparent pricing, honest timelines, and clear communication.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly learning and adopting the latest technologies.",
  },
];

const Aboutpage = () => {
  return (
    <section className="w-full py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* --- Section Header & Two Column Content --- */}
        <div>
          {/* Top Entrance: Main Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transitionConfig}
            className="text-center mb-14"
          >
            <h2 className="text-[2.25rem] font-bold text-[#1a2a4a] mb-4 leading-tight">
              About Us
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses through
              innovative digital solutions.
            </p>
          </motion.div>

          {/* Two-column content */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Entrance — Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={transitionConfig}
              className="w-full lg:w-1/2 shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={officeImg}
                  alt="Our Story"
                  width={500}
                  height={500}
                  style={{ width: "auto", height: "auto" }} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay label */}
                <div className="absolute top-6 left-6">
                  <span className="text-white text-xl font-bold tracking-wide drop-shadow-lg">
                    OUR STORY
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Entrance — Text & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={transitionConfig}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-[1.6rem] font-bold text-[#1a2a4a] mb-4">
                Our Story
              </h3>
              <p className="text-gray-500 text-[14.5px] leading-relaxed mb-8">
                Founded with a vision to bridge the technological gap for businesses in Bangladesh and
                beyond, RawSyst IT has grown into a premier IT solutions provider. We believe in the
                power of technology to solve complex problems and drive sustainable growth.
              </p>

              {/* Bottom Entrance — Stat Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...transitionConfig, delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#e8f3fc] rounded-xl px-6 py-5 cursor-default"
                >
                  <p className="text-[1.6rem] font-bold text-[#38bdf8] leading-none mb-1">80+</p>
                  <p className="text-gray-600 text-[13px]">Projects Completed</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...transitionConfig, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#e8f3fc] rounded-xl px-6 py-5 cursor-default"
                >
                  <p className="text-[1.6rem] font-bold text-[#38bdf8] leading-none mb-1">100%</p>
                  <p className="text-gray-600 text-[13px]">Client Satisfaction</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- Mission & Vision Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card (Left Entrance) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transitionConfig}
            whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            className="border border-gray-100 rounded-2xl p-8 bg-white shadow-sm cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-[#e0f2fe] flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#0284c7]" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">Our Mission</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To empower businesses of all sizes with accessible, scalable, and innovative technology
              solutions that drive efficiency and growth.
            </p>
          </motion.div>

          {/* Vision Card (Right Entrance) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transitionConfig}
            whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
            className="border border-gray-100 rounded-2xl p-8 bg-white shadow-sm cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-[#e0f2fe] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#0284c7]" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">Our Vision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              To be the leading catalyst for digital transformation, recognized globally for our
              commitment to excellence and client success.
            </p>
          </motion.div>
        </div>

        {/* --- Our Core Values Section --- */}
        <div>
          {/* Core Values Title (Top Entrance) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transitionConfig}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-[#1a2a4a] mb-2">Our Core Values</h3>
            <p className="text-gray-500 text-sm">
              The principles that guide our work and relationships.
            </p>
          </motion.div>

          {/* Values Cards Grid (Staggered Bottom Entrance) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    ...transitionConfig,
                    delay: index * 0.1, 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-[#ebf5ff] rounded-2xl p-6 text-center flex flex-col items-center cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 text-[#0284c7] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#1a2a4a] mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutpage;
