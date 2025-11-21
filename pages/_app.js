import "../styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import login from "../reducers/login";
import singin from "../reducers/singin";
import user from "../reducers/user";

const store = configureStore({
  reducer: { login, singin, user },
});

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Hackatweet</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
