// src/app/portfolio/page.tsx
"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Web Development" | "E-Commerce" | "Software";

interface Project {
  image: string;
  category: Exclude<Category, "All">;
  title: string;
  techs: string[];
  link: string;
}

const projects: Project[] = [
  {
    image:
      "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Web Development",
    title: "Restaurant Management System",
    techs: ["React.js", "Node.js", "TailwindCSS", "Firebase", "Stripe", "JWT", "PostgreSQL", "Socket.IO", "Nginx", "Docker", "Prisma"],
    link: "https://food-monkey-8ea19.web.app/",
  },
  {
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Web Development",
    title: "Matrimonial Platform",
    techs: ["React.js", "Node.js", "Nestjs", "TailwindCSS", "Firebase", "JWT", "OAuth", "PostgreSQL", "Socket.IO", "Nginx", "Docker", "Prisma"],
    link: "https://bmarry.web.app/",
  },
  {
    image:
      "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Web Development",
    title: "E-Learning Platform",
    techs: ["Next.js", "Redux", "Socket.IO", "Custom Theme", "Django", "JWT", "PostgreSQL", "TailwindCSS", "Stripe", "Nginx", "Docker"],
    link: "https://peerlearn-mu.vercel.app/",
  },
  {
    image:
      "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "E-Commerce",
    title: "E-Commerce Platform",
    techs: ["Next.js", "Node.js", "Express.js", "TailwindCSS", "MongoDB", "Stripe", "Moogoose", "JWT", "OAuth", "Nginx", "Docker", "Redis"],
    link: "https://www.asos.com/women/",
  },
  {
    image:
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Software",
    title: "Hospital Management System",
    techs: ["Reactjs", "Nextjs", "Nodejs", "TailwindCSS", "PostgreSQL", "Django", "JWT", "Socket.IO", "Nginx", "Docker", "Redis", "AWS", "SSLCommerz", "Stripe"],
    link: "https://sebaghar.com/",
  },
  {
    image:
      "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Software",
    title: "School Management System",
    techs: ["Next.js", "Node.js", "Python", "TailwindCSS", "PostgreSQL", "JWT", "Django", "Socket.IO", "Nginx", "Docker", "Prisma", "Redis", "AWS", "SSLCommerz", "Stripe"],
    link: "#",
  },
];

const categoryBadgeColors: Record<Exclude<Category, "All">, string> = {
  "Web Development": "bg-green-500 text-white",
  "E-Commerce": "bg-blue-500 text-white",
  Software: "bg-orange-500 text-white",
};

const filters: Category[] = ["All", "Web Development", "E-Commerce", "Software"];

const cardVariants = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // Left
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }, // Top
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // Right
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }, // Left
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },  // Bottom
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },  // Right
];

const Portfoliopage = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header Animation */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Our Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          >
            Explore some of our recent projects and see how we&apos;ve helped businesses achieve their digital goals.
          </motion.p>
        </div>

        {/* Filter Tabs Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === filter
                  ? "bg-gray-900 text-white shadow-sm scale-105"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, idx) => {
              const variant = cardVariants[idx % cardVariants.length];

              return (
                <motion.div
                  layout
                  key={project.title} 
                  variants={variant}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10 ${categoryBadgeColors[project.category]}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-blue-700 mb-3">
                      {project.title}
                    </h3>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                      {project.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Divider & Link */}
                    <div className="border-t border-gray-100 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors group"
                      >
                        Visit Website
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfoliopage;
