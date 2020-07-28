module.exports = {
    title: "Chase Lab",
    tagline: "University of Nebraska at Omaha",
    url: "https://chaselab.netlify.app",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "bchaselab", // Usually your GitHub org/user name.
    projectName: "chaselab-pages", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Chase Lab",
            logo: {
                alt: "My Site Logo",
                src: "img/cat.png",
            },
            items: [{
                href: "https://github.com/fcatus/chaselab",
                label: "GitHub",
                position: "right",
            }, ],
        },
        footer: {
            style: "dark",
            links: [{
                title: "Related Links",
                items: [{
                    label: "ToxoProject Website",
                    to: "https://toxoproject.com/",
                }, ],
            }, ],
            copyright: `Copyright © ${new Date().getFullYear()} Chase Lab.`,
        },
        theme: {
            customCss: require.resolve("./src/css/custom.css"),
        },
        prism: {
            darkTheme: require("prism-react-renderer/themes/dracula"),
        },
    },
    themes: ["@docusaurus/theme-live-codeblock"],
    presets: [
        [
            "@docusaurus/preset-classic", {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    routeBasePath: "/",
                    homePageId: "dlc-workflow",
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/bchaselab/ChaseLab-Pages/edit/master/",
                },
            },
        ],
    ],
};
