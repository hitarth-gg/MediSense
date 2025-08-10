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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background transition-colors duration-300" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-600/5 dark:bg-blue-400/10 blur-[120px] transition-all duration-500" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-teal-500/5 dark:bg-teal-400/10 blur-[120px] transition-all duration-500" />
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] bg-purple-600/3 dark:bg-purple-400/8 blur-[100px] transition-all duration-500" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <CTA />
          <StreamliningSection />
          <Features />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}
