import React from "react";
import Navbar from "../../components/ui/Navbar";
import Hero from "../../components/ui/Hero";
import StreamliningSection from "../../components/ui/StreamliningSection";
import Features from "../../components/ui/Features";
import Testimonials from "../../components/ui/Testimonials";
import CTA from "../../components/ui/CTA";
import Footer from "../../components/ui/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-600/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-teal-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CTA />
        <StreamliningSection />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
