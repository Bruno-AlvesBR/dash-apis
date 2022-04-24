import { styled } from '@material-ui/core';

export const FormContent = styled('form')(() => ({
  marginTop: 20,
  gap: 20,
  zIndex: 1000,

  '& button:first-child': {
    paddingg: 5,

    '& svg': {
      cursor: 'pointer',
      color: '#6674BB',
    },
    '&:hover': {
      opacity: 1,
      background: '#aaaaaa60',
    }
  },

  '& button:last-child': {
    background: '#6674BB',
    color: '#fff',
    transition: '0.3s all ease',

    '&:hover': {
      background: '#6674BB',
      opacity: .6,
    }
  },
}));