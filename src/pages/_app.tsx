import {
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';

import { Login } from '../components/core/Login';
import { MenuLeft } from '../components/core/MenuLeft';
import { MenuRight } from '../components/core/MenuRight';
import { FoodContextProvider } from '../hooks/Food';
import { LoginContextProvider } from '../hooks/Login';
import { SnackbarProvider } from '../hooks/Snackbar';
import { UserContextProvider } from '../hooks/User';

import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <LoginContextProvider>
          <SnackbarProvider>
            <div className="body-no-wrap">
              <header>
                <MenuRight />
                <MenuLeft />
              </header>
              <FoodContextProvider>
                <main>
                  <Component {...pageProps} />
                  <CssBaseline />
                  <Login />
                </main>
              </FoodContextProvider>
            </div>
          </SnackbarProvider>
        </LoginContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
