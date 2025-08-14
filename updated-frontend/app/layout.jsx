import "./globals.css";
import { Inter } from "next/font/google";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediSense - Bridging Rural India with Smarter Healthcare",
  description:
    "MediSense empowers field facilitators to onboard patients and connect them with expert doctors instantly. Bringing quality healthcare to rural India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
