import { useMediaQuery } from '@mui/material';

import HeaderTop from '../HeaderTop';
import MenuLeft from '../MenuLeft';
import { useUser } from '@/hooks/User';

import { theme } from '@/styles/theme';

const Header = () => {
  const { userId } = useUser();

  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  return userId ? (
    !isMobile ? (
      <>
        <HeaderTop />
        <MenuLeft />
      </>
    ) : (
      <HeaderTop />
    )
  ) : (
    <></>
  );
};

export default Header;
