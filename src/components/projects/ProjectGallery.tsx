import type { SyntheticEvent } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import type { ProjectDetail } from "@/data/projectDetails";
import type { Language } from "@/types";

type ProjectGalleryProps = {
  project: Pick<ProjectDetail, "galleryType" | "images" | "name">;
  language: Language;
  onOpenImage: (src: string, alt: string, trigger: HTMLButtonElement) => void;
  revealDelay?: number;
};

function handleImageError(
  src: string,
  projectName: string,
  event: SyntheticEvent<HTMLImageElement>,
) {
  if (process.env.NODE_ENV === "development") {
    console.error("[D-Signio] Project gallery image failed to load", {
      project: projectName,
      src,
    });
  }

  event.currentTarget.dataset.loadState = "error";
  event.currentTarget.alt = "";
}

export function ProjectGallery({
  project,
  language,
  onOpenImage,
  revealDelay = 0,
}: ProjectGalleryProps) {
  const countClass = `project-gallery--count-${project.images.length}`;

  return (
    <RevealBlock
      as="div"
      className={`project-gallery project-gallery--${project.galleryType} ${countClass}`}
      delay={revealDelay}
      variant="soft"
    >
      {project.images.map((src, index) => {
        const imageAlt = `${project.name} ${index + 1}`;
        const openLabel =
          language === "es"
            ? `Abrir imagen ${index + 1} de ${project.name}`
            : `Open image ${index + 1} from ${project.name}`;

        return (
          <button
            className={
              index === 0
                ? "project-gallery-item is-primary"
                : "project-gallery-item"
            }
            type="button"
            key={src}
            aria-label={openLabel}
            onClick={(event) =>
              onOpenImage(src, imageAlt, event.currentTarget)
            }
          >
            <img
              src={src}
              alt={imageAlt}
              onError={(event) => handleImageError(src, project.name, event)}
            />
          </button>
        );
      })}
    </RevealBlock>
  );
}
