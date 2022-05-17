import {
  AppBar,
  Button,
  MenuItem,
  styled,
  Toolbar,
  Menu,
  withStyles,
} from '@material-ui/core';

export const Container = styled(AppBar)(() => ({
  position: 'fixed',
  width: '100%',
  background: '#fff',
}));

export const Content = styled(Toolbar)(() => ({
  width: '100%',
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
  marginLeft: 'auto',
  color: '#000',
}));

export const MenuPopup = withStyles(() => ({
  paper: {
    position: 'fixed',
    right: 0,
    marginLeft: 'auto !important',
    marginTop: 45,
    width: 100,
    height: 'auto',
  }
}))(Menu);
