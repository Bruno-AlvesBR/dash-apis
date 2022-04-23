import { Dialog as DialogMui, styled, withStyles } from '@material-ui/core';

export const Container = withStyles(() => ({
  paper: {
    minWidth: '90vw !important',
    minHeight: '90vh !important',
  },
}))(DialogMui);
