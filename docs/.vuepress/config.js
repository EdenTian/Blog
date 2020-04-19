module.exports = {
  title: "Eden Blog",
  head: [
    ['link', { rel: 'icon', href: '/image/photo.png' }]
  ],
  base:'/Blog',
  themeConfig: {
    lastUpdated: true,
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    sidebar: 'auto',
    search: true,
    sidebarDepth: 2,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '后端',
        items: [
          { text: 'java基础', link: '/javaSE/' },
          { text: 'java高级', link: '/javaWeb/' }
        ]
      }, 
      {
        text: 'External',
        items: [
          { text: '码云', link: 'https://gitee.com/edentian/Blog' },
          { text: 'GitHub', link: '/ios/' }
        ]
      },
    ],
    
  //   sidebar: {

  //     '/javaSE/': [
  //       '',     /* /java/ */
  //       'java1',   
  //       '数组'   /* /java/数组.html */
  //     ],
  //     '/javaWeb/': [
  //       '',     /* /javaWeb/ */
  //       'http',  /* /javaWeb/http.html */
  //       'session'   /* /javaWeb/session.html */
  //     ]
  // }
}
}

