# Aaditya Shah — Living Research Atlas

A personal website organized around questions, investigations, notes, and a chronological trail. It is built with Astro and deployed to GitHub Pages at [aadityarshah.github.io](https://aadityarshah.github.io).

## Philosophy

The site treats projects as evidence of inquiry rather than as the organizing identity. Its content model is designed to grow from undergraduate notes and experiments into research, publications, talks, and longer-running bodies of work without requiring another structural redesign.

## Content model

Content lives in `src/content/`:

```text
questions/       Open questions and their current stage
investigations/  Research and engineering work framed by an initiating question
posts/           Notes, essays, field reports, and reflections
trail/           Dated milestones and changes in the work
```

Schemas are defined in `src/content.config.ts`. Cross-collection references are checked during the build by `src/lib/atlas.ts`.

### Question states

Use one of: `noticing`, `reading`, `formalizing`, `experimenting`, `building`, or `revisiting`.

These describe the state of attention, not the quality or importance of the question.

### Draft notes

Set `draft: true` in a note's frontmatter. Drafts are excluded from production pages, topic counts, indexes, and cross-reference validation. The incomplete first-year reflection is intentionally retained as a draft.

### Stable routes

The public labels changed while useful URLs remain stable:

- `/notes` → Notes
- `/projects` → Investigations
- `/timeline` → Trail
- `/tags` → Topics

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The site uses semantic CSS and scoped Astro styles. Newsreader, IBM Plex Sans, and IBM Plex Mono are packaged locally through Fontsource; there are no external font requests. Small interactions use native TypeScript and progressive enhancement.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, builds the static site with Node 22, and deploys `dist/` to GitHub Pages.
