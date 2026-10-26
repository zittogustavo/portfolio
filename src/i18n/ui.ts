export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  es: { label: 'Español', short: 'ES', htmlLang: 'es', ogLocale: 'es_AR' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** A value that changes per language. Shared data stays in one place; only the text varies. */
export type Localized<T = string> = Record<Lang, T>;

const en = {
  'meta.title': 'Gustavo Zitto — Full-stack Developer',
  'meta.description':
    'Full-stack developer with {years}+ years of experience. I build SaaS platforms, back-offices and web products end to end. Based in Argentina.',

  'a11y.skip': 'Skip to content',
  'a11y.theme': 'Switch to {theme} theme',
  'a11y.theme.light': 'light',
  'a11y.theme.dark': 'dark',
  'a11y.lang': 'Leer en español',
  'a11y.home': 'Gustavo Zitto, home',
  'a11y.newTab': 'opens in a new tab',
  'a11y.mainNav': 'Main',
  'a11y.menu': 'Open menu',
  'a11y.close': 'Close menu',

  'nav.work': 'Work',
  'nav.experience': 'Experience',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'cta.talk': "Let's talk",

  'preloader.status': 'Brewing coffee',
  'preloader.skip': 'Click or press any key to skip',

  'hero.role': 'Full-stack developer',
  'hero.intro':
    '{years}+ years shipping software, from enterprise .NET releases to multi-tenant SaaS. Today I design and build products end to end: data model, back-office, front-end and deploy.',
  'hero.available': 'Available for new projects',
  'hero.based': 'Based in Argentina',
  'hero.time': 'Local time',
  'hero.scroll': 'Scroll',

  'stack.label': 'Languages I work with',

  'work.title': 'Selected work',
  'work.front': 'What you see',
  'work.back': 'Under the hood',
  'work.backNote': 'Private, behind a login. Here is what it does.',
  'work.visit': 'Visit site',

  'exp.title': 'Experience',
  'exp.present': 'Present',
  'exp.languages': 'Languages',

  'about.title': 'About',
  'about.photoAlt': 'Portrait of Gustavo Zitto smiling, black and white',
  'about.stat.years': 'years writing software',
  'about.stat.languages': 'languages in daily use',
  'about.stat.cities': "cities I've lived and coded in",

  'contact.eyebrow': 'Got an idea?',
  'contact.title': "Let's build it.",
  'contact.cv': 'Download CV',
  'contact.copy': 'Copy email',
  'contact.copied': 'Copied!',

  'footer.built': 'Designed and built from scratch with Astro.',
  'footer.top': 'Back to top',

  '404.title': 'Page not found',
  '404.text': 'The coffee is still hot, but this page does not exist.',
  '404.back': 'Back home',
};

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  'meta.title': 'Gustavo Zitto — Desarrollador Full-stack',
  'meta.description':
    'Desarrollador full-stack con más de {years} años de experiencia. Construyo plataformas SaaS, back-offices y productos web de punta a punta. Desde Argentina.',

  'a11y.skip': 'Saltar al contenido',
  'a11y.theme': 'Cambiar a tema {theme}',
  'a11y.theme.light': 'claro',
  'a11y.theme.dark': 'oscuro',
  'a11y.lang': 'Read in English',
  'a11y.home': 'Gustavo Zitto, inicio',
  'a11y.newTab': 'se abre en una pestaña nueva',
  'a11y.mainNav': 'Principal',
  'a11y.menu': 'Abrir menú',
  'a11y.close': 'Cerrar menú',

  'nav.work': 'Proyectos',
  'nav.experience': 'Experiencia',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'cta.talk': 'Hablemos',

  'preloader.status': 'Preparando café',
  'preloader.skip': 'Hacé clic o tocá una tecla para saltar',

  'hero.role': 'Desarrollador full-stack',
  'hero.intro':
    'Más de {years} años construyendo software, desde releases .NET corporativos hasta SaaS multi-tenant. Hoy diseño y desarrollo productos de punta a punta: modelo de datos, back-office, front-end y deploy.',
  'hero.available': 'Disponible para nuevos proyectos',
  'hero.based': 'Desde Argentina',
  'hero.time': 'Hora local',
  'hero.scroll': 'Scroll',

  'stack.label': 'Lenguajes con los que trabajo',

  'work.title': 'Proyectos',
  'work.front': 'Lo que se ve',
  'work.back': 'Lo que no se ve',
  'work.backNote': 'Privado, detrás de un login. Esto es lo que hace.',
  'work.visit': 'Ver sitio',

  'exp.title': 'Experiencia',
  'exp.present': 'Actualidad',
  'exp.languages': 'Lenguajes',

  'about.title': 'Sobre mí',
  'about.photoAlt': 'Retrato de Gustavo Zitto sonriendo, en blanco y negro',
  'about.stat.years': 'años escribiendo software',
  'about.stat.languages': 'lenguajes en uso diario',
  'about.stat.cities': 'ciudades donde viví y programé',

  'contact.eyebrow': '¿Tenés una idea?',
  'contact.title': 'Hagámosla realidad.',
  'contact.cv': 'Descargar CV',
  'contact.copy': 'Copiar email',
  'contact.copied': '¡Copiado!',

  'footer.built': 'Diseñado y desarrollado desde cero con Astro.',
  'footer.top': 'Volver arriba',

  '404.title': 'Página no encontrada',
  '404.text': 'El café sigue caliente, pero esta página no existe.',
  '404.back': 'Volver al inicio',
};

const ui: Record<Lang, Record<UIKey, string>> = { en, es };

export function useTranslations(lang: Lang) {
  return (key: UIKey, vars: Record<string, string | number> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`));
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

/** URL of `path` (no leading slash, e.g. `#work`) in the given language. */
export function localePath(lang: Lang, path = '') {
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return `${base}${path}`;
}

/** Resolves a value that may be the same in every language or localized. */
export function localize(value: string | Localized, lang: Lang) {
  return typeof value === 'string' ? value : value[lang];
}

/** `YYYY-MM` → "Nov 2021" / "nov. 2021". */
export function formatMonth(yearMonth: string, lang: Lang) {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(languages[lang].htmlLang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1)),
  );
}
