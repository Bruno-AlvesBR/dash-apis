import { ReactNode } from 'react';

import { LoginProvider } from './Login';
import { PlayerProvider } from './player';
import { PodcastProvider } from './Podcast';
import { FoodProvider } from './Product';
import { SnackbarProvider } from './Snackbar';
import { ThemeColorProvider } from './theme';
import { UserProvider } from './User';
import { VideoProvider } from './Videos';

interface IAppProps {
  children?: ReactNode;
}

export const AppProvider: React.FC<IAppProps> = ({ children }) => (
  <LoginProvider>
    <PodcastProvider>
      <FoodProvider>
        <SnackbarProvider>
          <UserProvider>
            <ThemeColorProvider>
              <VideoProvider>
                <PlayerProvider>{children}</PlayerProvider>
              </VideoProvider>
            </ThemeColorProvider>
          </UserProvider>
        </SnackbarProvider>
      </FoodProvider>
    </PodcastProvider>
  </LoginProvider>
);
