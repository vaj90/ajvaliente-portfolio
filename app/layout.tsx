import HeaderNav from "@/components/HeaderNav";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan John Valiente | Full-Stack Developer",
  description: "Portfolio of Allan John Valiente — full-stack developer working across web applications, APIs, booking experiences, and mobile development.",
  openGraph: {
    title: "Allan John Valiente | Full-Stack Developer",
    description: "Thoughtful engineering. Useful software. Real-world problem solving.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
