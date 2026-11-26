export const SITE_TITLE = 'Game Dev';
export const SITE_DESCRIPTION = '게임 개발 정보, 기술 튜토리얼, 개발 일지를 모으는 블로그';
export const GITHUB_URL = 'https://github.com/gyuha/game-dev';

// 카테고리 key 는 content.config.ts 의 category enum 과 일치해야 합니다.
export const CATEGORIES = {
	devlog: { label: 'Devlog', description: '주간 개발 기록, 구현 결과, 문제 해결' },
	'game-engines': { label: 'Game Engines', description: 'Godot, Unity, Unreal 등 게임 엔진 활용과 개발' },
	'game-design': { label: 'Game Design', description: '게임 기획, 전투 시스템, 밸런스' },
	'graphics-ai': { label: 'Graphics & AI', description: '스프라이트, 애니메이션, AI 이미지 생성' },
	resources: { label: 'Resources', description: '수집한 문서, 도구, 에셋, 참고 링크' },
} as const;

export type Category = keyof typeof CATEGORIES;

// Giscus 댓글: https://giscus.app 에서 값을 발급받아 채우면 글 하단에 댓글이 표시됩니다.
// repoId 가 비어 있으면 댓글 영역은 렌더링되지 않습니다.
export const GISCUS = {
	repo: 'gyuha/game-dev',
	repoId: '',
	category: 'Announcements',
	categoryId: '',
};
