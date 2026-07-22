import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import { AppProviders } from "@/lib/providers";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kryphor Labs — Software · Videojuegos",
  description:
    "Kryphor Labs es un estudio de desarrollo de software independiente. Creamos videojuegos, aplicaciones y experiencias digitales con propósito y calidad.",
  keywords: ["Kryphor Labs", "software", "videojuegos", "desarrollo", "estudio independiente"],
  openGraph: {
    title: "Kryphor Labs",
    description: "Software independiente construido con propósito.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`} data-theme="dark">
      <head>
        {/* Anti-FOUC: restore saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('kl-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5185495129250136"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <body className="min-h-full antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
