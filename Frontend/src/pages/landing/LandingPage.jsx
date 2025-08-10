import { Button } from "../../components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <h1 className="text-2xl font-bold text-primary">MediSense</h1>
        <div className="space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Smarter Patient Diagnosis with AI
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Empowering facilitators and doctors with intelligent tools to accelerate and simplify medical case assessments.
          </p>
          <div className="space-x-4">
            <Button size="lg">Start Screening</Button>
            <Button variant="outline" size="lg">Explore More</Button>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-muted py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-10">What We Offer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard title="AI-based Triage" desc="Automatically prioritizes patients based on symptoms." />
          <FeatureCard title="Doctor Recommendation" desc="Suggests specialists most suitable for the patient." />
          <FeatureCard title="Structured Data Collection" desc="Easily input patient information through guided steps." />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-muted-foreground text-sm">
        © {new Date().getFullYear()} MediSense. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
