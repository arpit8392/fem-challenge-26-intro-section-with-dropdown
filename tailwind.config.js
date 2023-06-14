/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				offWhite: 'hsl(0, 0%, 98%)',
				offBlack: 'hsl(0, 0%, 8%)',
				mediumGray: 'hsl(0, 0%, 41%)',
			},
		},
	},
	plugins: [],
}
