"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12 md:p-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">{t.cta.title}</h2>
            <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">{t.cta.description}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group gap-2">
                {t.cta.schedule}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                {t.cta.viewCaseStudies}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
