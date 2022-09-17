import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

import { ArrowButton, Container, Title } from './styles';

interface IHeaderCarrouselProps {
  handleScroll(value: 'next' | 'prev'): void;
  title: string;
  onClickRedirect?(): void;
  url?: string;
}

export const HeaderCarrousel: React.FC<IHeaderCarrouselProps> = ({
  handleScroll,
  title,
  onClickRedirect,
  url,
}) => (
  <Container>
    <ArrowButton>
      <ArrowForwardIos
        data-testid="carrousel-button"
        onClick={() => handleScroll('prev')}
      />
    </ArrowButton>
    <ArrowButton>
      <ArrowForwardIos
        data-testid="carrousel-button"
        onClick={() => handleScroll('next')}
      />
    </ArrowButton>
    {title && !url ? (
      <Title hasUrl={!!url?.length}>{title}</Title>
    ) : (
      title &&
      url && (
        <Link
          onClick={onClickRedirect}
          href={String(url)}
          passHref
        >
          <Title target="_blank" hasUrl={!!url?.length} variant="h2">
            {title}
          </Title>
        </Link>
      )
    )}
  </Container>
);
