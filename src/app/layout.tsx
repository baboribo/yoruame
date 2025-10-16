import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/constants/style/index.css";
import "@/constants/style/font.css";
import Gnb from "@/components/gnb";
import { siteMetadata } from "@/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata; // [1]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Gnb />
        {children}
      </body>
    </html>
  );
}

/**
 * Footnotes
 * [1] Reuses the centralized metadata definition to keep page metadata synchronized with other surfaces.
 */
