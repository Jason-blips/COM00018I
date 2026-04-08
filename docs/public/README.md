# Static files (course materials)

Put real course files (PDF/PPTX/ZIP) in this folder.

VitePress serves `docs/public/` at the **site root**:

- `docs/public/slides/week01.pdf` → `/slides/week01.pdf`
- `docs/public/practicals/week01.pdf` → `/practicals/week01.pdf`
- `docs/public/lecture-reviews/week01.pdf` → `/lecture-reviews/week01.pdf`
- `docs/public/exercises/week01.zip` → `/exercises/week01.zip`
- `docs/public/quizzes/week01.pdf` → `/quizzes/week01.pdf`

Recommended naming:

- Use `week01`, `week02`, ... to keep links stable.
- Avoid spaces in filenames (use `-`).

Generate folder index pages for all weekly material folders:

- Run `npm run gen:materials-index`
- It scans these folders and writes `index.html` in each `weekXX` folder:
  - `docs/public/slides/`
  - `docs/public/practicals/`
  - `docs/public/lecture-reviews/`
  - `docs/public/exercises/`
  - `docs/public/quizzes/`
