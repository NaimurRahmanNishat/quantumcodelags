// src/components/home/Industry.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Network,
  Building2,
  ShoppingCart,
  Car,
  GraduationCap,
  Home as HomeIcon,
  Hotel,
  Code2,
  Pill,
  Plane,
  LayoutDashboard,
  Plus,
} from "lucide-react";
import IndustryCard from "../shared/IndustryCard";

type Direction = "left" | "right" | "top" | "bottom";

interface Industry {
  id: number;
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  hoverGradient: string;
  direction: Direction;
}

const industries: Industry[] = [
  {
    id: 1,
    name: "FinTech",
    icon: <Network size={32} strokeWidth={1.5} />,
    iconBg: "from-green-300 to-emerald-200",
    iconColor: "text-green-600",
    hoverGradient: "from-green-400 to-emerald-300",
    direction: "left",
  },
  {
    id: 2,
    name: "Healthcare",
    icon: <Building2 size={32} strokeWidth={1.5} />,
    iconBg: "from-purple-300 to-fuchsia-200",
    iconColor: "text-purple-600",
    hoverGradient: "from-purple-400 to-fuchsia-300",
    direction: "top",
  },
  {
    id: 3,
    name: "E-Commerce",
    icon: <ShoppingCart size={32} strokeWidth={1.5} />,
    iconBg: "from-red-300 to-pink-200",
    iconColor: "text-red-500",
    hoverGradient: "from-red-400 to-pink-300",
    direction: "top",
  },
  {
    id: 4,
    name: "Automotive",
    icon: <Car size={32} strokeWidth={1.5} />,
    iconBg: "from-teal-300 to-cyan-200",
    iconColor: "text-teal-600",
    hoverGradient: "from-teal-400 to-cyan-300",
    direction: "top",
  },
  {
    id: 5,
    name: "Education",
    icon: <GraduationCap size={32} strokeWidth={1.5} />,
    iconBg: "from-yellow-300 to-amber-200",
    iconColor: "text-yellow-600",
    hoverGradient: "from-yellow-400 to-amber-300",
    direction: "top",
  },
  {
    id: 6,
    name: "Real-Estate",
    icon: <HomeIcon size={32} strokeWidth={1.5} />,
    iconBg: "from-blue-300 to-sky-200",
    iconColor: "text-blue-500",
    hoverGradient: "from-blue-400 to-sky-300",
    direction: "right",
  },
  {
    id: 7,
    name: "Hospitality",
    icon: <Hotel size={32} strokeWidth={1.5} />,
    iconBg: "from-green-300 to-lime-200",
    iconColor: "text-green-600",
    hoverGradient: "from-green-400 to-lime-300",
    direction: "left",
  },
  {
    id: 8,
    name: "RMG",
    icon: <Code2 size={32} strokeWidth={1.5} />,
    iconBg: "from-rose-300 to-red-200",
    iconColor: "text-rose-500",
    hoverGradient: "from-rose-400 to-red-300",
    direction: "bottom",
  },
  {
    id: 9,
    name: "Pharmacy",
    icon: <Pill size={32} strokeWidth={1.5} />,
    iconBg: "from-amber-300 to-yellow-200",
    iconColor: "text-amber-600",
    hoverGradient: "from-amber-400 to-yellow-300",
    direction: "bottom",
  },
  {
    id: 10,
    name: "Aviation",
    icon: <Plane size={32} strokeWidth={1.5} />,
    iconBg: "from-blue-300 to-indigo-200",
    iconColor: "text-blue-600",
    hoverGradient: "from-blue-400 to-indigo-300",
    direction: "bottom",
  },
  {
    id: 11,
    name: "UI/Ux",
    icon: <LayoutDashboard size={32} strokeWidth={1.5} />,
    iconBg: "from-teal-300 to-green-200",
    iconColor: "text-teal-600",
    hoverGradient: "from-teal-400 to-green-300",
    direction: "bottom",
  },
  {
    id: 12,
    name: "Many More",
    icon: <Plus size={32} strokeWidth={2} />,
    iconBg: "from-emerald-300 to-green-200",
    iconColor: "text-emerald-700",
    hoverGradient: "from-emerald-400 to-green-300",
    direction: "right",
  },
];

const Industry = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  return (
    <div
      className="min-h-full py-8 md:py-12 lg:py-24 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #b2dfd8 0%, #d6eeea 25%, #e8f4f1 50%, #eef2f0 75%, #f0f2ef 100%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 ">
        {/* Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Industry{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #22c55e, #16a34a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We Serve
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-500 text-base"
          >
            Bridge Your Business with the Virtual World
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industry;
