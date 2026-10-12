"use client";

import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
            Engineering &amp; <span className="text-purple-600 dark:text-purple-400">Products</span>
          </h2>
        </div>
        <p className="text-neutral-500 text-sm max-w-md">
          Production full-stack web platforms and deployed machine learning systems built end-to-end.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((proj, idx) => (
          <article
            key={idx}
            className="group rounded-[2.5rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-10 shadow-xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header: Project Name & Year */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {proj.year}
                </span>

                <div className="flex items-center gap-2">
                  {/* GitHub link */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 transition-colors"
                    aria-label={`${proj.title} GitHub repository`}
                    title="Source Code"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>

                  {/* Live Demo link */}
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 transition-all shadow-sm"
                    aria-label={`${proj.title} live deployment`}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight">
                {proj.title}
              </h3>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1 mb-6">
                {proj.tagline}
              </p>

              {/* Bullet list from resume */}
              <ul className="space-y-2.5 mb-8 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {proj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-2">
              {proj.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-800"
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
