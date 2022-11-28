/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  'kinsta-violet': '#3a0ca3',
			  'kinsta-blue': '#4cc9f0',
			  'kinsta-pink-light': '#7209b7',
			  'kinsta-pink-dark': '#b5179e',
			  'kinsta-violet-dark': '#240046',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
