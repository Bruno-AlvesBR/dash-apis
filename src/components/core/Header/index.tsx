import { useMediaQuery } from '@material-ui/core';

import HeaderTop from '../HeaderTop';
import MenuLeft from '../MenuLeft';

import { theme } from '../../../styles/theme';
import { UseUser } from '../../../hooks/User';

const Header = () => {
  const { userId } = UseUser();

  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  return (
    <>
      {userId ? (
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
      )}
    </>
  );
};

export default Header;
