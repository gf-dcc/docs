import DocSearch from './components/docsearch'

export default {
  projectLink: 'https://github.com/gf-dcc/docs', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/gf-dcc/docs/blob/main', // base URL for the docs repository
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: <DocSearch/>,
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
