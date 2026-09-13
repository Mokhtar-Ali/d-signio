"use client";

import { PillButton } from "@/components/shared/PillButton";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { useLanguage } from "@/providers/LanguageProvider";

const heroVideo =
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/D-Signio%20Hero%20Video.mp4";

export function HeroSection() {
  const { t } = useLanguage();
  const heroTitle = t({
    es: "Dotación para proyectos hoteleros, institucionales e inmobiliarios",
    en: "Furnishing for hospitality, institutional, and real estate projects",
  });
  const heroDescription = t({
    es: "Creamos espacios que combinan diseño, funcionalidad y ejecución, permitiendo que cada proyecto cobre vida y opere con eficiencia desde el primer día.",
    en: "We create spaces that combine design, functionality, and execution, allowing each project to come to life and operate efficiently from day one.",
  });
  const heroCta = t({
    es: "Escríbenos por WhatsApp",
    en: "Message us on WhatsApp",
  });

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero-content">
        <div className="hero-copy">
          <SectionEyebrow delay={80}>
            {t({
              es: "Diseño & Ejecución Integral",
              en: "Design & End-to-End Execution",
            })}
          </SectionEyebrow>

          <RevealText as="h1" id="hero-title" text={heroTitle} delay={150} />

          <RevealBlock as="p" delay={540}>
            {heroDescription}
          </RevealBlock>

          <RevealBlock as="div" className="hero-actions" delay={660}>
            <PillButton
              href="https://wa.me/573185210789"
              ariaLabel={heroCta}
            >
              {heroCta}
            </PillButton>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
