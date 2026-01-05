import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hernán Garrido's Portfolio landing page 💼",
  description: "Landing page made by Hernán Garrido, using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
        {/* opcional: preload */}
        <link rel="preload" as="script" href="https://challenges.cloudflare.com/turnstile/v0/api.js" crossOrigin="" />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      </head>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}