import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Noto_Sans_JP, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const notoJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-noto-jp", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://hv789.vercel.app"),
  title: "Harsha Vardhan, AI Engineer",
  description:
    "AI engineer building agentic systems, voice AI agents and production LLM systems for Japanese enterprises like NTT DATA, Toyota and Mitsubishi Motors.",
  openGraph: {
    title: "Harsha Vardhan, AI Engineer",
    description: "Agentic systems, voice AI agents and production LLM systems for Japanese enterprises.",
    url: "https://hv789.vercel.app",
    siteName: "Harsha Vardhan",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1424" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${schibsted.variable} ${jetbrains.variable} ${notoJp.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
