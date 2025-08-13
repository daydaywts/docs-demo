import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cult电影记录",
    description: "天天制作",
    base: '/docs-demo/',
    themeConfig: {
      logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '列表', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '演示',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
            { text: 'Runtime API 示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],
      footer: {
          copyright: 'Copyright © 2024-present 天天',
      }
    }
})
