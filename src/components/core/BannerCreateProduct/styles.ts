import { Link } from '@/components/ui/Link';
import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px 10px 10px 20px',
  position: 'relative',
  background: theme?.palette?.common?.black,
  color: theme?.palette?.text?.primary,
  margin: '20px 0px',
  borderRadius: 5,
}));

export const LinkButton = styled(Link)(({ theme }) => ({
  background: theme?.palette?.common?.white,
  color: theme?.palette?.text?.secondary,
  cursor: 'pointer',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '.25s all ease',

  '&:hover': {
    background: theme?.palette?.common?.white,
    opacity: 0.7,
  },
}));
