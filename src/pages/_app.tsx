import { ThemeProvider, CssBaseline } from '@material-ui/core';

import Header from '../components/core/Header';
import { FoodProvider } from '../hooks/Product';
import { LoginProvider } from '../hooks/Login';
import { SnackbarProvider } from '../hooks/Snackbar';
import { UserProvider } from '../hooks/User';
import { PodcastProvider } from '../hooks/Podcast';

import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
