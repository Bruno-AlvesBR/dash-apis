/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import { Children } from 'react';
import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import MaterialUISheets from '@mui/styles/ServerStyleSheets';
import { ServerStyleSheet } from 'styled-components';

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

MyDocument.getInitialProps = async ctx => {
  const materialUISheets = new MaterialUISheets();
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => rest =>
        sheet.collectStyles(
          materialUISheets.collect(<App {...rest} />),
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      materialUISheets.getStyleElement(),
      sheet.getStyleElement(),
    ],
  };
};
