"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ArrowRight, CheckCircle, Sparkles, Zap, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { useEffect } from "react"
import { seoData } from "@/lib/seo"

export default function IntelligentChatbotsPage() {
  const { t, locale } = useLanguage()

  useEffect(() => {
    const seo = seoData.intelligentChatbots[locale]
    document.title = seo.title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", seo.description)
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = seo.description
      document.head.appendChild(meta)
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute("content", seo.keywords.join(", "))
    } else {
      const meta = document.createElement("meta")
      meta.name = "keywords"
      meta.content = seo.keywords.join(", ")
      document.head.appendChild(meta)
    }
  }, [locale])

  const features = [
    {
      icon: Sparkles,
      title: locale === "en" ? "Natural Language Understanding" : "Compreensão de Linguagem Natural",
      description:
        locale === "en"
          ? "Advanced NLP capabilities that understand context, intent, and sentiment in user conversations."
          : "Capacidades avançadas de PLN que entendem contexto, intenção e sentimento em conversas de usuários.",
    },
    {
      icon: Globe,
      title: locale === "en" ? "Multi-Channel Support" : "Suporte Multicanal",
      description:
        locale === "en"
          ? "Deploy seamlessly across web, mobile, messaging platforms, and voice assistants."
          : "Implante perfeitamente em web, mobile, plataformas de mensagens e assistentes de voz.",
    },
    {
      icon: Zap,
      title: locale === "en" ? "Real-Time Learning" : "Aprendizado em Tempo Real",
      description:
        locale === "en"
          ? "Continuous improvement through user interactions and feedback loops."
          : "Melhoria contínua através de interações de usuários e loops de feedback.",
    },
  ]

  const benefits = [
    locale === "en" ? "24/7 automated customer support" : "Suporte ao cliente automatizado 24/7",
    locale === "en" ? "Reduce response time by 90%" : "Reduza o tempo de resposta em 90%",
    locale === "en"
      ? "Handle thousands of conversations simultaneously"
      : "Gerencie milhares de conversas simultaneamente",
    locale === "en" ? "Personalized user experiences at scale" : "Experiências de usuário personalizadas em escala",
    locale === "en" ? "Easy integration with existing systems" : "Integração fácil com sistemas existentes",
    locale === "en" ? "Analytics and insights dashboard" : "Painel de análises e insights",
  ]

  const useCases = [
    {
      title: locale === "en" ? "Customer Support" : "Suporte ao Cliente",
      description:
        locale === "en"
          ? "Resolve common queries instantly, escalate complex issues to human agents, and maintain context throughout conversations."
          : "Resolva consultas comuns instantaneamente, escale problemas complexos para agentes humanos e mantenha o contexto durante as conversas.",
    },
    {
      title: locale === "en" ? "Sales & Lead Generation" : "Vendas e Geração de Leads",
      description:
        locale === "en"
          ? "Qualify leads, schedule meetings, and guide prospects through the sales funnel with intelligent conversations."
          : "Qualifique leads, agende reuniões e guie prospects pelo funil de vendas com conversas inteligentes.",
    },
    {
      title: locale === "en" ? "Internal Operations" : "Operações Internas",
      description:
        locale === "en"
          ? "Automate HR processes, IT support, and employee onboarding with conversational interfaces."
          : "Automatize processos de RH, suporte de TI e integração de funcionários com interfaces conversacionais.",
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
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>

              <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
                {t.solutions.intelligentChatbots.title}
              </h1>

              <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t.solutions.intelligentChatbots.description}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group gap-2">
                  {locale === "en" ? "Start Building" : "Começar a Construir"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  {locale === "en" ? "Schedule Demo" : "Agendar Demo"}
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
                {locale === "en" ? "Powerful Features" : "Recursos Poderosos"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "Built with cutting-edge AI technology to deliver exceptional conversational experiences."
                  : "Construído com tecnologia de IA de ponta para entregar experiências conversacionais excepcionais."}
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
                  {locale === "en" ? "Transform Your Customer Experience" : "Transforme Sua Experiência do Cliente"}
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Our intelligent chatbots combine advanced AI with behavioral understanding to create conversations that feel natural and deliver real value to your users."
                    : "Nossos chatbots inteligentes combinam IA avançada com compreensão comportamental para criar conversas que parecem naturais e entregam valor real aos seus usuários."}
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
                  <div className="mb-2 text-4xl font-bold text-foreground">92%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Customer satisfaction rate" : "Taxa de satisfação do cliente"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">60%</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Reduction in support costs" : "Redução em custos de suporte"}
                  </div>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <div className="mb-2 text-4xl font-bold text-foreground">&lt;2s</div>
                  <div className="text-muted-foreground">
                    {locale === "en" ? "Average response time" : "Tempo médio de resposta"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                {locale === "en" ? "Use Cases" : "Casos de Uso"}
              </h2>
              <p className="text-balance text-lg text-muted-foreground">
                {locale === "en"
                  ? "See how intelligent chatbots can transform different areas of your business."
                  : "Veja como chatbots inteligentes podem transformar diferentes áreas do seu negócio."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{useCase.description}</CardDescription>
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
                    ? "Ready to deploy your intelligent chatbot?"
                    : "Pronto para implantar seu chatbot inteligente?"}
                </h2>
                <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">
                  {locale === "en"
                    ? "Let's build a conversational AI solution tailored to your specific needs."
                    : "Vamos construir uma solução de IA conversacional adaptada às suas necessidades específicas."}
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
