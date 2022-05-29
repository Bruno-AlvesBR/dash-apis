import { styled, createTheme } from '@material-ui/core';

export const theme = createTheme({});

export const Container = styled('div')(() => ({
  position: 'relative',
  margin: '85px 20px 0px 220px',
  height: '100%',
  width: '100%',

  '@media (max-width: 780px)': {
    marginLeft: 20,
  },
}));
