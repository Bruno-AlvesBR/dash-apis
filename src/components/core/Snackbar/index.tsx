import { Snackbar } from '@material-ui/core';
import { memo } from 'react';

import { UseSnack } from '../../../hooks/Snackbar';

import { Message } from './styles';

interface ISnackbar {
  message: string;
  alert: 'info' | 'error' | 'success' | 'warning';
  setVertical: 'bottom' | 'top';
  setHorizontal: 'left' | 'right';
}

const index = ({
  message,
  alert,
  setVertical,
  setHorizontal,
}: ISnackbar) => {
  const { openSnackbar, handleCloseSnackBar } = UseSnack();

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

export default memo(index);
