import { Box, styled } from '@material-ui/core';

export const Container = styled('form')(() => ({
  zIndex: 99,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 500,

  '& button': {
    margin: '10px 0',
    padding: '10px 20px',
  },
}));

export const BoxInputs = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: 10,
  margin: '2.5px 0',
  height: 'auto',

  '& input': {
    padding: '20px !important',
  },

  '@media (max-width: 780px)': {
    flexDirection: 'column',
  },
}));
