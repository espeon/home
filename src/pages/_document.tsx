import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://cdn.statically.io" />
          {/* <link rel="stylesheet" href="https://cdn.statically.io/gist/kanbaru/436a9a80ceee901e8a7dd5d1faba3e97/raw/a6920de0adfa51769e80d247187184b77565c192/edwin.css" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
          <link rel="preload" as="image" href="https://pcdn.piiojs.com/i/tkkjix/imgv,4/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F22222885%3Fv%3D4" />
        </Head>
        <body>
          
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
