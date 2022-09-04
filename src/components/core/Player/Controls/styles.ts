import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '100%',
}));

export const ContentButton = styled(Button)(() => ({}));
