import { ReactNode, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

import { HeaderCarrousel } from './Header';

import { Container, Content } from './styles';

interface ICarrousel {
  children: ReactNode;
  desktopWidth: number;
  mobileWidth: number;
  title?: string;
}

const Carrousel: React.FC<ICarrousel> = ({
  children,
  desktopWidth,
  mobileWidth,
  title,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

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
      <HeaderCarrousel handleScroll={handleScroll} title={title} />
      <div ref={contentRef}>
        <Content horizontal nativeMobileScroll innerRef={listRef}>
          {children}
        </Content>
      </div>
    </Container>
  );
};

export default Carrousel;
