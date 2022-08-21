import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const FormContent = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
  width: '100%',
  maxWidth: 500,
  padding: '50px 40px',
  borderRadius: 5,

  [theme.breakpoints.down(780)]: {
    padding: '30px 0px',
  },
}));

export const InputForm = styled(TextField)(({ theme }) => ({
  width: '100%',
  color: theme?.palette?.text?.primary,

  '& .MuiInputLabel-formControl': {
    color: theme?.palette?.text?.primary,
    fontWeight: 700,
  },
}));

export const ButtonForm = styled(Button)(({ theme }) => ({
  background: theme?.palette?.common?.white,
  color: theme?.palette?.text?.secondary,
  fontWeight: 700,
  fontSize: 16,

  '&:hover': {
    background: theme?.palette?.common?.white,
    opacity: 0.7,
  },
}));
