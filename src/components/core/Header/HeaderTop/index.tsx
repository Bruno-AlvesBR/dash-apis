import BlurOnIcon from '@mui/icons-material/BlurOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

import { TOKEN } from '@/interfaces/IUserProps';

import {
  Container,
  Content,
  ItemMenu,
  ContentItems,
  ItemName,
  ItemButton,
  MenuPopup,
} from './styles';
import { theme } from '@/styles/theme';
import { useLogin } from '@/hooks/Login';
import { useUser } from '@/hooks/User';

interface IHeaderProps {
  id?: number;
  name?: string;
  icon?: ReactElement;
  link?: string;
}

const HeaderTop = () => {
  const [router, cookie, { setOpenDialog }, { user }] = [
    useRouter(),
    new Cookies(),
    useLogin(),
    useUser(),
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuList: IHeaderProps[] = [
    {
      id: 1,
      name: 'Logo',
      icon: <BlurOnIcon />,
      link: '/',
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dash',
    },
    {
      id: 3,
      name: 'Produtos',
      icon: <ProductionQuantityLimitsIcon />,
      link: '/produtos/todos',
    },
    {
      id: 4,
      name: 'Estatísticas',
      icon: <BarChartIcon />,
      link: '/',
    },
    {
      id: 5,
      name: 'Avaliações',
      icon: <AnalyticsOutlinedIcon />,
      link: '/',
    },
  ];

  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    cookie.remove(TOKEN.AUTH_TOKEN);
    router.reload();
  };

  const handleOpenLogin = () => setOpenDialog(true);

  return (
    <Container>
      <Content>
        {menuList?.slice(0, 1).map(item => (
          <Link href={`${item?.link}`} key={item?.id} passHref>
            <ItemMenu>
              {item?.icon}
              <ItemName>{item?.name}</ItemName>
            </ItemMenu>
          </Link>
        ))}
        {!isMobile ? (
          <ContentItems>
            {menuList?.slice(1, 10).map(item => (
              <Link href={`${item?.link}`} key={item?.id} passHref>
                <ItemMenu>
                  {item?.icon}
                  <ItemName>{item?.name}</ItemName>
                </ItemMenu>
              </Link>
            ))}
          </ContentItems>
        ) : (
          <>
            {!user?.id ? (
              <Button onClick={() => setOpenDialog(true)}>Logar</Button>
            ) : (
              <Button onClick={() => handleLogout()}>Logout</Button>
            )}
            <ItemButton onClick={() => handleToggleMenu()}>
              <MenuIcon />
            </ItemButton>
            <MenuPopup
              style={{ height: 0 }}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
            >
              {menuList?.slice(1, 10).map(item => (
                <Link href={`${item?.link}`} key={item?.id} passHref>
                  <ItemMenu>
                    {item?.icon}
                    <ItemName>{item?.name}</ItemName>
                  </ItemMenu>
                </Link>
              ))}
            </MenuPopup>
          </>
        )}
      </Content>
    </Container>
  );
};

export default HeaderTop;
