import { ProjectFacts } from "@/components/projects/ProjectFacts";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import {
  getProjectFeaturedImages,
  type ProjectDetail,
} from "@/data/projectDetails";
import type { Language, LocalizedText } from "@/types";

function resolveText(value: LocalizedText | string, language: Language) {
  return typeof value === "string" ? value : value[language];
}

type ProjectDetailCardProps = {
  language: Language;
  onOpenImage: (src: string, alt: string, trigger: HTMLButtonElement) => void;
  project: ProjectDetail;
};

export function ProjectDetailCard({
  language,
  onOpenImage,
  project,
}: ProjectDetailCardProps) {
  const galleryImages = getProjectFeaturedImages(project);
  const hasGallery = galleryImages.length > 0;
  const logoAlt =
    project.id === "casa-lecompte"
      ? "Cartagena Vacation Rentals logo"
      : `${project.name} logo`;
  const logo = project.logo ? (
    <RevealBlock
      as="div"
      className="project-detail-logo"
      delay={260}
      variant="fade"
    >
      <img src={project.logo} alt={logoAlt} />
    </RevealBlock>
  ) : null;
  const facts = (
    <ProjectFacts facts={project.facts} language={language} delay={570} />
  );

  return (
    <article
      className={`project-detail-card project-detail-card--media-${galleryImages.length}${
        hasGallery ? "" : " project-detail-card--text-only"
      }`}
      id={project.id}
    >
      {project.aliases?.map((alias) => (
        <span
          className="project-anchor-alias"
          id={alias}
          key={alias}
          aria-hidden="true"
        />
      ))}

      <div
        className={`project-detail-info${
          project.logo ? "" : " project-detail-info--no-logo"
        }`}
      >
        <RevealBlock
          as="p"
          className="project-detail-kicker"
          delay={80}
          variant="slide"
        >
          {resolveText(project.subtitle, language)}
        </RevealBlock>
        <RevealText as="h2" text={project.name} delay={190} />

        {logo}

        <div className="project-detail-copy">
          <RevealBlock
            as="div"
            className="project-detail-copy-block"
            delay={360}
          >
            <h3>
              {language === "es" ? "Alcance del proyecto" : "Project scope"}
            </h3>
            <p>{resolveText(project.scope, language)}</p>
          </RevealBlock>

          <RevealBlock
            as="div"
            className="project-detail-copy-block"
            delay={430}
          >
            <h3>{language === "es" ? "Intervenciones" : "Interventions"}</h3>
            <ul>
              {project.interventions.map((intervention) => (
                <li key={resolveText(intervention, language)}>
                  {resolveText(intervention, language)}
                </li>
              ))}
            </ul>
          </RevealBlock>

          <RevealBlock
            as="div"
            className="project-detail-copy-block"
            delay={500}
          >
            <h3>{language === "es" ? "Resultado" : "Result"}</h3>
            <p>{resolveText(project.result, language)}</p>
          </RevealBlock>
        </div>

      </div>

      {hasGallery ? (
        <ProjectGallery
          project={project}
          language={language}
          onOpenImage={onOpenImage}
          revealDelay={220}
        />
      ) : null}

      {facts}
    </article>
  );
}
