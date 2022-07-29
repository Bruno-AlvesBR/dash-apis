import { memo, useCallback, useMemo } from 'react';

import { IProductProps } from '@/interfaces/IProductProps';
import { CardContent } from '@/components/core/CardContent';
import CarrouselDynamic from '@/components/core/Carrousel/dynamic';
import { IPodcastProps } from '@/interfaces/IPodcastProps';

import { Container } from './styles';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/User';
import { useLogin } from '@/hooks/Login';
import dayjs from 'dayjs';

interface IProductsContentProps {
  foods: IProductProps[];
  podcasts: IPodcastProps[];
}

const ProductsContent: React.FC<IProductsContentProps> = ({
  foods,
  podcasts,
}) => {
  const [router, { user }, { setOpenDialog }] = [
    useRouter(),
    useUser(),
    useLogin(),
  ];

  const handleClick = useCallback(
    (slug?: string) => {
      if (user?.id) return router.push(`/produtos/${slug}`);

      setOpenDialog(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setOpenDialog, user?.id],
  );

  const contentCreatedAt = (createdAt?: string): string => {
    const contentDate = dayjs(createdAt).format('DD MMM YYYY');

    return createdAt && contentDate;
  };

  const FoodContent: React.FC = () => (
    <CarrouselDynamic mobileWidth={275} desktopWidth={315}>
      {foods?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.image?.desktopSrc}
          createdAt={item?.createdAt}
          slug={item?.slug}
          handleClick={handleClick}
          contentCreatedAt={contentCreatedAt(item?.createdAt)}
        />
      ))}
    </CarrouselDynamic>
  );

  const PodcastContent: React.FC = () => (
    <CarrouselDynamic mobileWidth={275} desktopWidth={315}>
      {podcasts?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.thumbnail}
          createdAt={item?.createdAt}
          slug={item?.id}
          handleClick={handleClick}
          contentCreatedAt={contentCreatedAt(item?.createdAt)}
        />
      ))}
    </CarrouselDynamic>
  );

  return (
    <Container>
      <FoodContent />
      <PodcastContent />
    </Container>
  );
};

export default memo(ProductsContent);
