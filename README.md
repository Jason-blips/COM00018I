# 课程站点（VitePress 框架）

仅保留页面骨架，内容请在 `docs/` 内自填。

## 命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run dev` | 本地预览 |
| `npm run build` | 构建（输出在 `docs/.vitepress/dist`） |
| `npm run preview` | 预览构建结果 |

## 你要改的地方

| 文件 | 作用 |
|------|------|
| `docs/.vitepress/config.ts` | 站点标题 `title`、顶栏 `nav`、侧栏 `sidebar` |
| `docs/index.md` | 首页 Hero 与日程列表 |
| `docs/syllabus.md`、`docs/resources.md` | 大纲与资源页 |
| `docs/lectures/*.md` | 各讲；新建后把路径加进 `sidebar` |
| `docs/public/` | 静态文件（课件 PDF 等可放这里并用 `/xxx.pdf` 引用） |
