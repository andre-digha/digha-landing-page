import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Approach } from "@/components/approach"
import { TrustedBy } from "@/components/trusted-by"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { generateStructuredData } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digha.app",
  },
}

export default function Home() {
  const organizationSchema = generateStructuredData("Organization", {})
  const websiteSchema = generateStructuredData("WebSite", {})

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <TrustedBy />
          <Solutions />
          <Approach />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
