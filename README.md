# Course site (VitePress)

Starter layout only — fill in content under `docs/`.

## Commands

| Command | Description |
|--------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server |
| `npm run build` | Production build (output: `docs/.vitepress/dist`) |
| `npm run preview` | Preview the production build |

## What to edit

| File | Purpose |
|------|---------|
| `docs/.vitepress/config.ts` | Site `title`, `sidebar` (main nav); top bar is logo + search + theme only |
| `docs/index.md` | Course title, meeting lines, and the **schedule table** (HTML) |
| `docs/syllabus.md`, `docs/resources.md` | Syllabus (includes schedule table) and resources |
| `docs/lectures/*.md` | Lectures; add files and list them under **Lectures** in `sidebar` |
| `docs/public/` | Static assets (e.g. PDFs at `/filename.pdf`) |
