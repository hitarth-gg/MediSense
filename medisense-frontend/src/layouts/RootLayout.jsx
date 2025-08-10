import React from "react";
import MouseMoveEffect from "../components/ui/MouseMoveEffect";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div lang="en" className="min-h-screen transition-colors duration-300">
          <div className="bg-background text-foreground antialiased">
            <MouseMoveEffect />
            {children}
          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
