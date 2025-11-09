"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow, ArrowRight, CheckCircle, Network, Cpu, GitBranch } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function AgenticAISystemsPage() {
  const { t, locale } = useLanguage()

  const features = [
    {
      icon: Network,
      title: locale === "en" ? "Multi-Agent Coordination" : "Coordenação Multi-Agente",
      description:
        locale === "en"
          ? "Multiple specialized agents working together to solve complex problems autonomously."
          : "Múltiplos agentes especializados trabalhando juntos para resolver problemas complexos autonomamente.",
    },
    {
      icon: GitBranch,
      title: locale === "en" ? "Workflow Orchestration" : "Orquestração de Workflows",
      description:
        locale === "en"
          ? "Sophisticated workflows that adapt to changing conditions and optimize for best outcomes."
          : "Workflows sofisticados que se adaptam a condições mutáveis e otimizam para melhores resultados.",
    },
    {
      icon: Cpu,
      title: locale === "en" ? "Autonomous Decision Making" : "Tomada de Decisão Autônoma",
      description:
        locale === "en"
          ? "AI agents that can analyze situations, make decisions, and take actions without human intervention."
          : "Agentes de IA que podem analisar situações, tomar decisões e agir sem intervenção humana.",
    },
  ]

  const benefits = [
    locale === "en"
      ? "Automate complex business processes end-to-end"
      : "Automatize processos de negócios complexos de ponta a ponta",
    locale === "en" ? "Handle intricate multi-step workflows" : "Gerencie workflows complexos de múltiplas etapas",
    locale === "en" ? "Adaptive systems that learn and improve" : "Sistemas adaptativos que aprendem e melhoram",
    locale === "en" ? "Reduce operational costs by up to 70%" : "Reduza custos operacionais em até 70%",
    locale === "en" ? "Scale infinitely with demand" : "Escale infinitamente com a demanda",
    locale === "en" ? "Real-time monitoring and analytics" : "Monitoramento e análises em tempo real",
  ]

  const capabilities = [
    {
      title: locale === "en" ? "Process Automation" : "Automação de Processos",
      description:
        locale === "en"
          ? "Automate complex workflows across departments with intelligent agents that understand context and dependencies."
          : "Automatize workflows complexos entre departamentos com agentes inteligentes que entendem contexto e dependências.",
    },
    {
      title: locale === "en" ? "Data Analysis & Insights" : "Análise de Dados e Insights",
      description:
        locale === "en"
          ? "AI agents that continuously analyze data, identify patterns, and provide actionable insights in real-time."
          : "Agentes de IA que analisam continuamente dados, identificam padrões e fornecem insights acionáveis em tempo real.",
    },
    {
      title: locale === "en" ? "Resource Optimization" : "Otimização de Recursos",
      description:
        locale === "en"
          ? "Intelligent allocation and management of resources based on real-time conditions and predicted needs."
          : "Alocação e gestão inteligente de recursos baseada em condições em tempo real e necessidades previstas.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <Workflow className="h-8 w-8 text-primary" />
              </div>

              <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
                {t.solutions.agenticAI.title}
              </h1>

              <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t.solutions.agenticAI.description}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group gap-2">
                  {locale === "en" ? "Explore Capabilities" : "Explorar Capacidades"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  {locale === "en" ? "View Architecture" : "Ver Arquitetura"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                {locale === "en" ? "Advanced Capabilities" : "Capacidades Avançadas"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Enterprise-grade agentic systems designed for complex, mission-critical operations."
                  : "Sistemas agênticos de nível empresarial projetados para operações complexas e críticas."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card
                    key={feature.title}
                    className="border-border/50 bg-card/50 transition-all hover:border-primary/50"
                  >
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                  {locale === "en"
                    ? "Scale Your Operations with Intelligence"
                    : "Escale Suas Operações com Inteligência"}
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Our agentic AI systems go beyond simple automation. They understand your business logic, adapt to changes, and optimize operations in real-time."
                    : "Nossos sistemas de IA agênticos vão além da automação simples. Eles entendem sua lógica de negócio, adaptam-se a mudanças e otimizam operações em tempo real."}
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">70%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Cost reduction in operations" : "Redução de custos em operações"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">5x</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Faster process execution" : "Execução de processos mais rápida"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">99.9%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "System reliability" : "Confiabilidade do sistema"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                {locale === "en" ? "What Can Agentic Systems Do?" : "O Que Sistemas Agênticos Podem Fazer?"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Unlock new possibilities with autonomous AI agents that work 24/7."
                  : "Desbloqueie novas possibilidades com agentes de IA autônomos que trabalham 24/7."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{capability.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12 md:p-20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

              <div className="relative mx-auto max-w-3xl text-center">
                <h2 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                  {locale === "en"
                    ? "Ready to build autonomous AI systems?"
                    : "Pronto para construir sistemas de IA autônomos?"}
                </h2>
                <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Let's design an agentic solution that transforms your business operations."
                    : "Vamos projetar uma solução agêntica que transforme suas operações de negócio."}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group gap-2">
                    {locale === "en" ? "Start Project" : "Iniciar Projeto"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Link href="/#solutions">
                    <Button size="lg" variant="outline">
                      {locale === "en" ? "View All Solutions" : "Ver Todas as Soluções"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
