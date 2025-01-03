// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archcraft',
  tagline: 'Yet another minimal Linux distribution, based on Arch Linux.',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://wiki.archcraft.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'archcraft-os', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
      pt: {
        label: 'Portugês',
        direction: 'ltr'
      }
    },
  },

  // Plugins
  plugins: [
    // News Blog Section
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'news',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'news',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './news',
        /**
         * Options
         */
        showReadingTime: false,
        blogTitle: 'News',
        blogSidebarTitle: 'Latest News',
        blogSidebarCount: 15,
      },
    ],
    // Premium Blog Section
/**    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'premium',
        routeBasePath: 'premium',
        path: './premium',
        showReadingTime: false,
        blogTitle: 'Premium',
        blogSidebarTitle: 'Latest News',
        blogSidebarCount: 10,
      },
    ], **/
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/archcraft-os/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Tutorials',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 15,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/archcraft-os/documentation/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        //respectPrefersColorScheme: true,
      },
      // The meta image URL for the site. Relative to your site's "static" directory. Cannot be SVGs. Can be external URLs too.
      image: 'img/meta.jpg',
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `⭐️ If you love Archcraft, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/archcraft-os/archcraft">GitHub</a>️ ⭐`,
        //backgroundColor: '#f5f6f7',
        //textColor: '#1e2128',
        isCloseable: true,
      },
      // Replace with your project's social card
      navbar: {
		hideOnScroll: false,
        title: 'Archcraft',
        logo: {
          alt: 'Archcraft Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: '/',
          target: '_self',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
          style: {},
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Tutorials', position: 'left'},
          { to: '/news', label: 'News', position: 'left' },
          //{ to: '/premium', label: 'Premium', position: 'left' },
          {
			html: "<a href='https://ko-fi.com/adi1090x' target='_blank'><img height='32' style='border:0px;height:32px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>",
			href: 'https://ko-fi.com/adi1090x',
			position: 'right',
			target: '_blank',
		  },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                to: 'docs/contrib/contrib-translate',
                label: 'Help me translate',
              },
            ],
          },
          {
            href: 'https://github.com/archcraft-os',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
          /**{
            type: 'search',
            position: 'right',
          },**/
        ],
      },
    algolia: {
      // The application ID provided by Algolia
      appId: '2UJTUGCIC9',

      // Public API key: it is safe to commit it
      apiKey: '9ce19e82b5a166243dff0a85dd0734fa',

      indexName: 'archcraft',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/docs/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
      footer: {
        style: 'light',
        /** logo: {
          alt: 'Archcraft Logo',
          src: 'img/logo.svg',
          href: 'https://archcraft.io/',
          width: 48,
          height: 48,
        }, **/
        links: [
          {
            title: 'Archcraft',
            items: [
              {
                label: 'Home',
                to: 'https://archcraft.io',
              },
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Tutorials',
                to: '/blog',
              },
              {
                label: 'News',
                to: '/news',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/archcraft',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3PzeJ5S7Pu',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/archcraftos',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#archcraft:matrix.org',
              },
            ],
          },
          {
            title: 'Source',
            items: [
              {
                label: 'Archcraft',
                to: 'https://github.com/archcraft-os/archcraft',
              },
              {
                label: 'Releases',
                to: 'https://sourceforge.net/projects/archcraft/files',
              },
              {
                label: 'Issues',
                to: 'https://github.com/archcraft-os/archcraft/issues',
              },
              {
                label: 'Documentations',
                to: 'https://github.com/archcraft-os/documentation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Release Cycle',
                href: 'https://archcraft.io/more',
              },
              {
                label: 'Sourceforge',
                href: 'https://sourceforge.net/projects/archcraft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Archcraft | Aditya Shakya`,
      },
      prism: {
        additionalLanguages: [
          'java',
          'latex',
          'haskell',
          'matlab',
          'PHp',
          'bash',
          'ini',
          'lua',
          'diff',
          'json',
          'scss',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
