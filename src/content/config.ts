import { defineCollection } from 'astro:content';
import { tourSchema } from './schemas/tour.ts';

export const collections = {
  tours: defineCollection({ type: 'content', schema: tourSchema }),
};
