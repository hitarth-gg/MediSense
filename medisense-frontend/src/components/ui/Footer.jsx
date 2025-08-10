import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-muted/50 to-background transition-colors duration-300">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12 py-16 md:flex-row">
        {/* Brand section */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-2">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <h2 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              MediSense
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
            Bridging the healthcare gap in rural India through innovative
            technology. Empowering facilitators and connecting patients with
            quality medical care, one community at a time.
          </p>
          <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-3 group">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1.5 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <a href="mailto:contact@medisense.in" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                contact@medisense.in
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-1.5 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                <Phone className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              </div>
              <a href="tel:+919876543210" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Links sections */}
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/help"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-t py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} MediSense Healthcare Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>Made with ❤️ for Rural India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
