import type { Metadata } from "next";
import LandingNav from "@/components/LandingNav";
import LandingHero from "@/components/LandingHero";
import LandingForm from "@/components/LandingForm";
import Footer from "@/components/Footer";
import StickyCallCTA from "@/components/StickyCallCTA";

export const metadata: Metadata = {
  title: "Professional Window Cleaning | Free Quote | Merseyside & Cheshire",
  description:
    "Get a free window cleaning quote in minutes. Professional, fully insured service across Merseyside & Cheshire. Call 07724564683.",
};

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingForm />
      </main>
      <Footer />
      <StickyCallCTA />
    </>
  );
}
