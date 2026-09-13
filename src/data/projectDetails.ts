import type { LocalizedText } from "@/types";

export type ProjectFact = {
  icon: string;
  label: LocalizedText;
  value: LocalizedText | string;
};

export type ProjectGalleryType = "standard" | "two" | "vertical3" | "six" | "single";

export type ProjectImage =
  | string
  | {
      galleryClassName?: string;
      objectPosition?: string;
      src: string;
    };

export type ProjectDetail = {
  id: string;
  aliases?: string[];
  name: string;
  navLabel?: LocalizedText;
  subtitle: LocalizedText;
  logo?: string;
  scope: LocalizedText;
  interventions: LocalizedText[];
  result: LocalizedText;
  images: ProjectImage[];
  galleryType: ProjectGalleryType;
  facts: ProjectFact[];
};

export function getProjectFeaturedImages(
  project: Pick<ProjectDetail, "galleryType" | "images">,
) {
  const featuredImageCount =
    project.galleryType === "standard"
      ? 4
      : project.galleryType === "vertical3"
        ? 3
        : 2;

  return project.images.slice(0, featuredImageCount);
}

export function getProjectImageSrc(image: ProjectImage) {
  return typeof image === "string" ? image : image.src;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: "casa-lecompte",
    name: "Casa Lecompte",
    subtitle: {
      es: "Wallpaper decorativo",
      en: "Decorative wallpaper",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Cartagena%20vacation%20rentals.png",
    scope: {
      es: "Proyecto inmobiliario · Interiorismo",
      en: "Real estate project · Interior design",
    },
    interventions: [
      {
        es: "Suministro e instalación de wallpaper",
        en: "Wallpaper supply and installation",
      },
      {
        es: "Intervención decorativa puntual",
        en: "Focused decorative intervention",
      },
      {
        es: "Textura y acabado visual para el espacio",
        en: "Texture and visual finish for the space",
      },
    ],
    result: {
      es: "Suministro e instalación de wallpaper como intervención decorativa puntual para aportar textura y acabado visual al espacio.",
      en: "Wallpaper supply and installation as a focused decorative intervention to add texture and visual finish to the space.",
    },
    images: [
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Casa%20Le%20Compte%201.png",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Casa%20Le%20Compte%202.png",
    ],
    galleryType: "two",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Cartagena Vacation Rentals",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Wallpaper decorativo", en: "Decorative wallpaper" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Cartagena",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Proyecto inmobiliario · Interiorismo",
          en: "Real estate project · Interior design",
        },
      },
    ],
  },
  {
    id: "hotel-el-prado",
    name: "Hotel El Prado",
    subtitle: {
      es: "Dotación estratégica",
      en: "Strategic furnishing",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Hotel%20El%20Parado.jpg",
    scope: {
      es: "Hospitality · Dotación estratégica",
      en: "Hospitality · Strategic furnishing",
    },
    interventions: [
      {
        es: "Estructuración y especificación de mobiliario",
        en: "Furniture structuring and specification",
      },
      {
        es: "Textiles para espacios hoteleros",
        en: "Textiles for hospitality spaces",
      },
      {
        es: "Detalles funcionales para operación",
        en: "Functional details for operation",
      },
    ],
    result: {
      es: "Estructuración, especificación y ejecución de mobiliario, textiles y detalles para espacios hoteleros.",
      en: "Structuring, specification, and execution of furniture, textiles, and details for hospitality spaces.",
    },
    images: [
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20El%20Prado%201.png",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20El%20Prado%202.png",
    ],
    galleryType: "two",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Hotel El Prado",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Dotación estratégica", en: "Strategic furnishing" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Barranquilla",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Hospitality · Dotación estratégica",
          en: "Hospitality · Strategic furnishing",
        },
      },
    ],
  },
  {
    id: "hotel-faranda-cartagena",
    aliases: ["hotel-faranda"],
    name: "Hotel Faranda Cartagena",
    navLabel: {
      es: "Faranda Cartagena",
      en: "Faranda Cartagena",
    },
    subtitle: {
      es: "Habitaciones hoteleras",
      en: "Guest rooms",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Fernanda.jpg",
    scope: {
      es: "Hospitality · Habitaciones",
      en: "Hospitality · Guest rooms",
    },
    interventions: [
      {
        es: "Cortinas blackout",
        en: "Blackout curtains",
      },
      {
        es: "Velos en onda serena",
        en: "Serene-wave sheers",
      },
      {
        es: "Pie de camas para habitaciones de alto flujo",
        en: "Bed runners for high-traffic rooms",
      },
    ],
    result: {
      es: "Cortinas blackout, velos en onda serena y pie de camas para habitaciones hoteleras de alto flujo.",
      en: "Blackout curtains, serene-wave sheers, and bed runners for high-traffic hotel rooms.",
    },
    images: [
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20Faranda%20Cartagena%201.jpg",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20Faranda%20Cartagena%202.jpg",
    ],
    galleryType: "single",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Hotel Faranda Cartagena",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Habitaciones hoteleras", en: "Guest rooms" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Cartagena",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Hospitality · Habitaciones",
          en: "Hospitality · Guest rooms",
        },
      },
    ],
  },
  {
    id: "hotel-faranda-barranquilla",
    name: "Hotel Faranda Barranquilla",
    navLabel: {
      es: "Faranda Barranquilla",
      en: "Faranda Barranquilla",
    },
    subtitle: {
      es: "Textiles y accesorios",
      en: "Textiles and accessories",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Fernanda.jpg",
    scope: {
      es: "Hospitality · Textiles y accesorios",
      en: "Hospitality · Textiles and accessories",
    },
    interventions: [
      {
        es: "Elementos textiles para habitaciones",
        en: "Textile elements for rooms",
      },
      {
        es: "Accesorios para piscina y restaurante",
        en: "Accessories for pool and restaurant",
      },
      {
        es: "Detalles funcionales de operación",
        en: "Functional operational details",
      },
    ],
    result: {
      es: "Elementos textiles, accesorios y detalles funcionales para habitaciones, piscina y restaurante.",
      en: "Textile elements, accessories, and functional details for rooms, pool, and restaurant.",
    },
    images: [
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20Faranda%20Barranquilla%201.png",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20Faranda%20Barranquilla%202.png",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Hotel%20Faranda%20Barranquilla%203.png",
    ],
    galleryType: "vertical3",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Hotel Faranda Barranquilla",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Textiles y accesorios", en: "Textiles and accessories" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Barranquilla",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Hospitality · Textiles y accesorios",
          en: "Hospitality · Textiles and accessories",
        },
      },
    ],
  },
  {
    id: "wyndham-santa-marta",
    name: "Wyndham Santa Marta",
    subtitle: {
      es: "Ejecución integral",
      en: "End-to-end execution",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Wyndaham.png",
    scope: {
      es: "Hospitality · Ejecución integral",
      en: "Hospitality · End-to-end execution",
    },
    interventions: [
      {
        es: "Soluciones de diseño",
        en: "Design solutions",
      },
      {
        es: "Mobiliario para operación hotelera",
        en: "Furniture for hospitality operation",
      },
      {
        es: "Detalles decorativos orientados a experiencia",
        en: "Decorative details focused on experience",
      },
    ],
    result: {
      es: "Soluciones de diseño, mobiliario y detalles decorativos orientados a operación, durabilidad y experiencia.",
      en: "Design, furniture, and decorative detail solutions focused on operation, durability, and experience.",
    },
    images: [
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Wyndham%20Santa%20Marta%201.jpg",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Wyndham%20Santa%20Marta%202.png",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Wyndham%20Santa%20Marta%203.png",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Wyndham%20Santa%20Marta%204.png",
    ],
    galleryType: "standard",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Wyndham Santa Marta",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Ejecución integral", en: "End-to-end execution" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Santa Marta",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Hospitality · Ejecución integral",
          en: "Hospitality · End-to-end execution",
        },
      },
    ],
  },
  {
    id: "irotama-resort",
    name: "Irotama Resort",
    subtitle: {
      es: "Diseño y dotación",
      en: "Design and furnishing",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Irotama.png",
    scope: {
      es: "Resort · Diseño y dotación",
      en: "Resort · Design and furnishing",
    },
    interventions: [
      {
        es: "Fabricación de lámpara decorativa a medida",
        en: "Custom decorative lamp fabrication",
      },
      {
        es: "Complemento para atmósfera interior",
        en: "Interior atmosphere complement",
      },
    ],
    result: {
      es: "Fabricación de lámpara decorativa a medida para complementar la atmósfera interior del resort.",
      en: "Custom decorative lamp fabrication to complement the resort's interior atmosphere.",
    },
    images: [
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Irotama%20Resort%20.png",
    ],
    galleryType: "single",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Irotama Resort",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Diseño y dotación", en: "Design and furnishing" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Santa Marta",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Resort · Diseño y dotación",
          en: "Resort · Design and furnishing",
        },
      },
    ],
  },
  {
    id: "cartagena-vacation-rentals",
    name: "Cartagena Vacation Rentals",
    navLabel: {
      es: "Vacation Rentals",
      en: "Vacation Rentals",
    },
    subtitle: {
      es: "Renta vacacional",
      en: "Vacation rentals",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Cartagena%20vacation%20rentals.png",
    scope: {
      es: "Renta vacacional · Interiorismo",
      en: "Vacation rentals · Interior design",
    },
    interventions: [
      {
        es: "Fabricación e instalación de cortinas",
        en: "Curtain fabrication and installation",
      },
      {
        es: "Diseño interior para propiedad del portafolio",
        en: "Interior design for a portfolio property",
      },
    ],
    result: {
      es: "Fabricación e instalación de cortinas, junto con diseño interior para otra propiedad del portafolio.",
      en: "Curtain fabrication and installation, along with interior design for another property in the portfolio.",
    },
    images: [
      {
        galleryClassName: "project-gallery--compact-single",
        objectPosition: "center 60%",
        src: "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/Home%20Projects%20Cartagena%20Vacation%20Rentals.jpg",
      },
    ],
    galleryType: "single",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Cartagena Vacation Rentals",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Renta vacacional", en: "Vacation rentals" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Cartagena",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Renta vacacional · Interiorismo",
          en: "Vacation rentals · Interior design",
        },
      },
    ],
  },
  {
    id: "patio-residencial",
    aliases: ["hays-house"],
    name: "Patio Residencial",
    subtitle: {
      es: "Diseño conceptual 360° para patio residencial",
      en: "360° conceptual design for a residential patio",
    },
    scope: {
      es: "Residencial · Diseño conceptual 360°",
      en: "Residential · 360° conceptual design",
    },
    interventions: [
      {
        es: "Diseño conceptual 360° para patio residencial",
        en: "360° conceptual design for a residential patio",
      },
      {
        es: "Visualización inmersiva",
        en: "Immersive visualization",
      },
      {
        es: "Especificación de mobiliario KANNOA",
        en: "KANNOA furniture specification",
      },
    ],
    result: {
      es: "Diseño conceptual 360° para patio residencial, con visualización inmersiva y especificación de mobiliario KANNOA.",
      en: "360° conceptual design for a residential patio, with immersive visualization and KANNOA furniture specification.",
    },
    images: [
      {
        galleryClassName: "project-gallery--patio-single",
        objectPosition: "center",
        src: "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Patio%20Residencial%20.jpg",
      },
    ],
    galleryType: "single",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Essence Construction",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: "Patio Residencial",
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: { es: "Virginia, Estados Unidos", en: "Virginia, United States" },
      },
      {
        icon: "A",
        label: { es: "Año", en: "Year" },
        value: "2024",
      },
      {
        icon: "S",
        label: { es: "Estado", en: "Status" },
        value: {
          es: "Ejecutado",
          en: "Completed",
        },
      },
    ],
  },
  {
    id: "nespresso",
    name: "Nespresso",
    subtitle: {
      es: "Experiencia de marca",
      en: "Brand experience",
    },
    logo:
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Clients/Nepresso.png",
    scope: {
      es: "Experiencia de marca · Activación",
      en: "Brand experience · Activation",
    },
    interventions: [
      {
        es: "Diseño aplicado a experiencia de marca",
        en: "Design applied to brand experience",
      },
      {
        es: "Detalles decorativos",
        en: "Decorative details",
      },
      {
        es: "Activación comercial",
        en: "Commercial activation",
      },
    ],
    result: {
      es: "Diseño aplicado a experiencia de marca, detalles decorativos y activación comercial.",
      en: "Design applied to brand experience, decorative details, and commercial activation.",
    },
    images: [
      {
        galleryClassName: "project-gallery--nespresso-three",
        src: "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Nepresso%201.jpg",
      },
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Nepresso%202.jpg",
      "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Projects/Nepresso%203.png",
    ],
    galleryType: "vertical3",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Nespresso",
      },
      {
        icon: "P",
        label: { es: "Proyecto", en: "Project" },
        value: { es: "Experiencia de marca", en: "Brand experience" },
      },
      {
        icon: "U",
        label: { es: "Ubicación", en: "Location" },
        value: "Barranquilla",
      },
      {
        icon: "A",
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Experiencia de marca · Activación",
          en: "Brand experience · Activation",
        },
      },
    ],
  },
];

export const projectAliasTargets = new Map(
  projectDetails.flatMap((project) =>
    (project.aliases ?? []).map((alias) => [alias, project.id] as const),
  ),
);
