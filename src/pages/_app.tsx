import {
  Theme,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';
import '@mui/styles';

import HeaderDynamic from '@/components/core/Header/dynamic';
import Login from '@/components/core/Login';
import { AppProvider } from '@/hooks/app';

import { GlobalStyles } from '@/styles/global';
import Player from '@/components/core/Player';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const MyApp = ({ Component, pageProps }) => (
  <StyledEngineProvider injectFirst>
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
  </StyledEngineProvider>
);

export default MyApp;
