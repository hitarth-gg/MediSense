import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope } from 'lucide-react'
import Link from "next/link"
import TypewriterEffect from "./typewriter-effect"

export default function Hero() {
  const typewriterStrings = [
    "Revolutionizing Remote Healthcare Accessibility with AI",
    "Empowering Doctors with AI-driven Insights", 
    "Sign up as a facilitator for your region"
  ]

  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-6">
        <div className="flex justify-center">
          <Stethoscope className="h-16 w-16 text-blue-600 mb-4" />
        </div>
        <h1 className="bg-gradient-to-br from-blue-600 from-30% via-cyan-500 to-blue-600/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Bridging Rural India with
          <br />
          Smarter Healthcare
        </h1>
        
        <TypewriterEffect 
          strings={typewriterStrings}
          speed={80}
          deleteSpeed={40}
          delayBetweenStrings={2500}
        />
        
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          MediSense empowers field facilitators to onboard patients and connect them with expert doctors instantly. 
          Bringing quality healthcare to every corner of rural India.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="/login">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  )
}
