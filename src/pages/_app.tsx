import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Header from '../components/core/Header';
import { FoodContextProvider } from '../hooks/Food';
import { LoginContextProvider } from '../hooks/Login';
import { SnackbarProvider } from '../hooks/Snackbar';
import { UserContextProvider, UseUser } from '../hooks/User';

import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [{ userId }, router] = [UseUser(), useRouter()];

  useEffect(() => {
    if (!userId) {
      router.push(process.env.NEXT_PUBLIC_APP);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <LoginContextProvider>
          <SnackbarProvider>
            <FoodContextProvider>
              <Header />
              <div className="body-no-wrap">
                <Component {...pageProps} />
                <CssBaseline />
              </div>
            </FoodContextProvider>
          </SnackbarProvider>
        </LoginContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
