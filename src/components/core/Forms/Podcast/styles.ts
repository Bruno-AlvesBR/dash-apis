import { styled } from '@mui/material';

export const Container = styled('form')(() => ({
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  gap: 15,

  '& button': {
    margin: '10px 0',
    padding: '10px 20px',
    width: 'fit-content',
  },

  '& input': {
    padding: 20,
    width: '100%',
    background: '#fff',
  },
}));
