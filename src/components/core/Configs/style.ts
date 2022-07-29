import Dialog from '@mui/material/Dialog';
import withStyles from '@mui/styles/withStyles';

export const Container = withStyles(() => ({
  paper: {
    minWidth: '90vw !important',
    minHeight: '90vh !important',
  },
}))(Dialog);
