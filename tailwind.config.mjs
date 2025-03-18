/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/images/school-premises.jpg')",
			  },
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100ch',
					},
				},
			},
			animation: {
				marquee: 'marquee 20s linear infinite',
				marquee2: 'marquee2 20s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
		},
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
}
