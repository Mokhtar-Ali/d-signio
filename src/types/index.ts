export type Language = "es" | "en";

export type LocalizedText = {
  es: string;
  en: string;
};

export type BusinessLine = {
  id: string;
  titleEs: string;
  titleEn: string;
  image: string;
  alt: string;
  items: LocalizedText[];
  descriptionEs: string;
  descriptionEn: string;
};

export type Project = {
  id: string;
  name: string;
  city: string;
  image: string;
  metaEs: string;
  metaEn: string;
  descriptionEs: string;
  descriptionEn: string;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  variant?: "wide" | "tall";
};
