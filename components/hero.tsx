"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            {t.hero.title.part1} <span className="text-primary">{t.hero.title.understand}</span> {t.hero.title.and}{" "}
            <span className="text-accent">{t.hero.title.adapt}</span>
          </h1>

          <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group gap-2">
              {t.hero.startProject}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              {t.hero.viewWork}
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground md:text-4xl">50+</div>
              <div className="mt-2 text-sm text-muted-foreground">{t.hero.stats.systems}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground md:text-4xl">98%</div>
              <div className="mt-2 text-sm text-muted-foreground">{t.hero.stats.satisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground md:text-4xl">24/7</div>
              <div className="mt-2 text-sm text-muted-foreground">{t.hero.stats.uptime}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground md:text-4xl">10x</div>
              <div className="mt-2 text-sm text-muted-foreground">{t.hero.stats.efficiency}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
