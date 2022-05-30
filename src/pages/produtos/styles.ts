import { styled } from '@material-ui/core';

export const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  marginTop: 65,
  marginLeft: 200,
  width: '100%',

  '@media (max-width: 780px)': {
    marginLeft: 0,
  },

  [theme.breakpoints.down(520)]: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
