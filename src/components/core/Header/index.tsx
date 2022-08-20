import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

import HeaderTop from './HeaderTop';
import MenuLeft from './HeaderLeft';

const Header: React.FC = () => {
  const theme = useTheme();
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
