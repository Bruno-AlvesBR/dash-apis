import { styled } from '@material-ui/core';

export const FormContent = styled('form')(() => ({
  marginTop: 20,
  gap: 20,

  '& button': {
    background: '#6674BB',
    color: '#fff',
    transition: '0.3s all ease',
    '&:hover': {
      background: '#6674BB',
      opacity: .6,
    }
  },
}));