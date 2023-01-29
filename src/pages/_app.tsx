import { Theme, CssBaseline } from '@mui/material';
import '@mui/styles';

import HeaderDynamic from '@/components/core/Header/dynamic';
import Login from '@/components/core/Login';
import { AppProvider } from '@/hooks/app';
import Player from '@/components/core/Player';
import { HeadPages } from '@/components/core/Head';

import { GlobalStyles } from '@/styles/global';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
    <HeadPages />

    <HeaderDynamic />

    <div className="body-no-wrap">
      <GlobalStyles />
      <CssBaseline />
      <Component {...pageProps} />
      <Login />
      <Player />
    </div>
  </AppProvider>
);

export default MyApp;
