import { Quote, User, UserCheck } from "lucide-react"

const testimonials = [
  {
    quote: "MediSense has revolutionized how we provide healthcare in remote villages. The AI-powered treatment advice helps me make better decisions for my patients, even when specialist consultation isn't immediately available.",
    author: "Dr. Priya Sharma",
    role: "Rural Health Specialist",
    location: "Rajasthan",
    icon: UserCheck,
  },
  {
    quote: "As a field facilitator, MediSense makes my job so much easier. The interface is simple to use, and I can quickly onboard patients and connect them with doctors. It's truly bridging the healthcare gap in our community.",
    author: "Ravi Kumar",
    role: "Community Health Facilitator",
    location: "Uttar Pradesh",
    icon: User,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 dark:bg-blue-400/10 rounded-full blur-3xl transition-all duration-500" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-teal-600/5 dark:bg-teal-400/10 rounded-full blur-3xl transition-all duration-500" />

      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center space-y-6 mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 dark:from-blue-400 dark:via-teal-400 dark:to-blue-500 bg-clip-text text-transparent">
            Trusted by Healthcare Heroes
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            See how MediSense is making a real difference in rural healthcare delivery across India
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border bg-card backdrop-blur-sm p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 dark:from-blue-400/10 dark:to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col space-y-6">
                {/* Quote icon */}
                <div className="flex justify-center md:justify-start">
                  <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-3 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground leading-relaxed text-base md:text-lg italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="rounded-full bg-gradient-to-r from-blue-600/10 to-teal-500/10 dark:from-blue-400/20 dark:to-teal-400/20 p-3 group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:to-teal-500/20 dark:group-hover:from-blue-400/30 dark:group-hover:to-teal-400/30 transition-all duration-300">
                    <testimonial.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{testimonial.location}</p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-10 dark:opacity-5 group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-20 h-20 border-2 border-blue-600 dark:border-blue-400 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
