import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZTYX Web",
  description: "Next dimension of health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
