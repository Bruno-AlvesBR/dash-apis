import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

import { Container, ContentButtons, Title } from './styles';

interface IHeaderCarrouselProps {
  handleScroll?(value: 'next' | 'prev'): void;
  title?: string;
}

export const HeaderCarrousel: React.FC<IHeaderCarrouselProps> = ({
  handleScroll,
  title,
}) => (
  <Container>
    <ContentButtons>
      <ArrowForwardIos
        data-testid="carrousel-button"
        onClick={() => handleScroll('prev')}
      />
      <ArrowForwardIos
        data-testid="carrousel-button"
        onClick={() => handleScroll('next')}
      />
    </ContentButtons>
    {title && <Title variant="h1">{title}</Title>}
  </Container>
);
