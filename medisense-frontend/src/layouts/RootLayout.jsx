import React from "react";
import "../styles/global.css";
import MouseMoveEffect from "../components/ui/MouseMoveEffect";

export default function RootLayout({ children }) {
  return (
    <div lang="en" className="light">
      <div className="bg-background text-foreground antialiased">
        <MouseMoveEffect />
        {children}
      </div>
    </div>
  );
}
