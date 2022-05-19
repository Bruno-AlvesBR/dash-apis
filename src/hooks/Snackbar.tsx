import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useUser } from './User';

interface ISnackbarContextProps {
  openSnackbar?: boolean;
  setOpenSnackBar?(type: boolean): void;
  handleCloseSnackBar?(): void;
}

interface ISnackbarProvider {
  children: ReactNode;
}

export const SnackbarContext = createContext({} as ISnackbarContextProps);

const SnackbarProvider = ({ children }: ISnackbarProvider) => {
  const { noAdmin, isInvalid } = useUser();
  const [openSnackbar, setOpenSnackBar] = useState<boolean>(false);

  const handleCloseSnackBar = () => setOpenSnackBar(false);

  useEffect(() => {
    if (noAdmin || isInvalid) {
      setOpenSnackBar(true);
    }
  }, [isInvalid, noAdmin]);

  return (
    <SnackbarContext.Provider
      value={{
        openSnackbar,
        setOpenSnackBar,
        handleCloseSnackBar,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

function useSnack() {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnack must be within a SnackbarProvider');
  }

  return context;
}

export { SnackbarProvider, useSnack };
