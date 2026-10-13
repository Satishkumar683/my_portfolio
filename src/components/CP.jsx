"use client";

import { CP_PROFILES } from "@/lib/constants";
import { ExternalLink, Flame } from "lucide-react";

export default function CP() {
  return (
    <section id="cp" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
            <span>✦</span> Competitive Programming <span>✦</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-3 text-neutral-900 dark:text-white">
            Rated Across <span className="text-[#D4AF37] font-editorial italic font-normal">Global Arenas</span>
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm">
          <Flame className="w-4 h-4 text-black" strokeWidth={2.4} />
          <span>✦ 1000+ Algorithmic Problems Solved ✦</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {CP_PROFILES.map((profile, idx) => (
          <a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-6 shadow-solid hover:-translate-y-1 hover:shadow-solid-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-extrabold text-base text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                  {profile.platform}
                </span>
                <span className="text-xs font-heading font-semibold text-neutral-500">@{profile.handle}</span>
              </div>

              {/* Rating Display */}
              <div className="my-5 p-4 rounded-2xl bg-[#fdfdfd] dark:bg-[#0a0a0a] text-center border-2 border-black/80 dark:border-[#D4AF37]/40 shadow-solid-sm">
                <div className="text-3xl font-editorial font-black text-[#D4AF37] tracking-tight">
                  {profile.rating}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-heading font-bold mt-0.5">
                  Live Rating
                </div>
              </div>

              {/* Rank Badge */}
              <div className="flex justify-center mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-heading font-black border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black shadow-solid-sm">
                  {profile.rank}
                </span>
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center leading-relaxed font-sans">
                {profile.stats}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t-2 border-black/10 dark:border-[#D4AF37]/20 flex items-center justify-center gap-1.5 text-xs font-heading font-bold text-neutral-700 dark:text-neutral-300 group-hover:text-[#D4AF37] transition-colors">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.2} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
