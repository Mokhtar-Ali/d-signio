import type { ProjectFact } from "@/data/projectDetails";
import type { Language, LocalizedText } from "@/types";

function resolveText(value: LocalizedText | string, language: Language) {
  return typeof value === "string" ? value : value[language];
}

type ProjectFactsProps = {
  facts: ProjectFact[];
  language: Language;
};

export function ProjectFacts({ facts, language }: ProjectFactsProps) {
  return (
    <dl className="project-facts">
      {facts.map((fact) => (
        <div className="project-fact" key={`${fact.icon}-${resolveText(fact.label, language)}`}>
          <span className="project-fact-icon" aria-hidden="true">
            {fact.icon}
          </span>
          <div>
            <dt>{resolveText(fact.label, language)}</dt>
            <dd>{resolveText(fact.value, language)}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
