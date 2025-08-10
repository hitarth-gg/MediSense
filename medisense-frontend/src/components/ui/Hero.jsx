import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "./Button";
import TypewriterEffect from "./TypewriterEffect";

export default function Hero() {
  const typewriterStrings = [
    "Empowering Doctors with AI-driven Insights",
    "Revolutionizing Remote Healthcare Accessibility with AI",
    "Sign up as a facilitator for your region",
  ];

  return (
    <section className="relative w-full">
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center space-y-8 text-center">
          {/* Logo/Icon Section */}
          <div className="flex justify-center">
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-4 shadow-lg">
              <Stethoscope className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Bridging Rural India with
              <br />
              <span className="text-blue-600 dark:text-blue-400">Smarter Healthcare</span>
            </h1>
          </div>

          {/* Typewriter Effect */}
          <div className="h-16 flex items-center justify-center min-w-[300px]">
            <TypewriterEffect
              strings={typewriterStrings}
              speed={80}
              deleteSpeed={40}
              delayBetweenStrings={2500}
            />
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
              MediSense empowers field facilitators to onboard patients and connect
              them with expert doctors instantly. Bringing quality healthcare to
              every corner of rural India.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 pt-8">
            <Button 
              variant="default" 
              size="lg" 
              className="min-w-[200px] bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
              asChild
            >
              <Link to="/get-started" className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-700 dark:hover:border-blue-300 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
