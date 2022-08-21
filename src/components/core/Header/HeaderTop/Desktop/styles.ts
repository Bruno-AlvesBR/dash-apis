import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

interface IContentProps {
  isSelected?: boolean;
  theme?: Theme;
}

export const LogoButton = styled('a')<IContentProps>(
  ({ isSelected, theme }) => ({
    textDecoration: 'none',
    color: theme?.palette?.text?.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 20px',
    transition: '.2s all ease',
    position: 'relative',

    '&:hover': { background: theme?.palette?.action?.hover },

    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: 0,
      height: 2,
      background: theme?.palette?.common?.white,
      transition: '.2s all ease',
    },

    '&:hover::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      background: theme?.palette?.common?.white,
      height: 2,
    },

    ...(isSelected && {
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        background: theme?.palette?.common?.white,
        height: 2,
      },
    }),
  }),
);

export const LinkButton = styled('a')<IContentProps>(
  ({ isSelected, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme?.palette?.text?.primary,
    textDecoration: 'none',
    marginRight: 30,
    padding: 10,
    transition: '.2s all ease',
    position: 'relative',

    '&:last-of-type': { margin: 0 },

    '&:hover': { background: theme?.palette?.action?.hover },

    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: 0,
      height: 2,
      background: theme?.palette?.common?.white,
      transition: '.2s all ease',
    },

    '&:hover::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      background: theme?.palette?.common?.white,
      height: 2,
    },

    ...(isSelected && {
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        background: theme?.palette?.common?.white,
        height: 2,
      },
    }),
  }),
);
