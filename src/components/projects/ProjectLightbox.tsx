import type { SyntheticEvent } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
};

type ProjectLightboxProps = {
  closeLabel: string;
  image: LightboxImage | null;
  onClose: () => void;
};

function handleImageError(
  image: LightboxImage,
  event: SyntheticEvent<HTMLImageElement>,
) {
  if (process.env.NODE_ENV === "development") {
    console.error("[D-Signio] Project lightbox image failed to load", {
      alt: image.alt,
      src: image.src,
    });
  }

  event.currentTarget.dataset.loadState = "error";
  event.currentTarget.alt = "";
}

export function ProjectLightbox({
  closeLabel,
  image,
  onClose,
}: ProjectLightboxProps) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="project-lightbox-close"
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
      >
        ×
      </button>
      <img
        src={image.src}
        alt={image.alt}
        onError={(event) => handleImageError(image, event)}
      />
    </div>
  );
}
