import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
  title: "Ethereum NS at Network School | May 2026",
  description:
    "A one-month Ethereum residency at Network School for workshops, builder lock-ins, and ecosystem hackathons.",
  openGraph: {
    title: "Ethereum NS at Network School | May 2026",
    description:
      "Partner with Ethereum NS to sponsor builders, teach workshops, or host a hackathon in May 2026.",
    url: "https://ns.com/ethns",
    siteName: "Ethereum NS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
