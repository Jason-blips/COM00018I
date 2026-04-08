import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const publicRoot = path.join(root, 'docs', 'public')
const categories = [
  { key: 'slides', title: 'Slides' },
  { key: 'practicals', title: 'Practicals' },
  { key: 'exercises', title: 'Exercises' },
  { key: 'quizzes', title: 'Quizzes' },
  { key: 'assessment', title: 'Assessment' }
]

function escapeHtml(input) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function encodeHref(filename) {
  return filename
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')
}

function buildHtml(category, weekDirName, files) {
  const items = files
    .map((name) => {
      const safeName = escapeHtml(name)
      const href = `./${encodeHref(name)}`
      return `        <li><a class="file" href="${href}">${safeName}</a></li>`
    })
    .join('\n')

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(weekDirName)} ${escapeHtml(category.title)}</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        font-family: "Source Sans 3", "Segoe UI", system-ui, -apple-system, sans-serif;
        background: #0d1117;
        color: #e6edf3;
      }
      .wrap { max-width: 860px; margin: 0 auto; padding: 32px 20px 40px; }
      h1 { margin: 0 0 10px; font-size: 2rem; line-height: 1.2; }
      p { margin: 0 0 20px; color: #8b949e; }
      .back { display: inline-block; margin-bottom: 18px; color: #58a6ff; text-decoration: none; }
      .back:hover { text-decoration: underline; }
      ul { list-style: none; margin: 0; padding: 0; border: 1px solid #30363d; border-radius: 10px; overflow: hidden; }
      li + li { border-top: 1px solid #21262d; }
      a.file { display: block; padding: 12px 14px; color: #c9d1d9; text-decoration: none; background: #161b22; }
      a.file:hover { background: #1f2630; color: #58a6ff; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <a class="back" href="../../">← Back to course home</a>
      <h1>${escapeHtml(weekDirName)} ${escapeHtml(category.title)}</h1>
      <p>Files from <code>/docs/public/${escapeHtml(category.key)}/${escapeHtml(weekDirName)}</code>.</p>
      <ul>
${items || '        <li><a class="file" href="#">(No files found)</a></li>'}
      </ul>
    </main>
  </body>
</html>
`
}

async function main() {
  for (const category of categories) {
    const categoryRoot = path.join(publicRoot, category.key)
    let dirs
    try {
      dirs = await fs.readdir(categoryRoot, { withFileTypes: true })
    } catch {
      continue
    }

    const weekDirs = dirs
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    for (const week of weekDirs) {
      const weekPath = path.join(categoryRoot, week)
      const entries = await fs.readdir(weekPath, { withFileTypes: true })
      const files = entries
        .filter((e) => e.isFile() && e.name.toLowerCase() !== 'index.html')
        .map((e) => e.name)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

      const html = buildHtml(category, week, files)
      await fs.writeFile(path.join(weekPath, 'index.html'), html, 'utf8')
      console.log(`Generated ${category.key} index: ${week}/index.html (${files.length} files)`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

