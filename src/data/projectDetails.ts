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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f20f78fc17decc45e42c37.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f20f78594e76a3ccfb285c.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f20f78663e5f92ffe39ed2.jpg",
    ],
    galleryType: "standard",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f204ce49d7293cbd48f270.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f204ce663e5f92ffe125e2.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f204ce594e76a3cccb4a7d.jpg",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f204cef50d9ecd2e0daf4f.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f204ce594e76a3cccb4a7e.jpg",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f20c32663e5f92ffe2ef31.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f72f188e05555440cb9de4.png",
    ],
    galleryType: "standard",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21015663e5f92ffe3b588.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f21015594e76a3ccfc7021.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f210158e05555440c78d7f.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f210152b94af6fe53cb44e.jpg",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e28e05555440c59004.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e22b94af6fe53ab12d.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f201e2594e76a3cccb49dc.jpg",
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
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f3b7aeb7fe31537ab500ee.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f3b7af1c4b8f9c8595da3a.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f3b7afac1cc9ed19d77d0c.jpg",
      "https://assets.cdn.filesafe.space/PLXAq7yqMdE7BJTTiHw3/media/69f3b7afb1a8bd8d610b30ec.jpg",
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
