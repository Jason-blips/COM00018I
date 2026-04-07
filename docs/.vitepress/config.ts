import { defineConfig } from 'vitepress'

// CI sets VITE_BASE (e.g. /repo-name/); local dev defaults to /
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  title: 'COM00018I — Advanced Computer Systems',
  description:
    'Great Guidance in Advanced Computer Systems — COM00018I course schedule, syllabus, resources, and lecture notes.',
  lang: 'en-US',
  appearance: 'dark',
  cleanUrls: true,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap'
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.svg',
    // Top bar: brand + tools only — page links live in the sidebar (no duplicate menus)
    nav: [],
    sidebar: [
      {
        text: 'Course',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Syllabus', link: '/syllabus' },
          { text: 'Resources', link: '/resources' }
        ]
      },
      {
        text: 'Lectures',
        collapsed: false,
        items: [{ text: 'Lecture 1', link: '/lectures/lec01' }]
      }
    ],
    sidebarMenuLabel: 'Menu',
    socialLinks: [],
    footer: {
      message: '',
      copyright: ''
    },
    search: {
      provider: 'local'
    },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    lastUpdated: {
      text: 'Updated',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
    }
  }
})
