import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE } from '../site.config';

const require = createRequire(import.meta.url);
// satori reads TTF/OTF/WOFF but not WOFF2, so use the fontsource .woff files.
const font = (weight: 400 | 700) =>
	readFile(require.resolve(`@fontsource/oswald/files/oswald-latin-${weight}-normal.woff`));

const el = (type: string, style: Record<string, string | number>, children?: unknown) => ({
	type,
	props: { style: { display: 'flex', ...style }, children },
});

/** Renders a 1200x630 link-preview card as a PNG response. */
export async function ogImage(title: string, footer: string) {
	const tree = el(
		'div',
		{
			width: '100%',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'space-between',
			padding: '72px 80px',
			background: '#181818',
			color: '#fff',
			fontFamily: 'Oswald',
		},
		[
			el('div', { fontSize: 40, color: '#8a8a8a' }, SITE.title.toUpperCase()),
			el(
				'div',
				{ fontSize: title.length > 60 ? 72 : 92, fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' },
				title,
			),
			el('div', { fontSize: 36, color: '#8a8a8a' }, footer),
		],
	);

	const svg = await satori(tree as never, {
		width: 1200,
		height: 630,
		fonts: [
			{ name: 'Oswald', data: await font(400), weight: 400 },
			{ name: 'Oswald', data: await font(700), weight: 700 },
		],
	});
	const png = new Resvg(svg).render().asPng();
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
