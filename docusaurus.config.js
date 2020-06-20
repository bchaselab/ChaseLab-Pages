module.exports = {
  title: 'Chase Lab',
  tagline: '',
  url: 'https://chaselab.netlify.app',
  baseUrl: '/',
  favicon: 'img/uno.png',
  organizationName: 'University of Nebraska at Omaha', // Usually your GitHub org/user name.
  projectName: 'Chase Lab', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Chase Lab',
      logo: {
        alt: 'My Site Logo',
        src: 'img/cat.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/fcatus/chaselab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 's',
      links: [
        {
          title: 'Related Links',
          items: [
            {
              label: 'ToxoProject Website',
              to: 'https://toxoproject.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chase Lab, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          homePageId: 'dlc-slurm',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fcatus/chaselab/edit/master/',
        },
        themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock', '@docusaurus/theme-search-algolia'],
      },
    ],
  ],
};
