import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata = {
  title: "Botnix Cloud",
  description:
    "High-performance cloud hosting for VPS, game servers, and bots — powered by blazing-fast hardware and DDoS protection.",
  openGraph: {
    title: "Botnix Cloud | Premium Hosting for Games, Bots & More",
    description:
      "Botnix Cloud offers lightning-fast VPS, game server hosting (including Minecraft), and bot hosting with 99.99% uptime and global locations.",
    url: "https://botnix.cloud",
    site_name: "Botnix Cloud",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ff5a00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8469014169347815"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="h-screen w-full text-black bg-[#101010] overflow-x-hidden overflow-y-auto scrollbar-none">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
