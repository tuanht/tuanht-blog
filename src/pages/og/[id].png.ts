import type { APIRoute } from 'astro';
import { SITE } from '../../site.config';
import { getPosts, formatDate } from '../../lib/posts';
import { ogImage } from '../../lib/og';

export async function getStaticPaths() {
	const posts = await getPosts();
	return posts.map((post) => ({ params: { id: post.id }, props: { post } }));
}

export const GET: APIRoute = ({ props }) => {
	const { title, date } = props.post.data;
	return ogImage(title, `${SITE.author} | ${formatDate(date)}`);
};
