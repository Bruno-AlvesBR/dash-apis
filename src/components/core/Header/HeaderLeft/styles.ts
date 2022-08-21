import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export const Container = styled(AppBar)(({ theme }) => ({
  left: 0,
  width: 200,
  height: '100vh',
  top: 65,
  boxShadow: '0px 0px 10px #00000025',
  color: '#000',
  position: 'fixed',
  zIndex: 100,
  display: 'flex',
  background: theme?.palette?.common?.black,
}));

export const Content = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  gap: 20,
  padding: 20,

  '& button': { marginTop: 100 },
}));

export const ContentConfigs = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  right: 10,
  display: 'flex',
  alignItems: 'center',

  '& svg': {
    cursor: 'pointer',
    color: theme?.palette?.text?.primary,

    '&:first-child': { marginRight: 15 },
  },
}));

export const SwitchButton = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': { background: theme?.palette?.common?.white },
  '& .MuiSwitch-track': { background: theme?.palette?.common?.white },
}));

export const ContentUserName = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 200,
  height: 'fit-content',
  padding: '30px 0px',
  background: theme?.palette?.common?.white,
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
    color: theme?.palette?.text?.secondary,
  },

  '& > button': {
    transition: '.2s all ease',
    margin: 'auto',
    color: theme?.palette?.text?.primary,
    background: theme?.palette?.common?.black,

    '&:hover': {
      background: theme?.palette?.common?.black,
      opacity: 0.7,
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
