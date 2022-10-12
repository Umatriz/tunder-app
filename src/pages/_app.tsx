import type { AppProps } from "next/app";

import "@/app/styles/style.css";

import Layout from "@/components/Layout/Layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
