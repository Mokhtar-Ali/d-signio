import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "D-Signio | Mobiliario Contract e Interiorismo",
    template: "%s | D-Signio",
  },
  description:
    "D-Signio diseña, especifica y ejecuta mobiliario contract, interiorismo y decoración para proyectos hoteleros, institucionales, inmobiliarios y residenciales.",
  applicationName: "D-Signio",
  keywords: [
    "D-Signio",
    "mobiliario contract",
    "interiorismo",
    "decoración",
    "hotelería",
    "proyectos inmobiliarios",
  ],
  creator: "D-Signio",
  publisher: "D-Signio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    title: "D-Signio | Mobiliario Contract e Interiorismo",
    description:
      "D-Signio diseña, especifica y ejecuta mobiliario contract, interiorismo y decoración para proyectos hoteleros, institucionales, inmobiliarios y residenciales.",
    siteName: "D-Signio",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "D-Signio | Mobiliario Contract e Interiorismo",
    description:
      "D-Signio diseña, especifica y ejecuta mobiliario contract, interiorismo y decoración para proyectos hoteleros, institucionales, inmobiliarios y residenciales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
