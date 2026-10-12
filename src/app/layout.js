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
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased transition-colors duration-300 selection:bg-purple-600 selection:text-white dark:bg-[#09090c] dark:text-neutral-100 dark:selection:bg-purple-500 dark:selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SpiderWebScrollbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
