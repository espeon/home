import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <script defer data-domain="natalie.sh" src="https://stats.ovy.sh/js/script.js"></script>
          <link rel="preconnect" href="https://cdn.statically.io" />
          <link
            rel="stylesheet"
            href="https://cdn.statically.io/gist/kanbaru/436a9a80ceee901e8a7dd5d1faba3e97/raw/a6920de0adfa51769e80d247187184b77565c192/edwin.css"
          />
          <link rel="preconnect" href="https://fonts.bunny.net" />
          <link
            href="https://fonts.bunny.net/css?family=libre-baskerville:400,400i,700|plus-jakarta-sans:300,400,600|kumbh-sans:300,400"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
