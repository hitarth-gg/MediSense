import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Stethoscope, ArrowRight } from 'lucide-react'

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Choose how you want to get started
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your role to access the MediSense platform and start transforming healthcare delivery in rural areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Facilitator Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-600">Facilitator</CardTitle>
              <CardDescription className="text-base">
                Onboard patients from remote areas and help them connect with healthcare professionals.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Patient data collection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Medical imaging assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Booth management</span>
                </div>
              </div>
              <Button asChild className="w-full group-hover:bg-blue-700 transition-colors">
                <Link href="/auth/facilitator/login">
                  Get Started as Facilitator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-cyan-200">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-cyan-100 rounded-full group-hover:bg-cyan-200 transition-colors">
                <Stethoscope className="h-12 w-12 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl text-cyan-600">Doctor</CardTitle>
              <CardDescription className="text-base">
                Review patients and provide treatment plans with AI-powered insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span>AI-generated patient reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span>Priority-based patient queue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span>Video consultation scheduling</span>
                </div>
              </div>
              <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700 transition-colors">
                <Link href="/auth/doctor/login">
                  Get Started as Doctor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need help choosing? {" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
