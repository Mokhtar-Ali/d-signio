import { RevealBlock } from "@/components/shared/RevealBlock";
import type { ProjectFact } from "@/data/projectDetails";
import type { Language, LocalizedText } from "@/types";

function resolveText(value: LocalizedText | string, language: Language) {
  return typeof value === "string" ? value : value[language];
}

type ProjectFactsProps = {
  delay?: number;
  facts: ProjectFact[];
  language: Language;
};

export function ProjectFacts({ delay = 0, facts, language }: ProjectFactsProps) {
  return (
    <RevealBlock as="dl" className="project-facts" delay={delay}>
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
    </RevealBlock>
  );
}
