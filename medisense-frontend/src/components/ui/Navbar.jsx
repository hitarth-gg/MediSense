import { Button } from "./Button";
import { Heart, LogOut, User, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    // Redirect to home page after logout
    window.location.href = '/';
  };

  const formatRole = (role) => {
    if (!role) return '';
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
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
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
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
                  {/* <a href="/get-started">Get Started</a> */}
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`
          fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-80 max-w-[85vw] 
          transform bg-background border-l shadow-xl transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <nav className="flex flex-col p-6 space-y-4 border-b">
              <h2 className="text-lg font-semibold text-foreground mb-2">Navigation</h2>
              <a 
                href="/" 
                onClick={closeMobileMenu}
                className="flex items-center py-3 px-4 rounded-lg transition-colors hover:bg-muted text-foreground hover:text-primary"
              >
                Home
              </a>
              <a 
                href="#features" 
                onClick={closeMobileMenu}
                className="flex items-center py-3 px-4 rounded-lg transition-colors hover:bg-muted text-foreground hover:text-primary"
              >
                Features
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="flex items-center py-3 px-4 rounded-lg transition-colors hover:bg-muted text-foreground hover:text-primary"
              >
                Contact
              </a>
            </nav>

            {/* User Actions */}
            <div className="flex flex-col p-6 space-y-4">
              {isAuthenticated ? (
                // Authenticated mobile state
                <>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        Logged in as:
                      </p>
                      <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                        {formatRole(user?.role)}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="default"
                    className="w-full justify-center bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
                    asChild
                  >
                    <a href={`/${user?.role}/dashboard`} onClick={closeMobileMenu}>
                      Go to Dashboard
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => {
                      closeMobileMenu();
                      handleLogout();
                    }}
                    className="w-full justify-center text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                // Unauthenticated mobile state
                <>
                  <h2 className="text-lg font-semibold text-foreground mb-2">Account</h2>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center"
                    asChild
                  >
                    <a href="/get-started" onClick={closeMobileMenu}>Login</a>
                  </Button>
                  <Button 
                    variant="default" 
                    className="w-full justify-center bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
                    asChild
                  >
                    <a href="/get-started" onClick={closeMobileMenu}>Get Started</a>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
