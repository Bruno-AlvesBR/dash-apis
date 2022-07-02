import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',

  '@media (max-width: 780px)': {
    padding: '0px 30px',
  },
}));
