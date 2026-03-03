import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "LaunchFlow — Modern Digital Storefronts",
    description:
        "LaunchFlow builds lightning-fast, modern digital storefronts for local businesses in 1–2 days.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-[#f2fcf1] text-[#121212]">
                {children}
            </body>
        </html>
    );
}
