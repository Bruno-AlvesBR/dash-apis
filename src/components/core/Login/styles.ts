import { Dialog as DialogApi, withStyles } from '@material-ui/core';

export const Dialog = withStyles(() => ({
  paper: {
    minWidth: 400,
    maxWidth: 400,
    height: 400,
    background: '#fff !important',
    '& form': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& button:first-child': {
      minWidth: 40,
      maxWidth: 40,
      borderRadius: 35,
      position: 'absolute',
      right: 5,
      top: 5,
    }
  },
}))(DialogApi);
