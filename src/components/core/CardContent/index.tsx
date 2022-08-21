import Button from '@mui/material/Button';
import Image from 'next/image';

import { ICardProps } from '@/interfaces/ICardProps';

import { Card, Title, Description, ContentImage } from './styles';

export const CardContent: React.FC<ICardProps> = ({
  title,
  desktopSrc,
  slug,
  type,
  description,
  handleClick,
  contentCreatedAt,
  isPriority = false,
}) => (
  <Card data-testid="card-content">
    {contentCreatedAt}
    {desktopSrc && (
      <ContentImage>
        <Image
          priority={isPriority}
          src={desktopSrc}
          alt={title}
          layout="fill"
          quality={70}
        />
      </ContentImage>
    )}
    <Title data-testid="title-card">{title}</Title>
    <Description>{description}</Description>
    <Button
      data-testid="edit-button-card"
      variant="contained"
      onClick={() => handleClick(slug, type)}
    >
      Editar
    </Button>
  </Card>
);
