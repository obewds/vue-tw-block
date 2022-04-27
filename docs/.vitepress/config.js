// ./docs/.vitepress/config.js

module.exports = {
    base: '/vue-tw-block/',
    title: '@obewds/vue-tw-block',
    description: 'A documentation site for the VueTwBlock component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vue-tw-block" },
            { text: "GitHub", link: "https://github.com/obewds/vue-tw-block" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
