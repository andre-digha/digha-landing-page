"use client"

import { MessageSquare, Workflow, Network, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Solutions() {
  const { t } = useLanguage()

  const solutions = [
    {
      icon: MessageSquare,
      title: t.solutions.intelligentChatbots.title,
      description: t.solutions.intelligentChatbots.description,
      features: t.solutions.intelligentChatbots.features,
      href: "/solutions/intelligent-chatbots",
    },
    {
      icon: Workflow,
      title: t.solutions.agenticAI.title,
      description: t.solutions.agenticAI.description,
      features: t.solutions.agenticAI.features,
      href: "/solutions/agentic-ai-systems",
    },
    {
      icon: Network,
      title: t.solutions.commandServers.title,
      description: t.solutions.commandServers.description,
      features: t.solutions.commandServers.features,
      href: "/solutions/command-servers",
    },
    {
      icon: Zap,
      title: t.solutions.hybridSolutions.title,
      description: t.solutions.hybridSolutions.description,
      features: t.solutions.hybridSolutions.features,
      href: "/solutions/hybrid-solutions",
    },
  ]

  return (
    <section id="solutions" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">{t.solutions.title}</h2>
          <p className="text-balance text-lg text-muted-foreground">{t.solutions.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Link key={solution.title} href={solution.href}>
                <Card className="group h-full border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{solution.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
