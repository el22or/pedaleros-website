import { z } from 'astro:content';
import { LOCALES, type Locale } from '../../i18n';

export const tourSchema = z.object({
  tourId: z.string(),
  language: z.enum(LOCALES as [Locale, ...Locale[]]),
  publishDate: z.date(),
  lastModifiedDate: z.date(),
  publishStatus: z.enum(['unpublished', 'draft', 'published']),
  category: z.enum(['half-day', 'full-day', 'multi-day']),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  duration: z.string(),
  location: z.string(),
  season: z.array(z.enum(['spring', 'summer', 'autumn', 'winter'])),
  price: z.number(),
  featured: z.boolean().default(false),
});
