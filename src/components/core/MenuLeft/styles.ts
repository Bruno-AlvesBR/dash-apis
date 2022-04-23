import { styled, AppBar, Toolbar, MenuItem, Button, Switch } from '@material-ui/core';

export const Container = styled(AppBar)(() => ({
  width: 200,
  height: '100vh',
  background: '#6674BB',
  boxShadow: '0px 0px 10px #00000025',
  color: '#fff',
  position: 'fixed',
  zIndex: 100,
  left: 0,
  display: 'flex',
}));

export const Content = styled(Toolbar)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '20px 25px', 
  '& svg': {
    cursor: 'pointer',
  },
}));

export const MenuOptions = styled(MenuItem)(() => ({
  gap: 10,
  padding: '15px 5px',
  width: '100%',
  fontWeight: 500,
  '&:first-child': {
    marginBottom: 50,
  },
}));
