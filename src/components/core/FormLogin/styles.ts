import { styled } from '@mui/material';

export const FormContent = styled('form')(() => ({
  gap: 50,
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
  marginTop: 250,
  width: '100%',
  maxWidth: 500,
  border: '1px solid #00000025',
  padding: '50px 40px',
  borderRadius: 5,

  '& input': {
    width: '100%',
  },

  '& button:first-child': {
    paddingg: 5,

    '& svg': {
      cursor: 'pointer',
      color: '#6674BB',
    },
    '&:hover': {
      opacity: 1,
      background: '#aaaaaa60',
    },
  },

  '& button:last-child': {
    background: '#6674BB',
    color: '#fff',
    transition: '0.3s all ease',

    '&:hover': {
      background: '#6674BB',
      opacity: 0.6,
    },
  },

  '@media (max-width: 780px)': {
    padding: '30px 20px',
  },
}));
