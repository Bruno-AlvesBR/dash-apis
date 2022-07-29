import { styled, createTheme } from '@mui/material';
import { adaptV4Theme } from '@mui/material/styles';

export const theme = createTheme(adaptV4Theme({}));

export const Container = styled('div')(() => ({
  position: 'relative',
  margin: '85px 20px 0px 220px',
  width: '100%',

  '@media (max-width: 780px)': {
    marginLeft: 20,
  },
}));
