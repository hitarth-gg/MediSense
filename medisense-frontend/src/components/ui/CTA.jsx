import React from "react";
import { Button } from "./Button";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container max-w-screen-2xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          Ready to Transform Rural Healthcare?
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
          Join the movement to bring quality healthcare to every corner of rural
          India. Start empowering your community with MediSense today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="default" size="lg" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
