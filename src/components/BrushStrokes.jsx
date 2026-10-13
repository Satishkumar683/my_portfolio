export default function BrushStrokes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full max-w-[130%] max-h-[130%] -rotate-6 md:-rotate-12 transform-gpu scale-110 md:scale-125 opacity-85 dark:opacity-95 transition-transform duration-700 ease-out"
        viewBox="0 0 900 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brushGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#B89320" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F5D061" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="brushGrad2" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8C6F14" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F5D061" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <ellipse
          cx="460"
          cy="330"
          rx="260"
          ry="170"
          className="fill-amber-500/15 dark:fill-amber-400/20 blur-3xl"
        />
        <path
          d="M 60,340 C 140,310 240,290 350,260 C 450,230 600,170 760,110 C 830,85 890,65 895,72 C 890,85 820,135 720,195 C 610,260 480,315 370,345 C 270,370 170,390 70,375 C 55,372 45,350 60,340 Z"
          fill="url(#brushGrad1)"
        />
        <path
          d="M 520,185 C 610,140 730,90 850,45 C 880,35 885,42 865,58 C 790,110 680,175 580,225 C 545,242 530,235 520,185 Z"
          fill="url(#brushGrad2)"
        />
        <path
          d="M 120,440 C 210,410 320,380 430,345 C 560,305 690,260 830,200 C 870,182 880,195 845,218 C 740,285 620,345 490,395 C 380,438 270,470 145,475 C 120,475 105,450 120,440 Z"
          fill="url(#brushGrad1)"
        />
        <path
          d="M 230,490 C 330,455 450,415 560,375 C 650,342 740,310 790,285 C 810,275 805,285 775,305 C 690,360 590,415 480,460 C 390,498 300,520 220,515 C 210,514 215,497 230,490 Z"
          fill="url(#brushGrad2)"
          opacity="0.8"
        />
        <circle cx="875" cy="55" r="4" fill="#F5D061" opacity="0.9" />
        <circle cx="895" cy="90" r="3" fill="#D4AF37" opacity="0.8" />
        <circle cx="850" cy="180" r="4.5" fill="#E7C84D" opacity="0.85" />
        <circle cx="100" cy="355" r="3.5" fill="#D4AF37" opacity="0.9" />
      </svg>
    </div>
  );
}
