import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../site.config';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('posts', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const slugify = (s: string) =>
	s
		.toLowerCase()
		.trim()
		.replace(/[^\p{L}\p{N}]+/gu, '-')
		.replace(/^-+|-+$/g, '');

/** Dates are rendered in UTC so a build in any timezone yields the same output. */
export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }) {
	return date.toLocaleDateString('en-US', { ...options, timeZone: 'UTC' });
}

export const pad = (n: number) => String(n).padStart(2, '0');

export function monthKey(date: Date) {
	return { year: String(date.getUTCFullYear()), month: pad(date.getUTCMonth() + 1) };
}

export function groupByTerm(posts: Post[], key: 'categories' | 'tags') {
	const groups = new Map<string, { name: string; posts: Post[] }>();
	for (const post of posts) {
		for (const name of post.data[key]) {
			const slug = slugify(name);
			const group = groups.get(slug) ?? { name, posts: [] };
			group.posts.push(post);
			groups.set(slug, group);
		}
	}
	return [...groups.entries()]
		.map(([slug, g]) => ({ slug, ...g }))
		.sort((a, b) => a.name.localeCompare(b.name));
}

export function pageCount(total: number) {
	return Math.max(1, Math.ceil(total / SITE.postsPerPage));
}

export function paginate<T>(items: T[], page: number) {
	return items.slice((page - 1) * SITE.postsPerPage, page * SITE.postsPerPage);
}

export function pageHref(n: number) {
	return n === 1 ? '/' : `/page/${n}/`;
}
