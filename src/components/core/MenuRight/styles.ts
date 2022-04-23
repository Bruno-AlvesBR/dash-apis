import { AppBar, Toolbar, styled, Button, Box } from '@material-ui/core';

export const Container = styled(AppBar)(() => ({
  right: 0,
  width: 200,
  height: '100vh',
  background: '#6674BB',
  boxShadow: '0px 0px 10px #00000025',
  color: '#fff',
  position: 'fixed',
  zIndex: 100,
  display: 'flex',
}));

export const Content = styled(Toolbar)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  gap: 20,
  padding: 20,
  '& button': {
    marginTop: 100,
  },
}));

export const ContentConfigs = styled(Box)(() => ({
  position: 'absolute',
  top: 10,
  right: 10,
  '& svg': {
    cursor: 'pointer',
  },
  '& svg:first-child': {
    marginRight: 15,
  },
}));

export const ContainerUserInfos = styled('div')(() => ({
  width: '100%',
  height: 150,
  background: '#ffffff50',
  borderRadius: 10,
  marginTop: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& button': {
    background: '#fff',
    color: '#6674BB',
  },
}));

export const ContentFooter = styled('span')(() => ({
  position: 'absolute',
  bottom: 0,
  width: '200px',
  height: 500,
  background: '#ffffff25',
}));
