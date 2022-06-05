import { Box, styled } from '@material-ui/core';
import IndianaDrag from 'react-indiana-drag-scroll';

export const Container = styled('div')(() => ({
  maxWidth: 1540,
  margin: 20,
}));

export const ContentButtons = styled(Box)(() => ({
  maxWidth: 1540,
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
}));

export const Content = styled(IndianaDrag)(() => ({
  display: 'flex',
  margin: 0,
}));
