"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-[#0a0a0d]/50 backdrop-blur-md py-12 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-bold">
            <span className="font-mono text-purple-600 dark:text-purple-400">&lt;</span>
            <span>Satish Kumar</span>
            <span className="font-mono text-purple-600 dark:text-purple-400">/&gt;</span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            NIT Jamshedpur &bull; Computer Science &bull; Class of 2028
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-bold tracking-wider text-neutral-600 dark:text-neutral-400">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Codeforces
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            LeetCode
          </a>
          <a
            href={PERSONAL_INFO.socials.codechef}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            CodeChef
          </a>
        </div>

        <div className="text-xs text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Satish Kumar. Crafted with Next.js &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  );
}
