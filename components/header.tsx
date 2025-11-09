"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">
              digha<span className="text-primary">.app</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/#solutions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.solutions}
            </Link>
            <Link
              href="/#approach"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.approach}
            </Link>
            <Link
              href="/#case-studies"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.caseStudies}
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" className="hidden md:inline-flex">
              {t.header.signIn}
            </Button>
            <Button>{t.header.getStarted}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
