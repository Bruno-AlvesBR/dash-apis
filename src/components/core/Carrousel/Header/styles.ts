import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: 'calc(100vw - 240px)',
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme?.palette?.common?.black,
  padding: 8,
  borderRadius: 10,

  [theme.breakpoints.down(780)]: {
    maxWidth: 'calc(100vw - 45px)',
  },
}));

export const ContentButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > svg': {
    transition: '.2s all ease',
    padding: 7,
    width: 40,
    height: 40,
    borderRadius: 5,
    cursor: 'pointer',

    '&:hover': {
      background: theme?.palette?.action?.hover,
    },
  },

  '& > svg:first-of-type': {
    transform: 'rotate(180deg)',
    marginRight: 20,
  },
}));

export const Title = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 700,
  marginRight: 20,
}));
