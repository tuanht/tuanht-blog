export const SITE = {
	title: '/blog/tuanht',
	description: 'Notes on programming, Linux and books by Tuan Ha.',
	author: 'Tuan Ha',
	repo: 'https://github.com/tuanht/tuanht-blog',
	lang: 'en',
	postsPerPage: 5,
	footerPostCount: 5,
} as const;

export interface MenuItem {
	label: string;
	href: string;
	children?: MenuItem[];
}

/** Primary menu and sidebar "Pages" widget. Nested `children` render as a dropdown. */
export const MENU: MenuItem[] = [
	{ label: 'Archives', href: '/archives/' },
	{ label: 'About', href: '/about/' },
];

/** Icons in the sidebar "Follow" box, any `simple-icons:*` name. Entries with an empty `href` are hidden. */
export const SOCIAL = [
	{ label: 'RSS', href: '/rss.xml', icon: 'simple-icons:rss' },
	{ label: 'GitHub', href: 'https://github.com/tuanht', icon: 'simple-icons:github' },
	{ label: 'X', href: '', icon: 'simple-icons:x' },
	{ label: 'Facebook', href: '', icon: 'simple-icons:facebook' },
	{ label: 'LinkedIn', href: '', icon: 'simple-icons:linkedin' },
	{ label: 'YouTube', href: '', icon: 'simple-icons:youtube' },
].filter((s) => s.href);
