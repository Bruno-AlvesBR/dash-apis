import { Dialog as DialogMui, styled } from '@mui/material';

import withStyles from '@mui/styles/withStyles';

export const Container = withStyles(() => ({
  paper: {
    minWidth: '90vw !important',
    minHeight: '90vh !important',
  },
}))(DialogMui);
