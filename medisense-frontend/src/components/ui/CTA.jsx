import React from "react";
import { Button } from "./Button";

export default function CTA() {
  return (
    <section className="relative py-24 bg-background overflow-hidden transition-colors duration-300">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 dark:bg-teal-400/20 rounded-full blur-3xl transition-all duration-500" />
      
      <div className="container max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 bg-clip-text text-transparent leading-tight">
            Ready to Transform Rural Healthcare?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the movement to bring quality healthcare to every corner of rural
            India. Start empowering your community with MediSense today.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[220px] bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[220px] border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-accent transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
