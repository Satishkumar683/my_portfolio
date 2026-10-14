export const PERSONAL_INFO = {
  name: "Satish Kumar",
  title: "Competitive Programmer & Full-Stack Developer",
  institution: "NIT Jamshedpur",
  cgpa: "8.67/10",
  batch: "2024 – 2028",
  phone: "+91-9334585382",
  email: "satishkumarhp1718@gmail.com",
  portfolio: "https://my-portfolio-lilac-six-21.vercel.app/",
  resumePdf: "/my_resume.pdf",
  socials: {
    github: "https://github.com/Satishkumar683",
    linkedin: "https://www.linkedin.com/in/satish-kumar-374822337",
    codeforces: "https://codeforces.com/profile/codex_s",
    leetcode: "https://leetcode.com/u/codex_s/",
    codechef: "https://www.codechef.com/users/whirl_wind",
    hackerrank: "https://www.hackerrank.com/profile/whirlwindSK",
  },
  summary:
    "Computer Science undergraduate at NIT Jamshedpur with strong foundations in Data Structures & Algorithms, Machine Learning, and Full-Stack Development. Passionate about building scalable software solutions and solving complex technical problems.",
};

export const TYPING_PHRASES = [
  "Competitive Programmer",
  "Full-Stack Developer",
  "Codeforces Specialist (1430)",
  "LeetCode Knight (1866)",
  "NIT Jamshedpur Undergrad",
  "ML & Systems Enthusiast",
];

export const EDUCATION = [
  {
    institution: "National Institute of Technology Jamshedpur",
    degree: "B.Tech in Computer Science and Engineering",
    score: "CGPA: 8.67 / 10",
    period: "2024 – 2028",
    location: "Jamshedpur, India",
    icon: "🎓",
  },
  {
    institution: "St. Michael Anglo Indian School",
    degree: "Senior Secondary (Class XII)",
    score: "91.8%",
    period: "2021 – 2023",
    location: "Jharkhand, India",
    icon: "📚",
  },
  {
    institution: "St. Michael Anglo Indian School",
    degree: "Secondary School (Class X)",
    score: "94.8%",
    period: "2021",
    location: "Jharkhand, India",
    icon: "🏫",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["C++", "C", "Python", "JavaScript", "Java", "SQL"],
  },
  {
    category: "Web Development",
    skills: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST APIs",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Matplotlib",
      "Feature Engineering",
      "EDA",
      "Regression",
      "Classification",
      "Ensemble Learning",
    ],
  },
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Computer Architecture",
      "Computer Networks",
      "System Design",
    ],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Postman"],
  },
];

export const CP_PROFILES = [
  {
    platform: "Codeforces",
    handle: "codex_s",
    rating: "1430",
    rank: "Specialist",
    badgeColor: "text-black border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37]",
    url: "https://codeforces.com/profile/codex_s",
    stats: "Specialist rating, consistent Div. 2/3 rounds",
  },
  {
    platform: "LeetCode",
    handle: "codex_s",
    rating: "1866",
    rank: "Knight",
    badgeColor: "text-black border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37]",
    url: "https://leetcode.com/u/codex_s/",
    stats: "Knight Tier, top rank in weekly contests",
  },
  {
    platform: "CodeChef",
    handle: "whirl_wind",
    rating: "1633",
    rank: "3-Star ⭐⭐⭐",
    badgeColor: "text-black border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37]",
    url: "https://www.codechef.com/users/whirl_wind",
    stats: "3-Star rated competitive programmer",
  },
  {
    platform: "AtCoder",
    handle: "codex_s",
    rating: "566",
    rank: "Brown",
    badgeColor: "text-black border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37]",
    url: "https://atcoder.jp/",
    stats: "Regular participant in AtCoder Beginner Contests",
  },
  {
    platform: "HackerRank",
    handle: "whirlwindSK",
    rating: "5-Star ⭐⭐⭐⭐⭐",
    rank: "Gold Badge",
    badgeColor: "text-black border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37]",
    url: "https://www.hackerrank.com/profile/whirlwindSK",
    stats: "5-Star in Problem Solving & Algorithms",
  },
];

export const PROJECTS = [
  {
    title: "Monetra",
    tagline: "Full-Stack Crowdfunding Platform with Verified Payments",
    year: "2026",
    tech: ["Next.js", "MongoDB", "NextAuth", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/Satishkumar683/monetra",
    live: "https://monetra-rho.vercel.app/",
    bullets: [
      "Developed a full-stack crowdfunding platform with 15+ REST APIs, OAuth authentication, protected routes, and MongoDB-based data management.",
      "Integrated Razorpay payment gateway with signature verification, transaction handling, and automated campaign tracking.",
      "Built responsive dashboards with CRUD operations, real-time analytics, and donation tracking using Next.js & Tailwind CSS.",
      "Implemented secure role-based access & NextAuth user management for personalized donor & fundraiser workflows.",
    ],
  },
  {
    title: "RealEstateAI",
    tagline: "End-to-End AI Property Valuation & Recommendation Engine",
    year: "2026",
    tech: ["Python", "FastAPI", "Next.js", "XGBoost", "Scikit-learn", "Selenium"],
    github: "https://github.com/Satishkumar683/real-estate-capstone",
    live: "https://real-estate-capstone-virid.vercel.app/",
    bullets: [
      "Scraped thousands of property listings with BeautifulSoup & Selenium, followed by robust data cleaning and high-dimensional feature engineering.",
      "Trained and tuned 10+ machine learning models including XGBoost, Random Forest, and Gradient Boosting for precision price prediction and ranking.",
      "Built high-throughput REST APIs using FastAPI and integrated them with a responsive Next.js web application for instant valuation estimates.",
      "Applied statistical feature selection and cross-validation pipelines to maximize recommendation accuracy.",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Batch Rank 1 — CodeFest 2024-25",
    subtitle: "NIT Jamshedpur Institute CP Contest",
    description: "Secured Batch Rank 1 in premier institute-level contest at NIT Jamshedpur in the freshman year.",
    tag: "Rank 1",
  },
  {
    title: "Batch Rank 2 — CodeFest 2025-26",
    subtitle: "NIT Jamshedpur Institute CP Contest",
    description: "Demonstrated continued competitive excellence by securing Batch Rank 2 across the institute.",
    tag: "Rank 2",
  },
  {
    title: "Rank 1 — CodeZenith 2025-26",
    subtitle: "Speed & Logic Coding Contest",
    description: "Secured top position overall through rapid algorithmic problem solving and clean implementations.",
    tag: "Rank 1",
  },
  {
    title: "Rank 2 — Binary Blitz 2025-26",
    subtitle: "DSA Contest",
    description: "Rank 2 finish in an intensive Data Structures and Algorithms contest.",
    tag: "Rank 2",
  },
  {
    title: "Global Platform Ratings & Badges",
    subtitle: "Codeforces Specialist & LeetCode Knight",
    description: "Achieved Codeforces Specialist (1430), LeetCode Knight (1866), CodeChef 3-Star (1633), and AtCoder 566.",
    tag: "Competitive",
  },
  {
    title: "1000+ Algorithmic Problems Solved",
    subtitle: "LeetCode, Codeforces, CodeChef, GFG, AtCoder",
    description: "Mastered algorithmic patterns across dynamic programming, graph theory, trees, and advanced data structures.",
    tag: "Milestone",
  },
  {
    title: "5-Star Rating on HackerRank",
    subtitle: "Problem Solving Badge",
    description: "Awarded HackerRank 5-Star gold badge for algorithmic consistency and logic verification.",
    tag: "5-Star",
  },
];

export const POSITIONS_OF_RESPONSIBILITY = [
  {
    role: "Competitive Programming Member",
    organization: "Programming Club, NIT Jamshedpur",
    period: "2026 – Present",
    location: "Jamshedpur, India",
    points: [
      "Participate in high-difficulty competitive programming contests and problem-solving sessions focusing on advanced DSA.",
      "Mentor juniors in DSA roadmaps, contest problem-solving heuristics, and competitive programming fundamentals.",
    ],
  },
  {
    role: "Tech Team Member",
    organization: "SCSE (Society of Computer Science & Engineering), NIT Jamshedpur",
    period: "2026 – Present",
    location: "Jamshedpur, India",
    points: [
      "Organize coding competitions, hackathons, and technical workshops across the CSE department.",
      "Conduct hands-on frontend development workshops and support the technical operations of club events.",
    ],
  },
];
