import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomerJourney from "@/components/CustomerJourney";
import Features from "@/components/Features";
import WhoWeEngineerFor from "@/components/WhoWeEngineerFor";
import HowItWorks from "@/components/HowItWorks";
import LeakyBucket from "@/components/LeakyBucket";
import SolutionStack from "@/components/SolutionStack";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#f2fcf1]">
            <Navbar />
            <Hero />
            <CustomerJourney />
            <Features />
            <WhoWeEngineerFor />
            <HowItWorks />
            <LeakyBucket />
            <SolutionStack />
            <Pricing />
            <CTA />
            <Footer />
        </main>
    );
}
