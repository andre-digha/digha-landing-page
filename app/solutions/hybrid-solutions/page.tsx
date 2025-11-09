"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ArrowRight, CheckCircle, Layers, Share2, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function HybridSolutionsPage() {
  const { t, locale } = useLanguage()

  const features = [
    {
      icon: Layers,
      title: locale === "en" ? "End-to-End Integration" : "Integração End-to-End",
      description:
        locale === "en"
          ? "Seamlessly combine AI capabilities with your existing systems and traditional software."
          : "Combine perfeitamente capacidades de IA com seus sistemas existentes e software tradicional.",
    },
    {
      icon: Share2,
      title: locale === "en" ? "Custom Workflows" : "Workflows Personalizados",
      description:
        locale === "en"
          ? "Design tailored workflows that bridge AI intelligence with business logic and human oversight."
          : "Projete workflows personalizados que conectam inteligência de IA com lógica de negócio e supervisão humana.",
    },
    {
      icon: Target,
      title: locale === "en" ? "Behavioral Analysis" : "Análise Comportamental",
      description:
        locale === "en"
          ? "Apply systemic thinking to understand user behavior and optimize the entire solution ecosystem."
          : "Aplique pensamento sistêmico para entender comportamento do usuário e otimizar todo o ecossistema de solução.",
    },
  ]

  const benefits = [
    locale === "en"
      ? "Best of both worlds: AI + traditional software"
      : "O melhor dos dois mundos: IA + software tradicional",
    locale === "en"
      ? "Leverage existing infrastructure investments"
      : "Aproveite investimentos em infraestrutura existente",
    locale === "en" ? "Gradual AI adoption without disruption" : "Adoção gradual de IA sem interrupção",
    locale === "en" ? "Human-in-the-loop when needed" : "Humano no loop quando necessário",
    locale === "en" ? "Flexible and adaptable architecture" : "Arquitetura flexível e adaptável",
    locale === "en" ? "Comprehensive analytics and reporting" : "Análises e relatórios abrangentes",
  ]

  const approaches = [
    {
      title: locale === "en" ? "AI-Augmented Systems" : "Sistemas Aumentados por IA",
      description:
        locale === "en"
          ? "Enhance existing applications with AI capabilities like recommendations, predictions, and automation without complete rewrites."
          : "Aprimore aplicações existentes com capacidades de IA como recomendações, previsões e automação sem reescritas completas.",
    },
    {
      title: locale === "en" ? "Intelligent Bridges" : "Pontes Inteligentes",
      description:
        locale === "en"
          ? "Create smart middleware that connects legacy systems with modern AI services, enabling real-time data flow and decision-making."
          : "Crie middleware inteligente que conecta sistemas legados com serviços de IA modernos, permitindo fluxo de dados e tomada de decisão em tempo real.",
    },
    {
      title: locale === "en" ? "Modular AI Components" : "Componentes de IA Modulares",
      description:
        locale === "en"
          ? "Build reusable AI modules that can be plugged into different parts of your technology stack as needed."
          : "Construa módulos de IA reutilizáveis que podem ser conectados em diferentes partes de sua pilha tecnológica conforme necessário.",
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
                <Zap className="h-8 w-8 text-primary" />
              </div>

              <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
                {t.solutions.hybridSolutions.title}
              </h1>

              <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t.solutions.hybridSolutions.description}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group gap-2">
                  {locale === "en" ? "Explore Integration" : "Explorar Integração"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  {locale === "en" ? "Case Studies" : "Casos de Estudo"}
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
                {locale === "en" ? "Comprehensive Integration" : "Integração Abrangente"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Bridge the gap between AI innovation and proven business systems with our hybrid approach."
                  : "Conecte a inovação de IA com sistemas de negócio comprovados com nossa abordagem híbrida."}
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
                  {locale === "en" ? "The Power of Hybrid Thinking" : "O Poder do Pensamento Híbrido"}
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Our hybrid solutions combine the intelligence of AI with the reliability of traditional systems, applying behavioral systemic thinking to create solutions that truly understand and serve your business needs."
                    : "Nossas soluções híbridas combinam a inteligência da IA com a confiabilidade de sistemas tradicionais, aplicando pensamento sistêmico comportamental para criar soluções que verdadeiramente entendem e servem suas necessidades de negócio."}
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
                  <div className="mb-2 text-4xl font-bold text-foreground">80%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Faster time to value" : "Tempo para valor mais rápido"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">50%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Lower integration costs" : "Custos de integração menores"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">100%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Business continuity" : "Continuidade de negócio"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approaches Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                {locale === "en" ? "Our Hybrid Approaches" : "Nossas Abordagens Híbridas"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Multiple strategies to integrate AI into your existing technology ecosystem."
                  : "Múltiplas estratégias para integrar IA em seu ecossistema tecnológico existente."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {approaches.map((approach) => (
                <Card key={approach.title} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{approach.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{approach.description}</CardDescription>
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
                    ? "Ready to build your hybrid solution?"
                    : "Pronto para construir sua solução híbrida?"}
                </h2>
                <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Let's create an integrated solution that leverages both AI and traditional systems."
                    : "Vamos criar uma solução integrada que aproveita tanto IA quanto sistemas tradicionais."}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group gap-2">
                    {locale === "en" ? "Discuss Your Needs" : "Discutir Suas Necessidades"}
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
