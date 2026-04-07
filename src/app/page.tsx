import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCallCTA from "@/components/StickyCallCTA";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <HowItWorks />
        <ServiceAreas />
        <Testimonials />
        <About />
        <QuoteForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCallCTA />
      <Chatbot />
    </>
  );
}
