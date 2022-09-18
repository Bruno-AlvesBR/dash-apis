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

export const SnackbarContext = createContext(
  {} as ISnackbarContextProps,
);

const SnackbarProvider = ({ children }: ISnackbarProvider) => {
  const { isInvalid } = useUser();
  const [openSnackbar, setOpenSnackBar] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [alert, setAlert] = useState<string>('sucess');
  const [horizontal, setHorizontal] = useState<string>('right');
  const [vertical, setVertical] = useState<string>('top');

  const handleCloseSnackBar = () => setOpenSnackBar(false);

  useEffect(() => {
    if (isInvalid) {
      setOpenSnackBar(true);
    }
  }, [isInvalid]);

  const handleOpenSnackbar = (
    message: string,
    alert?: string,
    vertical?: string,
    horizontal?: string,
  ) => {
    setOpenSnackBar(true);
    setMessage(message);
    setAlert(alert);
    setHorizontal(horizontal);
    setVertical(vertical);
  };

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
