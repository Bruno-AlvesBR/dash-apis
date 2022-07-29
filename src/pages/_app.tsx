import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';
import '@mui/styles';

import HeaderDynamic from '@/components/core/Header/dynamic';
import { FoodProvider } from '@/hooks/Product';
import { LoginProvider } from '@/hooks/Login';
import { SnackbarProvider } from '@/hooks/Snackbar';
import { UserProvider } from '@/hooks/User';
import { PodcastProvider } from '@/hooks/Podcast';

import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import Login from '@/components/core/Login';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <LoginProvider>
            <SnackbarProvider>
              <FoodProvider>
                <PodcastProvider>
                  <HeaderDynamic />
                  <div className="body-no-wrap">
                    <Component {...pageProps} />
                    <CssBaseline />
                    <Login />
                  </div>
                </PodcastProvider>
              </FoodProvider>
            </SnackbarProvider>
          </LoginProvider>
        </UserProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MyApp;
