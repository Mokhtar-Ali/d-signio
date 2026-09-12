"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import type { Language } from "@/types";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
};

const labels: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

export function LanguageSwitcher({
  variant = "light",
}: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`language-switcher language-switcher--${variant}`}
      aria-label={t({ es: "Selector de idioma", en: "Language selector" })}
    >
      {(["es", "en"] as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          className={language === option ? "is-active" : undefined}
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}
