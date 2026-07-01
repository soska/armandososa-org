import type { ImageMetadata } from 'astro';

const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/projects/**/*.{png,jpg,jpeg,webp,avif,gif,svg}',
  { eager: true }
);

export function resolveProjectImage(id: string, file?: string): ImageMetadata | undefined {
  if (!file) return undefined;
  const name = file.replace(/^\.?\//, '');
  const mod = projectImages[`/src/content/projects/${id}/${name}`];
  if (!mod) {
    console.warn(`[projects] image not found for "${id}": ${file}`);
    return undefined;
  }
  return mod.default;
}
