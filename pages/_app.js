import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import dragons from '../reducers/dragons';

const store = configureStore({
 reducer: {dragons},
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Dragons</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
