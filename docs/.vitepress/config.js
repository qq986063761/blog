export default {
  base: '/myBlog/',
  title: '我的博客',
  description: '记录一下自己学过的一些内容',
  themeConfig: {
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '主页',
        link: '/index'
      },
      {
        text: '自我介绍',
        link: '/introduce'
      },
      {
        text: '组件收藏',
        link: '/component'
      }
    ]
  }
}