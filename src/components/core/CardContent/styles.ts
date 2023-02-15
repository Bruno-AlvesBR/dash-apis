import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Card = styled(Box)(({ theme }) => ({
  minWidth: 300,
  maxWidth: 300,
  minHeight: 400,
  maxHeight: 400,
  padding: 15,
  background: theme?.palette?.common?.black,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  boxShadow: '0px 0px 10px #00000020',
  marginRight: 15,

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  '&:first-of-type': { marginLeft: 0 },

  '&:last-of-type': { marginRight: 0 },

  '& > button': {
    background: theme?.palette?.common?.white,
    transition: '.2s all ease',

    '&:hover': {
      opacity: 0.8,
      background: theme?.palette?.common?.white,
    },
  },

  [theme.breakpoints.down(780)]: {
    minWidth: 260,
    maxWidth: 260,
    margin: '0px 10px',
  },

  [theme.breakpoints.down(520)]: {
    width: '100%',
    margin: '0px 10px',
  },
}));

export const Title = styled('h1')(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 16,
  width: '100%',
  margin: 'auto 0px',
}));

export const Description = styled('p')(() => ({
  display: '-webkit-box',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  margin: '10px 0',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 12,
}));

export const ContentImage = styled(Box)(() => ({
  width: '100%',
  minHeight: 150,
  maxHeight: 200,
  position: 'relative',
}));

export const ContentButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  flexDirection: 'row',

  '& > button': { marginLeft: 20 },

  '& > a, button': {
    background: theme?.palette?.common?.white,
    transition: '.2s all ease',
    color: theme?.palette?.text?.secondary,
    fontWeight: 600,
    width: '100%',
    textDecoration: 'none',

    '&:hover': {
      background: theme?.palette?.common?.white,
      opacity: 0.8,
    },
  },
}));
