import type { SyntheticEvent } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import {
  getProjectFeaturedImages,
  getProjectImageSrc,
  type ProjectDetail,
} from "@/data/projectDetails";
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
  const images = getProjectFeaturedImages(project);
  const countClass = `project-gallery--count-${images.length}`;
  const galleryClass =
    images.length === 4
      ? "project-gallery--standard"
      : images.length === 3
        ? "project-gallery--three"
        : "project-gallery--two";
  const galleryDisplayClasses = images
    .flatMap((image) =>
      typeof image === "string" || !image.galleryClassName
        ? []
        : [image.galleryClassName],
    )
    .join(" ");

  return (
    <RevealBlock
      as="div"
      className={`project-gallery ${galleryClass} ${countClass}${
        galleryDisplayClasses ? ` ${galleryDisplayClasses}` : ""
      }`}
      delay={revealDelay}
      variant="soft"
    >
      {images.map((image, index) => {
        const src = getProjectImageSrc(image);
        const imageAlt = `${project.name} ${index + 1}`;
        const openLabel =
          language === "es"
            ? `Abrir imagen ${index + 1} de ${project.name}`
            : `Open image ${index + 1} from ${project.name}`;
        const imageStyle =
          typeof image === "string" || !image.objectPosition
            ? undefined
            : { objectPosition: image.objectPosition };

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
              style={imageStyle}
              onError={(event) => handleImageError(src, project.name, event)}
            />
          </button>
        );
      })}
    </RevealBlock>
  );
}
