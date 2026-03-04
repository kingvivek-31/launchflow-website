import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "LaunchFlow | Elite Digital Infrastructure for Fitness Brands",
    description:
        "Delhi's premier web development agency for gyms, Pilates studios, and wellness centers. We build high-converting digital ecosystems that turn local traffic into paying members.",
    keywords: [
        "gym website developer Delhi",
        "fitness digital agency",
        "Next.js developer for gyms",
        "Pilates studio website",
        "coaching center web development",
    ],
    openGraph: {
        title: "LaunchFlow | High-Converting Websites for Fitness Brands",
        description: "Stop losing leads to a bad website. We build elite digital infrastructure for Delhi's top wellness centers.",
        url: "https://launchflow.co.in",
        siteName: "LaunchFlow",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "LaunchFlow | Digital Infrastructure",
        description: "We engineer high-converting platforms for gyms and wellness centers.",
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
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-[#f2fcf1] text-[#121212]">
                {children}
            </body>
        </html>
    );
}
