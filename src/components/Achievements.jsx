"use client";

import { ACHIEVEMENTS } from "@/lib/constants";
import { Trophy, Medal, Star, CheckCircle } from "lucide-react";

export default function Achievements() {
  const getIcon = (tag) => {
    if (tag.includes("1")) return <Trophy className="w-5 h-5 text-black" strokeWidth={2.3} />;
    if (tag.includes("2")) return <Medal className="w-5 h-5 text-black" strokeWidth={2.3} />;
    if (tag.includes("5-Star")) return <Star className="w-5 h-5 text-black fill-black" strokeWidth={2.3} />;
    return <CheckCircle className="w-5 h-5 text-black" strokeWidth={2.3} />;
  };

  return (
    <section id="achievements" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
          <span>✦</span> Track Record <span>✦</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-3 text-neutral-900 dark:text-white">
          Honors &amp; <span className="text-[#D4AF37] font-editorial italic font-normal">Milestones</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans">
          Competitive programming triumphs, institute contest podiums, and multi-platform algorithmic ratings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-7 shadow-solid hover:translate-y-[-2px] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-heading font-black text-black border-2 border-black bg-[#D4AF37] shadow-solid-sm">
                  ✦ {item.tag}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] border-2 border-black shadow-solid-sm">
                  {getIcon(item.tag)}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-heading font-extrabold text-neutral-900 dark:text-white mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-heading font-bold text-[#B89320] dark:text-[#F5D061] mb-3">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black/10 dark:border-[#D4AF37]/20 flex items-center justify-between text-xs font-heading">
              <span className="font-bold text-neutral-500">Official Record</span>
              <span className="text-black dark:text-[#D4AF37] font-extrabold">✓ Verified NIT JSR</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
