"use client";

import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { useLanguage } from "@/providers/LanguageProvider";

const aboutImages = {
  main: "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20D-signio%201.jpg",
  sideOne:
    "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20D-signio%202.jpg",
  sideTwo:
    "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20D-signio%203.jpg",
};

const stats = [
  {
    icon: "target",
    label: { es: "Enfoque en proyectos", en: "Project-focused approach" },
  },
  {
    icon: "workflow",
    label: { es: "Ejecución integral", en: "End-to-end execution" },
  },
  {
    icon: "shield",
    label: { es: "Calidad y durabilidad", en: "Quality and durability" },
  },
  {
    icon: "building",
    label: { es: "Experiencia en hospitality", en: "Hospitality experience" },
  },
] as const;

type StatIconName = (typeof stats)[number]["icon"];

function StatIcon({ icon }: { icon: StatIconName }) {
  switch (icon) {
    case "target":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" />
          <circle cx="12" cy="12" r="2.8" />
          <path d="M12 2.8v3.1M12 18.1v3.1M2.8 12h3.1M18.1 12h3.1" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6.5" cy="7" r="3" />
          <circle cx="17.5" cy="7" r="3" />
          <circle cx="12" cy="17" r="3" />
          <path d="M9.3 8.2h5.4M8 9.5l2.4 5M16 9.5l-2.4 5" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.2 18.5 6v5.3c0 4.2-2.6 7.6-6.5 9.5-3.9-1.9-6.5-5.3-6.5-9.5V6L12 3.2Z" />
          <path d="m8.9 12.1 2.2 2.2 4.3-4.6" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.5 20.5V4.8h9.2v15.7M14.7 9h3.8v11.5M4 20.5h16" />
          <path d="M8.4 8h.1M11.7 8h.1M8.4 11.5h.1M11.7 11.5h.1M8.4 15h.1M11.7 15h.1" />
        </svg>
      );
  }
}

export function AboutSection() {
  const { t } = useLanguage();
  const title = t({
    es: "Especialistas en dotación estratégica para hospitality.",
    en: "Specialists in strategic furnishing for hospitality.",
  });

  return (
    <section
      id="about"
      className="section section--warm"
      aria-labelledby="about-title"
    >
      <div className="section-inner about-grid">
        <div className="about-copy">
          <SectionEyebrow>
            {t({ es: "Sobre D-Signio", en: "About D-Signio" })}
          </SectionEyebrow>

          <RevealText as="h2" id="about-title" text={title} delay={110} />

          <div className="about-text">
            <RevealBlock as="p" delay={300}>
              {t({
                es: "D Signio es un estudio especializado en la estructuración, especificación y ejecución de mobiliario contract para proyectos hoteleros, institucionales e inmobiliarios.",
                en: "D Signio is a studio specialized in the structuring, specification, and execution of contract furniture for hospitality, institutional, and real estate projects.",
              })}
            </RevealBlock>
            <RevealBlock as="p" delay={390}>
              {t({
                es: "Creamos espacios que combinan diseño, funcionalidad y ejecución, permitiendo que cada proyecto cobre vida y opere con eficiencia desde el primer día.",
                en: "We create spaces that combine design, functionality, and execution, allowing each project to come to life and operate efficiently from day one.",
              })}
            </RevealBlock>
          </div>

          <RevealBlock as="p" className="about-highlight" delay={470}>
            {t({
              es: "No vendemos productos.",
              en: "We do not sell products.",
            })}{" "}
            <span>
              {t({
                es: "Estructuramos y ejecutamos proyectos completos.",
                en: "We structure and execute complete projects.",
              })}
            </span>
          </RevealBlock>

          <div className="stat-grid" aria-label="D Signio">
            {stats.map((stat, index) => (
              <RevealBlock
                as="div"
                className="stat-card"
                delay={540}
                key={stat.label.es}
                staggerIndex={index}
              >
                <div className="stat-icon" aria-hidden="true">
                  <StatIcon icon={stat.icon} />
                </div>
                <span>{t(stat.label)}</span>
              </RevealBlock>
            ))}
          </div>
        </div>

        <RevealBlock
          as="div"
          className="about-images"
          aria-label="D Signio interiors"
          delay={220}
          variant="soft"
        >
          <figure className="image-frame about-main-image">
            <img src={aboutImages.main} alt="Proyecto interior de D Signio" />
          </figure>
          <div className="about-side-images">
            <figure className="image-frame">
              <img
                src={aboutImages.sideOne}
                alt="Detalle de interiorismo por D Signio"
              />
            </figure>
            <figure className="image-frame">
              <img
                src={aboutImages.sideTwo}
                alt="Espacio interior ejecutado por D Signio"
              />
            </figure>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
