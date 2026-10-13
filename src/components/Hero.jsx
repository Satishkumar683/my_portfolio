"use client";

import Image from "next/image";
import BrushStrokes from "./BrushStrokes";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowUpRight, Send, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-24 sm:pt-28 lg:pt-24 pb-8">
      {/* Background ambient radial lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/15 blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 blur-[130px] -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 w-full max-w-[1550px] mx-auto my-auto h-full">
        {/* Left Column: Gold & Black Editorial Typography (No asterisk) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left justify-center z-10 py-4 lg:py-6">
          {/* Top Pill with Gold & Black Typographical Glyphs */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm">
            <span>✦</span>
            <span className="tracking-wide uppercase">NIT Jamshedpur CSE Undergrad</span>
            <span>✦</span>
          </div>

          <h1 className="font-editorial uppercase select-none flex flex-col items-center lg:items-start leading-[0.78] tracking-[-0.03em]">
            <span className="relative z-0 text-7xl sm:text-8xl md:text-[9.5rem] lg:text-[10.5rem] xl:text-[12rem] text-neutral-900 dark:text-neutral-100 transition-colors block text-center lg:text-left font-black">
              SATISH
            </span>
            <span className="relative z-10 text-7xl sm:text-8xl md:text-[9.5rem] lg:text-[10.5rem] xl:text-[12rem] text-[#D4AF37] hover:brightness-110 transition-all block -mt-[0.18em] text-center lg:text-left font-black">
              KUMAR
            </span>
          </h1>

          <div className="mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0">
            <p className="font-heading text-lg sm:text-2xl md:text-[1.75rem] font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
              Competitive Programmer &amp; Full-Stack Software Developer
            </p>
            <p className="mt-2 text-xs sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
              Undergraduate at NIT Jamshedpur turning curiosity, caffeine, and algorithmic precision into resilient full-stack systems and machine learning models.
            </p>
          </div>

          {/* Action Buttons with Gold & Black Neo-Brutalist .btn-neo styling */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="btn-neo inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#D4AF37] text-black font-heading font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#B89320]"
            >
              <span>Explore Works</span>
              <ArrowUpRight className="w-4 h-4 text-black" strokeWidth={2.4} />
            </a>

            <a
              href="#contact"
              className="btn-neo inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white dark:bg-[#050505] text-black dark:text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider hover:border-[#D4AF37]"
            >
              <Send className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.4} />
              <span>Let&apos;s Talk</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Satish-Kumar-Resume.pdf"
              className="btn-neo inline-flex items-center gap-1.5 px-5 sm:px-6 py-3 rounded-full bg-[#D4AF37] text-black font-heading font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#B89320]"
            >
              <FileDown className="w-4 h-4 text-black" strokeWidth={2.4} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Seamless Cutout Portrait on Metallic Gold Brush Canvas */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-end justify-center lg:justify-end w-full relative z-0 -mt-6 sm:-mt-10 lg:mt-0 h-[48vh] sm:h-[55vh] lg:h-full">
          <div className="relative flex flex-col items-center lg:items-end justify-end w-full h-full lg:h-[calc(100dvh-7rem)] select-none">
            {/* Brush background container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-end pointer-events-none scale-100 sm:scale-110 lg:scale-125">
              <BrushStrokes />
            </div>

            {/* Gold & Black Retro Stickers Floating Near Portrait */}
            <div className="absolute top-20 left-4 lg:left-8 z-20 hidden sm:flex flex-col gap-3 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-xl border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black font-heading font-black text-xs shadow-solid-sm -rotate-6">
                <span>♥</span> BUILDER
              </div>
              <div className="px-3.5 py-1.5 rounded-xl border-2 border-black dark:border-[#D4AF37] bg-black text-[#D4AF37] font-heading font-black text-xs shadow-solid-sm rotate-3">
                <span>🛡️</span> SPECIALIST 1430
              </div>
            </div>

            {/* Seamless Cutout Portrait */}
            <div className="relative z-10 w-full h-full flex items-end justify-center lg:justify-end">
              <div className="relative w-full h-full max-h-[100dvh] flex items-end justify-center lg:justify-end">
                <Image
                  src="/images/satish-hero.png"
                  alt="Satish Kumar - Competitive Programmer and Software Developer"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
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
