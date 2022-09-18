import dayjs from 'dayjs';
import Button from '@mui/material/Button';

import { IProductProps } from '@/interfaces/IProductProps';
import { CardContent } from '@/components/core/CardContent';
import CarrouselDynamic from '@/components/core/Carrousel/dynamic';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { IVideoProps } from '@/interfaces/IVideoProps';
import { IContentProps } from '@/interfaces/IPlayerProps';
import { usePlayer } from '@/hooks/player';

import { Container } from '@/styles/theme';

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
  const { handleTogglePlay } = usePlayer();

  const contentCreatedAt = (createdAt?: string): string => {
    const contentDate = dayjs(createdAt).format('DD MMM YYYY');

    return createdAt && contentDate;
  };

  const playButtonContent = (content: IContentProps) =>
    content?.file?.url && (
      <Button
        data-testid="play-content-card"
        variant="contained"
        onClick={() => handleTogglePlay(content)}
      >
        Ouvir
      </Button>
    );

  const FoodContent: React.FC = () => (
    <CarrouselDynamic
      mobileWidth={275}
      desktopWidth={315}
      title="E-commerce"
      url="https://ecommerce-foods.vercel.app/"
    >
      {foods?.map(item => (
        <CardContent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          description={item?.description}
          desktopSrc={item?.image?.desktopSrc}
          createdAt={item?.createdAt}
          url={`/produtos/ecommerce/${item?.slug}`}
          contentCreatedAt={contentCreatedAt(item?.createdAt)}
          isPriority
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
          url={`/produtos/podcast/${item?._id}`}
          contentCreatedAt={contentCreatedAt(item?.createdAt)}
          isPriority
          playButton={playButtonContent({ ...item })}
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
        url="https://filmech.vercel.app/"
      >
        {videos?.map(item => (
          <CardContent
            key={item?.id}
            id={item?.id}
            title={item?.title}
            desktopSrc={item?.file?.image}
            url={`/produtos/video/${item?.id}`}
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
