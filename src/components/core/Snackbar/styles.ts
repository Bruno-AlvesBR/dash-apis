import { styled } from '@mui/material';
import Alert from '@mui/material/Alert';

export const Message = styled(Alert)(() => ({
  fontSize: '1.2rem',
  display: 'flex',
  alignItems: 'center',

  '& .MuiSvgIcon-fontSizeInherit': {
    fontSize: '1.2rem',
  },
}));
