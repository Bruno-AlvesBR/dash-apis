import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, Theme } from '@mui/material';

interface IContentProps {
  isOpenPlayer?: boolean;
  theme?: Theme;
}

export const Container = styled(Box)<IContentProps>(
  ({ isOpenPlayer, theme }) => ({
    position: 'fixed',
    display: isOpenPlayer ? 'flex' : 'none',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    bottom: 0,
    right: 0,
    width: 300,
    maxWidth: 300,
    padding: '15px 25px',
    transition: '1s all ease',
    background: theme?.palette?.common?.black,
    color: theme?.palette?.text?.primary,
    zIndex: 1000,
    borderRadius: '5px 0px 5px 0px',
  }),
);

export const CloseButton = styled(Button)(() => ({
  minWidth: 0,
  padding: '5px 10px',
}));

export const ContentHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  order: -1,
  padding: '5px 0px',
  margin: 0,
}));

export const Title = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textOverflow: 'elipsis',
  overflow: 'hidden',
  fontSize: 12,
  padding: '0px 5px',
}));
