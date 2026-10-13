"use client";

import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
            <span>✦</span> Featured Works <span>✦</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-3 text-neutral-900 dark:text-white">
            Engineering &amp; <span className="text-[#D4AF37] font-editorial italic font-normal">Products</span>
          </h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-md font-sans">
          Production full-stack web platforms and deployed machine learning systems built end-to-end.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((proj, idx) => (
          <article
            key={idx}
            className="group rounded-[2.5rem] bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-8 sm:p-10 shadow-solid hover:translate-y-[-3px] hover:shadow-solid-lg transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header: Project Name & Year & Action Links */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-heading font-black px-3.5 py-1 rounded-full bg-[#D4AF37] text-black border-2 border-black shadow-solid-sm">
                  ✦ {proj.year}
                </span>

                <div className="flex items-center gap-2.5">
                  {/* GitHub link */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neo p-2.5 rounded-full bg-white dark:bg-[#0a0a0a] text-black dark:text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                    aria-label={`${proj.title} GitHub repository`}
                    title="Source Code"
                  >
                    <Code2 className="w-4 h-4" strokeWidth={2.3} />
                  </a>

                  {/* Live Demo link */}
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neo inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-heading font-black hover:bg-[#B89320] transition-all"
                    aria-label={`${proj.title} live deployment`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" strokeWidth={2.4} />
                  </a>
                </div>
              </div>

              {/* Title (No asterisk) */}
              <h3 className="text-2xl sm:text-3xl font-editorial font-black text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition-colors tracking-tight">
                {proj.title}
              </h3>

              <p className="text-xs font-heading font-bold text-neutral-500 mt-1 uppercase tracking-wider">
                {proj.tech.join(" • ")}
              </p>

              {/* Verified Impact Bullets */}
              <ul className="mt-6 space-y-3">
                {proj.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans"
                  >
                    <span className="text-[#D4AF37] font-black text-base shrink-0 leading-none mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Tags */}
            <div className="mt-8 pt-6 border-t-2 border-black/10 dark:border-[#D4AF37]/20 flex flex-wrap gap-2">
              {proj.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#fdfdfd] dark:bg-[#0a0a0a] text-neutral-800 dark:text-neutral-200 border-2 border-black/80 dark:border-[#D4AF37]/40 shadow-solid-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
