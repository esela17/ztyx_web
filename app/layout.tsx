import type { Metadata } from "next";
import { Cairo, Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PageTransition } from "@/components/ui/PageTransition";

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
  title: "ZTYX — البعد الرابع للرعاية الصحية | وكالة تسويق طبي وتقني",
  description: "المنظومة المتكاملة للقطاع الطبي في مصر. نجمع بين التكنولوجيا والتسويق الرقمي لنصنع مستقبل الطب ونضاعف أرباح عيادتك.",
  keywords: ["ZTYX", "تسويق طبي", "وكالة تسويق", "تطوير تطبيقات طبية", "SEO طبي", "مصر"],
  authors: [{ name: "ZTYX Team" }],
  openGraph: {
    title: "ZTYX — البعد الرابع للرعاية الصحية",
    description: "المنظومة المتكاملة للقطاع الطبي - وكالة تسويق تقني طبي متخصص في نمو العيادات والمراكز الطبية.",
    url: "https://ztyx.com",
    siteName: "ZTYX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZTYX — البعد الرابع للرعاية الصحية",
    description: "المنظومة المتكاملة للقطاع الطبي في مصر.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ztyx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-[#08090E] text-[#F0F1FF] font-sans antialiased selection:bg-[#5B5EFF]/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "ZTYX",
              "url": "https://ztyx.com",
              "logo": "https://ztyx.com/logo.png",
              "description": "وكالة تسويق طبي وتقني متخصصة في نمو العيادات والمراكز الطبية.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Creative Hub, Ministry of Communications",
                "addressLocality": "Fayoum",
                "addressCountry": "EG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+20-120-741-6336",
                "contactType": "customer service"
              }
            })
          }}
        />
        <PageTransition>
          {children}
        </PageTransition>
        <WhatsAppButton />
      </body>
    </html>
  );
}