import { useCallback } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

import { IProductProps } from '@/interfaces/IProductProps';
import { CardContent } from '@/components/core/CardContent';
import CarrouselDynamic from '@/components/core/Carrousel/dynamic';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { useUser } from '@/hooks/User';
import { useLogin } from '@/hooks/Login';
import { IVideoProps } from '@/interfaces/IVideoProps';

import { Container } from './styles';

interface IProductsContentProps {
  foods: IProductProps[];
  podcasts: IPodcastProps[];
  videos: IVideoProps[];
}

const ProductsContent: React.FC<IProductsContentProps> = ({
  foods,
  podcasts,
  videos,
}) => {
  const [router, { user }, { setOpenDialog }] = [
    useRouter(),
    useUser(),
    useLogin(),
  ];

  const handleClick = useCallback(
    (slug?: string, type?: string) => {
      if (user?.id) return router.push(`/produtos/${type}/${slug}`);

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
    <CarrouselDynamic
      mobileWidth={275}
      desktopWidth={315}
      title="E-commerce"
    >
      {foods?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.image?.desktopSrc}
          createdAt={item?.createdAt}
          slug={item?.slug}
          type="ecommerce"
          handleClick={handleClick}
          contentCreatedAt={contentCreatedAt(item?.createdAt)}
        />
      ))}
    </CarrouselDynamic>
  );

  const PodcastContent: React.FC = () => (
    <CarrouselDynamic
      mobileWidth={275}
      desktopWidth={315}
      title="Podcasts"
    >
      {podcasts?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.thumbnail}
          createdAt={item?.createdAt}
          slug={item?.id}
          type="podcast"
          handleClick={handleClick}
          contentCreatedAt={contentCreatedAt(item?.createdAt)}
        />
      ))}
    </CarrouselDynamic>
  );

  const VideoContent: React.FC = () =>
    videos?.length > 0 && (
      <CarrouselDynamic
        desktopWidth={275}
        mobileWidth={315}
        title="Videos"
      >
        {videos?.map(item => (
          <CardContent
            key={item?.id}
            id={item?.id}
            title={item?.title}
            desktopSrc={item?.file?.image}
            slug={item?.id}
            type="video"
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
      <VideoContent />
    </Container>
  );
};

export default ProductsContent;
