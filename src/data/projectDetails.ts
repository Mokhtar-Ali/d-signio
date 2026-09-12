import type { LocalizedText } from "@/types";

export type ProjectFact = {
  icon: string;
  label: LocalizedText;
  value: LocalizedText | string;
};

export type ProjectGalleryType = "standard" | "two" | "vertical3" | "six" | "single";

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
  images: string[];
  galleryType: ProjectGalleryType;
  facts: ProjectFact[];
};

export const projectDetails: ProjectDetail[] = [
  {
    id: "casa-lecompte",
    name: "Casa Lecompte",
    subtitle: {
      es: "Wallpaper decorativo",
      en: "Decorative wallpaper",
    },
    logo:
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f2122749d7293cbd4c457b.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fce5a8a3dd25aa2a669141.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fce7227285562721893c01.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fa3387101c593bfc7ea7eb.png",
    ],
    galleryType: "vertical3",
    facts: [
      {
        icon: "C",
        label: { es: "Cliente", en: "Client" },
        value: "Casa Lecompte",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21227f50d9ecd2e0fc9b3.jpg",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f734d4d868be008541bc4b.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f7350c6b07ab3303398fd5.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f7308652d70cb766c8c93f.png",
    ],
    galleryType: "vertical3",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21227fab44d40209f20de.jpg",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f4c22ddaa24d9895fdaafb.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f4c22d94b9e824d53e20da.jpg",
    ],
    galleryType: "two",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21227e84e52bef4b2091e.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f72f188831cb2c6ce25dd9.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f72e45dd67e758c0dd917c.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f72e456b07ab330338c7e0.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f2122749d7293cbd4c457c.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/6a0830e32e98e28fa12a0c2f.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fa3724a7386fa308a26d81.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fa372440c3c42fc07384b2.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fa37242c10cdf20f4cb231.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21227e84e52bef4b2091f.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f3b6d74ad535b652f86f73.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f2122749d7293cbd4c457b.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e2663e5f92ffe04ff7.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e2fab44d40209b35c6.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f4ce4f582e1c6327b2b727.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f5b96fdd67e758c0a2ede9.jpeg",
    ],
    galleryType: "standard",
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
      es: "Diseño conceptual 360°",
      en: "360° conceptual design",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69fcc6b3a3dd25aa2a5e0910.jpg",
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
        label: { es: "Alcance", en: "Scope" },
        value: {
          es: "Residencial · Diseño conceptual 360°",
          en: "Residential · 360° conceptual design",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21227d6968461202d7b23.png",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f4d06e23e63d676c857b6c.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f736fe6b07ab330339ce02.png",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f4d06e8831cb2c6c8236ae.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f738da8831cb2c6ce38f17.png",
    ],
    galleryType: "standard",
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
