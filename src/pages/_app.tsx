import {
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
import Login from '@/components/core/Login';
import { VideoProvider } from '@/hooks/Videos';
import { ThemeColorProvider } from '@/hooks/theme';

import { GlobalStyles } from '@/styles/global';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const MyApp = ({ Component, pageProps }) => (
  <StyledEngineProvider injectFirst>
    <ThemeColorProvider>
      <UserProvider>
        <LoginProvider>
          <SnackbarProvider>
            <FoodProvider>
              <PodcastProvider>
                <VideoProvider>
                  <HeaderDynamic />
                  <div className="body-no-wrap">
                    <GlobalStyles />
                    <CssBaseline />
                    <Component {...pageProps} />
                    <Login />
                  </div>
                </VideoProvider>
              </PodcastProvider>
            </FoodProvider>
          </SnackbarProvider>
        </LoginProvider>
      </UserProvider>
    </ThemeColorProvider>
  </StyledEngineProvider>
);

export default MyApp;
