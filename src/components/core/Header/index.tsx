import useMediaQuery from '@mui/material/useMediaQuery';

import HeaderTop from './HeaderTop';
import MenuLeft from './HeaderLeft';

import { theme } from '@/styles/theme';

const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  return !isMobile ? (
    <>
      <HeaderTop />
      <MenuLeft />
    </>
  ) : (
    <HeaderTop />
  );
};

export default Header;
