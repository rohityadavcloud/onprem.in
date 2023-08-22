// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'onprem.in',
  tagline: 'DIY OnPrem CloudStack Cloud',
  favicon: 'img/onprem.png',

  // Set the production url of your site here
  url: 'https://onprem.in',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rohityadavcloud', // Usually your GitHub org/user name.
  projectName: 'onprem.in', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rohityadavcloud/onprem.in/tree/main/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/changelog',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rohityadavcloud/onprem.in/tree/main/',
        },
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
      image: 'img/onprem.png',
      navbar: {
        title: 'onprem.in',
        logo: {
          alt: 'onprem.in',
          src: 'img/onprem.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {to: '/changelog', label: 'Changelog', position: 'left'},
          {
            href: 'https://github.com/apache/cloudstack',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://github.com/rohityadavcloud/onprem.in',
            label: 'GitHub',
            position: 'right',
          },
          {type: 'search', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `
          <div style="opacity: 0.5">
          <a href="mailto:users-subscribe@cloudstack.apache.org" target="_blank">
            <img src="/img/social/mail.svg" title="Join CloudStack Users Mailing List" height="32px" />
          </a>
          <a href="https://www.reddit.com/r/ApacheCloudStack/" target="_blank">
            <img src="/img/social/reddit.svg" title="CloudStack Reddit" height="32px" />
          </a>
          <a href="https://github.com/apache/cloudstack" target="_blank">
            <img src="/img/social/github.svg" title="CloudStack Github" height="32px" />
          </a>
          <a href="https://twitter.com/CloudStack" target="_blank">
            <img src="/img/social/twitter.svg" title="CloudStack Twitter" height="32px" />
          </a>
          <a href="https://www.youtube.com/@ApacheCloudStack" target="_blank">
            <img src="/img/social/youtube.svg" title="CloudStack YouTube" height="32px" />
          </a>
          </div>
          <div style="text-align: left;">
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium,serif;font-size: 14px;color: #999;display: flex;align-items: center;">
          <span>Copyright © ${new Date().getFullYear()} OnPrem.in by <a href="https://rohityadav.cloud/" target="_blank">Rohit Yadav</a>.<br/>"Apache", "CloudStack", "Apache CloudStack", the Apache CloudStack logo, the Apache CloudStack Cloud Monkey logo and the Apache feather logos are registered trademarks or trademarks of The Apache Software Foundation. OnPrem icon is by <a href="https://www.flaticon.com/free-icons/roof">Freepik - Flaticon</a>.</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
