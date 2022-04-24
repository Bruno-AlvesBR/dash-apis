import { Box, styled } from '@material-ui/core';

export const Container = styled('form')(() => ({
  zIndex: 99,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'calc(100vw - 400px)',

  '& button': {
    margin: '10px 0',
    padding: '10px 20px',
  },
}));

export const BoxInputs = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: 10,
  margin: '2.5px 0',

  '& input': {
    minWidth: '100%',
    maxWidth: 600,
    padding: '20px !important',
  },
}));