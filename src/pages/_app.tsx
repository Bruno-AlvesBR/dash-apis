import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';
import '@mui/styles';

import Header from '@/components/core/Header';
import { FoodProvider } from '@/hooks/Product';
import { LoginProvider } from '@/hooks/Login';
import { SnackbarProvider } from '@/hooks/Snackbar';
import { UserProvider } from '@/hooks/User';
import { PodcastProvider } from '@/hooks/Podcast';

import '@/styles/globals.css';
import { theme } from '@/styles/theme';

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
                  <Header />
                  <div className="body-no-wrap">
                    <Component {...pageProps} />
                    <CssBaseline />
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
