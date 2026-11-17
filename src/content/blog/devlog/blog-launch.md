---
title: "게임 개발 블로그를 시작합니다"
description: "Astro + MDX + GitHub Pages로 게임 개발 정보 수집 블로그를 만든 이유와 구조"
pubDate: 2026-11-17
category: devlog
tags: ["Astro", "GitHub Pages", "Blog"]
---

게임 개발을 하면서 모은 자료, 구현 기록, 문제 해결 과정을 한곳에 정리하기 위해 블로그를 열었습니다.

## 구성

| 구성 | 기술 |
| --- | --- |
| 정적 사이트 | Astro |
| 글 작성 | Markdown / MDX |
| 디자인 | Tailwind CSS |
| 호스팅 | GitHub Pages |
| 자동 배포 | GitHub Actions |

## 글 작성 흐름

```text
src/content/blog/<카테고리>/글.md 작성 → git push → Actions 빌드 → Pages 배포
```

## 카테고리

- **Devlog** — 개발 일지
- **Godot** — 엔진 활용 팁
- **Game Design** — 기획과 밸런스
- **Graphics & AI** — 에셋 제작
- **Resources** — 수집한 참고 자료
