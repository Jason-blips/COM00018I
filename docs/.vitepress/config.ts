import { defineConfig } from 'vitepress'

// CI sets VITE_BASE (e.g. /repo-name/); local dev defaults to /
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  title: 'COM00018I — Advanced Computer Systems',
  description:
    'COM00018I Systems & Devices 3: Advanced Computer Systems — schedule, syllabus, resources, and lecture notes.',
  lang: 'en-US',
  appearance: 'dark',
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
      { text: 'Home', link: '/' },
      { text: 'Syllabus', link: '/syllabus' },
      { text: 'Resources', link: '/resources' },
      { text: 'Lecture 1', link: '/lectures/lec01' }
    ],
    sidebar: [
      {
        text: 'Course',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Syllabus', link: '/syllabus' },
          { text: 'Resources', link: '/resources' }
        ]
      },
      {
        text: 'Lectures',
        items: [{ text: 'Lecture 1 (template)', link: '/lectures/lec01' }]
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
