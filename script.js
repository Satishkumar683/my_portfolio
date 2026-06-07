/* ================================================================
   SATISH KUMAR — PORTFOLIO SCRIPT
   Particle Canvas · Typing Animation · Scroll FX · Navbar · Forms
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   1. ANIMATED PARTICLE BACKGROUND
   ---------------------------------------------------------------- */
(function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');

  // Particle configuration
  const CONFIG = {
    count:          90,       // number of particles
    maxRadius:      2.5,
    minRadius:      0.5,
    speed:          0.35,
    connectDist:    140,      // px — max distance to draw connecting lines
    colorOptions:   ['rgba(0,229,255,', 'rgba(168,85,247,', 'rgba(34,211,238,'],
    bgOpacity:      0.18,
  };

  let W, H, particles = [];

  // Resize canvas to fill viewport
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); });

  // Particle constructor
  function Particle() {
    this.reset();
  }
  Particle.prototype.reset = function () {
    this.x    = Math.random() * W;
    this.y    = Math.random() * H;
    this.r    = CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius);
    this.vx   = (Math.random() - 0.5) * CONFIG.speed;
    this.vy   = (Math.random() - 0.5) * CONFIG.speed;
    const col = CONFIG.colorOptions[Math.floor(Math.random() * CONFIG.colorOptions.length)];
    this.colorBase = col;
    this.alpha = 0.4 + Math.random() * 0.5;
  };

  // Create initial particles
  for (let i = 0; i < CONFIG.count; i++) {
    particles.push(new Particle());
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p, i) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0)  p.x = W;
      if (p.x > W)  p.x = 0;
      if (p.y < 0)  p.y = H;
      if (p.y > H)  p.y = 0;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.colorBase + p.alpha + ')';
      ctx.fill();

      // Draw connecting lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d < CONFIG.connectDist) {
          const lineAlpha = (1 - d / CONFIG.connectDist) * 0.12;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = p.colorBase + lineAlpha + ')';
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
})();


/* ----------------------------------------------------------------
   2. TYPING ANIMATION
   ---------------------------------------------------------------- */
(function initTyping() {
  const el     = document.getElementById('typed-text');
  const phrases = [
    'Competitive Programmer',
    'C++ Enthusiast',
    'ML Engineer',
    'Problem Solver',
    'Full-Stack Developer',
    'NIT Jamshedpur',
    'Codeforces Pupil 1330',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  const SPEED_TYPE   = 80;   // ms per char typed
  const SPEED_DELETE = 45;   // ms per char deleted
  const PAUSE_END    = 1800; // ms at end of phrase
  const PAUSE_START  = 300;  // ms before typing

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      // Typing forward
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        // Finished typing — pause then delete
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    } else {
      // Deleting
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        // Finished deleting — move to next phrase
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, SPEED_DELETE);
    }
  }

  tick();
})();


/* ----------------------------------------------------------------
   3. STICKY NAVBAR + ACTIVE LINK HIGHLIGHTING
   ---------------------------------------------------------------- */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Add 'scrolled' class after scrolling down
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


/* ----------------------------------------------------------------
   4. HAMBURGER MENU (MOBILE)
   ---------------------------------------------------------------- */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();


/* ----------------------------------------------------------------
   5. SCROLL REVEAL (FADE-IN ANIMATIONS)
   ---------------------------------------------------------------- */
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once revealed, no need to observe further
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:  0.12,
    rootMargin: '0px 0px -60px 0px',
  });

  targets.forEach(el => observer.observe(el));
})();


/* ----------------------------------------------------------------
   6. SKILL BAR ANIMATIONS
   ---------------------------------------------------------------- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item  = entry.target;
        const fill  = item.querySelector('.skill-bar-fill');
        const level = item.getAttribute('data-level');
        // Slight delay so the section fade-in completes first
        setTimeout(() => {
          fill.style.width = level + '%';
        }, 200);
        observer.unobserve(item);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();


/* ----------------------------------------------------------------
   7. SMOOTH SCROLL FOR ALL ANCHOR LINKS
   ---------------------------------------------------------------- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();


/* ----------------------------------------------------------------
   8. CONTACT FORM HANDLER
   ---------------------------------------------------------------- */
function handleFormSubmit() {
  const nameEl    = document.getElementById('name');
  const emailEl   = document.getElementById('email');
  const subjectEl = document.getElementById('subject');
  const msgEl     = document.getElementById('message');
  const formMsg   = document.getElementById('form-msg');
  const sendBtn   = document.getElementById('send-btn');

  // Reset previous message
  formMsg.className  = 'form-msg';
  formMsg.textContent = '';

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const subject = subjectEl.value.trim();
  const message = msgEl.value.trim();

  // Basic validation
  if (!name) {
    showFormMsg('error', '⚠ Please enter your name.');
    nameEl.focus();
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormMsg('error', '⚠ Please enter a valid email address.');
    emailEl.focus();
    return;
  }
  if (!message) {
    showFormMsg('error', '⚠ Please write a message.');
    msgEl.focus();
    return;
  }

  // Simulate sending (replace with real API / EmailJS / Formspree in production)
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';

  setTimeout(() => {
    sendBtn.disabled    = false;
    sendBtn.innerHTML   = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
    showFormMsg('success', '✅ Message sent! I\'ll get back to you soon.');
    // Clear fields
    nameEl.value = emailEl.value = subjectEl.value = msgEl.value = '';
  }, 1800);

  function showFormMsg(type, text) {
    formMsg.className   = 'form-msg ' + type;
    formMsg.textContent = text;
  }
}


/* ----------------------------------------------------------------
   9. COUNTER ANIMATION (stat numbers in hero/about)
   ---------------------------------------------------------------- */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el       = entry.target;
      const raw      = el.textContent.trim();
      // Extract numeric part (handles "8.69", "1330", "1738")
      const numMatch = raw.match(/[\d.]+/);
      if (!numMatch) return;
      const target   = parseFloat(numMatch[0]);
      const isFloat  = raw.includes('.');
      const duration = 1400; // ms
      const start    = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        // Ease out cubic
        const eased    = 1 - Math.pow(1 - progress, 3);
        const value    = eased * target;
        el.textContent = isFloat ? value.toFixed(2) : Math.floor(value);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = raw; // restore original (with any suffix)
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();


/* ----------------------------------------------------------------
   10. RATING CIRCLE GLOW PULSE (CP cards)
   ---------------------------------------------------------------- */
(function initRatingPulse() {
  // Inject a CSS keyframe for subtle glow pulse
  const style = document.createElement('style');
  style.textContent = `
    @keyframes glow-pulse {
      0%, 100% { box-shadow: var(--ring-glow), inset 0 0 25px rgba(0,0,0,0); }
      50%       { box-shadow: var(--ring-glow-bright), inset 0 0 25px rgba(255,255,255,0.03); }
    }
    .cf-ring { --ring-glow: 0 0 25px rgba(0,229,255,0.3);   --ring-glow-bright: 0 0 40px rgba(0,229,255,0.6); }
    .lc-ring { --ring-glow: 0 0 25px rgba(251,191,36,0.3);  --ring-glow-bright: 0 0 40px rgba(251,191,36,0.6); }
    .cc-ring { --ring-glow: 0 0 25px rgba(168,85,247,0.3);  --ring-glow-bright: 0 0 40px rgba(168,85,247,0.6); }
    .hr-ring { --ring-glow: 0 0 25px rgba(34,211,238,0.3);  --ring-glow-bright: 0 0 40px rgba(34,211,238,0.6); }

    .rating-circle { animation: glow-pulse 3s ease-in-out infinite; }
  `;
  document.head.appendChild(style);
})();


/* ----------------------------------------------------------------
   11. ACTIVE SECTION HIGHLIGHT (timeline dots color swap)
   ---------------------------------------------------------------- */
(function initTimelineDots() {
  const items = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const dot = entry.target.querySelector('.timeline-dot');
      if (!dot) return;
      if (entry.isIntersecting) {
        dot.style.background  = '#a855f7';
        dot.style.boxShadow   = '0 0 20px rgba(168,85,247,0.7)';
      } else {
        dot.style.background  = '';
        dot.style.boxShadow   = '';
      }
    });
  }, { threshold: 0.5 });

  items.forEach(el => observer.observe(el));
})();


/* ----------------------------------------------------------------
   12. CURSOR GLOW EFFECT (desktop only)
   ---------------------------------------------------------------- */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices

  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    top: 0; left: 0;
  `;
  document.body.appendChild(cursor);

  let raf;
  document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
})();


/* ----------------------------------------------------------------
   13. FLOATING BADGE FOR CP CARDS
   — Shows a toast when a CP card is clicked on mobile
   ---------------------------------------------------------------- */
(function initCpToast() {
  if (!window.matchMedia('(pointer: coarse)').matches) return;

  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(120%);
    background: rgba(0,229,255,0.12); border: 1px solid rgba(0,229,255,0.3);
    color: #00e5ff; padding: 0.75rem 1.5rem; border-radius: 100px;
    font-family: 'Orbitron', monospace; font-size: 0.78rem; letter-spacing: 0.08em;
    z-index: 9000; transition: transform 0.4s ease; white-space: nowrap;
    backdrop-filter: blur(10px);
  `;
  document.body.appendChild(toast);

  function showToast(text) {
    toast.textContent = text;
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(120%)';
    }, 2500);
  }

  document.querySelectorAll('.cp-card').forEach(card => {
    card.addEventListener('click', () => {
      const platform = card.getAttribute('data-platform');
      const map = {
        codeforces: 'Opening Codeforces Profile',
        leetcode:   'Opening LeetCode Profile',
        codechef:   'Opening CodeChef Profile',
        hackerrank: 'Opening HackerRank Profile',
      };
      showToast(map[platform] || 'Opening Profile');
    });
  });
})();


/* ----------------------------------------------------------------
   14. PAGE LOAD — trigger hero fade-ups immediately
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Immediately make hero elements visible (they're above-the-fold)
  setTimeout(() => {
    document.querySelectorAll('.hero .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 130);
    });
  }, 100);
});