"use client";

import { POSITIONS_OF_RESPONSIBILITY } from "@/lib/constants";
import { Users2, Code, Laptop } from "lucide-react";

export default function Roles() {
  const roleIcons = [
    <Code key="0" className="w-5 h-5 text-purple-500" />,
    <Laptop key="1" className="w-5 h-5 text-purple-500" />,
  ];

  return (
    <section id="roles" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Leadership &amp; Community
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
            Positions of <span className="text-purple-600 dark:text-purple-400">Responsibility</span>
          </h2>
        </div>
        <p className="text-neutral-500 text-sm max-w-md">
          Guiding juniors, leading coding competitions, and contributing to the technical ecosystem at NIT Jamshedpur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {POSITIONS_OF_RESPONSIBILITY.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[2.25rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-10 shadow-lg hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-neutral-400">{item.location}</span>
              </div>

              <div className="flex items-center gap-3 mb-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  {roleIcons[idx] || <Users2 className="w-5 h-5 text-purple-500" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  {item.role}
                </h3>
              </div>

              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-6 pl-13">
                {item.organization}
              </p>

              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-medium">Active Position</span>
              <span className="font-mono text-purple-500 text-[11px]">NIT Jamshedpur</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
