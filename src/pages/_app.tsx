import {
  Theme,
  CssBaseline,
} from '@mui/material';
import '@mui/styles';

import HeaderDynamic from '@/components/core/Header/dynamic';
import Login from '@/components/core/Login';
import { AppProvider } from '@/hooks/app';
import Player from '@/components/core/Player';

import { GlobalStyles } from '@/styles/global';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
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
