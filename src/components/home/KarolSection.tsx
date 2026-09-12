"use client";

import { PillButton } from "@/components/shared/PillButton";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { useLanguage } from "@/providers/LanguageProvider";

const logoUrl =
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f249d6d6968461203e69ec.png";

const images = [
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f23b796630fc6c0b533b5e.jpg",
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f23b79fab44d4020abc541.jpg",
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f23b796630fc6c0b533b5d.jpg",
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f23b79663e5f92fff13ce2.jpg",
];

export function KarolSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section section--soft"
      aria-labelledby="karol-title"
    >
      <div className="section-inner karol-grid">
        <div className="karol-gallery" aria-label="Karol de D Signio">
          <figure className="image-frame karol-main-image">
            <img src={images[0]} alt="Karol de D Signio" />
          </figure>
          <div className="karol-small-grid">
            {images.slice(1).map((image, index) => (
              <figure className="image-frame" key={image}>
                <img
                  src={image}
                  alt={t({
                    es: `Detalle visual de Karol ${index + 1}`,
                    en: `Visual detail of Karol ${index + 1}`,
                  })}
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="karol-copy">
          <img className="karol-logo" src={logoUrl} alt="D Signio" />

          <SectionEyebrow>
            Karol
            <span className="karol-role">
              {t({ es: "Gerente de Negocios", en: "Business Manager" })}
            </span>
          </SectionEyebrow>

          <h2 id="karol-title">
            {t({
              es: "Una mirada cercana, estética y funcional para cada espacio.",
              en: "A personal, aesthetic, and functional vision for every space.",
            })}
          </h2>

          <div className="karol-text">
            <p>
              {t({
                es: "Karol lidera D-Signio con una sensibilidad especial por los detalles, la armonía visual y la funcionalidad de cada ambiente.",
                en: "Karol leads D-Signio with a special sensitivity for details, visual harmony, and the functionality of every environment.",
              })}
            </p>
            <p>
              {t({
                es: "Su trabajo combina dirección creativa, selección de mobiliario, materiales y acabados de alto tráfico, acompañando a cada cliente en la construcción de espacios con identidad propia.",
                en: "Her work combines creative direction, furniture selection, materials, and high-traffic finishes, guiding each client in creating spaces with their own identity.",
              })}
            </p>
          </div>

          <div className="contact-card">
            <h3>
              {t({
                es: "Hablemos de tu próximo proyecto",
                en: "Let's talk about your next project",
              })}
            </h3>
            <p>
              {t({
                es: "Cuéntanos qué espacio quieres transformar y el equipo de D Signio te acompañará en el proceso.",
                en: "Tell us what space you want to transform and the D Signio team will guide you through the process.",
              })}
            </p>

            <div className="contact-actions">
              <PillButton href="https://wa.me/573185210789">
                {t({ es: "WhatsApp", en: "WhatsApp" })}
              </PillButton>
              <PillButton
                href="mailto:Kdelahoz@d-signio.com"
                variant="secondary"
              >
                {t({ es: "Email", en: "Email" })}
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
