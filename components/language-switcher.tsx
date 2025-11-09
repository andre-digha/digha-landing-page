"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={() => setLocale(locale === "en" ? "pt-BR" : "en")} className="gap-2">
      <Globe className="h-4 w-4" />
      {locale === "en" ? "PT" : "EN"}
    </Button>
  )
}
