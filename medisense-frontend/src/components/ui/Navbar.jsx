import { Button } from "./Button";
import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <a href="/" className="mr-8 flex items-center space-x-2">
          <Heart className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl text-blue-600">MediSense</span>
        </a>
        <nav className="flex flex-1 items-center space-x-8 text-sm font-medium">
          <a href="/" className="transition-colors hover:text-blue-600">
            Home
          </a>
          <a href="#features" className="transition-colors hover:text-blue-600">
            Features
          </a>
          <a href="#contact" className="transition-colors hover:text-blue-600">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-700">
            <a href="/get-started">Login</a>
          </Button>
          <Button variant="default" size="sm">
            <a href="/get-started">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
