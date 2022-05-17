import { AppBar, Toolbar, styled, Button, Box } from '@material-ui/core';

export const Container = styled(AppBar)(() => ({
  left: 0,
  width: 200,
  height: '100vh',
  top: 65,
  background: '#fff',
  boxShadow: '0px 0px 10px #00000025',
  color: '#000',
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
  height: 'fit-content',
  padding: '30px 0px',
  gap: 20,
  background: '#00000035',
  borderRadius: 10,
  marginTop: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',

  '& button': {
    background: '#fff',
    color: '#6674BB',
    margin: 'auto',

    '&:hover': {
      opacity: .7,
      background: '#fff',
    },
  },
}));

export const ContentFooter = styled('span')(() => ({
  position: 'absolute',
  bottom: 0,
  width: '200px',
  height: 500,
  background: '#ffffff25',
}));
