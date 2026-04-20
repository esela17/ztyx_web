import type { Metadata } from "next";
import { Cairo, Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-cairo",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "ZTYX — Where Health Meets the Fourth Dimension",
  description: "المنظومة المتكاملة للقطاع الطبي - وكالة تسويق تقني طبي",
  keywords: ["ZTYX", "medical tech", "marketing agency", "health tech", "Next.js", "React"],
};

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-[#08090E] text-[#F0F1FF] font-sans antialiased selection:bg-[#5B5EFF]/30">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}