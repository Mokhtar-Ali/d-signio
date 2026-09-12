"use client";

import Link from "next/link";
import { useRef } from "react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { projects } from "@/data/projects";
import { useLanguage } from "@/providers/LanguageProvider";

const projectDetailTargets: Record<string, string> = {
  "hays-house": "patio-residencial",
};

export function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  function scrollProjects(direction: -1 | 1) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>(".project-card");
    const styles = window.getComputedStyle(track);
    const gap =
      [styles.columnGap, styles.gap]
        .map((value) => Number.parseFloat(value))
        .find((value) => Number.isFinite(value)) ?? 0;
    const distance = card ? card.getBoundingClientRect().width + gap : 360;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    track.scrollBy({
      left: direction * distance,
      behavior,
    });
  }

  return (
    <section
      id="projects"
      className="section section--warm"
      aria-labelledby="projects-title"
    >
      <div className="section-inner">
        <div className="projects-heading">
          <header className="section-header">
            <SectionEyebrow>
              {t({ es: "Proyectos", en: "Projects" })}
            </SectionEyebrow>
            <h2 id="projects-title">
              {t({
                es: "Proyectos diseñados, estructurados y ejecutados con precisión.",
                en: "Projects designed, structured, and executed with precision.",
              })}
            </h2>
            <p>
              {t({
                es: "Una selección de espacios donde D Signio integra diseño, dotación, mobiliario contract y ejecución para proyectos hoteleros, institucionales e inmobiliarios.",
                en: "A selection of spaces where D Signio integrates design, furnishing, contract furniture, and execution for hospitality, institutional, and real estate projects.",
              })}
            </p>
          </header>

          <div className="project-controls">
            <button
              className="icon-button"
              type="button"
              aria-label={t({ es: "Proyecto anterior", en: "Previous project" })}
              onClick={() => scrollProjects(-1)}
            >
              ‹
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label={t({ es: "Proyecto siguiente", en: "Next project" })}
              onClick={() => scrollProjects(1)}
            >
              ›
            </button>
          </div>
        </div>

        <div className="projects-carousel">
          <div className="projects-track" ref={trackRef} role="list">
            {projects.map((project) => {
              const detailId = projectDetailTargets[project.id] ?? project.id;

              return (
                <Link
                  className="project-card"
                  href={`/projects#${detailId}`}
                  key={project.id}
                  role="listitem"
                  aria-label={t({
                    es: `Ver proyecto ${project.name}`,
                    en: `View project ${project.name}`,
                  })}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                    <span className="project-city">{project.city}</span>
                  </div>

                  <div className="project-card-body">
                    <h3>{project.name}</h3>
                    <p className="project-meta">
                      {language === "es" ? project.metaEs : project.metaEn}
                    </p>
                    <p className="project-description">
                      {language === "es"
                        ? project.descriptionEs
                        : project.descriptionEn}
                    </p>
                    <span className="project-link-label">
                      {t({ es: "Ver proyecto", en: "View project" })}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
