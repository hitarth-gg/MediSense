import { Button } from "./Button";
import { Heart, LogOut, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect to home page after logout
    window.location.href = '/';
  };

  const formatRole = (role) => {
    if (!role) return '';
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

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
          
          {isAuthenticated ? (
            // Authenticated state
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Logged in as: {formatRole(user?.role)}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20 transition-colors"
                asChild
              >
                <a href={`/${user?.role}/dashboard`}>Dashboard</a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            // Unauthenticated state
            <>
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
                <a href="/get-started">Get Started</a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
