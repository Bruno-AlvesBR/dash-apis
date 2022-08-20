import { styled, createTheme } from '@mui/material';

export const theme = createTheme(({}));

export const Container = styled('div')(() => ({
  position: 'relative',
  margin: '85px 20px 0px 220px',
  width: '100%',

  '@media (max-width: 780px)': {
    marginLeft: 20,
  },
}));
