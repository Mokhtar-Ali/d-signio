"use client";

import { PillButton } from "@/components/shared/PillButton";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { useLanguage } from "@/providers/LanguageProvider";

const logoUrl =
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/Logo%20Nav.png";

const images = [
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20Karol%201.jpg",
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20Karol%202.jpg",
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20Karol%203.jpg",
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/About%20Karol%204.jpg",
];

export function KarolSection() {
  const { t } = useLanguage();
  const title = t({
    es: "Una mirada cercana, estética y funcional para cada espacio.",
    en: "A personal, aesthetic, and functional vision for every space.",
  });

  return (
    <section
      id="contact"
      className="section section--soft"
      aria-labelledby="karol-title"
    >
      <div className="section-inner karol-grid">
        <RevealBlock
          as="div"
          className="karol-gallery"
          aria-label="Karol de D Signio"
          delay={180}
          variant="soft"
        >
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
        </RevealBlock>

        <div className="karol-copy">
          <RevealBlock
            as="div"
            className="karol-brand"
            delay={80}
            variant="fade"
          >
            <img className="karol-logo" src={logoUrl} alt="D Signio" />
          </RevealBlock>

          <SectionEyebrow>
            Karol
            <span className="karol-role">
              {t({ es: "Gerente de Negocios", en: "Business Manager" })}
            </span>
          </SectionEyebrow>

          <RevealText as="h2" id="karol-title" text={title} delay={120} />

          <div className="karol-text">
            <RevealBlock as="p" delay={320}>
              {t({
                es: "Karol lidera D-Signio con una sensibilidad especial por los detalles, la armonía visual y la funcionalidad de cada ambiente.",
                en: "Karol leads D-Signio with a special sensitivity for details, visual harmony, and the functionality of every environment.",
              })}
            </RevealBlock>
            <RevealBlock as="p" delay={410}>
              {t({
                es: "Su trabajo combina dirección creativa, selección de mobiliario, materiales y acabados de alto tráfico, acompañando a cada cliente en la construcción de espacios con identidad propia.",
                en: "Her work combines creative direction, furniture selection, materials, and high-traffic finishes, guiding each client in creating spaces with their own identity.",
              })}
            </RevealBlock>
          </div>

          <RevealBlock as="div" className="contact-card" delay={500}>
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
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
