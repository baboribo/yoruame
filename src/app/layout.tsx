import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/constants/style/index.css";
import "@/constants/style/font.css";
import Gnb from "@/components/gnb";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoruame",
  description: "A personal site by mny29",
  icons: {
    icon: "/assets/favicons/favicon-bg-none.avif",
  },
};

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
        <Script
          src="https://app.rybbit.io/api/script.js" // o-4 is not
          data-site-id="process.env.RYBBIT_ID"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
