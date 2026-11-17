import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES, ...(keyof typeof CATEGORIES)[]]),
			tags: z.array(z.string()).default([]),
			heroImage: image().optional(),
			// 외부 URL의 크롤링 대표 이미지(예: YouTube 썸네일)
			heroImageUrl: z.url().optional(),
			// 외부 자료를 정리한 글이라면 원문 링크
			source: z.url().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
