import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const ContainerApresentation = styled(Box)(({ theme }) => ({
  color: theme?.palette?.text?.primary,
}));

export const Title = styled(Typography)(() => ({
  fontWeight: 300,
  fontSize: '2em',
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
