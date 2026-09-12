"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { ProjectDetailCard } from "@/components/projects/ProjectDetailCard";
import {
  ProjectLightbox,
  type LightboxImage,
} from "@/components/projects/ProjectLightbox";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { projectAliasTargets, projectDetails } from "@/data/projectDetails";
import { useLanguage } from "@/providers/LanguageProvider";

function getProjectIdFromHash(hash: string) {
  const rawId = decodeURIComponent(hash.replace(/^#/, ""));

  return projectAliasTargets.get(rawId) ?? rawId;
}

function scrollToProjectHash(hash: string, behavior: ScrollBehavior) {
  if (!hash) {
    return;
  }

  const element = document.getElementById(getProjectIdFromHash(hash));

  if (!element) {
    return;
  }

  element.scrollIntoView({
    block: "start",
    behavior,
  });
}

export function ProjectsPage() {
  const { language, t } = useLanguage();
  const title = t({ es: "Nuestros proyectos", en: "Our projects" });
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const getScrollBehavior = useCallback((): ScrollBehavior => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
  }, []);

  const openLightbox = useCallback(
    (src: string, alt: string, trigger: HTMLButtonElement) => {
      triggerRef.current = trigger;
      setLightboxImage({ src, alt });
    },
    [],
  );

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);

    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  const handleProjectNavClick = useCallback(
    (projectId: string, event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const hash = `#${projectId}`;

      window.history.pushState(null, "", hash);
      scrollToProjectHash(hash, getScrollBehavior());
    },
    [getScrollBehavior],
  );

  useEffect(() => {
    const handleHashChange = () => {
      requestAnimationFrame(() => {
        scrollToProjectHash(window.location.hash, getScrollBehavior());
      });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [getScrollBehavior]);

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, lightboxImage]);

  return (
    <div className="projects-page">
      <section
        className="projects-page-hero"
        aria-labelledby="projects-page-title"
      >
        <div className="projects-page-inner">
          <SectionEyebrow delay={80}>
            {t({ es: "Portafolio", en: "Portfolio" })}
          </SectionEyebrow>
          <RevealText
            as="h1"
            id="projects-page-title"
            text={title}
            delay={150}
          />
          <RevealBlock as="p" delay={320}>
            {t({
              es: "Una mirada editorial a proyectos hoteleros, institucionales, residenciales e inmobiliarios donde D Signio integra especificación, dotación, mobiliario contract y ejecución con precisión.",
              en: "An editorial look at hospitality, institutional, residential, and real estate projects where D Signio integrates specification, furnishing, contract furniture, and precise execution.",
            })}
          </RevealBlock>

          <RevealBlock
            as="nav"
            className="projects-index"
            delay={430}
            aria-label={t({
              es: "Navegación de proyectos",
              en: "Project navigation",
            })}
          >
            {projectDetails.map((project) => (
              <a
                href={`#${project.id}`}
                key={project.id}
                onClick={(event) => handleProjectNavClick(project.id, event)}
              >
                {project.navLabel?.[language] ?? project.name}
              </a>
            ))}
          </RevealBlock>
        </div>
      </section>

      <section
        className="project-detail-list"
        aria-label={t({
          es: "Detalle de proyectos",
          en: "Project details",
        })}
      >
        {projectDetails.map((project) => (
          <ProjectDetailCard
            key={project.id}
            project={project}
            language={language}
            onOpenImage={openLightbox}
          />
        ))}
      </section>

      <ProjectLightbox
        closeLabel={t({ es: "Cerrar imagen", en: "Close image" })}
        image={lightboxImage}
        onClose={closeLightbox}
      />
    </div>
  );
}
