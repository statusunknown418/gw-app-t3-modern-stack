import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body className="bg-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
