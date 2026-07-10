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
  // `image` is a plain string (the file name) rather than the `image()` helper,
  // which would fail the whole build if the file isn't there yet. The image is
  // resolved lazily at render time, so a missing file just renders no image.
  schema: z.object({
    title: z.string(),
    url: z.string(),
    image: z.string().optional(),
    // Larger image shown in the project modal; falls back to `image` when absent.
    modalImage: z.string().optional(),
    category: z.string(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

export const collections = { posts, projects };
