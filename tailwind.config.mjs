/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				bannerImg: "url('/assets/images/banner-2.jpg')",
			},
			colors: {
				customYellow: '#f3eee5',
				customCream: '#fffccf',
			},
		},
	},
	plugins: [],
};
