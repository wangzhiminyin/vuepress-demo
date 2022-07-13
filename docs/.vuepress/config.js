module.exports = {
  base: '/vuepress-demo/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: '首页',
  description: '...',
  themeConfig: {
      nav: [
          { text: '首页', link: '/' },
          { 
              text: 'wzm的 JavaScript 博客', 
              items: [
                  { text: 'Github', link: 'https://github.com/wangzhiminyin/vuepress-demo' },
                  { text: '掘金', link: 'https://juejin.cn/user/659362705313006/posts' }
              ]
          }
    ],
    sidebar: [
      {
          title: '欢迎学习',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
      {
        title: "基础学习",
        path: '/base/Demo',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/base/Demo" },
          { title: "泛型", path: "/base/Demo2" }
        ],
      }
    ]
    
  }
}
