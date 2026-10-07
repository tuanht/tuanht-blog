// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuanht.dev',
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
			transformers: [
				{
					// Wrap each block in a figure with a language label and copy button.
					root(root) {
						const lang = this.options.lang;
						root.children = [
							{
								type: 'element',
								tagName: 'div',
								properties: { className: ['code-block'], dataLang: lang },
								children: [
									{
										type: 'element',
										tagName: 'div',
										properties: { className: ['code-bar'] },
										children: [
											{ type: 'element', tagName: 'span', properties: {}, children: [{ type: 'text', value: lang }] },
											{
												type: 'element',
												tagName: 'button',
												properties: { type: 'button', className: ['code-copy'] },
												children: [{ type: 'text', value: 'copy' }],
											},
										],
									},
									root.children[0],
								],
							},
						];
					},
				},
			],
		},
	},
});
