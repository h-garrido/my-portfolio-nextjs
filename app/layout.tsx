import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hernán Garrido's Portfolio landing page 💼",
  description:
    "Landing page made by Hernán Garrido, using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Override deprecated StorageType.persistent
              if (typeof window !== 'undefined' && window.StorageType) {
                window.StorageType.persistent = 'navigator-storage';
              }
              // Set global config for Turnstile storage
              window.turnstileConfig = {
                useNavigatorStorage: true
              };
            `,
          }}
        />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></script>
        <link
          rel="preconnect"
          href="https://challenges.cloudflare.com"
        />
        <link
          rel="dns-prefetch"
          href="https://challenges.cloudflare.com"
        />
      </head>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
