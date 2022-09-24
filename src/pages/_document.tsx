import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

interface DocumentProps {
  disableScripts: boolean;
}

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Dashboard to control general apis."
          />
          <meta name="author" content="Bruno Alves" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
