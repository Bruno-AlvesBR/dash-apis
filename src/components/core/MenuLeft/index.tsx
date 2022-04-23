import BlurOnIcon from '@mui/icons-material/BlurOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { SvgIcon } from '@material-ui/core';

import { Container, Content, MenuOptions } from './styles';
import Link from 'next/link';
import { useState } from 'react';

export const MenuLeft = () => {
  const [checked, setChecked] = useState(false);

  const MenuList = [
    {
      name: 'Logo',
      icon: <BlurOnIcon />,
      link: '/',
    },
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dash/edit',
    },
    {
      name: 'Produtos',
      icon: <ProductionQuantityLimitsIcon />,
      link: '/produtos/todos',
    },
    {
      name: 'Estatísticas',
      icon: <BarChartIcon />,
      link: '/',
    },
    {
      name: 'Avaliações',
      icon: <AnalyticsOutlinedIcon />,
      link: '/',
    },
  ];

  return (
    <Container>
      <Content>
        {MenuList.map(item => (
          <Link href={item.link} key={item.name} passHref>
            <MenuOptions>
              <SvgIcon>{item.icon}</SvgIcon>
              {item.name}
            </MenuOptions>
          </Link>
        ))}
      </Content>
    </Container>
  );
};
