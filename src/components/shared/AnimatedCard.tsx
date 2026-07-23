// src/components/shared/AnimatedCard.tsx
"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export type WebsiteItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const categoryColors: Record<string, string> = {
  Business: "bg-blue-100 text-blue-700",
  Portfolio: "bg-emerald-100 text-emerald-700",
  Events: "bg-orange-100 text-orange-700",
  Finance: "bg-sky-100 text-sky-700",
  Travel: "bg-teal-100 text-teal-700",
  Technology: "bg-violet-100 text-violet-700",
  Food: "bg-red-100 text-red-700",
  Fashion: "bg-pink-100 text-pink-700",
  Health: "bg-green-100 text-green-700",
};

const getInitialDirection = (index: number) => {
  const position = index % 3;
  if (position === 0) return { opacity: 0, x: -30, y: 0 };
  if (position === 1) return { opacity: 0, x: 0, y: 30 };
  return { opacity: 0, x: 30, y: 0 };
};

const AnimatedCard = ({ site, index }: { site: WebsiteItem; index: number }) => {
  return (
    <motion.div
      initial={getInitialDirection(index)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: "easeOut",
      }}
      className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 flex flex-col w-full h-full transform-gpu transition-shadow duration-300"
    >
      {/* Responsive Image Container */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-100">
        <Image
          src={site.image}
          alt={site.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md ${
              categoryColors[site.category] || "bg-gray-100 text-gray-700"
            }`}
          >
            {site.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-4 leading-snug line-clamp-2">
          {site.title}
        </h3>
        <div>
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer">
            <ExternalLink size={15} />
            <span>Preview</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
