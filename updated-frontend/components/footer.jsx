import Link from "next/link"
import { Heart, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container flex flex-col gap-8 py-12 md:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <h2 className="font-bold text-xl text-blue-600">MediSense</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Bridging the healthcare gap in rural India through innovative technology. 
            Empowering facilitators and connecting patients with quality medical care.
          </p>
          <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@medisense.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-600">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-600">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-600">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground transition-colors hover:text-blue-600">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MediSense Healthcare Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
