import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeakyBucket from "@/components/LeakyBucket";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import WhoWeEngineerFor from "@/components/WhoWeEngineerFor";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#f2fcf1]">
            <Navbar />
            {/* 1. Hero — outcome promise, WhatsApp CTA */}
            <Hero />
            {/* 2. Problem — The Leaky Bucket (3 gym-specific pain scenarios) */}
            <LeakyBucket />
            {/* 3. How It Works — 3-step process */}
            <Features />
            {/* 4. Packages + Testimonial placeholders */}
            <Pricing />
            {/* 5. Guarantee section — standalone bold promise */}
            <Guarantee />
            {/* 6. Who this is for (and not for) + Delhi NCR areas */}
            <WhoWeEngineerFor />
            {/* 7. Founder / About — first-person story */}
            <Founder />
            {/* 8. Testimonials — [TESTIMONIAL] placeholders */}
            <Testimonials />
            {/* 9. Final CTA — WhatsApp primary, phone secondary */}
            <CTA />
            <Footer />
        </main>
    );
}
