import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material';

export const Container = styled(Dialog)(() => ({
  paper: {
    minWidth: '90vw !important',
    minHeight: '90vh !important',
  },
}));
