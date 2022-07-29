import Button from '@mui/material/Button';
import Image from 'next/image';

import { ICardProps } from '@/interfaces/ICardProps';

import { Card, Title, Description, ContentImage } from './styles';

export const CardContent: React.FC<ICardProps> = ({
  title,
  desktopSrc,
  slug,
  description,
  handleClick,
  contentCreatedAt,
}) => (
  <Card data-testid="card-content">
    {contentCreatedAt}
    {desktopSrc && (
      <ContentImage>
        <Image src={desktopSrc} alt={title} layout="fill" />
      </ContentImage>
    )}
    <Title data-testid="title-card">{title}</Title>
    <Description>{description}</Description>
    <Button
      data-testid="edit-button-card"
      variant="contained"
      onClick={() => handleClick(slug)}
    >
      Editar
    </Button>
  </Card>
);
