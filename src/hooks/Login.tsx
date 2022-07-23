import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useUser } from './User';

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

  const { user } = useUser(); 

  useEffect(() => {
    if (user?.id) return setOpenDialog(false);

    setOpenDialog(true);
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
