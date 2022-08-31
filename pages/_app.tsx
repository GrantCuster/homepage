import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/sloth-favicon.png" />
        <title>Grant Custer</title>
        <meta
          property="description"
          content="About, Links, Social, Activity."
        />
        <meta property="og:title" content="Index - Grant Custer" />
        <meta
          property="og:description"
          content="Designer and engineer focused on new and alternative interfaces."
        />
        <meta property="og:url" content="http://grantcuster.com" />
        <meta
          property="og:image"
          content="http://grantcuster.com/constraint-systems.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
