"use client";

import { ACHIEVEMENTS } from "@/lib/constants";
import { Trophy, Medal, Star, CheckCircle } from "lucide-react";

export default function Achievements() {
  const getIcon = (tag) => {
    if (tag.includes("1")) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (tag.includes("2")) return <Medal className="w-5 h-5 text-slate-400" />;
    if (tag.includes("5-Star")) return <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />;
    return <CheckCircle className="w-5 h-5 text-purple-500" />;
  };

  return (
    <section id="achievements" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
          Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
          Honors &amp; <span className="text-purple-600 dark:text-purple-400">Milestones</span>
        </h2>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          Consistent competitive excellence across institute contests and international platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[2rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-7 shadow-lg hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {item.tag}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  {getIcon(item.tag)}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-3">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-semibold text-neutral-500">Official Record</span>
              <span className="text-purple-500 font-mono text-[11px]">NIT Jamshedpur</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
