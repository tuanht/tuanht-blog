// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuanht.net',
	markdown: {
		shikiConfig: { theme: 'github-light' },
	},
});
