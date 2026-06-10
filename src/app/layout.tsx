import type { Metadata } from "next";
import { Bodoni_Moda, Cinzel, Inter, Parisienne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-wedding-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const weddingScript = Parisienne({
  variable: "--font-wedding-script",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maja & Kristoffer – Bröllop i Spanien",
  description:
    "Bröllop i Spanien för Maja Reiz & Kristoffer Nilsson på Castillo de Monda, Spanien – 8–10 september 2027.",
  openGraph: {
    title: "Maja & Kristoffer – Bröllop i Spanien",
    description:
      "Bröllop i Spanien för Maja Reiz & Kristoffer Nilsson på Castillo de Monda, Spanien – 8–10 september 2027.",
    images: [
      {
        url: "/frieriet.jpg",
        alt: "Maja och Kristoffer – frieriet i Estepona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maja & Kristoffer – Bröllop i Spanien",
    description:
      "Bröllop i Spanien för Maja Reiz & Kristoffer Nilsson på Castillo de Monda, Spanien – 8–10 september 2027.",
    images: ["/frieriet.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${inter.variable} ${bodoni.variable} ${cinzel.variable} ${weddingScript.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.body.dataset.introState='active'}catch(e){}",
          }}
        />
        <noscript>
          <style>{`
            [data-intro-overlay]{display:none!important}
            .page-shell{opacity:1!important;transform:none!important;filter:none!important}
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
