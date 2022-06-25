import { useMediaQuery } from '@material-ui/core';
import { ArrowForwardIos } from '@mui/icons-material';
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

    listRef.current.scrollTo({
      left: scrollLeft + valueScroll,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <ContentButtons>
        <ArrowForwardIos onClick={() => handleScroll('prev')} />
        <ArrowForwardIos onClick={() => handleScroll('next')} />
      </ContentButtons>
      <div ref={contentRef}>
        <Content
          horizontal
          nativeMobileScroll
          innerRef={listRef}
        >
          {children}
        </Content>
      </div>
    </Container>
  );
};

export default Carrousel;
