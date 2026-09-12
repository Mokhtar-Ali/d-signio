import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "D Signio | Mobiliario Contract e Interiorismo",
  description:
    "D-Signio estructura, especifica y ejecuta mobiliario contract para proyectos hoteleros, institucionales e inmobiliarios.",
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
