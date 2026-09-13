"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { projects } from "@/data/projects";
import { useLanguage } from "@/providers/LanguageProvider";

const projectDetailTargets: Record<string, string> = {
  "hays-house": "patio-residencial",
};

const carouselIntervalMs = 3000;

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const title = t({
    es: "Proyectos diseñados, estructurados y ejecutados con precisión.",
    en: "Projects designed, structured, and executed with precision.",
  });

  const resetAutoplayTimer = useCallback(() => {
    setTimerResetKey((key) => key + 1);
  }, []);

  const getCarouselMetrics = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return null;
    }

    const card = track.querySelector<HTMLElement>(".project-card");
    const cards = track.querySelectorAll<HTMLElement>(".project-card");

    if (!card || cards.length === 0) {
      return null;
    }

    const styles = window.getComputedStyle(track);
    const gap =
      [styles.columnGap, styles.gap]
        .map((value) => Number.parseFloat(value))
        .find((value) => Number.isFinite(value)) ?? 0;
    const distance = card.getBoundingClientRect().width + gap;
    const visibleCards = Math.max(
      1,
      Math.floor((track.clientWidth + gap + 1) / distance),
    );
    const maxIndex = Math.max(0, cards.length - visibleCards);

    return {
      distance,
      maxIndex,
      track,
    };
  }, []);

  const scrollToProjectIndex = useCallback(
    (index: number, behavior: ScrollBehavior) => {
      const metrics = getCarouselMetrics();

      if (!metrics) {
        return;
      }

      const slotCount = metrics.maxIndex + 1;
      const nextIndex = ((index % slotCount) + slotCount) % slotCount;

      metrics.track.scrollTo({
        left: nextIndex * metrics.distance,
        behavior,
      });
      setActiveIndex(nextIndex);
    },
    [getCarouselMetrics],
  );

  const scrollProjects = useCallback(
    (direction: -1 | 1, isManual = false) => {
      const metrics = getCarouselMetrics();

      if (!metrics) {
        return;
      }

      const slotCount = metrics.maxIndex + 1;
      const nextIndex = (activeIndex + direction + slotCount) % slotCount;
      const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

      scrollToProjectIndex(nextIndex, behavior);

      if (isManual) {
        resetAutoplayTimer();
      }
    },
    [
      activeIndex,
      getCarouselMetrics,
      prefersReducedMotion,
      resetAutoplayTimer,
      scrollToProjectIndex,
    ],
  );

  const handleTrackScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const metrics = getCarouselMetrics();

      if (!metrics) {
        return;
      }

      const nextIndex = Math.min(
        metrics.maxIndex,
        Math.max(0, Math.round(metrics.track.scrollLeft / metrics.distance)),
      );

      setActiveIndex(nextIndex);
    });
  }, [getCarouselMetrics]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !("IntersectionObserver" in window)) {
      setIsCarouselVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCarouselVisible(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (
      !isCarouselVisible ||
      prefersReducedMotion ||
      projects.length <= 1
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollProjects(1);
    }, carouselIntervalMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    isCarouselVisible,
    prefersReducedMotion,
    scrollProjects,
    timerResetKey,
  ]);

  useEffect(() => {
    const syncCarouselPosition = () => {
      const metrics = getCarouselMetrics();

      if (!metrics) {
        return;
      }

      const nextIndex = Math.min(activeIndex, metrics.maxIndex);
      metrics.track.scrollTo({
        left: nextIndex * metrics.distance,
        behavior: "auto",
      });
      setActiveIndex(nextIndex);
    };

    window.addEventListener("resize", syncCarouselPosition);

    return () => {
      window.removeEventListener("resize", syncCarouselPosition);
    };
  }, [activeIndex, getCarouselMetrics]);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="section section--warm"
      aria-labelledby="projects-title"
      ref={sectionRef}
    >
      <div className="section-inner">
        <div className="projects-heading">
          <header className="section-header">
            <SectionEyebrow>
              {t({ es: "Proyectos", en: "Projects" })}
            </SectionEyebrow>
            <RevealText as="h2" id="projects-title" text={title} delay={110} />
            <RevealBlock as="p" delay={320}>
              {t({
                es: "Una selección de espacios donde D Signio integra diseño, dotación, mobiliario contract y ejecución para proyectos hoteleros, institucionales e inmobiliarios.",
                en: "A selection of spaces where D Signio integrates design, furnishing, contract furniture, and execution for hospitality, institutional, and real estate projects.",
              })}
            </RevealBlock>
          </header>

          <RevealBlock as="div" className="project-controls" delay={380}>
            <button
              className="icon-button"
              type="button"
              aria-label={t({ es: "Proyecto anterior", en: "Previous project" })}
              onClick={() => scrollProjects(-1, true)}
            >
              ‹
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label={t({ es: "Proyecto siguiente", en: "Next project" })}
              onClick={() => scrollProjects(1, true)}
            >
              ›
            </button>
          </RevealBlock>
        </div>

        <div className="projects-carousel">
          <div
            className="projects-track"
            ref={trackRef}
            role="list"
            onPointerDown={resetAutoplayTimer}
            onScroll={handleTrackScroll}
            onTouchStart={resetAutoplayTimer}
          >
            {projects.map((project, index) => {
              const detailId = projectDetailTargets[project.id] ?? project.id;

              return (
                <RevealBlock
                  as={Link}
                  className="project-card"
                  delay={160}
                  href={`/projects#${detailId}`}
                  key={project.id}
                  role="listitem"
                  staggerIndex={index}
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
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
