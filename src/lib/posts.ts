import type { CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export function normalizePostPath(pathValue: string | undefined, id: string | undefined): string {
  if (pathValue && pathValue.trim().length > 0) {
    return pathValue.replace(/^\/+|\/+$/g, '');
  }

  if (!id) return '';

  return id
    .replace(/\/index(\.md)?$/, '')
    .replace(/^\/+|\/+$/g, '');
}

export function sortPosts(posts: PostEntry[]): PostEntry[] {
  return posts
    .slice()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function formatPostListDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
    .format(date)
    .replace(/^(\w+)\s(\d{2}),\s(\d{4})$/, '$2 $1, $3');
}
