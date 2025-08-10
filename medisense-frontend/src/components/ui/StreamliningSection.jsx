import React, { useState } from "react"
import { FolderOpen } from "lucide-react"

const steps = [
  {
    title: "Booth-Based Facilitation",
    description: "We establish facilitator-equipped booths in remote areas staffed by trained personnel to assist individuals in utilizing MediSense.",
    link: "Sign Up as a Facilitator",
    href: "/facilitator-signup",
  },
  {
    title: "Input Methods",
    description: "Facilitator gather patient information like symptom descriptions and medical images, ensuring comprehensive data collection for precise analysis.",
    link: "Our Input Guidelines and Methodology",
    href: "/input-guidelines",
  },
  {
    title: "Problem Report Compilation",
    description: "AI will then utilize collected data to generate detailed problem reports containing essential diagnostic information.",
    link: "Learn More",
    href: "/problem-reports",
  },
  {
    title: "Doctor Communication",
    description: "Problem reports is then transferred to designated doctors, enabling timely diagnosis and prioritization of patients for further consultation.",
    link: "View Our Doctor Network",
    href: "/doctor-network",
  }
]

export default function StreamliningSection() {
  const [selectedStep, setSelectedStep] = useState(2) // Default to step 3 (index 2)

  const handleStepClick = (index) => {
    setSelectedStep(index)
  }

  return (
    <section className="relative py-24 md:py-32 bg-background transition-colors duration-300">
      
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 bg-clip-text text-transparent mb-6">
          Streamlining Remote Healthcare Diagnosis
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-16">
          Four simplified steps to streamline remote healthcare accessibility across rural India
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:gap-12">
          {steps.map((step, index) => {
            const isHighlighted = selectedStep === index
            return (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className={`group relative overflow-hidden rounded-2xl border-2 p-8 md:p-12 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  isHighlighted
                    ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-teal-50/50 dark:from-blue-950/40 dark:to-teal-950/20 dark:border-blue-400 shadow-md"
                    : "border bg-card hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/30 dark:hover:bg-blue-950/20"
                }`}
              >
                {/* Step number badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div className={`rounded-full px-3 py-1 text-sm font-semibold transition-all duration-300 ${
                    isHighlighted 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className={`rounded-full p-4 transition-all duration-300 ${
                      isHighlighted 
                        ? "bg-blue-600/10 dark:bg-blue-400/20" 
                        : "bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
                    }`}>
                      <FolderOpen className={`h-8 w-8 transition-all duration-300 ${
                        isHighlighted 
                          ? "text-blue-600 dark:text-blue-400" 
                          : "text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className={`font-bold text-xl md:text-2xl transition-all duration-300 ${
                      isHighlighted 
                        ? "text-blue-700 dark:text-blue-300" 
                        : "text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-300"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <a
                      href={step.href}
                      onClick={(e) => e.stopPropagation()} // Prevent triggering step selection when clicking link
                      className={`inline-flex items-center gap-2 font-medium text-sm md:text-base transition-all duration-300 ${
                        isHighlighted
                          ? "text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200"
                          : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-1"
                      }`}
                    >
                      {step.link}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    </section>
  )
}
