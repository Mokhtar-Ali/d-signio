"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Language, LocalizedText } from "@/types";

const STORAGE_KEY = "dsignio-language";
const supportedLanguages: Language[] = ["es", "en"];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: LocalizedText | string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return supportedLanguages.includes(value as Language);
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return isLanguage(storedLanguage) ? storedLanguage : "es";
}

const listeners = new Set<() => void>();

function subscribeToLanguage(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function emitLanguageChange() {
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getStoredLanguage,
    () => "es",
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
    emitLanguageChange();
  }, []);

  const t = useCallback(
    (value: LocalizedText | string) => {
      if (typeof value === "string") {
        return value;
      }

      return value[language];
    },
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
