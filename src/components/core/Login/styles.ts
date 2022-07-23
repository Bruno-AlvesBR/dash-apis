import { styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';

export const Container = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    width: 400,
    maxWidth: 500,
    height: '100%',
    maxHeight: 450,

    '@media (max-width: 780px)': {
      padding: '0px 30px',
    },
  },
}));
