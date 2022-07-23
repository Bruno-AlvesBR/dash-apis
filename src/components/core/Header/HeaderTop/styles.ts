import {
  AppBar,
  Button,
  MenuItem,
  styled,
  Toolbar,
  Popover,
} from '@mui/material';

import withStyles from '@mui/styles/withStyles';

export const Container = styled(AppBar)(() => ({
  position: 'fixed',
  width: '100%',
  background: '#fff',
}));

export const Content = styled(Toolbar)(() => ({
  width: '100%',

  '& > button:first-of-type': {
    marginLeft: 'auto',
    width: 'fit-content',
    color: '#000',
  },
}));

export const ItemMenu = styled(MenuItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#000',
}));

export const ContentItems = styled('div')(() => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
}));

export const ItemName = styled('p')(() => ({
  fontSize: '.7rem !important',
}));

export const ItemButton = styled(Button)(() => ({
  color: '#000',
}));

export const MenuPopup = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    position: 'fixed',
    left: 'calc(100% - 150px)!important',
    top: '70px!important',
    width: 100,

    [theme.breakpoints.down(600)]: {
      left: 'calc(100% - 140px)!important',
      top: '63px!important',
    },
  },
}));
