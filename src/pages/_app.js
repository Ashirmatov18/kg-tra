import "../app/globals.css";
import React from "react";
import '../../node_modules/antd/dist/antd'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
