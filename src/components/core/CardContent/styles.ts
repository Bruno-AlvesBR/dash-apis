import { Box, styled } from '@material-ui/core';

export const Card = styled(Box)(({theme}) => ({
  width: 250,
  height: 300,
  padding: 15,
  background: '#fff',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  boxShadow: '0px 0px 10px #00000020',

  [theme.breakpoints.down(520)]: { width: '100%', margin: '0px 10px' },
}));

export const Title = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const Description = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  margin: '10px 0',
}));
