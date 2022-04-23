import { DialogContent, DialogTitle } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

import { Container } from './style';

export interface IConfigProps {
  openDialog: boolean;
  onClose?(): void;
}

export const Configs = ({ openDialog, onClose }: IConfigProps) => {
  return (
    <Container open={openDialog} onClose={onClose}>
      <DialogTitle>
        <CloseIcon />
        <p>Test</p>
      </DialogTitle>
      <DialogContent>Test</DialogContent>
    </Container>
  );
};
