"use client";

import { CP_PROFILES } from "@/lib/constants";
import { ExternalLink, Flame } from "lucide-react";

export default function CP() {
  return (
    <section id="cp" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Competitive Programming
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
            Rated Across <span className="text-purple-600 dark:text-purple-400">Global Arenas</span>
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-600 dark:text-purple-400">
          <Flame className="w-3.5 h-3.5" />
          <span>1000+ Algorithmic Problems Solved</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {CP_PROFILES.map((profile, idx) => (
          <a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-6 shadow-md hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-base text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight">
                  {profile.platform}
                </span>
                <span className="text-xs font-mono text-neutral-400">@{profile.handle}</span>
              </div>

              {/* Rating Display */}
              <div className="my-5 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 text-center border border-neutral-200/60 dark:border-neutral-800/60">
                <div className="text-3xl font-display font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  {profile.rating}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-0.5">
                  Rating
                </div>
              </div>

              {/* Rank Badge */}
              <div className="flex justify-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border font-mono ${profile.badgeColor}`}>
                  {profile.rank}
                </span>
              </div>

              <p className="text-xs text-neutral-500 text-center leading-relaxed">
                {profile.stats}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
