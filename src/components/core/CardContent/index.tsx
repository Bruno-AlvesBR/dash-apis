import Button from '@mui/material/Button';
import Image from 'next/image';
import { Link } from '@/components/ui/Link';

import { ICardProps } from '@/interfaces/ICardProps';

import {
  Card,
  Title,
  Description,
  ContentImage,
  ContentButtons,
} from './styles';

export const CardContent: React.FC<ICardProps> = ({
  title,
  desktopSrc,
  description,
  onClick,
  contentCreatedAt,
  isPriority = false,
  playButton,
  url,
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
    <ContentButtons>
      <Link onClick={onClick} href={url}>
        <Button data-testid="edit-button-card" variant="contained">
          Editar
        </Button>
      </Link>

      {playButton}
    </ContentButtons>
  </Card>
);
