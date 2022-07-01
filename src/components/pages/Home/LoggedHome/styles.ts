import { styled, Typography, Box } from '@mui/material';

export const ContainerApresentation = styled(Box)(() => ({}));

export const Title = styled(Typography)(() => ({
  fontWeight: 300,
  fontSize: '2em',
  lineHeight: 2,
}));

export const Description = styled(Typography)(() => ({
  fontWeight: 100,
  fontSize: '.9em',
  gap: 10,

  '& a': {
    color: '#0078d1',
    fontWeight: 500,
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

