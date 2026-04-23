import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ethns.io"),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
  title: "Ethereum NS at Network School",
  description:
    "A one-month Ethereum residency at Network School for workshops, builder lock-ins, and ecosystem hackathons.",
  openGraph: {
    title: "Ethereum NS at Network School",
    description:
      "Partner with Ethereum NS to sponsor builders, teach workshops, or host a hackathon.",
    url: "https://ethns.io",
    siteName: "Ethereum NS",
    type: "website",
    images: [
      {
        url: "https://ethns.io/opengraph-image.jpg",
        width: 1024,
        height: 576,
        alt: "Ethereum Network State at Network School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereum NS at Network School",
    description:
      "Partner with Ethereum NS to sponsor builders, teach workshops, or host a hackathon.",
    images: ["https://ethns.io/opengraph-image.jpg"],
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
