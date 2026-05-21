import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kryphor Labs — Software · IA · Videojuegos",
  description:
    "Kryphor Labs es una empresa de desarrollo de software, inteligencia artificial y videojuegos. Creamos tecnología innovadora y accesible.",
  keywords: ["Kryphor Labs", "software", "inteligencia artificial", "videojuegos", "Colombia", "desarrollo"],
  openGraph: {
    title: "Kryphor Labs",
    description: "Software · Inteligencia Artificial · Videojuegos · Innovación",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
