import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Overview } from "@/sections/Overview";
import { Features } from "@/sections/Features";
import { HowItWorks } from "@/sections/HowItWorks";
import { CTASection } from "@/sections/CTASection";
import { WaitlistModalProvider } from "@/components/waitlist/WaitlistModalProvider";
// import { TechGrowth } from "@/sections/TechGrowth";

export default function Home() {
  return (
    <WaitlistModalProvider>
      <div className="relative min-h-screen bg-[var(--color-bg-primary)]">
        <Navigation />
        <main id="main-content" className="flex flex-col gap-0">
          <Hero />
          <Overview />
          <HowItWorks />
          {/* Tech Growth section temporarily off until post-launch */}
          {/* <TechGrowth /> */}
          <Features />
          <CTASection />
        </main>
        <Footer />
      </div>
    </WaitlistModalProvider>
  );
}
