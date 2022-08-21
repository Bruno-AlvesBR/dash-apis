import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Popover from '@mui/material/Popover';

interface IContentProps {
  isSelected?: boolean;
  theme?: Theme;
}

export const Container = styled(Box)(() => ({
  position: 'relative',
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  color: theme?.palette?.text?.primary,
}));

export const MenuButton = styled(Button)(({ theme }) => ({
  color: theme?.palette?.text?.primary,
}));

export const MenuPopUp = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    position: 'fixed',
    left: 'calc(100% - 180px)!important',
    top: '70px!important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,

    [theme.breakpoints.down(600)]: {
      left: 'calc(100% - 160px)!important',
      top: '70px!important',
    },
  },
}));

export const MenuLink = styled(Link)<IContentProps>(
  ({ isSelected, theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '15px 20px',
    textDecoration: 'none',
    width: '100%',
    color: theme?.palette?.text?.primary,

    '& > svg': { marginRight: 5 },

    ...(isSelected && {
      background: theme?.palette?.action?.hover,
    }),
  }),
);
