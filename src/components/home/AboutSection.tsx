"use client";

import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { useLanguage } from "@/providers/LanguageProvider";

const aboutImages = {
  main: "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e2fab44d40209b35c6.jpg",
  sideOne:
    "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e26630fc6c0b425111.jpg",
  sideTwo:
    "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f2010dfab44d40209b0cac.jpg",
};

const stats = [
  {
    number: "01",
    label: { es: "Enfoque en proyectos", en: "Project-focused approach" },
  },
  {
    number: "02",
    label: { es: "Ejecución integral", en: "End-to-end execution" },
  },
  {
    number: "03",
    label: { es: "Calidad y durabilidad", en: "Quality and durability" },
  },
  {
    number: "04",
    label: { es: "Experiencia en hospitality", en: "Hospitality experience" },
  },
];

export function AboutSection() {
  const { t } = useLanguage();

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

          <h2 id="about-title">
            {t({
              es: "Especialistas en dotación estratégica para hospitality.",
              en: "Specialists in strategic furnishing for hospitality.",
            })}
          </h2>

          <div className="about-text">
            <p>
              {t({
                es: "D Signio es un estudio especializado en la estructuración, especificación y ejecución de mobiliario contract para proyectos hoteleros, institucionales e inmobiliarios.",
                en: "D Signio is a studio specialized in the structuring, specification, and execution of contract furniture for hospitality, institutional, and real estate projects.",
              })}
            </p>
            <p>
              {t({
                es: "Creamos espacios que combinan diseño, funcionalidad y ejecución, permitiendo que cada proyecto cobre vida y opere con eficiencia desde el primer día.",
                en: "We create spaces that combine design, functionality, and execution, allowing each project to come to life and operate efficiently from day one.",
              })}
            </p>
          </div>

          <p className="about-highlight">
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
          </p>

          <div className="stat-grid" aria-label="D Signio">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.number}>
                <strong>{stat.number}</strong>
                <span>{t(stat.label)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-images" aria-label="D Signio interiors">
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
        </div>
      </div>
    </section>
  );
}
