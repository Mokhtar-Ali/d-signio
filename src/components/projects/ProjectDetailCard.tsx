import { ProjectFacts } from "@/components/projects/ProjectFacts";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import type { ProjectDetail } from "@/data/projectDetails";
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
  return (
    <article
      className={`project-detail-card project-detail-card--${project.galleryType}`}
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

      <div className="project-detail-info">
        {project.logo ? (
          <RevealBlock
            as="div"
            className="project-detail-logo"
            delay={80}
            variant="fade"
          >
            <img src={project.logo} alt={`${project.name} logo`} />
          </RevealBlock>
        ) : null}

        <RevealBlock
          as="p"
          className="project-detail-kicker"
          delay={project.logo ? 140 : 80}
          variant="slide"
        >
          {resolveText(project.subtitle, language)}
        </RevealBlock>
        <RevealText as="h2" text={project.name} delay={190} />

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

        <ProjectFacts facts={project.facts} language={language} delay={570} />
      </div>

      <ProjectGallery
        project={project}
        language={language}
        onOpenImage={onOpenImage}
        revealDelay={220}
      />
    </article>
  );
}
