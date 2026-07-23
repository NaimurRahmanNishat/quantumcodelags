// src/components/home/Hero.tsx
"use client";
import { Globe, Monitor, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="min-h-screen bg-[#0b1628] overflow-hidden relative flex items-center">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#4fc3f7 1px, transparent 1px), linear-gradient(90deg, #4fc3f7 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-0 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN (Enters from Left on Scroll) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Top badge */}
            <div className="inline-flex animate-drop-down-slow items-center gap-2 border border-[#1e3a5f] bg-[#0f2040]/80 rounded-full px-4 py-1.5 mb-8 text-sm text-cyan-400 font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
              Web &nbsp;·&nbsp; Desktop &nbsp;·&nbsp; Android
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="text-white block">Empowering Your</span>
              <span className="text-cyan-400 block">Digital Future</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-10">
              We build modern websites, custom software, and e-commerce
              solutions to help your business thrive in the digital age.
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 pt-6 mb-12">
              <Link href="/contact" className="flex cursor-pointer items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0b1628] font-bold px-7 py-3 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                Get Started
                <span className="text-lg">→</span>
              </Link>
              <Link href="/portfolio" className="px-7 cursor-pointer py-3 rounded-lg border border-[#1e3a5f] bg-[#0f2040]/60 text-white font-semibold hover:border-cyan-400/50 hover:bg-[#0f2040] transition-all duration-200 backdrop-blur-sm">
                View Portfolio
              </Link>
            </div>

            {/* Platform tags */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 border border-[#1e3a5f] bg-[#0f2040]/60 rounded-lg px-4 py-2 text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-cyan-400/40 transition-colors">
                <Globe className="w-4 h-4 text-cyan-400" />
                Web Apps
              </div>
              <div className="flex items-center gap-2 border border-[#1e3a5f] bg-[#0f2040]/60 rounded-lg px-4 py-2 text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-cyan-400/40 transition-colors">
                <Monitor className="w-4 h-4 text-cyan-400" />
                Desktop Apps
              </div>
              <div className="flex items-center gap-2 border border-[#1e3a5f] bg-[#0f2040]/60 rounded-lg px-4 py-2 text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-cyan-400/40 transition-colors">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Android Apps
              </div>
            </div>

            {/* Floating "Desktop Appli..." badge */}
            <div className="absolute animate-drop-down-delay top-[65%] hidden md:flex items-center gap-2 border border-[#1e3a5f] bg-[#0b1628]/90 rounded-full px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Desktop Appli...
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Enters from Right on Scroll) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* "Web Development" floating badge — top */}
            <div className="hidden absolute -top-20 left-2 z-20 md:flex items-center gap-2 border border-[#1e3a5f] bg-[#0f2040]/90 rounded-full px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm shadow-lg animate-drop-down-slow">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Web Development
            </div>

            {/* "Projects Done 50+" stat card — top right */}
            <div className="absolute -top-10 -right-4 z-20 bg-[#1a3a6b] border border-[#2a5090] rounded-xl px-5 py-3 shadow-xl backdrop-blur-sm animate-drop-down-delay">
              <p className="text-xs text-slate-400 font-medium">Projects Done</p>
              <p className="text-2xl font-extrabold text-white leading-tight">50+</p>
            </div>

            {/* Code editor panel */}
            <div className="bg-[#0f1e35] border border-[#1e3a5f] rounded-2xl overflow-hidden shadow-2xl">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1e3a5f] bg-[#0b1628]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-slate-500 font-mono">quantum code labs</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-7">
                <div>
                  <span className="text-slate-300">const </span>
                  <span className="text-cyan-300">solution</span>
                  <span className="text-slate-300"> = &#123;</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-300">client</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-amber-300">&quot;Your Business&quot;</span>
                  <span className="text-slate-300">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-300">type</span>
                  <span className="text-slate-300">: [</span>
                </div>
                <div className="pl-12">
                  <span className="text-amber-300">&quot;Web&quot;</span>
                  <span className="text-slate-300">, </span>
                  <span className="text-amber-300">&quot;Desktop&quot;</span>
                  <span className="text-slate-300">, </span>
                  <span className="text-amber-300">&quot;Android&quot;</span>
                </div>
                <div className="pl-6">
                  <span className="text-slate-300">],</span>
                </div>
                <div className="pl-6 flex items-center gap-1">
                  <span className="text-cyan-300">status</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-green-400">building</span>
                  <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-1 animate-pulse" />
                </div>
                <div>
                  <span className="text-slate-300">&#125;</span>
                </div>
              </div>

              {/* Platform cards row */}
              <div className="grid grid-cols-3 border-t border-[#1e3a5f]">
                <div className="flex flex-col items-center gap-2 py-5 px-4 bg-[#0f2a4a] hover:bg-[#143358] transition-colors cursor-pointer">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Web</span>
                </div>
                <div className="flex flex-col items-center gap-2 py-5 px-4 bg-[#1a1a4a] hover:bg-[#202060] transition-colors cursor-pointer border-x border-[#1e3a5f]">
                  <Monitor className="w-6 h-6 text-violet-400" />
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Desktop</span>
                </div>
                <div className="flex flex-col items-center gap-2 py-5 px-4 bg-[#0f2a1a] hover:bg-[#143320] transition-colors cursor-pointer">
                  <Smartphone className="w-6 h-6 text-green-400" />
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Android</span>
                </div>
              </div>
            </div>

            {/* Happy Clients Stat Card */}
            <div className="hidden md:block absolute -bottom-18 left-0 z-20 bg-[#0f2040] border border-[#1e3a5f] rounded-xl px-5 py-3 shadow-xl backdrop-blur-sm animate-drop-down-slow">
              <p className="text-xs text-slate-400 font-medium">Happy Clients</p>
              <p className="text-2xl font-extrabold text-white leading-tight">40+</p>
            </div>

            {/* Android App Badge */}
            <div className="absolute -bottom-30 right-8 z-20 flex items-center gap-2 border border-[#1e3a5f] bg-[#0f2040]/90 rounded-full px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm shadow-lg animate-drop-down-delay">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Android App
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
