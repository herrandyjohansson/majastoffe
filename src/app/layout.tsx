import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Maja & Kristoffer – Bröllop i Spanien",
  description:
    "Bröllopshelg för Maja Reiz & Kristoffer Nilsson på Castillo de Monda, Spanien – 8–10 september 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${inter.variable} ${bodoni.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
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
