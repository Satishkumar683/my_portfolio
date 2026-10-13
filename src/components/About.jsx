"use client";

import EyeFollow from "./EyeFollow";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap, BookOpen, School, Sparkles } from "lucide-react";

export default function About() {
  const eduIcons = [
    <GraduationCap key="0" className="w-5 h-5 text-black" strokeWidth={2.3} />,
    <BookOpen key="1" className="w-5 h-5 text-black" strokeWidth={2.3} />,
    <School key="2" className="w-5 h-5 text-black" strokeWidth={2.3} />,
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      {/* Header with Eye Follow Animation */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full mb-12">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
            <span>✦</span> Profile &amp; Vision <span>✦</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-2 text-neutral-900 dark:text-white">
            The Story Behind The <span className="font-editorial italic font-normal text-[#D4AF37] text-4xl sm:text-5xl lg:text-6xl lowercase">mind</span>
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <EyeFollow />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Authentic Narrative with Gold & Black Neo-Brutalist System */}
        <div className="lg:col-span-7 rounded-[2rem] bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/50 p-8 sm:p-10 shadow-solid">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-heading font-black tracking-wider uppercase text-neutral-900 dark:text-[#D4AF37]">
              ✦ The Journey So Far ✦
            </span>
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-sans">
            <p className="font-heading font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-white">
              Hey, I&apos;m Satish Kumar.
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A CSE undergrad at NIT Jamshedpur who enjoys turning curiosity, caffeine, and questionable amounts of debugging into things that actually work.
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I&apos;m into Data Structures and Algorithms, competitive programming, and building cool stuff for the web. One minute, I&apos;m solving a tricky algorithmic problem; the next, I&apos;m turning an idea into a project and wondering why it worked on my machine.
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              When I&apos;m not busy convincing my code to behave, I&apos;m exploring new technologies, experimenting with ideas, or chasing the next interesting problem.
            </p>

            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Currently learning, building, breaking things (mostly unintentionally), and getting better one bug at a time.
            </p>

            <p className="font-heading font-bold text-[#B89320] dark:text-[#D4AF37] pt-2">
              Welcome to my little corner of the internet. Take a look around.
            </p>
          </div>

          {/* Quick Metrics Bar with Gold Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8 mt-6 border-t-2 border-black/10 dark:border-[#D4AF37]/20">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm text-center">
              <span className="block text-2xl font-editorial font-black text-[#D4AF37]">1430</span>
              <span className="text-[10px] font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Specialist CF</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm text-center">
              <span className="block text-2xl font-editorial font-black text-[#D4AF37]">1866</span>
              <span className="text-[10px] font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Knight LC</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm text-center">
              <span className="block text-2xl font-editorial font-black text-[#D4AF37]">1000+</span>
              <span className="text-[10px] font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">DSA Solved</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm text-center">
              <span className="block text-2xl font-editorial font-black text-[#D4AF37]">8.67</span>
              <span className="text-[10px] font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">CGPA NIT JSR</span>
            </div>
          </div>
        </div>

        {/* Right: Academic Foundation */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm w-fit uppercase">
            <span>🛡️</span> Academic Foundation
          </span>

          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-6 shadow-solid hover:translate-x-1 transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37] border-2 border-black shadow-solid-sm shrink-0">
                  {eduIcons[idx] || <Sparkles className="w-5 h-5 text-black" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-extrabold text-neutral-900 dark:text-white text-sm sm:text-base tracking-tight">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-heading font-bold px-2 py-0.5 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37] text-black dark:text-[#F5D061] whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1 font-sans">
                    {edu.degree}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 mt-3 pt-2.5 border-t border-black/10 dark:border-[#D4AF37]/20 font-heading">
                    <span className="font-extrabold text-black dark:text-[#D4AF37]">
                      ✓ {edu.score}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
