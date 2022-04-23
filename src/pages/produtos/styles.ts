import { styled } from '@material-ui/core';

const Container = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,
  padding: '20px 220px',
  width: '100%',
  height: '100%',
}));

export default Container;