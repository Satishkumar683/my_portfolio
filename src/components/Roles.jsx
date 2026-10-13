"use client";

import { POSITIONS_OF_RESPONSIBILITY } from "@/lib/constants";
import { Users2, Code, Laptop } from "lucide-react";

export default function Roles() {
  const roleIcons = [
    <Code key="0" className="w-5 h-5 text-black" strokeWidth={2.3} />,
    <Laptop key="1" className="w-5 h-5 text-black" strokeWidth={2.3} />,
  ];

  return (
    <section id="roles" className="w-full py-20 md:py-24 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
            <span>✦</span> Leadership &amp; Community <span>✦</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-3 text-neutral-900 dark:text-white">
            Positions of <span className="text-[#D4AF37] font-editorial italic font-normal">Responsibility</span>
          </h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-md font-sans">
          Guiding juniors, leading coding competitions, and contributing to the technical ecosystem at NIT Jamshedpur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {POSITIONS_OF_RESPONSIBILITY.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[2.25rem] bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-8 sm:p-10 shadow-solid hover:translate-y-[-2px] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-heading font-black px-3.5 py-1 rounded-full bg-[#D4AF37] text-black border-2 border-black shadow-solid-sm">
                  ✦ {item.period}
                </span>
                <span className="text-xs font-heading font-bold text-neutral-500">{item.location}</span>
              </div>

              <div className="flex items-center gap-3.5 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37] border-2 border-black shadow-solid-sm">
                  {roleIcons[idx] || <Users2 className="w-5 h-5 text-black" strokeWidth={2.3} />}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  {item.role}
                </h3>
              </div>

              <p className="text-sm font-heading font-bold text-[#B89320] dark:text-[#F5D061] mb-6">
                {item.organization}
              </p>

              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#D4AF37] font-black text-sm shrink-0 leading-none mt-0.5">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-black/10 dark:border-[#D4AF37]/20 flex items-center justify-between text-xs font-heading font-bold text-neutral-500">
              <span>NIT Jamshedpur</span>
              <span className="text-black dark:text-[#D4AF37]">✦ Active Contributor</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
