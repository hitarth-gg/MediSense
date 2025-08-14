import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t bg-blue-600/5">
      <div className="container flex flex-col items-center gap-6 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-blue-600">
          Ready to Transform Rural Healthcare?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join the movement to bring quality healthcare to every corner of rural India. 
          Start empowering your community with MediSense today.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/login">Get Started Today</Link>
          </Button>
          <Button variant="outline" size="lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
