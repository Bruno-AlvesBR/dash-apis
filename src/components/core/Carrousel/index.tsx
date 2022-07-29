import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { ReactNode, useRef } from 'react';

import { theme } from '@/styles/theme';
import { Container, Content, ContentButtons } from './styles';

interface ICarrousel {
  children: ReactNode;
  desktopWidth: number;
  mobileWidth: number;
}

const Carrousel: React.FC<ICarrousel> = ({
  children,
  desktopWidth,
  mobileWidth,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  const handleScroll = (event: 'next' | 'prev') => {
    if (!contentRef.current && !listRef.current) return;

    const { scrollLeft } = listRef.current;

    const clientWidth = !isMobile ? desktopWidth : mobileWidth;
    const valueScroll = event === 'next' ? clientWidth : -clientWidth;

    if (process.env.NODE_ENV !== 'test') {
      listRef.current.scrollTo({
        left: scrollLeft + valueScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container data-testid="carrousel">
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
      <div ref={contentRef}>
        <Content horizontal nativeMobileScroll innerRef={listRef}>
          {children}
        </Content>
      </div>
    </Container>
  );
};

export default Carrousel;
