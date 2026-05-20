import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    tagColor: z.string(),
    tagBg: z.string(),
    emoji: z.string(),
    thumbBg: z.string(),
    date: z.string(),
    readTime: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

export const collections = { blog };
