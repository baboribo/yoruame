import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/constants/style/index.css";
import "@/constants/style/font.css";
import Gnb from "@/components/gnb";

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
      </body>
    </html>
  );
}
