const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Archcraft',
  tagline: 'Yet another minimal Linux distribution, based on Arch Linux.',
  organizationName: 'archcraft-os', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  url: 'https://wiki.archcraft.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  trailingSlash: false,

  // Translation
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  // News Blog Section
  plugins: [
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
        blogSidebarCount: 5,
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/archcraft-os/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Tutorials',
		  blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          // Please change this to your repo.
          editUrl:
            'https://github.com/archcraft-os/documentation/edit/main/',
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
      hideableSidebar: true,
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you love Archcraft, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/archcraft-os/archcraft">GitHub</a>️ ⭐`,
      },
      navbar: {
        title: 'Archcraft',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/blog', label: 'Tutorials', position: 'left'},
          {to: '/news', label: 'News', position: 'left'},
          {type: 'localeDropdown', position: 'right'},
          {
            href: 'https://github.com/archcraft-os',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'Project Page',
          },
        ],
      },
      // Search bar
      algolia: {
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: see doc section below
        //appId: 'YOUR_APP_ID',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        //... other Algolia params
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Archcraft',
            items: [
              {
                label: 'Home',
                to: 'https://archcraft.io',
              },
              {
                label: 'Wiki',
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
            title: 'Github',
            items: [
              {
                label: 'Source',
                to: 'https://github.com/archcraft-os/archcraft',
              },
              {
                label: 'Releases',
                to: 'https://github.com/archcraft-os/releases',
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
                label: 'Donate',
                href: 'https://archcraft.io/donate',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
