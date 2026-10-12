"use client";

import { SKILL_CATEGORIES } from "@/lib/constants";
import { Zap, Globe, Cpu, Brain, Wrench, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const categoryIcons = {
    Languages: <Zap className="w-5 h-5 text-amber-500" />,
    "Web Development": <Globe className="w-5 h-5 text-purple-500" />,
    "Machine Learning": <Cpu className="w-5 h-5 text-emerald-500" />,
    "Core Computer Science": <Brain className="w-5 h-5 text-indigo-500" />,
    "Developer Tools": <Wrench className="w-5 h-5 text-cyan-500" />,
  };

  return (
    <section id="skills" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
          Skills &amp; <span className="text-purple-600 dark:text-purple-400">Technologies</span>
        </h2>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          Tools, frameworks, and foundational concepts I leverage to construct robust algorithms and full-stack software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[2rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-7 shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/5 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  {categoryIcons[item.category] || <Wrench className="w-5 h-5 text-purple-500" />}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100/80 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-neutral-800 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono">{item.skills.length} competencies</span>
              <span className="font-mono text-purple-500 text-[11px]">#core</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
