import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Users, Stethoscope, ArrowRight } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Choose how you want to get started
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select your role to access the MediSense platform and start
            transforming healthcare delivery in rural areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Facilitator Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-6 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-16 w-16 text-blue-600" />
              </div>
              <CardTitle className="text-3xl text-blue-600 mb-4">
                Facilitator
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Onboard patients from remote areas and help them connect with
                healthcare professionals.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-8 text-base text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Patient data collection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Medical imaging assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Booth management</span>
                </div>
              </div>
              <Button
                variant="facilitator"
                size="lg"
                asChild
                className="w-full group-hover:shadow-lg"
              >
                <Link
                  to="/auth/facilitator/login"
                  className="flex items-center justify-center"
                >
                  Get Started as Facilitator
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Card */}
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-teal-300 bg-white">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-6 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors duration-300">
                <Stethoscope className="h-16 w-16 text-teal-600" />
              </div>
              <CardTitle className="text-3xl text-teal-600 mb-4">
                Doctor
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Review patients and provide treatment plans with AI-powered
                insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-8 text-base text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span>AI-generated patient reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span>Priority-based patient queue</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span>Video consultation scheduling</span>
                </div>
              </div>
              <Button
                variant="doctor"
                size="lg"
                asChild
                className="w-full group-hover:shadow-lg"
              >
                <Link
                  to="/auth/doctor/login"
                  className="flex items-center justify-center"
                >
                  Get Started as Doctor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need help choosing?{" "}
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
