import type { Locale } from "./translations"

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

export const seoData: Record<string, Record<Locale, SEOMetadata>> = {
  home: {
    en: {
      title: "digha.app - AI-First Product Development | Intelligent Systems & Agentic AI",
      description:
        "Build intelligent AI-first products with digha.app. From AI chatbots to complex agentic systems with workflows and command servers. We apply behavioral systemic thinking to deliver hybrid AI solutions.",
      keywords: [
        "AI development",
        "AI-first products",
        "agentic AI",
        "intelligent chatbots",
        "AI systems",
        "command servers",
        "behavioral systemic thinking",
        "hybrid AI solutions",
        "AI workflows",
        "enterprise AI",
      ],
      ogTitle: "digha.app - Build Intelligent AI-First Products",
      ogDescription:
        "Transform your business with AI systems that understand and adapt. From chatbots to complex agentic platforms.",
    },
    "pt-BR": {
      title: "digha.app - Desenvolvimento de Produtos AI-First | Sistemas Inteligentes e IA Agêntica",
      description:
        "Construa produtos inteligentes AI-first com digha.app. De chatbots com IA a sistemas agênticos complexos com workflows e servidores de comando. Aplicamos pensamento sistêmico comportamental para entregar soluções híbridas de IA.",
      keywords: [
        "desenvolvimento IA",
        "produtos AI-first",
        "IA agêntica",
        "chatbots inteligentes",
        "sistemas de IA",
        "servidores de comando",
        "pensamento sistêmico comportamental",
        "soluções híbridas de IA",
        "workflows de IA",
        "IA empresarial",
      ],
      ogTitle: "digha.app - Construa Produtos Inteligentes AI-First",
      ogDescription:
        "Transforme seu negócio com sistemas de IA que entendem e se adaptam. De chatbots a plataformas agênticas complexas.",
    },
  },
  intelligentChatbots: {
    en: {
      title: "Intelligent Chatbots | AI-Powered Conversational Interfaces - digha.app",
      description:
        "Build AI-powered chatbots that truly understand user intent and context. Natural language processing, multi-channel support, and 24/7 automated customer service. Deploy intelligent conversational AI at scale.",
      keywords: [
        "intelligent chatbots",
        "AI chatbot development",
        "conversational AI",
        "NLP chatbots",
        "customer service automation",
        "multi-channel chatbots",
        "chatbot platform",
        "AI customer support",
      ],
      ogTitle: "Intelligent Chatbots - AI Conversational Interfaces",
      ogDescription: "Deploy AI chatbots that understand context and deliver personalized experiences at scale.",
    },
    "pt-BR": {
      title: "Chatbots Inteligentes | Interfaces Conversacionais com IA - digha.app",
      description:
        "Construa chatbots com IA que realmente entendem a intenção e contexto do usuário. Processamento de linguagem natural, suporte multicanal e atendimento ao cliente automatizado 24/7. Implante IA conversacional inteligente em escala.",
      keywords: [
        "chatbots inteligentes",
        "desenvolvimento chatbot IA",
        "IA conversacional",
        "chatbots PLN",
        "automação atendimento cliente",
        "chatbots multicanal",
        "plataforma chatbot",
        "suporte cliente IA",
      ],
      ogTitle: "Chatbots Inteligentes - Interfaces Conversacionais com IA",
      ogDescription: "Implante chatbots com IA que entendem contexto e entregam experiências personalizadas em escala.",
    },
  },
  agenticAI: {
    en: {
      title: "Agentic AI Systems | Multi-Agent Workflows & Autonomous AI - digha.app",
      description:
        "Deploy complex agentic AI systems with multi-agent coordination and autonomous decision-making. Enterprise-grade AI workflows that handle intricate business processes. 70% cost reduction in operations.",
      keywords: [
        "agentic AI",
        "multi-agent systems",
        "autonomous AI",
        "AI workflows",
        "enterprise AI",
        "AI automation",
        "intelligent agents",
        "AI orchestration",
      ],
      ogTitle: "Agentic AI Systems - Autonomous Multi-Agent Platforms",
      ogDescription: "Complex AI systems with autonomous agents that work together to solve business challenges.",
    },
    "pt-BR": {
      title: "Sistemas de IA Agênticos | Workflows Multi-Agente & IA Autônoma - digha.app",
      description:
        "Implante sistemas de IA agênticos complexos com coordenação multi-agente e tomada de decisão autônoma. Workflows de IA de nível empresarial que lidam com processos de negócios intrincados. 70% de redução de custos em operações.",
      keywords: [
        "IA agêntica",
        "sistemas multi-agente",
        "IA autônoma",
        "workflows IA",
        "IA empresarial",
        "automação IA",
        "agentes inteligentes",
        "orquestração IA",
      ],
      ogTitle: "Sistemas de IA Agênticos - Plataformas Multi-Agente Autônomas",
      ogDescription:
        "Sistemas de IA complexos com agentes autônomos que trabalham juntos para resolver desafios de negócio.",
    },
  },
  commandServers: {
    en: {
      title: "Command Servers | AI Infrastructure & Backend Systems - digha.app",
      description:
        "Robust backend infrastructure for complex AI operations. 99.99% uptime, real-time processing, enterprise security. Scalable command servers designed for mission-critical AI workloads.",
      keywords: [
        "command servers",
        "AI infrastructure",
        "AI backend",
        "scalable AI",
        "enterprise AI infrastructure",
        "real-time AI processing",
        "AI deployment",
        "cloud-native AI",
      ],
      ogTitle: "Command Servers - Enterprise AI Infrastructure",
      ogDescription: "Production-ready backend infrastructure for complex AI operations with 99.99% uptime.",
    },
    "pt-BR": {
      title: "Servidores de Comando | Infraestrutura de IA & Sistemas Backend - digha.app",
      description:
        "Infraestrutura de backend robusta para operações de IA complexas. 99.99% de tempo de atividade, processamento em tempo real, segurança empresarial. Servidores de comando escaláveis projetados para cargas de trabalho de IA críticas.",
      keywords: [
        "servidores de comando",
        "infraestrutura IA",
        "backend IA",
        "IA escalável",
        "infraestrutura IA empresarial",
        "processamento IA tempo real",
        "implementação IA",
        "IA nativa nuvem",
      ],
      ogTitle: "Servidores de Comando - Infraestrutura de IA Empresarial",
      ogDescription:
        "Infraestrutura de backend pronta para produção para operações de IA complexas com 99.99% de tempo de atividade.",
    },
  },
  hybridSolutions: {
    en: {
      title: "Hybrid AI Solutions | Integrated AI & Traditional Systems - digha.app",
      description:
        "Combine AI capabilities with traditional software for comprehensive business solutions. End-to-end integration, custom workflows, and behavioral analysis. 80% faster time to value.",
      keywords: [
        "hybrid AI solutions",
        "AI integration",
        "legacy system modernization",
        "AI augmentation",
        "enterprise integration",
        "custom AI workflows",
        "behavioral AI",
        "AI transformation",
      ],
      ogTitle: "Hybrid AI Solutions - Best of AI + Traditional Systems",
      ogDescription: "Integrated solutions combining AI intelligence with proven business systems.",
    },
    "pt-BR": {
      title: "Soluções Híbridas de IA | Sistemas Integrados de IA & Tradicionais - digha.app",
      description:
        "Combine capacidades de IA com software tradicional para soluções de negócios abrangentes. Integração end-to-end, workflows personalizados e análise comportamental. 80% mais rápido para valor.",
      keywords: [
        "soluções híbridas IA",
        "integração IA",
        "modernização sistemas legados",
        "aumento IA",
        "integração empresarial",
        "workflows IA personalizados",
        "IA comportamental",
        "transformação IA",
      ],
      ogTitle: "Soluções Híbridas de IA - O Melhor de IA + Sistemas Tradicionais",
      ogDescription: "Soluções integradas combinando inteligência de IA com sistemas de negócio comprovados.",
    },
  },
}

export function generateStructuredData(type: "Organization" | "WebSite" | "Service", data: any) {
  const baseUrl = "https://digha.app"

  const schemas: Record<string, any> = {
    Organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "digha.app",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: "Building intelligent AI-first products that transform businesses",
      sameAs: ["https://twitter.com/dighaapp", "https://linkedin.com/company/dighaapp", "https://github.com/dighaapp"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "contact@digha.app",
      },
    },
    WebSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "digha.app",
      url: baseUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    Service: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: data.serviceType,
      provider: {
        "@type": "Organization",
        name: "digha.app",
        url: baseUrl,
      },
      description: data.description,
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: data.catalogName,
        itemListElement: data.features?.map((feature: string, index: number) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature,
          },
          position: index + 1,
        })),
      },
    },
  }

  return schemas[type] || null
}
