import { styled } from '@material-ui/core';
import { Alert } from '@mui/material';

export const Message = styled(Alert)(() => ({
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-fontSizeInherit': {
        fontSize: '1.2rem',
    },
}));