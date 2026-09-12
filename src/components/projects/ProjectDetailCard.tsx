import { ProjectFacts } from "@/components/projects/ProjectFacts";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
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
          <div className="project-detail-logo">
            <img src={project.logo} alt={`${project.name} logo`} />
          </div>
        ) : null}

        <p className="project-detail-kicker">
          {resolveText(project.subtitle, language)}
        </p>
        <h2>{project.name}</h2>

        <div className="project-detail-copy">
          <div className="project-detail-copy-block">
            <h3>
              {language === "es" ? "Alcance del proyecto" : "Project scope"}
            </h3>
            <p>{resolveText(project.scope, language)}</p>
          </div>

          <div className="project-detail-copy-block">
            <h3>{language === "es" ? "Intervenciones" : "Interventions"}</h3>
            <ul>
              {project.interventions.map((intervention) => (
                <li key={resolveText(intervention, language)}>
                  {resolveText(intervention, language)}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-detail-copy-block">
            <h3>{language === "es" ? "Resultado" : "Result"}</h3>
            <p>{resolveText(project.result, language)}</p>
          </div>
        </div>

        <ProjectFacts facts={project.facts} language={language} />
      </div>

      <ProjectGallery
        project={project}
        language={language}
        onOpenImage={onOpenImage}
      />
    </article>
  );
}
