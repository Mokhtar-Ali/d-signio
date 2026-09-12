"use client";

import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { partners } from "@/data/partners";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Partner } from "@/types";

function PartnerCard({
  partner,
  duplicate = false,
}: {
  partner: Partner;
  duplicate?: boolean;
}) {
  const variantClass = partner.variant ? ` partner-card--${partner.variant}` : "";

  return (
    <div
      className={`partner-card${variantClass}${
        duplicate ? " partner-card--duplicate" : ""
      }`}
      aria-hidden={duplicate || undefined}
    >
      <img src={partner.logo} alt={partner.name} />
    </div>
  );
}

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section
      id="partners"
      className="section section--warm"
      aria-labelledby="partners-title"
    >
      <div className="section-inner">
        <header className="section-header">
          <SectionEyebrow>
            {t({ es: "Clientes", en: "Clients" })}
          </SectionEyebrow>
          <h2 id="partners-title">
            {t({
              es: "Clientes que han confiado en nuestro trabajo.",
              en: "Clients that have trusted our work.",
            })}
          </h2>
          <p>
            {t({
              es: "Colaboramos con hoteles, resorts y marcas de hospitalidad creando espacios funcionales, elegantes y memorables.",
              en: "We collaborate with hotels, resorts, and hospitality brands to create functional, elegant, and memorable spaces.",
            })}
          </p>
        </header>

        <div className="partners-window">
          <div className="partners-grid">
            {partners.map((partner) => (
              <PartnerCard partner={partner} key={partner.id} />
            ))}
            {partners.map((partner) => (
              <PartnerCard
                partner={partner}
                key={`${partner.id}-duplicate`}
                duplicate
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
