"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// Multi-frequency harmonic wave helper for organic web strands
function harmonicWave(phase, offset, freq) {
  return (
    0.5 * Math.sin(phase * freq + offset) +
    0.25 * Math.sin(phase * freq * 2.13 + 1.7 * offset) +
    0.25 * Math.sin(phase * freq * 0.53 + 3.1 * offset)
  );
}

let colorDetectCanvas = null;
let colorDetectCtx = null;

function getBackgroundLuminance(x, y, ignoreSet) {
  if (typeof document === "undefined") return 1;
  try {
    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      if (ignoreSet.has(el) || el.closest(".spider-scroll-sidebar")) continue;
      const bg = getComputedStyle(el).backgroundColor;
      if (!bg || bg === "transparent" || bg === "rgba(0, 0, 0, 0)") continue;

      if (!colorDetectCanvas) {
        colorDetectCanvas = document.createElement("canvas");
        colorDetectCanvas.width = 1;
        colorDetectCanvas.height = 1;
        colorDetectCtx = colorDetectCanvas.getContext("2d", { willReadFrequently: true });
      }
      if (!colorDetectCtx) return null;
      colorDetectCtx.clearRect(0, 0, 1, 1);
      colorDetectCtx.fillStyle = "#000";
      colorDetectCtx.fillStyle = bg;
      colorDetectCtx.fillRect(0, 0, 1, 1);
      const data = colorDetectCtx.getImageData(0, 0, 1, 1).data;
      if (data && data[3] > 10) {
        const [r, g, b] = [data[0] / 255, data[1] / 255, data[2] / 255].map((val) =>
          val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
        );
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }
    }
  } catch (err) {
    // fallback
  }

  // Fallback to checking document dark mode class
  if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
    return 0.1;
  }
  return 1;
}

export default function SpiderWebScrollbar() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const spideyRef = useRef(null);
  const gwenRef = useRef(null);

  const animFrameRef = useRef(0);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const canvasSizeRef = useRef({ w: 0, h: 0 });
  const clustersRef = useRef([]);
  const startTimeRef = useRef(0);
  const lastSampleTimeRef = useRef(0);
  const luminanceSamplesRef = useRef(new Float32Array(20));

  // Sync scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollRef.current = scrollHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollHeight)) : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Background luminance sampling for dark/light contrast adaptation
  const updateLuminance = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ignoreSet = new Set();
    container.querySelectorAll("*").forEach((el) => ignoreSet.add(el));
    ignoreSet.add(container);

    if (spideyRef.current) {
      const rect = spideyRef.current.getBoundingClientRect();
      const lum = getBackgroundLuminance(rect.left + rect.width / 2, rect.top + rect.height / 2, ignoreSet);
      spideyRef.current.setAttribute("data-on-dark", String(lum < 0.45));
    }

    if (gwenRef.current) {
      const rect = gwenRef.current.getBoundingClientRect();
      const lum = getBackgroundLuminance(rect.left + rect.width / 2, rect.top + rect.height / 2, ignoreSet);
      gwenRef.current.setAttribute("data-on-dark", String(lum < 0.45));
    }

    const cRect = canvas.getBoundingClientRect();
    const centerX = cRect.left + cRect.width / 2;
    const samples = luminanceSamplesRef.current;
    for (let i = 0; i < 20; i++) {
      const y = cRect.top + (i / 19) * cRect.height;
      samples[i] = getBackgroundLuminance(centerX, y, ignoreSet);
    }
  }, []);

  // Resize canvas according to device pixel ratio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvasSizeRef.current = { w, h };

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Generate cluster nodes with deterministic pseudo-random seed
    let seed = 42;
    const prng = () => {
      seed = (16807 * seed + 0) % 0x7fffffff;
      return (seed - 1) / 0x7ffffffe;
    };

    const clusters = [];
    let curY = 30;
    while (curY < h - 18) {
      const intensity = 0.4 + 0.6 * prng();
      const clusterHeight = 30 * (0.6 + 0.6 * intensity);
      clusters.push({ y: curY, height: clusterHeight, intensity });
      curY += 60 + 80 * prng();
    }
    clustersRef.current = clusters;
  }, []);

  // Draw little hanging spider indicator at the current scroll head
  const drawSpider = useCallback((ctx, x, y, time, glowColor, spiderColor) => {
    ctx.save();
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 10;

    // Body
    ctx.beginPath();
    ctx.fillStyle = spiderColor;
    ctx.ellipse(x, y, 3, 4.5, 0, 0, 2 * Math.PI);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.ellipse(x, y - 5, 1.9, 1.9, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    // Legs
    ctx.strokeStyle = spiderColor;
    ctx.lineWidth = 0.8;
    const legAngles = [0.3, 0.75, 1.2, 1.7];
    for (const angle of legAngles) {
      const twitch = 0.12 * Math.sin(2.5 * time + 3 * angle);
      const theta = angle + twitch;

      // Left leg
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(
        x - 5 * Math.cos(theta) * 1.1,
        y + 5 * Math.sin(theta) * 0.7,
        x - 5 * Math.cos(theta - 0.3) * 2.2,
        y + 5 * Math.sin(theta - 0.3) * 1.6
      );
      ctx.stroke();

      // Right leg
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(
        x + 5 * Math.cos(theta) * 1.1,
        y + 5 * Math.sin(theta) * 0.7,
        x + 5 * Math.cos(theta - 0.3) * 2.2,
        y + 5 * Math.sin(theta - 0.3) * 1.6
      );
      ctx.stroke();
    }

    // Red hourglass diamond mark
    ctx.fillStyle = glowColor;
    ctx.beginPath();
    ctx.moveTo(x, y - 1.25);
    ctx.lineTo(x - 1.2, y);
    ctx.lineTo(x, y + 1.25);
    ctx.lineTo(x + 1.2, y);
    ctx.closePath();
    ctx.fill();
  }, []);

  // Main canvas render loop
  const renderFrame = useCallback(
    (ctx, width, height, time, spiderY) => {
      const centerX = width / 2;
      const clusters = clustersRef.current;
      const samples = luminanceSamplesRef.current;

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const getColorAtY = (y) => {
        let isDark = true;
        if (samples.length > 0 && height > 0) {
          const sampleIdx = (y / height) * (samples.length - 1);
          const i = Math.floor(sampleIdx);
          const val1 = samples[Math.min(i, samples.length - 1)];
          const val2 = samples[Math.min(i + 1, samples.length - 1)];
          const interpolated = val1 + (val2 - val1) * (sampleIdx - i);
          isDark = interpolated < 0.45;
        }

        return {
          main: isDark ? "rgba(255, 255, 255, 0.55)" : "rgba(0, 0, 0, 0.55)",
          light: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
          glow: isDark ? "rgba(255, 80, 80, 0.8)" : "rgba(220, 38, 38, 0.8)",
        };
      };

      // 5 vertical primary web strands
      for (let sIdx = 0; sIdx < 5; sIdx++) {
        const offset = 100 + 73.7 * sIdx;
        const strandPhase = (sIdx / 5) * Math.PI * 2;
        const isCore = sIdx < 2;
        let prevX = 0;
        let prevY = 0;

        for (let y = 0; y <= height; y += 3) {
          // Check cluster intensity
          let clusterBoost = 0;
          for (const cl of clusters) {
            const dist = Math.abs(y - cl.y);
            const reach = 0.7 * cl.height;
            if (dist < reach) {
              const boost = cl.intensity * (1 - dist / reach);
              if (boost > clusterBoost) clusterBoost = boost;
            }
          }

          const baseWave = 3 * harmonicWave(y, offset, 0.015);
          const clusterWave = baseWave + (14 * harmonicWave(y, offset + 50, 0.06) - baseWave) * clusterBoost;
          const sway = Math.sin(0.8 * time + 0.008 * y + strandPhase) * (1 + 3 * clusterBoost) * 0.6;

          let ripple = 0;
          if (clusterBoost > 0.3) {
            ripple = Math.sin(0.18 * y + offset) * clusterBoost * 6 * Math.sin(0.5 * time + offset);
          }

          const spiderDist = Math.abs(y - spiderY);
          const spiderTension = spiderDist < 40 ? (1 - spiderDist / 40) * 3 * Math.sin(strandPhase) : 0;
          const curX = centerX + clusterWave + sway + ripple + spiderTension;

          if (y > 0) {
            const colors = getColorAtY(y);
            ctx.beginPath();
            ctx.strokeStyle = isCore ? colors.main : colors.light;
            ctx.lineWidth = isCore ? 1.2 : 0.7;
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(curX, y);
            ctx.stroke();
          }

          prevX = curX;
          prevY = y;
        }
      }

      // Horizontal web connection arcs between clusters
      for (const cl of clusters) {
        const count = Math.floor(2 + 4 * cl.intensity);
        for (const n of Array(count).keys()) {
          const seedOffset = 17 * cl.y + 31 * n;
          const arcY = cl.y - 0.4 * cl.height + (n / count) * cl.height * 0.8;
          const startX = centerX + 14 * harmonicWave(arcY, seedOffset, 0.1) * 0.8;
          const endX = centerX + 14 * harmonicWave(arcY + 15, seedOffset + 20, 0.1) * 0.8;
          const cpX = centerX + 14 * harmonicWave(arcY + 7, seedOffset + 40, 0.15) * 1.2;
          const sway = 1.5 * Math.sin(0.6 * time + seedOffset);
          const colors = getColorAtY(arcY);

          ctx.beginPath();
          ctx.strokeStyle = colors.light;
          ctx.lineWidth = 0.5;
          ctx.moveTo(startX + sway, arcY);
          ctx.quadraticCurveTo(cpX + sway, arcY + 8, endX + sway, arcY + 16);
          ctx.stroke();
        }
      }

      // Cross web filaments
      for (const cl of clusters) {
        const count = Math.floor(1 + 3 * cl.intensity);
        for (const n of Array(count).keys()) {
          const seedOffset = 13 * cl.y + 47 * n;
          const filY = cl.y + harmonicWave(n, seedOffset, 1) * cl.height * 0.3;
          const startX = centerX + 4 * harmonicWave(filY, seedOffset, 0.08);
          const dir = (n % 2) * 2 - 1;
          const endX = startX + dir * (6 + 10 * cl.intensity);
          const endY = filY + 5 + 8 * cl.intensity;
          const sway = 2 * Math.sin(1.2 * time + seedOffset);
          const colors = getColorAtY(filY);

          ctx.beginPath();
          ctx.strokeStyle = colors.light;
          ctx.lineWidth = 0.4;
          ctx.moveTo(startX, filY);
          ctx.quadraticCurveTo(startX + 4 * dir + sway, filY + 4, endX + sway, endY);
          ctx.stroke();
        }
      }

      // Draw active spider indicator
      const spiderColors = getColorAtY(spiderY);
      drawSpider(ctx, centerX, spiderY, time, spiderColors.glow, spiderColors.main);
    },
    [drawSpider]
  );

  // Animation frame loop
  useEffect(() => {
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    startTimeRef.current = performance.now();

    const loop = (timestamp) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w, h } = canvasSizeRef.current;
      if (w === 0 || h === 0) {
        animFrameRef.current = requestAnimationFrame(loop);
        return;
      }

      const elapsed = (timestamp - startTimeRef.current) / 1000;

      // Smooth lerp scroll progress
      currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * 0.08;
      const spiderY = 7 + currentScrollRef.current * (h - 14);

      // Periodically sample luminance
      if (timestamp - lastSampleTimeRef.current > 50) {
        lastSampleTimeRef.current = timestamp;
        updateLuminance();
      }

      renderFrame(ctx, w, h, elapsed, spiderY);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
    };
  }, [handleResize, renderFrame, updateLuminance]);

  // Click on canvas to jump/scroll to that location
  const handleCanvasClick = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: ratio * maxScroll,
      behavior: "smooth",
    });
  }, []);

  return (
    <div ref={containerRef} className="spider-scroll-sidebar" aria-hidden="true">
      {/* Spider-Man at top */}
      <div
        ref={spideyRef}
        className="spidey-img cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Scroll to top"
      >
        <Image
          src="/images/spiderman.png"
          alt="Spider-Man"
          width={110}
          height={120}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Interactive Web Canvas */}
      <canvas
        ref={canvasRef}
        className="web-canvas"
        onClick={handleCanvasClick}
        style={{ pointerEvents: "auto", cursor: "pointer" }}
      />

      {/* Spider-Gwen at bottom */}
      <div
        ref={gwenRef}
        className="gwen-img cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
        title="Scroll to bottom"
      >
        <Image
          src="/images/gwen.png"
          alt="Spider-Gwen"
          width={110}
          height={120}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
