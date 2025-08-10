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
      className="container space-y-16 py-24 md:py-32 bg-gray-100"
    >
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl sm:text-3xl md:text-5xl text-blue-600">
          Empowering Rural Healthcare
        </h2>
        <p className="mt-4 text-gray-600 sm:text-lg">
          Discover how MediSense transforms healthcare delivery in rural
          communities with cutting-edge technology.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="rounded-full bg-blue-600/10 p-3">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg">{feature.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
