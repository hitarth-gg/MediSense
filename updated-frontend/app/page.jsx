import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import StreamliningSection from "@/components/streamlining-section"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-600/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StreamliningSection />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
