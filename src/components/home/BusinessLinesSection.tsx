"use client";

import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { businessLines } from "@/data/businessLines";
import { useLanguage } from "@/providers/LanguageProvider";

export function BusinessLinesSection() {
  const { language, t } = useLanguage();
  const title = t({ es: "Las líneas de negocios", en: "Our business lines" });

  return (
    <section
      id="business-lines"
      className="section section--soft"
      aria-labelledby="business-lines-title"
    >
      <div className="section-inner">
        <header className="section-header">
          <SectionEyebrow>
            {t({ es: "Líneas de negocio", en: "Business Lines" })}
          </SectionEyebrow>
          <RevealText
            as="h2"
            id="business-lines-title"
            text={title}
            delay={110}
          />
          <RevealBlock as="p" delay={300}>
            {t({
              es: "Soluciones integrales para proyectos hoteleros, institucionales e inmobiliarios.",
              en: "Comprehensive solutions for hospitality, institutional, and real estate projects.",
            })}
          </RevealBlock>
        </header>

        <div className="business-grid">
          {businessLines.map((line, index) => (
            <RevealBlock
              as="article"
              className="business-card"
              delay={170}
              key={line.id}
              staggerIndex={index}
            >
              <div className={`business-image business-image--${line.id}`}>
                <img src={line.image} alt={line.alt} />
              </div>

              <h3>{language === "es" ? line.titleEs : line.titleEn}</h3>

              <ul>
                {line.items.map((item) => (
                  <li key={item.es}>{t(item)}</li>
                ))}
              </ul>

              <div className="business-rule" aria-hidden="true" />

              <p className="business-note">
                <span aria-hidden="true">✦</span>
                <span>
                  {language === "es" ? line.descriptionEs : line.descriptionEn}
                </span>
              </p>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
