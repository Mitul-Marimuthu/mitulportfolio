import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `
(() => {
  try {
    const key = "portfolio-theme";
    const stored = localStorage.getItem(key);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = resolved;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s · Portfolio",
  },
  description:
    "Bold portfolio site with UCSB-inspired navy and gold, built with Next.js and ready for Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
