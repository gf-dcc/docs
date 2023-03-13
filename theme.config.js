export default {
  projectLink: 'https://github.com/gf-dcc/docs', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/gf-dcc/docs/blob/main', // base URL for the docs repository
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: false,
  footer: true,
  footerText: ``,
  footerEditLink: `Edit this page on GitHub`,
  logo: <span> </span>,

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
}


/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  search: true
}


/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  searchPlaceholder: ({ locale }) => {
    if (locale === 'zh-CN') return '搜索文档...'
    return 'Search documentation...'
  }
}
