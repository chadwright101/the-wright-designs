import type { AppProps } from "next/app";
import Script from "next/script";

import Layout from "@/components/layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-8532173938299859"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
