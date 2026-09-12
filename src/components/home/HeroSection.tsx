"use client";

import { PillButton } from "@/components/shared/PillButton";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { useLanguage } from "@/providers/LanguageProvider";

const heroVideo =
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fa3d9a76fece50437ae58d.mp4";
const heroPoster =
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f1fc17590487fe57bc6b76.jpg";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <video
        className="hero-video"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero-content">
        <div className="hero-copy">
          <SectionEyebrow>
            {t({
              es: "Diseño & Ejecución Integral",
              en: "Design & End-to-End Execution",
            })}
          </SectionEyebrow>

          <h1 id="hero-title">
            {t({
              es: "Dotación para proyectos hoteleros, institucionales e inmobiliarios",
              en: "Furnishing for hospitality, institutional, and real estate projects",
            })}
          </h1>

          <p>
            {t({
              es: "Creamos espacios que combinan diseño, funcionalidad y ejecución, permitiendo que cada proyecto cobre vida y opere con eficiencia desde el primer día.",
              en: "We create spaces that combine design, functionality, and execution, allowing each project to come to life and operate efficiently from day one.",
            })}
          </p>

          <div className="hero-actions">
            <PillButton
              href="https://wa.me/573185210789"
              ariaLabel={t({
                es: "Escríbenos por WhatsApp",
                en: "Message us on WhatsApp",
              })}
            >
              {t({
                es: "Escríbenos por WhatsApp",
                en: "Message us on WhatsApp",
              })}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
