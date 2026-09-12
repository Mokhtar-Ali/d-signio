"use client";

import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";

const footerLogo =
  "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/6a07748e937389dca05ebdd6.png";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/d_signio.co",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/dsignio.co",
    icon: "facebook",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@dsignio",
    icon: "tiktok",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/d-signio-mobiliario-y-dise%C3%B1o",
    icon: "linkedin",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/dsignioco/?invite_code=cd251aef9bb04665b0ce31a20c62f5ab&sender=1104789489748270772",
    icon: "pinterest",
  },
] as const;

type SocialIconName = (typeof socialLinks)[number]["icon"];

function SocialIcon({ icon }: { icon: SocialIconName }) {
  switch (icon) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 22v-8.2h2.77l.42-3.2H13.5V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.13c-.29-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.2v2.4H7.5v3.2h2.73V22h3.27Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16.72 2c.2 1.68 1.14 3.16 2.56 4.05.86.54 1.85.84 2.86.85v3.07a8.83 8.83 0 0 1-4.34-1.14v6.3c0 3.87-3.12 7-6.97 7S3.86 19 3.86 15.13s3.12-7 6.97-7c.31 0 .61.02.91.06v3.2a3.95 3.95 0 0 0-.91-.1 3.85 3.85 0 0 0-3.86 3.84 3.85 3.85 0 0 0 7.7 0V2h3.05Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.02h4.44V23H.28V8.02Zm7.2 0h4.26v2.05h.06c.59-1.12 2.04-2.3 4.2-2.3 4.5 0 5.33 2.96 5.33 6.8V23h-4.44v-7.47c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H7.48V8.02Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.02 0C5.4 0 .03 5.37.03 11.99c0 5.08 3.16 9.43 7.63 11.17-.11-.95-.2-2.4.04-3.44.22-.94 1.41-5.97 1.41-5.97s-.36-.72-.36-1.78c0-1.67.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 4-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.18 0 1.03.39 2.13.89 2.73.1.12.11.22.08.34-.09.38-.29 1.2-.33 1.36-.05.22-.17.27-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.79 2.75-7.26 7.93-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.46-6.23 7.46-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15.94.29 1.93.45 2.97.45 6.62 0 11.99-5.37 11.99-11.99C24.01 5.37 18.64 0 12.02 0Z" />
        </svg>
      );
  }
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={footerLogo} alt="D Signio" />
            <p>Barranquilla, Colombia</p>
          </div>

          <div className="footer-links">
            <div className="footer-block">
              <h2>{t({ es: "Correo", en: "Email" })}</h2>
              <a href="mailto:Kdelahoz@d-signio.com">Kdelahoz@d-signio.com</a>
            </div>

            <div className="footer-block">
              <h2>{t({ es: "Teléfono", en: "Phone" })}</h2>
              <a href="tel:+573185210789">+57 318 5210789</a>
            </div>

            <div className="footer-block">
              <h2>{t({ es: "Síguenos", en: "Follow Us" })}</h2>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    className="social-link"
                    href={social.href}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-block">
              <h2>{t({ es: "Idioma", en: "Language" })}</h2>
              <LanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {t({
              es: "© 2026 D Signio. Todos los derechos reservados.",
              en: "© 2026 D Signio. All rights reserved.",
            })}
          </span>
          <span>
            Built by{" "}
            <a
              href="https://cleopatrasolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cleopatra Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
