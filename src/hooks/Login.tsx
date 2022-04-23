import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { UseUser } from './User';

export interface ILoginContext {
  openDialog: boolean;
}

export interface ILoginProvider {
  children: ReactNode;
}

export const UseContextProvider = createContext(
  {} as ILoginContext,
);

export const LoginContextProvider = ({
  children,
}: ILoginProvider) => {
  const { userId } = UseUser();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (!userId) {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);
    }
  }, [userId]);

  return (
    <UseContextProvider.Provider
      value={{
        openDialog,
      }}
    >
      {children}
    </UseContextProvider.Provider>
  );
};

export const UseLogin = () => {
  const context = useContext(UseContextProvider);

  return context;
};
