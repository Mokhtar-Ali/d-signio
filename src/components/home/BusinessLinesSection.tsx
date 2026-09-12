"use client";

import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { businessLines } from "@/data/businessLines";
import { useLanguage } from "@/providers/LanguageProvider";

export function BusinessLinesSection() {
  const { language, t } = useLanguage();

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
          <h2 id="business-lines-title">
            {t({ es: "Las líneas de negocios", en: "Our business lines" })}
          </h2>
          <p>
            {t({
              es: "Soluciones integrales para proyectos hoteleros e inmobiliarios.",
              en: "Comprehensive solutions for hospitality and real estate projects.",
            })}
          </p>
        </header>

        <div className="business-grid">
          {businessLines.map((line) => (
            <article className="business-card" key={line.id}>
              <div className="business-image">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
