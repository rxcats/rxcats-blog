// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blog',
  tagline: '',
  url: 'https://rxcats.github.io',
  baseUrl: '/rxcats-blog',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/coffee-favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rxcats', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home Logo',
          src: 'img/coffee-logo.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} rxcats. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'java', 'javascript', 'kotlin', 'csharp', 'gradle', 'php'],
      },
      googleAdsense: {
        dataAdClient: 'ca-pub-7296675796754275',
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DTNR3BGJ7E',
        anonymizeIP: true,
      },
    ],
    'docusaurus-plugin-google-adsense',
  ]
};

module.exports = config;
