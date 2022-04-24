import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { UseUser } from './User';

interface ISnackbarContext {
  openSnackbar: boolean;
  setOpenSnackBar?(type: boolean): void;
  handleCloseSnackBar?(): void;
}

interface ISnackbarProvider {
  children: ReactNode;
}

export const SnackbarContext = createContext(
  {} as ISnackbarContext,
);

export const SnackbarProvider = ({
  children,
}: ISnackbarProvider) => {
  const { noAdmin, isInvalid } = UseUser();
  const [openSnackbar, setOpenSnackBar] = useState(false);

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

export const UseSnack = () => {
  const context = useContext(SnackbarContext);

  return context;
};
