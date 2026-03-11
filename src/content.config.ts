import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/posts' }),
  schema: z.object({
    path: z.string().optional(),
    date: z.coerce.date(),
    title: z.string(),
    subtitle: z.string().optional(),
    blurb: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
