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

## Post hero images
- Every new post must have one representative hero image generated from the post's actual topic and content. Do not reuse a generic image or the source site's thumbnail when a content-specific image can be made.
- Use the built-in `image_gen` tool by default. Create a polished raster image suitable for a blog hero, normally in a wide 16:9 composition, with no text, logo, watermark, or fabricated UI unless the post specifically requires it.
- Save the final image beside the post as `src/content/blog/<category>/<year>/<month>/<slug>-hero.png` (or another stable raster extension), and keep the image in the repository as a content asset. Send any generated project file to the user using the configured file-delivery command.
- Set the schema field `heroImage` to the relative asset path, for example `heroImage: './my-post-hero.png'`. Do not use only `heroImageUrl` for newly generated project artwork.
- Display the image at the very top of the Markdown body, immediately after the frontmatter and before the introduction, using a relative Markdown image with meaningful alt text: `![대표 이미지 설명](./my-post-hero.png)`.
- The image prompt must reflect the post's subject, audience, and visual tone. Inspect the generated result before keeping it, and regenerate or revise it if the subject, composition, or readability does not match the article.
- When updating an existing post, preserve its current image unless the user explicitly asks for a replacement. If a post has no hero image and is being materially revised, add one following this workflow.

## Source changes
- Keep changes scoped and follow nearby Astro, TypeScript, CSS, and Markdown conventions.
- Content collection schema changes belong in `src/content.config.ts`; shared site metadata and category definitions live in `src/consts.ts`.
- The site is served from the custom domain `https://game.gyuha.com/` at the root. Keep `site` in `astro.config.mjs` and `public/CNAME` in sync; do not set `base`.
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
