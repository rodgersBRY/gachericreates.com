import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

// Place font files in /public/fonts/:
//   CormorantGaramond-Regular.woff2, CormorantGaramond-Italic.woff2,
//   CormorantGaramond-SemiBold.woff2
//   Inter-Variable.woff2 (variable font covers all weights)
const cormorant = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/CormorantGaramond-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GacheriCreates — Kenya Wildlife Photography",
  description:
    "Fine art wildlife photography and photo safaris by Gacheri, based in Kenya.",
  metadataBase: new URL("https://gachericreates.com"),
  openGraph: {
    siteName: "GacheriCreates",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
