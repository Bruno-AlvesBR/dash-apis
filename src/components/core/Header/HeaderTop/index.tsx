import BlurOnIcon from '@mui/icons-material/BlurOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';

import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';

import { Container, Content, LogoButton } from './styles';

export interface IHeaderProps {
  id?: number;
  name?: string;
  icon?: ReactElement;
  link?: string;
}

const HeaderTop: React.FC = () => {
  const { pathname } = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  const menuList: IHeaderProps[] = [
    {
      id: 1,
      name: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dash',
    },
    {
      id: 2,
      name: 'Produtos',
      icon: <ProductionQuantityLimitsIcon />,
      link: '/produtos/todos',
    },
  ];

  return (
    <Container>
      <Content>
        <Link href="/" passHref>
          <LogoButton isSelected={pathname === '/'}>
            <BlurOnIcon />
            Dashboard
          </LogoButton>
        </Link>

        {!isMobile ? (
          <DesktopHeader menuList={menuList} />
        ) : (
          <MobileHeader menuList={menuList} />
        )}
      </Content>
    </Container>
  );
};

export default HeaderTop;
