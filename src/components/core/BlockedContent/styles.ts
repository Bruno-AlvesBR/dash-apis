import { Button, styled } from '@material-ui/core';

export const Container = styled('div')(() => ({
  position: 'relative',
}));

export const Content = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  justifyContent: 'center',
  filter: 'blur(5px)',
  background: '#ffffff90',
  zIndex: 1,
}));

export const ContentAlert = styled('div')(() => ({
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  opacity: 1,

  '& svg': {
    color: 'red',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '8rem !important',
    zIndex: -1,
    opacity: .2,
  },
  '& h1': {
    textAlign: 'center',
    zIndex: 4,
  },
}));