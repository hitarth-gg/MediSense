import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <div className="container flex flex-col gap-8 py-12 md:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <h2 className="font-bold text-xl text-blue-600">MediSense</h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md">
            Bridging the healthcare gap in rural India through innovative
            technology. Empowering facilitators and connecting patients with
            quality medical care.
          </p>
          <div className="flex flex-col space-y-2 text-sm text-gray-600">
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
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-600">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-blue-600">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/help"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} MediSense Healthcare Technologies Pvt.
          Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
