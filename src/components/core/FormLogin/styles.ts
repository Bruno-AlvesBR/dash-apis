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

export const InputForm = styled(TextField)(() => ({ width: '100%' }));

export const ButtonForm = styled(Button)(() => ({
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
}));
