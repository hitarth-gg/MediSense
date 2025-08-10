import React from "react";
import { Users, Brain, Video } from "lucide-react";

const features = [
  {
    name: "Facilitator-friendly onboarding interface",
    description:
      "Intuitive and simple interface designed for field facilitators to easily onboard patients in rural areas with minimal training required.",
    icon: Users,
  },
  {
    name: "AI-powered lesson generation for treatment advice",
    description:
      "Advanced AI algorithms generate personalized treatment lessons and medical advice tailored to each patient's specific condition and needs.",
    icon: Brain,
  },
  {
    name: "Real-time connection with doctors",
    description:
      "Instant video consultations and messaging capabilities connecting rural patients with qualified doctors and specialists in real-time.",
    icon: Video,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-background transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-400/10 rounded-full blur-3xl transition-all duration-500" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/5 dark:bg-teal-400/10 rounded-full blur-3xl transition-all duration-500" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center space-y-6 mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 bg-clip-text text-transparent">
            Empowering Rural Healthcare
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Discover how MediSense transforms healthcare delivery in rural
            communities with cutting-edge technology and compassionate care.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative overflow-hidden rounded-2xl border bg-card backdrop-blur-sm p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 dark:from-blue-400/10 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Learn more link that appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
