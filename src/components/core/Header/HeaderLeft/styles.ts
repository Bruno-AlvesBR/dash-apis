import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

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

    '&:first-child': { marginRight: 15 },
  },
}));

export const ContentUserName = styled(Box)(() => ({
  width: '100%',
  maxWidth: 200,
  height: 'fit-content',
  padding: '30px 0px',
  background: '#00000035',
  borderRadius: 10,
  marginTop: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',

  '& h2': {
    borderBottom: '1px solid #000',
    marginBottom: 15,
    paddingBottom: 5,
  },

  '& > button': {
    transition: '.2s all ease',
    margin: 'auto',
    color: '#000',
    background: '#fff',
  },
}));

export const ContentFooter = styled('span')(() => ({
  position: 'absolute',
  bottom: 0,
  width: '200px',
  height: 500,
  background: '#ffffff25',
}));
