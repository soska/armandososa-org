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

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      image: image().optional(),
      category: z.string(),
      order: z.number().default(0),
    }),
});

export const collections = { posts, projects };
