import { getPosts } from '../lib/posts';

export async function GET() {
	const posts = await getPosts();
	return Response.json(
		posts.map((p) => ({
			title: p.data.title,
			description: p.data.description,
			url: `/posts/${p.id}/`,
			date: p.data.date.toISOString(),
			terms: [...p.data.categories, ...p.data.tags],
		})),
	);
}
