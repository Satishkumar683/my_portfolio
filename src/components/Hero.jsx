"use client";

import Image from "next/image";
import BrushStrokes from "./BrushStrokes";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowUpRight, Send, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex h-[100dvh] min-h-[700px] w-full flex-col justify-center overflow-hidden px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-16 lg:pt-0 pb-0">
      {/* Background ambient radial lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/5 dark:bg-[#8B5CF6]/15 blur-[130px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 w-full max-w-[1550px] mx-auto h-full">
        {/* Left Column: Exactly Rohit Mehta's Editorial Typography */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left justify-center z-10 py-6 lg:py-0">
          <h1 className="font-poster uppercase select-none flex flex-col items-center lg:items-start leading-[0.75] tracking-[-0.02em]">
            <span className="relative z-0 text-7xl sm:text-8xl md:text-[9.5rem] lg:text-[10.5rem] xl:text-[12.5rem] text-neutral-900 dark:text-neutral-100 transition-colors block text-center lg:text-left">
              SATISH
            </span>
            <span className="relative z-10 text-7xl sm:text-8xl md:text-[9.5rem] lg:text-[10.5rem] xl:text-[12.5rem] text-[#8B5CF6] dark:text-[#a78bfa] hover:brightness-110 transition-all block -mt-[0.22em] text-center lg:text-left">
              KUMAR
            </span>
          </h1>

          <div className="mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0">
            <p className="text-base sm:text-2xl md:text-[1.75rem] font-normal text-neutral-800 dark:text-neutral-200 tracking-tight leading-snug">
              Competitive Programmer &amp; Full-Stack Software Developer
            </p>
            <p className="mt-1.5 text-xs sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              NIT Jamshedpur undergraduate crafting high-performance digital systems, machine learning solutions, and solving algorithmic problems at scale.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-neutral-950/10 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore Works</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-neutral-100/70 hover:bg-neutral-200/80 dark:bg-neutral-800/70 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold text-xs sm:text-sm uppercase tracking-wider border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#8B5CF6] dark:text-[#a78bfa]" />
              <span>Let&apos;s Talk</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Satish-Kumar-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors uppercase tracking-wider"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Seamless Cutout Subject on Giant Brush Strokes (Exact Rohit Layout) */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-end justify-center lg:justify-end w-full relative z-0 -mt-6 sm:-mt-10 lg:mt-0 h-[48vh] sm:h-[55vh] lg:h-full">
          <div className="relative flex flex-col items-center lg:items-end justify-end w-full h-full lg:h-[100dvh] select-none">
            {/* Brush background container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-end pointer-events-none scale-100 sm:scale-110 lg:scale-125">
              <BrushStrokes />
            </div>

            {/* Seamless Cutout Portrait (No boxed border frame!) */}
            <div className="relative z-10 w-full h-full flex items-end justify-center lg:justify-end">
              <div className="relative w-full h-full max-h-[100dvh] flex items-end justify-center lg:justify-end">
                <Image
                  src="/images/satish-hero.png"
                  alt="Satish Kumar - Competitive Programmer and Software Developer"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 60vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
