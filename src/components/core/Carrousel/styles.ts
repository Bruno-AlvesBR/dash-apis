import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import IndianaDrag from 'react-indiana-drag-scroll';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 'calc(100vw - 240px)',
  margin: '20px 0px',
  position: 'relative',

  '&:first-of-type': { marginTop: 0 },

  [theme.breakpoints.down(780)]: {
    maxWidth: '100%',
  },
}));

export const Content = styled(IndianaDrag)(({ theme }) => ({
  display: 'flex',
  margin: 0,
  width: '100%',
  maxWidth: 'calc(100vw - 240px)',

  [theme.breakpoints.down(780)]: {
    maxWidth: '100%',
  },
}));
