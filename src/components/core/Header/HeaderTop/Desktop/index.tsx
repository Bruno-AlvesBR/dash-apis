import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import { IHeaderProps } from '..';

import { Container, LinkButton } from './styles';

interface IHeaderDesktopProps {
  menuList: IHeaderProps[];
}

const DesktopHeader: React.FC<IHeaderDesktopProps> = ({
  menuList,
}) => {
  const { pathname } = useRouter();

  return (
    <Container>
      {menuList?.map(item => (
        <Link key={item?.id} href={item?.link} passHref>
          <LinkButton isSelected={pathname === item?.link}>
            {item?.icon}
            {item?.name}
          </LinkButton>
        </Link>
      ))}
    </Container>
  );
};

export default memo(DesktopHeader);
