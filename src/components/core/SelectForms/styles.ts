import Button from '@mui/material/Button';
import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  maxWidth: 700,
  background: '#fff',
  padding: 20,
  margin: '0px auto',
  boxShadow: '0px 0px 30px #00000025',

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

export const ButtonSelect = styled(Button)(() => ({
  background: '#C4C4C4',
  padding: '10px 20px',
}));
