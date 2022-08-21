import CircularProgress from '@mui/material/CircularProgress';
import { GetServerSideProps, NextPage } from 'next';

import ProductsContent from '@/components/pages/Produtos';
import { useFood } from '@/hooks/Product';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { IProductProps } from '@/interfaces/IProductProps';
import {
  foodService,
  podcastService,
  videoService,
} from '@/services/index';

import { IVideoProps } from '@/interfaces/IVideoProps';

export interface IProductsContentProps {
  foods: IProductProps[];
  podcasts: IPodcastProps[];
  videos: IVideoProps[];
}

const Todos: NextPage<IProductsContentProps> = ({
  foods,
  podcasts,
  videos,
}) => {
  const { isLoading } = useFood();

  return !isLoading ? (
    <ProductsContent
      podcasts={podcasts}
      foods={foods}
      videos={videos}
    />
  ) : (
    <CircularProgress style={{ margin: 'auto' }} />
  );
};

export default Todos;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [foods, podcasts, videos] = await Promise.all([
      foodService?.findAll(),
      podcastService?.findAll(),
      videoService?.findAll(),
    ]);

    return {
      props: {
        foods,
        podcasts,
        videos,
      },
    };
  } catch (err) {
    return {
      props: {
        foods: [],
        podcasts: [],
        videos: [],
      },
    };
  }
};
