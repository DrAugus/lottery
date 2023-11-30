import { defineConfig } from 'vitepress';
// import { navbar_zh } from './navbar'
// import { sidebar_zh } from './sidebar'

export default defineConfig({
    // These are app level configs.
    title: '彩票',
    description: '福彩体彩刮刮乐',
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        // ['link', {
        //   rel: 'icon',
        //   href: '/favicon.ico',
        // }],
    ],
    themeConfig: {
        // logo: '/logo/logo.jpg',
        // nav: navbar_zh,
        // sidebar: sidebar_zh,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/lottery/tree/master/' },
        ],
        editLink: {
            pattern: 'https://github.com/DrAugus/lottery/tree/master/:path',
            text: '在 Github 编辑',
        },
        footer: {
            //   message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Augus'
        },
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        darkModeSwitchLabel: '主题色切换',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        outlineTitle: '本页内容',

        algolia: {
            appId: 'TMOT9B7BHV',
            apiKey: '8870d1a7427df92c33d2db21368d01d1',
            indexName: 'augusmeowio'
        },
    }
});