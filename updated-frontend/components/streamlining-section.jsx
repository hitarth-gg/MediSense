import { FolderOpen } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    title: "Booth-Based Facilitation",
    description: "We establish facilitator-equipped booths in remote areas staffed by trained personnel to assist individuals in utilizing MediSense.",
    link: "Sign Up as a Facilitator",
    href: "/facilitator-signup",
    highlighted: false
  },
  {
    title: "Input Methods", 
    description: "Facilitator gather patient information like symptom descriptions and medical images, ensuring comprehensive data collection for precise analysis.",
    link: "Our Input Guidelines and Methodology",
    href: "/input-guidelines",
    highlighted: false
  },
  {
    title: "Problem Report Compilation",
    description: "AI will then utilize collected data to generate detailed problem reports containing essential diagnostic information.",
    link: "Learn More",
    href: "/problem-reports",
    highlighted: true
  },
  {
    title: "Doctor Communication",
    description: "Problem reports is then transferred to designated doctors, enabling timely diagnosis and prioritization of patients for further consultation.",
    link: "View Our Doctor Network", 
    href: "/doctor-network",
    highlighted: false
  }
]

export default function StreamliningSection() {
  return (
    <section className="container space-y-12 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl text-foreground mb-6">
          Streamlining Remote Healthcare Diagnosis
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Four steps simplified procedure to streamline remote healthcare accessibility:
        </p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`rounded-lg border p-8 ${
                step.highlighted 
                  ? 'border-blue-500 bg-blue-50/50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <FolderOpen className="h-8 w-8 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <Link 
                    href={step.href}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    {step.link}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
