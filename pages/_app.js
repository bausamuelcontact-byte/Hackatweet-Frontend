import "../styles/globals.css";
import Head from "next/head";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import trends from '../reducers/trends';
import login from "../reducers/login";
import singin from "../reducers/singin";

const store = configureStore({
  reducer: { login, singin, trends},
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
