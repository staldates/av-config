// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'St Aldate\'s Video System Manual',
  tagline: 'Operations guide for video systems and livestreaming',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://staldates.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/av-config/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'staldates', // Usually your GitHub org/user name.
  projectName: 'av-config', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve docs at the root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/staldates/av-config/tree/main/live-stream-manual/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'St Aldate\'s Video',
        // logo: {
        //   alt: 'St Aldate\'s Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            href: 'https://github.com/staldates/av-config',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Equipment Overview',
                to: '/equipment-overview',
              },
              {
                label: 'Camera Setup',
                to: '/camera-setup',
              },
            ],
          },
          {
            title: 'Roles',
            items: [
              {
                label: 'Director',
                to: '/roles/director',
              },
              {
                label: 'Stream Producer',
                to: '/roles/stream-producer',
              },
              {
                label: 'Graphics Producer',
                to: '/roles/graphics-producer',
              },
              {
                label: 'Camera Operator',
                to: '/roles/camera-operator',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/staldates/av-config',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} St Aldate's Church. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
