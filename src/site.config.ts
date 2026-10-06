export const SITE = {
	title: '/blog/tuanht',
	description: 'Notes on programming, Linux and books by Tuan Ha.',
	author: 'Tuan Ha',
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
	{ label: 'License', href: '/license/' },
	{ label: 'About', href: '/about/' },
];

/** Icons in the sidebar "Follow" box. Entries with an empty `href` are hidden. */
export const SOCIAL = [
	{ label: 'RSS', href: '/rss.xml', icon: 'rss' },
	{ label: 'Twitter', href: '', icon: 'twitter' },
	{ label: 'Facebook', href: '', icon: 'facebook' },
	{ label: 'LinkedIn', href: '', icon: 'linkedin' },
	{ label: 'YouTube', href: '', icon: 'youtube' },
	{ label: 'Email', href: '', icon: 'email' },
].filter((s) => s.href);
