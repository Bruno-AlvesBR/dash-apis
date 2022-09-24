import { styled } from '@mui/material';
import Switch from '@mui/material/Switch';

export const Container = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': { background: theme?.palette?.common?.white },
  '& .MuiSwitch-track': { background: theme?.palette?.common?.white },
}));
