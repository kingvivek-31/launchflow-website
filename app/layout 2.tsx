import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchFlow — Modern Digital Storefronts for Local Businesses",
  description:
    "LaunchFlow builds lightning-fast, modern digital storefronts for gyms, cafes, salons & local businesses in 1–2 days. See a custom demo in your store. You only pay if you love it.",
  keywords: [
    "web design",
    "local business websites",
    "fast websites",
    "digital storefront",
    "LaunchFlow",
    "gym website",
    "salon website",
    "cafe website",
  ],
  openGraph: {
    title: "LaunchFlow — Modern Digital Storefronts",
    description:
      "Lightning-fast websites for gyms, cafes, salons & local businesses. Live in 48 hours. Zero risk.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#030712] text-white">
        {children}
      </body>
    </html>
  );
}
