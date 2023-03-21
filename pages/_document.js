import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ themeData }) {
  console.log(themeData);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
