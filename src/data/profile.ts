import type { Localized } from '@/i18n/ui';

export const CAREER_START_YEAR = 2009;
export const yearsOfExperience = () => new Date().getFullYear() - CAREER_START_YEAR;

export const profile = {
  name: 'Gustavo Zitto',
  firstName: 'Gustavo',
  lastName: 'Zitto',
  email: 'zittogustavo@gmail.com',
  timeZone: 'America/Argentina/Buenos_Aires',
  cv: '/gustavo-zitto-cv.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zittogustavo' },
    { label: 'GitHub', href: 'https://github.com/zittogustavo' },
    { label: 'Instagram', href: 'https://www.instagram.com/zitto.gustavo' },
  ],
};

/** Languages used across current client work (Akila, Posh, Tema Calcos, Unlock Realty, Aura…). */
export const languagesInUse = ['TypeScript', 'JavaScript', 'SQL', 'Python', 'PHP', 'Dart', 'HTML', 'CSS', 'Shell'];

export type Experience = {
  company: string | Localized;
  url?: string;
  role: Localized;
  /** `YYYY-MM`. */
  start: string;
  /** `YYYY-MM`, or omitted when current. */
  end?: string;
  place: Localized;
  highlights: Localized<string[]>;
  tags: string[];
  /** Show the tags as the languages currently in use. */
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: 'Freelance · harneXia',
    role: { en: 'Full-stack Developer', es: 'Desarrollador Full-stack' },
    // TODO(gustavo): confirm start date.
    start: '2026-04',
    place: { en: 'Argentina · Remote', es: 'Argentina · Remoto' },
    highlights: {
      en: [
        'Design and build client products end to end: multi-tenant SaaS, back-offices, CRMs, e-commerce and PWAs.',
        'Own the whole path from data model to deploy: Postgres migrations and RLS, auth, payments, shipping and email integrations, workers and cron jobs.',
        'Recent work: Akila (multi-tenant SaaS for insurance agencies), Tema Calcos (production automation for a print shop), Posh and Unlock Realty.',
      ],
      es: [
        'Diseño y desarrollo productos para clientes de punta a punta: SaaS multi-tenant, back-offices, CRMs, e-commerce y PWAs.',
        'Me ocupo de todo el camino, del modelo de datos al deploy: migraciones y RLS en Postgres, auth, pagos, integraciones de envíos y email, workers y cron jobs.',
        'Trabajos recientes: Akila (SaaS multi-tenant para agencias de seguros), Tema Calcos (automatización de producción para una imprenta), Posh y Unlock Realty.',
      ],
    },
    tags: languagesInUse,
    current: true,
  },
  {
    company: 'Webcargo by Freightos',
    url: 'https://www.webcargo.co/',
    role: { en: 'Senior Software Development Engineer', es: 'Senior Software Development Engineer' },
    start: '2021-11',
    // TODO(gustavo): confirm end date (the 2024 CV still says "current").
    end: '2026-03',
    place: { en: 'Barcelona · Hybrid', es: 'Barcelona · Híbrido' },
    highlights: {
      en: [
        'Migrated legacy PHP 7.1 code from a monolith to DDD and hexagonal architecture, on an in-house framework built on Symfony.',
        'Shipped features and fixes in PHP 8.1 with Doctrine, and designed REST endpoints.',
        'Built and maintained React components with Redux, hooks, context and sagas. Reviewed front-end and back-end code.',
      ],
      es: [
        'Migré código legacy en PHP 7.1 de un monolito a DDD y arquitectura hexagonal, sobre un framework propio basado en Symfony.',
        'Desarrollé features y fixes en PHP 8.1 con Doctrine, y diseñé endpoints REST.',
        'Construí y mantuve componentes React con Redux, hooks, context y sagas. Hice code reviews de front y back.',
      ],
    },
    tags: ['PHP', 'TypeScript', 'React', 'MySQL', 'Docker'],
  },
  {
    company: 'Easy Virtual Fair',
    url: 'https://web.easyvirtualfair.com/es/',
    role: { en: 'Full-stack Developer', es: 'Desarrollador Full-stack' },
    start: '2021-04',
    end: '2021-11',
    place: { en: 'Madrid · Remote', es: 'Madrid · Remoto' },
    highlights: {
      en: [
        'Built a new front-end platform in Angular from scratch, unit tested with Jasmine and Karma.',
        'Fixed bugs across a Backbone/Marionette front-end and a Java back-end on PostgreSQL.',
      ],
      es: [
        'Desarrollé desde cero una nueva plataforma front-end en Angular, con tests unitarios en Jasmine y Karma.',
        'Resolví bugs en un front-end Backbone/Marionette y en un back-end Java con PostgreSQL.',
      ],
    },
    tags: ['Angular', 'TypeScript', 'Java', 'PostgreSQL'],
  },
  {
    company: { en: "Public Prosecutor's Office, Buenos Aires City", es: 'Ministerio Público Fiscal de la Ciudad de Buenos Aires' },
    url: 'https://mpfciudad.gob.ar/',
    role: { en: 'Full-stack Developer', es: 'Desarrollador Full-stack' },
    start: '2017-03',
    end: '2021-04',
    place: { en: 'Buenos Aires · On-site', es: 'Buenos Aires · Presencial' },
    highlights: {
      en: [
        'Built web applications in PHP with Laravel (MVC) and designed and maintained REST APIs with Lumen.',
        'Created and maintained iOS and Android apps with Ionic and Angular.',
        'Fixed legacy CakePHP code on core sites and worked on projects with Vue.js and a Neo4j graph database.',
      ],
      es: [
        'Desarrollé aplicaciones web en PHP con Laravel (MVC) y diseñé y mantuve APIs REST con Lumen.',
        'Creé y mantuve apps iOS y Android con Ionic y Angular.',
        'Corregí código legacy en CakePHP en sitios core y trabajé en proyectos con Vue.js y la base de grafos Neo4j.',
      ],
    },
    tags: ['PHP', 'Laravel', 'Ionic', 'Angular', 'Vue.js', 'Neo4j'],
  },
  {
    company: 'Accenture Argentina',
    url: 'https://www.accenture.com/ar-es',
    role: { en: 'Team Lead · Defect Lead · Scrum Master', es: 'Team Lead · Defect Lead · Scrum Master' },
    start: '2009-01',
    end: '2017-03',
    place: { en: 'Buenos Aires · Hybrid', es: 'Buenos Aires · Híbrido' },
    highlights: {
      en: [
        'Defect Lead for quarterly releases with 450+ bugs, in a global team of more than 100 people.',
        'Scrum Master, Team Lead and member of the release cutover team. Reported daily to leadership in English.',
        '.NET developer with ASP.NET, VB.NET and SQL Server.',
      ],
      es: [
        'Defect Lead de releases trimestrales con más de 450 bugs, en un equipo global de más de 100 personas.',
        'Scrum Master, Team Lead y parte del equipo de release cutover. Reporte diario en inglés a la gerencia.',
        'Desarrollador .NET con ASP.NET, VB.NET y SQL Server.',
      ],
    },
    tags: ['.NET', 'VB.NET', 'SQL Server', 'JavaScript', 'jQuery'],
  },
];

export type Project = {
  name: string;
  url: string;
  extraLinks?: { label: string; url: string }[];
  year: number;
  summary: Localized;
  front: Localized;
  back: Localized<string[]>;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: 'Posh',
    url: 'https://muyposh.vercel.app',
    year: 2026,
    summary: {
      en: 'Online ordering and production platform for a sneaker cleaning and restoration business.',
      es: 'Plataforma de pedidos online y producción para un negocio de limpieza y restauración de zapatillas.',
    },
    front: {
      en: 'Bilingual landing with before/after slider, 3-step ordering flow with photo upload per pair, public order tracking, customer portal and satisfaction surveys.',
      es: 'Landing bilingüe con slider antes/después, flujo de pedido en 3 pasos con fotos por par, seguimiento público del pedido, portal de clientes y encuestas de satisfacción.',
    },
    back: {
      en: [
        'Back-office that runs the shop floor: reception checklists, lab production stages, incidents and reworks, pack credits, daily cash closing and KPIs with exports.',
        'MercadoPago payments and Pickit shipping with signed webhooks, OTP + Google sign-in, Microsoft Graph email, Supabase Storage and scheduled cron jobs.',
        '43 Postgres migrations backed by SQL test suites.',
      ],
      es: [
        'Back-office que maneja la operación: recepción con checklist, etapas de producción del laboratorio, incidencias y retrabajos, créditos de packs, cierre de caja diario y KPIs exportables.',
        'Pagos con MercadoPago y envíos con Pickit vía webhooks firmados, login con OTP + Google, emails por Microsoft Graph, Supabase Storage y cron jobs programados.',
        '43 migraciones de Postgres respaldadas por suites de tests en SQL.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind'],
  },
  {
    name: 'Unlock Realty',
    url: 'https://unlock-realty.com',
    year: 2026,
    summary: {
      en: 'Website, in-house lead CRM and valuation app for a real estate agency in Argentina.',
      es: 'Sitio web, CRM de leads propio y app de tasación para una inmobiliaria en Argentina.',
    },
    front: {
      en: 'Institutional site with property listings, contact form and a careers form, exported as static pages.',
      es: 'Sitio institucional con propiedades, formulario de contacto y de búsquedas laborales, exportado como páginas estáticas.',
    },
    back: {
      en: [
        'Invite-only CRM for the agency’s advisors: lead pipeline with configurable funnel stages, notes and event history, agent teams and a property portfolio that matches supply with demand.',
        'Idempotent Zonaprop Excel import, WhatsApp click-to-chat and email alerts when a lead is assigned.',
        'Supabase Postgres with row-level security and OTP login, plus a signed API that receives leads from the agency’s WordPress valuation plugin.',
        'Companion PWA (React + Vite) that values properties and generates PDF reports.',
      ],
      es: [
        'CRM por invitación para los asesores: pipeline de leads con etapas configurables, notas e historial de eventos, equipos de agentes y cartera de propiedades que cruza oferta con demanda.',
        'Importación idempotente del Excel de Zonaprop, click-to-chat por WhatsApp y alertas por email al asignar un lead.',
        'Supabase Postgres con row-level security y login por OTP, más una API firmada que recibe leads del plugin de tasación de WordPress de la inmobiliaria.',
        'PWA complementaria (React + Vite) que tasa propiedades y genera reportes en PDF.',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vite PWA'],
  },
  {
    name: 'Pura Patita',
    url: 'https://purapatita.com.ar',
    year: 2025,
    summary: {
      en: 'Online store for dog food, with a custom food calculator that recommends the right product.',
      es: 'Tienda online de alimento para perros, con una calculadora propia que recomienda el producto ideal.',
    },
    front: {
      en: 'WooCommerce shop with MercadoPago checkout, plus a 4-step calculator: age, weight, breed metabolism group, activity and health give the daily grams and the best-fitting product.',
      es: 'Tienda WooCommerce con checkout de MercadoPago, más una calculadora de 4 pasos: edad, peso, grupo metabólico de la raza, actividad y salud devuelven los gramos diarios y el producto ideal.',
    },
    back: {
      en: [
        'Custom wp-admin module with usage stats and a product-by-portion mapping.',
        'Every calculation is stored via AJAX in a custom table, turning the tool into a source of customer insights.',
      ],
      es: [
        'Módulo propio en wp-admin con estadísticas de uso y el mapeo de productos por porción.',
        'Cada cálculo se guarda vía AJAX en una tabla propia, convirtiendo la herramienta en una fuente de datos de clientes.',
      ],
    },
    stack: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
  },
];

export const about: Localized<string[]> = {
  en: [
    'I wrote my first production code in 2009 at Accenture Argentina, at 20. Over eight years I went from .NET developer to Scrum Master, Team Lead and Defect Lead of releases with hundreds of bugs and a hundred people across the globe.',
    'Then I went back to what I enjoy most: building. PHP and JavaScript with whatever framework the job needed, for a public prosecutor’s office, an events startup and a freight-tech scale-up, living in Buenos Aires, Málaga and Barcelona along the way.',
    'Today I’m back home in Argentina, building products end to end on a modern TypeScript stack, and still as curious about new tech as on day one. If you have a role or an idea where I could fit, let’s talk.',
  ],
  es: [
    'Escribí mi primer código productivo en 2009 en Accenture Argentina, con 20 años. En ocho años pasé de desarrollador .NET a Scrum Master, Team Lead y Defect Lead de releases con cientos de bugs y un centenar de personas en todo el mundo.',
    'Después volví a lo que más disfruto: construir. PHP y JavaScript con el framework que hiciera falta, para un ministerio público, una startup de eventos y una scale-up de logística, viviendo en Buenos Aires, Málaga y Barcelona en el camino.',
    'Hoy estoy de vuelta en Argentina, construyendo productos de punta a punta con un stack moderno en TypeScript, y con la misma curiosidad por la tecnología que el primer día. Si tenés un puesto o una idea donde pueda sumar, hablemos.',
  ],
};
