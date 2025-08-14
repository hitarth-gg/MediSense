import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <Heart className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl text-blue-600">MediSense</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-8 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#features" className="transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/get-started">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
