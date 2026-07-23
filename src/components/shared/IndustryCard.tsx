// src/components/shared/IndustryCard.tsx
"use client";
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Industry from '../home/Industry';

function getEntryVariant(direction: Direction) {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -70, y: 0 };
    case "right":
      return { opacity: 0, x: 70, y: 0 };
    case "top":
      return { opacity: 0, x: 0, y: -70 };
    case "bottom":
      return { opacity: 0, x: 0, y: 70 };
  }
}

type Direction = "left" | "right" | "top" | "bottom";

const IndustryCard = ({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const initial = getEntryVariant(industry.direction);
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer"
      style={{ minHeight: 160 }}
    >
      {/* Hover overlay — rises from bottom */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute inset-0 bg-linear-to-t ${industry.hoverGradient} z-10`}
          />
        )}
      </AnimatePresence>

      {/* Card content */}
      <div className="relative z-20 flex flex-col items-center justify-center py-8 px-4 gap-4">
        {/* Icon badge */}
        <div
          className={`w-16 h-16 rounded-2xl bg-linear-to-br ${industry.iconBg} flex items-center justify-center transition-transform duration-300 ${
            hovered ? "scale-110" : ""
          }`}
        >
          <span className={`${industry.iconColor} transition-colors duration-300 ${hovered ? "text-white" : ""}`}>
            {industry.icon}
          </span>
        </div>

        {/* Name */}
        <p
          className={`text-sm font-medium transition-colors duration-300 ${
            hovered ? "text-white font-semibold" : "text-gray-700"
          }`}
        >
          {industry.name}
        </p>
      </div>
    </motion.div>
  )
}

export default IndustryCard;
