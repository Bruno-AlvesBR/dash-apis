import { styled, createTheme } from '@material-ui/core';

export const theme = createTheme({});

export const Container = styled('div')(() => ({
  position: 'relative',
  padding: '20px 220px',
  width: '100%',
  height: '100%',

  '& form': {
    width: 500, 
    height: 'fit-content',
    
    '& input': {
      width: 400,
      padding: '10px 22px',
    }
  },
}));
