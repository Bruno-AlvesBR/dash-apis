import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Header from '../components/core/Header';
import { FoodProvider } from '../hooks/Food';
import { LoginProvider } from '../hooks/Login';
import { SnackbarProvider } from '../hooks/Snackbar';
import { UserProvider, useUser } from '../hooks/User';

import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [{ userId }, router] = [useUser(), useRouter()];

  useEffect(() => {
    if (!userId) router.push(process.env.NEXT_PUBLIC_APP);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <LoginProvider>
          <SnackbarProvider>
            <FoodProvider>
              <Header />
              <div className="body-no-wrap">
                <Component {...pageProps} />
                <CssBaseline />
              </div>
            </FoodProvider>
          </SnackbarProvider>
        </LoginProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
