import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rushtheline.com"),
  title: "Rush The Line — Human + AI-Powered Airport Navigation",
  description:
    "Beat airport delays with live guidance, traveler-powered updates, and smart alerts from curb to gate.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Rush The Line",
    title: "Human + AI-Powered Airport Navigation",
    description:
      "Beat airport delays with live guidance, traveler-powered updates, and smart alerts from curb to gate.",
    images: [
      {
        url: "https://rushtheline.com/og/rtl-og-1200x630.png?v=1",
        width: 1200,
        height: 630,
        alt: "Rush The Line preview: Human + AI guidance from curb to gate",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  themeColor: "#272830",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7X8TXZ9ZGJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7X8TXZ9ZGJ');
            `,
          }}
        ></script>
      </head>
      <body className={`${inter.variable} antialiased`}>        
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
