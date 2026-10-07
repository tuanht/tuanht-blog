import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../../../site.config';
import { ogImage } from '../../../lib/og';

// Standalone pages that are not in the content collection.
const EXTRA = [
	{ slug: 'resume', title: 'Resume' },
	{ slug: 'archives', title: 'Archives' },
];

export async function getStaticPaths() {
	const pages = await getCollection('pages');
	return [...pages.map((p) => ({ slug: p.id, title: p.data.title })), ...EXTRA].map(({ slug, title }) => ({
		params: { slug },
		props: { title },
	}));
}

export const GET: APIRoute = ({ props }) => ogImage(props.title, SITE.author);
