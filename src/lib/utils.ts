import { getCollection } from 'astro:content';

/** base 경로를 붙인 내부 링크 */
export function url(path = '') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}

/** 초안 제외, 최신순 정렬 */
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function tagSlug(tag: string) {
	return tag.toLowerCase().replace(/\s+/g, '-');
}
