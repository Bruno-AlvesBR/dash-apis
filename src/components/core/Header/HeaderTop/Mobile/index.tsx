import { memo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Cookies from 'universal-cookie';
import Link from 'next/link';

import { IHeaderProps } from '..';
import { useUser } from '@/hooks/User';
import { useRouter } from 'next/router';
import { TOKEN } from '@/interfaces/IUserProps';
import { useLogin } from '@/hooks/Login';

import {
  Container,
  MenuButton,
  LoginButton,
  MenuPopUp,
  MenuLink,
} from './styles';

interface IHeaderMobileProps {
  menuList: IHeaderProps[];
}

const MobileHeader: React.FC<IHeaderMobileProps> = ({ menuList }) => {
  const { user } = useUser();
  const cookie = new Cookies();
  const { reload, pathname } = useRouter();
  const { setOpenDialog } = useLogin();

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    const token = cookie.get(TOKEN.AUTH_TOKEN);

    if (token) {
      cookie.remove(TOKEN.AUTH_TOKEN);
      reload();
    }
  };

  const handleOpenLogin = () => setOpenDialog(true);

  return (
    <Container>
      <LoginButton
        onClick={() => {
          !user?.id ? handleOpenLogin() : handleLogout();
        }}
      >
        {!user?.id ? 'Logar' : 'Deslogar'}
      </LoginButton>
      <MenuButton onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </MenuButton>

      <MenuPopUp
        style={{ height: 0 }}
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        {menuList?.map(item => (
          <Link href={`${item?.link}`} key={item?.id} passHref>
            <MenuLink isSelected={pathname === item?.link}>
              {item?.icon}
              {item?.name}
            </MenuLink>
          </Link>
        ))}
      </MenuPopUp>
    </Container>
  );
};

export default memo(MobileHeader);
