import { styled } from '@material-ui/core';

const Container = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  marginTop: 65,
  marginLeft: 200,

  '@media (max-width: 780px)': {
    marginLeft: 0,
  },
}));

export default Container;