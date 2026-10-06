// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuanht.net',
	integrations: [icon()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Oswald',
			cssVariable: '--font-oswald',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
	],
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			defaultColor: false,
		},
	},
});
