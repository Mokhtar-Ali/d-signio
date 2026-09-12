import type { ProjectDetail } from "@/data/projectDetails";
import type { Language } from "@/types";

type ProjectGalleryProps = {
  project: Pick<ProjectDetail, "galleryType" | "images" | "name">;
  language: Language;
  onOpenImage: (src: string, alt: string, trigger: HTMLButtonElement) => void;
};

export function ProjectGallery({
  project,
  language,
  onOpenImage,
}: ProjectGalleryProps) {
  const countClass = `project-gallery--count-${project.images.length}`;

  return (
    <div
      className={`project-gallery project-gallery--${project.galleryType} ${countClass}`}
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
            <img src={src} alt={imageAlt} />
          </button>
        );
      })}
    </div>
  );
}
