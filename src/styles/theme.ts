import { styled, createTheme } from '@material-ui/core';

export const theme = createTheme({});

export const Container = styled('div')(() => ({
  position: 'relative',
  marginTop: 65,
  marginLeft: 200,
  height: '100%',

  '& form': {
    height: 'fit-content',
    
    '& input': {
      padding: '10px 22px',
    }
  },

  '@media (max-width: 780px)': {
    marginLeft: 0,
  },
}));
