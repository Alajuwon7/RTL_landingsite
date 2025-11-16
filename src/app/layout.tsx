import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rush The Line — AI-Powered Airport Navigation",
  description:
    "Navigate airports with confidence using Rush The Line. Real-time insights, AI guidance, and stress-free movement from curb to gate.",
  openGraph: {
    title: "Rush The Line — AI-Powered Airport Navigation",
    description:
      "Rush The Line helps travelers move smarter through busy airports with personalized alerts, live insights, and intelligent recommendations.",
    siteName: "Rush The Line",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rush The Line — AI-Powered Airport Navigation",
    description:
      "Experience stress-free airport navigation with Rush The Line's AI-powered guidance and real-time insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>        
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
