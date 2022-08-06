import CircularProgress from '@mui/material/CircularProgress';
import { GetStaticProps, NextPage } from 'next';

import ProductsContent from '@/components/pages/Produtos';
import { useFood } from '@/hooks/Product';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { IProductProps } from '@/interfaces/IProductProps';
import {
  foodService,
  podcastService,
  videoService,
} from '@/services/index';

import Container from '../../styles/Produtos/styles';
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

  return (
    <Container>
      {!isLoading ? (
        <ProductsContent
          podcasts={podcasts}
          foods={foods}
          videos={videos}
        />
      ) : (
        <CircularProgress style={{ margin: 'auto' }} />
      )}
    </Container>
  );
};

export default Todos;

export const getStaticProps: GetStaticProps = async () => {
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
      revalidate: false,
    };
  } catch (err) {
    return {
      props: {
        foods: [],
        podcasts: [],
        videos: [],
      },
      revalidate: false,
    };
  }
};
