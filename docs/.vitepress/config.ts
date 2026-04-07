import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '课程主页',
  description: '（在 docs/.vitepress/config.ts 修改站点标题与描述）',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap'
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '教学大纲', link: '/syllabus' },
      { text: '资源', link: '/resources' },
      { text: '讲义', link: '/lectures/lec01' }
    ],
    sidebar: [
      {
        text: '课程',
        items: [
          { text: '首页', link: '/' },
          { text: '教学大纲', link: '/syllabus' },
          { text: '资源', link: '/resources' }
        ]
      },
      {
        text: '讲义',
        items: [{ text: '第 1 讲（模板）', link: '/lectures/lec01' }]
      }
    ],
    socialLinks: [],
    footer: {
      message: '',
      copyright: ''
    },
    search: {
      provider: 'local'
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
    }
  }
})
