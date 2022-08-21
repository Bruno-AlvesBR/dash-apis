import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  maxWidth: 700,
  background: theme?.palette?.common?.black,
  padding: 20,
  borderRadius: 5,
  margin: '0px auto',
  boxShadow: '0px 0px 30px #00000025',

  '& .MuiOutlinedInput-root': { width: '100%' },

  '& .MuiInput-root': {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
}));

export const Title = styled('h1')(() => ({
  fontSize: 28,
  fontWeight: 600,
  marginBottom: 20,
}));

export const ButtonSelect = styled(Button)(({ theme }) => ({
  padding: '10px 20px',
  marginTop: 20,
  background: theme?.palette?.common?.white,
  fontWeight: 700,

  '&:hover': {
    background: theme?.palette?.common?.white,
    opacity: 0.7,
  },
}));
