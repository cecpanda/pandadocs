module.exports = {
  base: '/docs/',
  title: '中电熊猫',
  description: '技术文档中心',
  head: [
    ['link', { rel: 'icon', href: '/fav.jpeg' }]
  ],
  themeConfig: {
    nav: [
      { text: 'TITAN', link: '/titan/' },
      { text: '停机管理', link: '/lantern/' },
      { text: '下载中心', link: '/downloads/' },
      {
        text: 'CHART',
        items: [
          { text: 'X', link: '/x/' },
          { text: 'Y', link: '/y/' }
        ]
      }
    ],
    sidebar: {
      '/titan/check/': [
        '',
        ['dir', 'dirwatch'],
        'disk',
      ]
    },
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '最后更新', // string | boolean
  },
  markdown: {
    lineNumbers: true
  },
}