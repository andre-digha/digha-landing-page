import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://digha.app"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}?lang=en`,
          "pt-BR": `${baseUrl}?lang=pt-BR`,
        },
      },
    },
    {
      url: `${baseUrl}/solutions/intelligent-chatbots`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/solutions/intelligent-chatbots?lang=en`,
          "pt-BR": `${baseUrl}/solutions/intelligent-chatbots?lang=pt-BR`,
        },
      },
    },
    {
      url: `${baseUrl}/solutions/agentic-ai-systems`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/solutions/agentic-ai-systems?lang=en`,
          "pt-BR": `${baseUrl}/solutions/agentic-ai-systems?lang=pt-BR`,
        },
      },
    },
    {
      url: `${baseUrl}/solutions/command-servers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/solutions/command-servers?lang=en`,
          "pt-BR": `${baseUrl}/solutions/command-servers?lang=pt-BR`,
        },
      },
    },
    {
      url: `${baseUrl}/solutions/hybrid-solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/solutions/hybrid-solutions?lang=en`,
          "pt-BR": `${baseUrl}/solutions/hybrid-solutions?lang=pt-BR`,
        },
      },
    },
  ]
}
