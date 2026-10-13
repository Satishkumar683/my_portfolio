import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SpiderWebScrollbar from "@/components/SpiderWebScrollbar";

export const metadata = {
  title: "Satish Kumar | Competitive Programmer & Full-Stack Developer",
  description:
    "Portfolio of Satish Kumar, Computer Science Undergraduate at NIT Jamshedpur. Codeforces Specialist (1430), LeetCode Knight (1866), and Full-Stack Developer.",
  keywords: [
    "Satish Kumar",
    "NIT Jamshedpur",
    "Competitive Programming",
    "Codeforces",
    "LeetCode",
    "Next.js",
    "FastAPI",
    "Machine Learning",
  ],
  authors: [{ name: "Satish Kumar" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-[#050505] font-sans antialiased transition-colors duration-200 selection:bg-[#D4AF37] selection:text-black dark:bg-[#050505] dark:text-white dark:selection:bg-[#D4AF37] dark:selection:text-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SpiderWebScrollbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
