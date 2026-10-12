"use client";

import EyeFollow from "./EyeFollow";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap, BookOpen, School, Sparkles } from "lucide-react";

export default function About() {
  const eduIcons = [
    <GraduationCap key="0" className="w-5 h-5 text-purple-500" />,
    <BookOpen key="1" className="w-5 h-5 text-purple-500" />,
    <School key="2" className="w-5 h-5 text-purple-500" />,
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      {/* Header with Eye Follow Animation */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full mb-12">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Profile &amp; Vision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
            The Story Behind The <span className="text-purple-600 dark:text-purple-400 font-cursive text-4xl sm:text-5xl lg:text-6xl font-normal lowercase tracking-normal">mind</span>
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <EyeFollow />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Authentic Narrative (Personal Story & Mindset, NOT resume bullets) */}
        <div className="lg:col-span-7 rounded-[2rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-10 shadow-xl shadow-purple-500/5">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-500" />
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400">
              The Journey So Far
            </span>
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p className="font-display font-bold text-xl sm:text-2xl text-neutral-900 dark:text-white">
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

            <p className="font-medium text-purple-600 dark:text-purple-400 pt-2">
              Welcome to my little corner of the internet. Take a look around.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8 mt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/60 text-center">
              <span className="block text-2xl font-display font-extrabold text-purple-600 dark:text-purple-400">1430</span>
              <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">Specialist CF</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/60 text-center">
              <span className="block text-2xl font-display font-extrabold text-purple-600 dark:text-purple-400">1866</span>
              <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">Knight LC</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/60 text-center">
              <span className="block text-2xl font-display font-extrabold text-purple-600 dark:text-purple-400">1000+</span>
              <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">Problems</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/60 text-center">
              <span className="block text-2xl font-display font-extrabold text-purple-600 dark:text-purple-400">8.67</span>
              <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">CGPA NIT JSR</span>
            </div>
          </div>
        </div>

        {/* Right: Academic Foundation */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-neutral-500 px-2">
            Academic Foundation
          </span>

          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-[1.75rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-6 shadow-md hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 shrink-0">
                  {eduIcons[idx] || <Sparkles className="w-5 h-5 text-purple-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm sm:text-base tracking-tight">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-0.5">
                    {edu.degree}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mt-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    <span className="font-semibold text-purple-700 dark:text-purple-300 font-mono">
                      {edu.score}
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
