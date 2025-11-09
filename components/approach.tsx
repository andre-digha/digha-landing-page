"use client"

import { Brain, Layers, Repeat, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Approach() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Brain,
      title: t.approach.understand.title,
      description: t.approach.understand.description,
    },
    {
      icon: Layers,
      title: t.approach.design.title,
      description: t.approach.design.description,
    },
    {
      icon: Repeat,
      title: t.approach.iterate.title,
      description: t.approach.iterate.description,
    },
    {
      icon: Target,
      title: t.approach.deliver.title,
      description: t.approach.deliver.description,
    },
  ]

  return (
    <section id="approach" className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">{t.approach.title}</h2>
          <p className="text-balance text-lg text-muted-foreground">{t.approach.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-px w-full bg-border lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent ring-1 ring-accent/20">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-balance text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 rounded-lg border border-border/50 bg-card/50 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">{t.approach.systemicThinking.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{t.approach.systemicThinking.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="mb-2 text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">{t.approach.systemicThinking.customSolutions}</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="mb-2 text-2xl font-bold text-foreground">5x</div>
                <div className="text-sm text-muted-foreground">{t.approach.systemicThinking.fasterDeployment}</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="mb-2 text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">{t.approach.systemicThinking.expertSupport}</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="mb-2 text-2xl font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">{t.approach.systemicThinking.scalability}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
