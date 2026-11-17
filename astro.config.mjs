// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// GitHub Pages 프로젝트 사이트: https://gyuha.com/game-dev/ (gyuha.github.io 의 커스텀 도메인)
// 저장소 이름을 <user>.github.io 로 바꾸거나 커스텀 도메인을 쓰면 base 를 제거하세요.
export default defineConfig({
	site: 'https://gyuha.com',
	base: '/game-dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: { theme: 'github-dark' },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
