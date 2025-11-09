"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/40 bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-2xl font-bold text-foreground">
              digha<span className="text-primary">.app</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.solutions}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/solutions/intelligent-chatbots"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.intelligentChatbots}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/agentic-ai-systems"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.agenticAI}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/command-servers"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.commandServers}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hybrid-solutions"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.footer.hybridSolutions}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.caseStudies}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.connect}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.twitter}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.linkedin}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.github}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} digha.app. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
