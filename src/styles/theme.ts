import { styled, createTheme } from '@mui/material';

export const theme = createTheme({});

export const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '85px 20px 0px 220px',
  width: '100vw',
  minHeight: '100vh',
  background: theme?.palette?.background?.default,

  '@media (max-width: 780px)': {
    padding: '85px 20px',
  },
}));
