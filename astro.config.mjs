// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// 커스텀 도메인 사이트: https://game.gyuha.com/ (public/CNAME 과 일치해야 함)
export default defineConfig({
	site: 'https://game.gyuha.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: { theme: 'github-dark' },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
