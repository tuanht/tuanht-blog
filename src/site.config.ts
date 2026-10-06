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
	{ label: 'Resume', href: '/resume/' },
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

/** Personal info shown in the sidebar on the Resume page. Empty fields are hidden. */
export const PROFILE = {
	name: 'Tuan Ha',
	title: 'Software Engineer',
	avatar: '/img/avatar.webp',
	bio: 'I write about programming, Linux and the books I read.',
	location: 'HCM, VN',
	email: 'tuanht.unix@gmail.com',
	mobile: '090xxxxxxx',
	website: 'https://tuanht.net',
} as const;
