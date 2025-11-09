"use client"

import { useLanguage } from "@/contexts/language-context"

export function TrustedBy() {
  const { t } = useLanguage()

  const companies = ["TechCorp", "InnovateLabs", "FutureAI", "DataSystems", "CloudScale", "SmartOps"]

  return (
    <section className="border-y border-border/40 bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t.trustedBy}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div
              key={company}
              className="text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground md:text-xl"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
