import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://digha.app"),
  title: {
    default: "digha.app - AI-First Product Development | Intelligent Systems & Agentic AI",
    template: "%s | digha.app",
  },
  description:
    "Build intelligent AI-first products with digha.app. From AI chatbots to complex agentic systems with workflows and command servers. We apply behavioral systemic thinking to deliver hybrid AI solutions.",
  keywords: [
    "AI development",
    "AI-first products",
    "agentic AI",
    "intelligent chatbots",
    "AI systems",
    "command servers",
    "behavioral systemic thinking",
    "hybrid AI solutions",
    "AI workflows",
    "enterprise AI",
  ],
  authors: [{ name: "digha.app" }],
  creator: "digha.app",
  publisher: "digha.app",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    url: "https://digha.app",
    siteName: "digha.app",
    title: "digha.app - Build Intelligent AI-First Products",
    description:
      "Transform your business with AI systems that understand and adapt. From chatbots to complex agentic platforms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "digha.app - AI-First Product Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "digha.app - AI-First Product Development",
    description: "Build intelligent systems that understand and adapt to your business needs.",
    images: ["/twitter-image.png"],
    creator: "@dighaapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://digha.app",
    languages: {
      "en-US": "https://digha.app",
      "pt-BR": "https://digha.app",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
