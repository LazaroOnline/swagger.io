import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [starlightPlugin()],
	theme: {
		colors: {
			'primary': '#097eb2',
			'primary-dark': '#00537c',
			'swagger': 'hsl(101, 73%, 48%)',
			'swagger-dark': 'hsl(101, 73%, 38%)',
			'white': 'hsl(0, 0%, 100%)',
			'black': 'hsl(0, 0%, 0%)',
		},
		extend: {},
	},
	corePlugins: {
		preflight: false,
	}
}