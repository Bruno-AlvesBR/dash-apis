import { Box, styled } from '@material-ui/core';
import IndianaDrag from 'react-indiana-drag-scroll';

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 'calc(100vw - 240px)',
  margin: 20,
  position: 'relative',

  [theme.breakpoints.down(780)]: {
    maxWidth: 'calc(100% - 40px)',
  },
}));

export const ContentButtons = styled(Box)(({ theme }) => ({
  maxWidth: 'calc(100vw - 240px)',
  marginBottom: 20,

  '& svg': {
    transition: '.2s all ease',
    padding: 7,
    width: 40,
    height: 40,
    borderRadius: 5,
    cursor: 'pointer',

    '&:hover': {
      background: '#C4C4C4',
    },
  },

  '& svg:first-child': {
    transform: 'rotate(180deg)',
    marginRight: 20,
  },

  [theme.breakpoints.down(780)]: {
    maxWidth: 'calc(100% - 40px)',
  },
}));

export const Content = styled(IndianaDrag)(() => ({
  display: 'flex',
  margin: 0,
  width: '100%',
}));
