import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="/areyouhuman.js?lang=en&autoOpen=true&delay=5000"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
