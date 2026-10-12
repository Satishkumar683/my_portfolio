# 🌐 Satish Kumar — Personal Portfolio

A modern, high-performance developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, inspired by creative editorial design.

🔗 **Live Portfolio**: [my-portfolio-lilac-six-21.vercel.app](https://my-portfolio-lilac-six-21.vercel.app/)

---

## 🚀 Key Features

* **Creative Hero Showcase**: Bold poster typography with layered cutout portrait, dynamic brush strokes, and animated badges.
* **Spider-Man & Gwen Web Scrollbar**: Custom interactive canvas scroll tracker with organic harmonic web physics, luminance contrast awareness, and click-to-scroll navigation.
* **Interactive Eye-Follow Widget**: Playful eyes tracking mouse coordinates in real time.
* **Editorial Narrative & Academic Foundation**: Authentic personal journey alongside verified academic milestones at NIT Jamshedpur.
* **Competitive Programming Hub**: Live metrics and direct links for Codeforces (Specialist, 1430), LeetCode (Knight, 1866), CodeChef, and HackerRank.
* **Interactive Projects Showcase**: Categorized by Full-Stack, Machine Learning, and Web3/Cloud with GitHub repos and live demo links:
  * **Monetra** — Cloud Micro-Donations Platform (Next.js 14, FastAPI, PostgreSQL, Razorpay).
  * **RealEstateAI** — Real Estate Valuation & Investment Intelligence Engine (FastAPI, Scikit-Learn, LightGBM, React).
  * **Algoverse** — Interactive DSA Visualizer & Algorithm Sandbox (React, Vite, Tailwind CSS).
  * **StreamPulse** — Real-Time Collaborative Workspace (Next.js, Node.js, WebSockets, Redis).
* **Technical Stack Matrix**: Clean categorized skills grid with glowing hover states.
* **Dark / Light Mode**: Smooth theme toggling with persistent state via `next-themes`.
* **Full-Screen Editorial Navigation Menu**: Cinematic slide-out overlay with quick shortcuts and social handles.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations & Motion**: Canvas 2D API, CSS Keyframes, Tailwind Transitions
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Syne, Plus Jakarta Sans, JetBrains Mono, Caveat
* **Theme Management**: `next-themes`

---

## 📂 Project Structure

```bash
portfolio/
├── public/
│   ├── images/
│   │   ├── satish-hero.png    # Hero portrait cutout
│   │   ├── satish.jpeg        # Original photo
│   │   ├── spiderman.png      # Top web indicator silhouette
│   │   └── gwen.png           # Bottom web indicator silhouette
│   └── my_resume.pdf          # Downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS & Spider Scrollbar animations
│   │   ├── layout.js          # Root layout with fonts & ThemeProvider
│   │   └── page.js            # Main single-page application
│   ├── components/
│   │   ├── Hero.jsx           # Editorial Poster Hero Section
│   │   ├── About.jsx          # Personal story & NIT JSR education
│   │   ├── Skills.jsx         # Technical skillset grid
│   │   ├── CP.jsx             # Competitive programming profiles
│   │   ├── Projects.jsx       # Featured projects showcase
│   │   ├── Achievements.jsx   # Competitive milestones & rankings
│   │   ├── Roles.jsx          # Leadership & open source experience
│   │   ├── Contact.jsx        # Contact form & social connections
│   │   ├── SpiderWebScrollbar.jsx # Spider-Man canvas scrollbar
│   │   ├── EyeFollow.jsx      # Interactive eye tracking widget
│   │   ├── FullScreenMenu.jsx # Slide-out navigation drawer
│   │   ├── Navbar.jsx         # Header bar with theme toggle & menu
│   │   └── Footer.jsx         # Minimalist footer
│   └── lib/
│       └── constants.js       # Central data store (projects, skills, CP)
└── package.json
```

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Satishkumar683/my_portfolio.git
cd my_portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 👨‍💻 Author

**Satish Kumar**
* 🎓 Computer Science & Engineering Undergraduate @ NIT Jamshedpur
* 💻 GitHub: [@Satishkumar683](https://github.com/Satishkumar683)
* 💼 LinkedIn: [satish-kumar](https://www.linkedin.com/in/satish-kumar-374822337)
* ⚔️ Codeforces: [codex_s](https://codeforces.com/profile/codex_s)
* 🧠 LeetCode: [codex_s](https://leetcode.com/u/codex_s/)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
