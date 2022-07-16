module.exports = {
  base: '/vuepress-demo/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'vue知识点总结',
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
              { title: "初始vue", path: "/" }
          ]
      },
      {
        title: "知识点学习",
        path: '/base/ComputedWatch',
        collapsable: false, // 不折叠
        children: [
          { title: "1. computed和watch", path: "/base/ComputedWatch" },
          { title: "2. ClassStyle绑定", path: "/base/ClassStyle" },
          { title: "3. v-model数据绑定", path: "/base/DataBinding" },
          { title: "4. 渲染函数", path: "/base/Functional" },
          { title: "5. template和jsx", path: "/base/TemplateJsx" },
          { title: "6. 父子之间通信", path: "/base/PropsEmit" },
        ],
      }
    ]
    
  }
}
