// src/components/home/TechStack.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaCreditCard, FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiSupabase,
  SiPrisma,
  SiFirebase,
  SiNginx,
  SiDocker,
  SiGit,
  SiVercel,
  SiGithub,
  SiFigma,
  SiJavascript,
  SiGoogleanalytics,
  SiStripe,
  SiMysql,
  SiPhp,
  SiNestjs,
  SiPython,
  SiDjango,
  SiLaravel,
  SiCloudflare,
} from "react-icons/si";

// Tech Data Structure
interface Tech {
  name: string;
  icon: IconType;
  color?: string;
}

// Tech Stack Data Array
const techStack: Tech[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "NGINX", icon: SiNginx, color: "#009639" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "VS Code", icon: VscCode, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Stripe", icon: SiStripe, color: "#008CDD" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "SSLCommerz", icon: FaCreditCard, color: "#2563EB" },
  { name: "AWS Cloud", icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
];

// Animation Config
const directions = [
  { x: -40, y: 0 }, 
  { x: 0, y: -40 }, 
  { x: 40, y: 0 },  
  { x: 0, y: 40 },  
];

const transitionConfig = {
  duration: 0.6,
  ease: [0.21, 0.47, 0.32, 0.98] as const,
};

const TechStackSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-0 bg-[#f0f2f5] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transitionConfig}
          className="text-center mb-14"
        >
          <p className="text-[13px] font-semibold tracking-[0.18em] text-teal-500 uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-[2rem] font-bold text-[#1a2a4a] mb-4 leading-tight">
            Technologies We Master
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-md mx-auto">
            We use the latest and most reliable technologies to build
            high-performance digital solutions.
          </p>
        </motion.div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            const dir = directions[i % 4];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: dir.x, y: dir.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  ...transitionConfig,
                  delay: (i % 6) * 0.08, 
                }}
                whileHover={{ scale: 1.05, y: -4 }} 
                style={{ willChange: "transform, opacity" }}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <Icon className="text-2xl" style={{ color: tech.color }} />
                <span className="text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
