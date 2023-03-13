//import docsearch from './components/docsearch'


npm install @docsearch/react@3

import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

function App() {
  return (
    <DocSearch
      appId="R2IYF7ETH7"
      indexName="599cec31baffa4868cae4e79f180729b"
      apiKey="docsearch"
    />
  );
}

//export default App;

export default App{
  projectLink: 'https://github.com/gf-dcc/docs', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/gf-dcc/docs/blob/main', // base URL for the docs repository
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  //customSearch: <docsearch/>,
  darkMode: false,
  footer: false,
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


