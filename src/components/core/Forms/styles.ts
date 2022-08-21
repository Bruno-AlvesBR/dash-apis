import { styled } from '@mui/material';

export const Container = styled('form')(({ theme }) => ({
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  gap: 15,

  '& button': {
    margin: 10,
    padding: '10px 20px',
    width: 'fit-content',
    background: theme?.palette?.common?.white,
    color: theme?.palette?.text?.secondary,

    '&:hover': {
      background: theme?.palette?.common?.white,
      opacity: 0.7,
    },
  },

  '& input': {
    width: '100%',
    background: theme?.palette?.common?.black,
    color: theme?.palette?.text?.primary,
  },

  '& .MuiInputLabel-formControl': {
    color: theme?.palette?.text?.primary,
    fontWeight: 700,
  },
}));
