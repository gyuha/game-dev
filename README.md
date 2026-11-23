# game-dev

게임개발 정보 수집 블로그 — Astro + MDX + Tailwind CSS + GitHub Pages

배포 주소: https://game.gyuha.com/

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # dist/ 생성
npm run preview
```

## 글 작성

`src/content/blog/<카테고리>/` 아래에 `.md` 또는 `.mdx` 파일을 추가합니다. 파일 경로가 URL이 됩니다 (`blog/godot/match3-find-matches/`).

```yaml
---
title: "제목"
description: "목록·SEO에 표시될 요약"
pubDate: 2026-11-17
category: godot        # devlog | godot | game-design | graphics-ai | resources
tags: ["Godot", "GDScript"]
heroImage: ./cover.webp  # 선택, 글 파일 기준 상대 경로
source: "https://..."    # 선택, 외부 자료를 정리한 경우 원문 링크
draft: false             # true 면 빌드에서 제외
---
```

카테고리 추가·변경은 `src/consts.ts`의 `CATEGORIES`에서 합니다.

## 배포

1. GitHub 저장소 `Settings → Pages → Build and deployment → Source`를 **GitHub Actions**로 지정
2. `main` 브랜치에 push 하면 `.github/workflows/deploy.yml`이 빌드·배포

커스텀 도메인은 `public/CNAME`(`game.gyuha.com`)과 `astro.config.mjs`의 `site`가 일치해야 하며, 루트 도메인 배포이므로 `base`는 설정하지 않습니다.

## 댓글 (선택)

[giscus.app](https://giscus.app)에서 저장소 Discussions를 연결하고 발급된 `repoId`, `categoryId`를 `src/consts.ts`의 `GISCUS`에 입력하면 글 하단에 댓글이 표시됩니다.

## 기능

- 카테고리 / 태그 페이지, 전체 글 클라이언트 검색
- 코드 하이라이팅(Shiki), 목차, 이전/다음 글
- RSS(`/rss.xml`), Sitemap, OG 메타데이터
- 다크 모드 기본 + 라이트 전환
