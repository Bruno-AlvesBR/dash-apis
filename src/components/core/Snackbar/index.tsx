import { Snackbar } from '@material-ui/core';
import { memo } from 'react';

import { useSnack } from '@/hooks/Snackbar';

import { Message } from './styles';

interface ISnackbar {
  message: string;
  alert: 'info' | 'error' | 'success' | 'warning';
  setVertical: 'bottom' | 'top';
  setHorizontal: 'left' | 'right';
}

const SnackbarContent: React.FC<ISnackbar> = ({
  message,
  alert,
  setVertical,
  setHorizontal,
}) => {
  const { openSnackbar, handleCloseSnackBar } = useSnack();

  return (
    <Snackbar
      open={openSnackbar}
      onClose={handleCloseSnackBar}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: setVertical,
        horizontal: setHorizontal,
      }}
    >
      <Message severity={alert}>{message}</Message>
    </Snackbar>
  );
};

export default memo(SnackbarContent);
