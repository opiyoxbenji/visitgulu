/** @type {import('tailwindcss').Config} */
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
			},
		},
	},
	plugins: [],
};
