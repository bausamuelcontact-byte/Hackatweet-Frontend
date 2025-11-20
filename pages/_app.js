import "../styles/globals.css";
import Head from "next/head";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import trends from '../reducers/trends';

const store = configureStore({
 reducer: { trends },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
