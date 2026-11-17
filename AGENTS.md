# Blog Repository Instructions

## Project
- This repository is a Korean game development information blog built with Astro, MDX, Tailwind CSS, and GitHub Pages.
- Follow the existing patterns in `README.md`, `src/content.config.ts`, `src/consts.ts`, and nearby posts.
- Put published content in `src/content/blog/<category>/` as `.md` or `.mdx`. The content path determines the URL.

## Writing posts
- Write for game developers: explain the problem or question first, then give practical steps, examples, and a concise takeaway.
- Keep technical claims accurate and distinguish verified facts from opinion or uncertainty. For posts based on external material, include the canonical URL in `source` and make clear what is quoted, summarized, or tested firsthand.
- Use the content schema in `src/content.config.ts`. Required frontmatter: `title`, `description`, `pubDate`, `category`. Optional fields: `updatedDate`, `tags`, `heroImage`, `source`, `draft`.
- Use ISO date values for `pubDate` and `updatedDate`; set `draft: true` for unfinished posts. Drafts are excluded from the published build.
- Keep exactly five categories. Use one existing key from `src/consts.ts`: `devlog`, `game-engines`, `game-design`, `graphics-ai`, or `resources`. Do not add a sixth category; update category definitions and the content schema together if renaming or replacing one.
- Tags are plain strings. Prefer a small set of specific, consistently named tags; check existing posts before introducing new spellings.
- Keep images near the post and reference them with a relative `heroImage` path when used. Avoid adding dependencies for a post without a clear need.
- Use headings, lists, code fences with language identifiers, and links to make longer articles easy to scan. Include runnable, version-appropriate code when possible.
- Use Mermaid fenced code blocks (for example, ` ```mermaid `) for diagrams that clarify a system, workflow, architecture, or comparison; Mermaid is rendered on blog post pages.
- Prefer several small top-to-bottom diagrams over a wide chart. Stack comparisons vertically in separate code blocks so they remain readable on mobile.
- In flowcharts, explicitly style semantic node groups with a restrained pastel palette and dark text. Quote labels containing parser-sensitive punctuation, and use `<br>` rather than `\n` for label line breaks.

## Source changes
- Keep changes scoped and follow nearby Astro, TypeScript, CSS, and Markdown conventions.
- Content collection schema changes belong in `src/content.config.ts`; shared site metadata and category definitions live in `src/consts.ts`.
- Preserve the GitHub Pages project base `/game-dev` in `astro.config.mjs` unless the deployment target changes.
- Do not edit generated output in `dist/` or installed dependencies in `node_modules/`.

## Commands and verification
- `task dev` starts the local Astro development server.
- `task build` installs locked dependencies as needed and builds the site into `dist/`.
- `task preview` previews a production build.
- There is no configured test or lint command. Run `task build` after content, schema, template, or configuration changes when verification is requested or needed for the task.
- `task deploy` pushes/deploys the site and has external side effects. Run it only when the user explicitly asks to deploy.

## Deployment
- GitHub Actions deploys `main` to GitHub Pages using `.github/workflows/deploy.yml`.
- Never commit secrets, credentials, or local environment files.
