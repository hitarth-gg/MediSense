import React from "react";
import MouseMoveEffect from "../components/ui/MouseMoveEffect";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <div lang="en" className="min-h-screen transition-colors duration-300">
        <div className="bg-background text-foreground antialiased">
          <MouseMoveEffect />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
