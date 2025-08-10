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
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-blue-600">
          Trusted by Healthcare Heroes
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          See how MediSense is making a difference in rural healthcare delivery across India.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex flex-col space-y-4">
              <Quote className="h-8 w-8 text-blue-600/60" />
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="rounded-full bg-blue-600/10 p-2">
                  <testimonial.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
