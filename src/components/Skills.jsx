"use client";

import { SKILL_CATEGORIES } from "@/lib/constants";
import { Zap, Globe, Cpu, Brain, Wrench } from "lucide-react";

export default function Skills() {
  const categoryIcons = {
    Languages: <Zap className="w-5 h-5 text-black" strokeWidth={2.3} />,
    "Web Development": <Globe className="w-5 h-5 text-black" strokeWidth={2.3} />,
    "Machine Learning": <Cpu className="w-5 h-5 text-black" strokeWidth={2.3} />,
    "Core Computer Science": <Brain className="w-5 h-5 text-black" strokeWidth={2.3} />,
    "Developer Tools": <Wrench className="w-5 h-5 text-black" strokeWidth={2.3} />,
  };

  return (
    <section id="skills" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
          <span>✦</span> Technical Arsenal <span>✦</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-3 text-neutral-900 dark:text-white">
          Skills &amp; <span className="text-[#D4AF37] font-editorial italic font-normal">Technologies</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans">
          Languages, frameworks, and core engineering concepts I use to architect robust algorithms and full-stack software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-7 shadow-solid hover:translate-y-[-2px] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-black bg-[#D4AF37] shadow-solid-sm">
                  {categoryIcons[item.category] || <Wrench className="w-5 h-5 text-black" strokeWidth={2.3} />}
                </div>
                <h3 className="text-lg font-heading font-extrabold text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading font-bold bg-[#fdfdfd] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-2 border-black/80 dark:border-[#D4AF37]/40 shadow-solid-sm hover:border-[#D4AF37] transition-colors"
                  >
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black/10 dark:border-[#D4AF37]/20 flex items-center justify-between text-xs font-heading">
              <span className="font-bold text-neutral-500">{item.skills.length} competencies</span>
              <span className="font-black text-black dark:text-[#D4AF37]">✦ verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
