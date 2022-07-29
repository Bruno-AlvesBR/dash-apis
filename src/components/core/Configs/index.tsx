import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

import { Container } from './style';

export interface IConfigProps {
  openDialog?: boolean;
  onClose?(): void;
}

export const Configs: React.FC<IConfigProps> = ({ openDialog, onClose }) => {
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
