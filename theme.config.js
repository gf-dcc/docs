//import docsearch from './components/docsearch'

<script src="https://cdn.jsdelivr.net/npm/@docsearch/react@3"></script>

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

export default App;
