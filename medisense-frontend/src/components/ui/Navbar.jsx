import { Button } from "./Button";
import { Heart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container mx-auto flex h-16 max-w-screen items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-2">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text font-bold text-xl text-transparent">
            MediSense
          </span>
        </a>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center justify-between flex-1 max-w-md mx-8">
          <a 
            href="/" 
            className="relative transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-muted-foreground after:transition-all hover:after:w-full text-sm font-medium text-foreground"
          >
            Home
          </a>
          <a 
            href="#features" 
            className="relative transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-muted-foreground after:transition-all hover:after:w-full text-sm font-medium text-foreground"
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="relative transition-colors hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-muted-foreground after:transition-all hover:after:w-full text-sm font-medium text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            asChild
          >
            <a href="/get-started">Login</a>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-md transition-all hover:shadow-lg"
            asChild
          >
          </Button>
        </div>
      </div>
    </header>
  );
}
