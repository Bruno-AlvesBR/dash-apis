import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import Cookies from 'universal-cookie';

import { useUser } from './User';
import { TOKEN } from '@/interfaces/IUserProps';

export interface ILoginContextProps {
  openDialog: boolean;
  setOpenDialog?(type: boolean): void;
  handleCloseDialog?(): void;
}

export interface ILoginProvider {
  children: ReactNode;
}

const LoginContext = createContext({} as ILoginContextProps);

const LoginProvider = ({ children }: ILoginProvider) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [{ user }, cookie] = [useUser(), new Cookies()];

  useEffect(() => {
    const authToken = cookie.get(TOKEN.AUTH_TOKEN);
    if (!user?.id && !authToken) return setOpenDialog(true);

    setOpenDialog(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setOpenDialog, user?.id]);

  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <LoginContext.Provider
      value={{
        openDialog,
        setOpenDialog,
        handleCloseDialog,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

function useLogin() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('useLogin must be within a LoginProvider');
  }

  return context;
}

export { LoginProvider, useLogin };
