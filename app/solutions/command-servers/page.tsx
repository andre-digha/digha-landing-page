"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, ArrowRight, CheckCircle, Server, Shield, Gauge } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function CommandServersPage() {
  const { t, locale } = useLanguage()

  const features = [
    {
      icon: Gauge,
      title: locale === "en" ? "Real-Time Processing" : "Processamento em Tempo Real",
      description:
        locale === "en"
          ? "Handle millions of requests with microsecond latency for time-critical AI operations."
          : "Gerencie milhões de requisições com latência de microssegundos para operações de IA críticas.",
    },
    {
      icon: Shield,
      title: locale === "en" ? "Enterprise Security" : "Segurança Empresarial",
      description:
        locale === "en"
          ? "Bank-grade security with encryption, compliance, and access controls built-in."
          : "Segurança de nível bancário com criptografia, conformidade e controles de acesso integrados.",
    },
    {
      icon: Server,
      title: locale === "en" ? "High Availability" : "Alta Disponibilidade",
      description:
        locale === "en"
          ? "99.99% uptime with automatic failover, load balancing, and disaster recovery."
          : "99.99% de tempo de atividade com failover automático, balanceamento de carga e recuperação de desastres.",
    },
  ]

  const benefits = [
    locale === "en" ? "Process complex AI workloads at scale" : "Processe cargas de trabalho de IA complexas em escala",
    locale === "en"
      ? "Seamless integration with existing infrastructure"
      : "Integração perfeita com infraestrutura existente",
    locale === "en" ? "Auto-scaling based on demand" : "Auto-escalonamento baseado em demanda",
    locale === "en" ? "Built-in monitoring and observability" : "Monitoramento e observabilidade integrados",
    locale === "en" ? "Multi-region deployment" : "Implementação multi-região",
    locale === "en" ? "API-first architecture" : "Arquitetura API-first",
  ]

  const architecture = [
    {
      title: locale === "en" ? "Microservices Architecture" : "Arquitetura de Microserviços",
      description:
        locale === "en"
          ? "Modular design that allows independent scaling and deployment of AI services."
          : "Design modular que permite escalonamento e implantação independentes de serviços de IA.",
    },
    {
      title: locale === "en" ? "Event-Driven Processing" : "Processamento Orientado a Eventos",
      description:
        locale === "en"
          ? "Asynchronous event handling for complex workflows and real-time data processing."
          : "Manipulação assíncrona de eventos para workflows complexos e processamento de dados em tempo real.",
    },
    {
      title: locale === "en" ? "Container Orchestration" : "Orquestração de Containers",
      description:
        locale === "en"
          ? "Kubernetes-powered infrastructure for reliable and scalable AI deployments."
          : "Infraestrutura baseada em Kubernetes para implantações de IA confiáveis e escaláveis.",
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
                <Network className="h-8 w-8 text-primary" />
              </div>

              <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
                {t.solutions.commandServers.title}
              </h1>

              <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t.solutions.commandServers.description}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group gap-2">
                  {locale === "en" ? "View Architecture" : "Ver Arquitetura"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  {locale === "en" ? "Technical Specs" : "Especificações Técnicas"}
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
                {locale === "en" ? "Enterprise-Grade Infrastructure" : "Infraestrutura de Nível Empresarial"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Built to handle the most demanding AI workloads with reliability and performance."
                  : "Construído para lidar com as cargas de trabalho de IA mais exigentes com confiabilidade e desempenho."}
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
                  {locale === "en" ? "Production-Ready AI Infrastructure" : "Infraestrutura de IA Pronta para Produção"}
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Our command servers provide the robust backend infrastructure needed for complex AI operations, ensuring your AI systems run reliably at scale."
                    : "Nossos servidores de comando fornecem a infraestrutura de backend robusta necessária para operações de IA complexas, garantindo que seus sistemas de IA funcionem de forma confiável em escala."}
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
                  <div className="mb-2 text-4xl font-bold text-foreground">99.99%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "System uptime guarantee" : "Garantia de tempo de atividade"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">&lt;10ms</div>
                  <div className="text-muted-foreground">{locale === "en" ? "Average latency" : "Latência média"}</div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">10K+</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Requests per second" : "Requisições por segundo"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                {locale === "en" ? "Modern Architecture" : "Arquitetura Moderna"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Built with cutting-edge technologies and best practices for cloud-native AI deployments."
                  : "Construído com tecnologias de ponta e melhores práticas para implantações de IA nativas da nuvem."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {architecture.map((item) => (
                <Card key={item.title} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{item.description}</CardDescription>
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
                    ? "Ready to deploy your AI infrastructure?"
                    : "Pronto para implantar sua infraestrutura de IA?"}
                </h2>
                <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Let's build a robust command server infrastructure for your AI systems."
                    : "Vamos construir uma infraestrutura de servidor de comando robusta para seus sistemas de IA."}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group gap-2">
                    {locale === "en" ? "Get Started" : "Começar"}
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
