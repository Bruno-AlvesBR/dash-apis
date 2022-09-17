import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: 'calc(100vw - 240px)',
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  background: theme?.palette?.common?.black,
  padding: 8,
  borderRadius: 10,

  [theme.breakpoints.down(780)]: {
    maxWidth: '100%',
  },
}));

export const ArrowButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
  minWidth: 0,

  '& > svg': {
    transition: '.2s all ease',
    padding: 7,
    width: 40,
    height: 40,
    borderRadius: 5,
    cursor: 'pointer',
    color: theme?.palette?.common?.white,

    '&:hover': {
      background: theme?.palette?.action?.hover,
    },
  },

  '&:first-of-type': {
    marginRight: 20,

    '& > svg': { transform: 'rotate(180deg)' },
  },
}));

interface ITitle {
  hasUrl?: boolean;
  theme?: Theme;
}

export const Title = styled(Link)<ITitle>(({ hasUrl, theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  marginRight: 20,
  marginLeft: 'auto',
  textDecoration: 'none',
  color: theme?.palette?.text?.primary,

  ...(hasUrl && {
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
}));
