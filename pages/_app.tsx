import type { AppProps } from "next/app";
import Script from "next/script";

import Layout from "@/components/layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        data-ad-client="pub-8532173938299859"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
