// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const config: Config = {
  title: 'ZLA Algo',
  tagline: 'ZL Asica的算法学习笔记',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://algo.zla.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZL-Asica', // Usually your GitHub org/user name.
  projectName: 'ZLA-Algo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ZL-Asica/ZLA-Algo/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-HF608NE1BL',
          // anonymizeIP: true, // Should IPs be anonymized?
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/avatar.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ZLA Algo',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/avatar.jpg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://www.zla.app',
          label: '博客',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/ZL-Asica/ZLA-Algo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      // hyper link in copyright
      copyright: `© 2024-${new Date().getFullYear()} ZL Asica. Built with Docusaurus.<br/>Licensed under <a href='https://creativecommons.org/licenses/by-sa/4.0/' title="License" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'leetcode, algorithms, solutions, coding, data structures',
      },
      {
        name: 'description',
        content:
          'Explore LeetCode problem-solving strategies, categorized solutions, and coding tips.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ZL_Asica' },
      { property: 'og:title', content: 'LeetCode Solutions & Algorithms' },
      {
        property: 'og:description',
        content:
          'Explore categorized solutions and strategies for LeetCode problems.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://algo.zla.app/img/avatar.jpg',
      },
      { property: 'og:url', content: 'https://algo.zla.app' },
    ],
    algolia: {
      // The application ID provided by Algolia
      appId: 'P3CJHXM6B2',

      // Public API key: it is safe to commit it
      apiKey: '7b5401f7147b9a27805452d15899bca1',

      indexName: 'algo',

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      // Use preconnect to optimize loading of Google Fonts
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
  ],
};

export default config;
