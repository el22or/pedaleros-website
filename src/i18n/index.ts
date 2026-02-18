import en from './en.json';
import sr from './sr.json';

const LOCALE_MAP = {
  en: { tag: 'en', dictionary: en },
  sr: { tag: 'sr-Latn', dictionary: sr },
} as const;

export type LocaleSlug = keyof typeof LOCALE_MAP;
export const LOCALES = Object.keys(LOCALE_MAP);
export type Locale = LocaleSlug;
export const DEFAULT_LOCALE: LocaleSlug = 'en';

type Dictionary = Record<string, string>;

export type NavItem = { labelKey: string, path?: string, children?: NavItem[] };

let currentSlug: LocaleSlug = DEFAULT_LOCALE;

export const SET_GLOBAL_LOCALE = (slug: LocaleSlug)=> {
  currentSlug = slug;
}

export const GET_LANGUAGE_TAG = () => {
  return LOCALE_MAP[currentSlug].tag;
}

export const GET_SAFE_LOCALE = (l: string | undefined): Locale => {
  return (l && (LOCALES as readonly string[]).includes(l)) ? l as Locale : DEFAULT_LOCALE;
};

export function t(key: string, slug: LocaleSlug = currentSlug): string {
  const DICTIONARY = LOCALE_MAP[slug].dictionary as Dictionary;
  return DICTIONARY[key] ?? key;
}

export const NAV_STRUCTURE: Record<LocaleSlug, NavItem[]> = {
  en: [
    {
      labelKey: 'nav.home',
      children: [
        { labelKey: 'nav.home', path: 'home' },
        { labelKey: 'nav.home.beginners', path: 'home/beginners' },
        { labelKey: 'nav.home.experienced', path: 'home/experienced' },
        { labelKey: 'nav.home.adventures', path: 'adventures' },
      ],
    },
    {
      labelKey: 'nav.tours',
      children: [
        { labelKey: 'nav.tours.all', path: 'tours' },
        { labelKey: 'nav.tours.learning-kayaking', path: 'tours/learning-kayaking' },
        { labelKey: 'nav.tours.half-day', path: 'tours/half-day-kayaking' },
        { labelKey: 'nav.tours.full-day', path: 'tours/full-day-adventure' },
        { labelKey: 'nav.tours.multi-day', path: 'tours/multi-day-expedition' },
      ],
    },
    {
      labelKey: 'nav.courses',
      children: [
        { labelKey: 'nav.courses.all', path: 'courses' },
        { labelKey: 'nav.courses.beginner', path: 'courses/beginner' },
        { labelKey: 'nav.courses.intermediate', path: 'courses/intermediate' },
        { labelKey: 'nav.courses.advanced', path: 'courses/advanced' },
      ],
    },
    {
      labelKey: 'nav.camps',
      children: [
        { labelKey: 'nav.camps.kids', path: 'camps/kids' },
        { labelKey: 'nav.camps.teenagers', path: 'camps/teenagers' },
      ],
    },
    {
      labelKey: 'nav.corporate',
      children: [
        { labelKey: 'nav.corporate.team-building', path: 'corporate/team-building' },
        { labelKey: 'nav.corporate.private-events', path: 'corporate/private-events' },
      ],
    },
    { labelKey: 'nav.about', path: 'about' },
    { labelKey: 'nav.contact', path: 'contact' },
  ],
  sr: [
    {
      labelKey: 'nav.home',
      children: [
        { labelKey: 'nav.home', path: 'pocetna' },
        { labelKey: 'nav.home.beginners', path: 'pocetna/pocetnici' },
        { labelKey: 'nav.home.experienced', path: 'pocetna/iskusni' },
        { labelKey: 'nav.home.adventures', path: 'avanture' },
      ],
    },
    {
      labelKey: 'nav.tours',
      children: [
        { labelKey: 'nav.tours.all', path: 'ture' },
        { labelKey: 'nav.tours.learning-kayaking', path: 'ture/skola-kajaka' },
        { labelKey: 'nav.tours.half-day', path: 'ture/poludnevne-ture' },
        { labelKey: 'nav.tours.full-day', path: 'ture/celodnevne-avanture' },
        { labelKey: 'nav.tours.multi-day', path: 'ture/visednevne-ekspedicije' },
      ],
    },
    {
      labelKey: 'nav.courses',
      children: [
        { labelKey: 'nav.courses.all', path: 'kursevi' },
        { labelKey: 'nav.courses.beginner', path: 'kursevi/za-pocetnike' },
        { labelKey: 'nav.courses.intermediate', path: 'kursevi/usavrsavanje-vestina' },
        { labelKey: 'nav.courses.advanced', path: 'kursevi/napredni-trening' },
      ],
    },
    {
      labelKey: 'nav.camps',
      children: [
        { labelKey: 'nav.camps.kids', path: 'kampovi/deca' },
        { labelKey: 'nav.camps.teenagers', path: 'kampovi/tinejdzeri' },
      ],
    },
    {
      labelKey: 'nav.corporate',
      children: [
        { labelKey: 'nav.corporate.team-building', path: 'korporativni/team-building' },
        { labelKey: 'nav.corporate.private-events', path: 'korporativni/privatni-dogadjaji' },
      ],
    },
    { labelKey: 'nav.about', path: 'o-nama' },
    { labelKey: 'nav.contact', path: 'kontakt' },
  ],
};
