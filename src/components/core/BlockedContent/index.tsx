import { ReactNode } from 'react';
import BlockIcon from '@mui/icons-material/Block';

import { Container, Content, ContentAlert } from './styles';

interface IContentProps {
  children: ReactNode;
  message?: string;
}

export const BlockedContent = ({
  children,
  message,
}: IContentProps) => {
  return (
    <Container>
      <Content disabled>{children}</Content>
      <ContentAlert>
        <BlockIcon />
        <h1>{message}</h1>
      </ContentAlert>
    </Container>
  );
};
