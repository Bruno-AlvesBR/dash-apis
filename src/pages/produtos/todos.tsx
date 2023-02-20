import CircularProgress from '@mui/material/CircularProgress';
import { GetStaticProps, NextPage } from 'next';

import ProductsContent from '@/components/pages/Produtos';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { IProductProps } from '@/interfaces/IProductProps';
import {
  foodService,
  podcastService,
  videoService,
} from '@/services/index';

import { IVideoProps } from '@/interfaces/IVideoProps';
import { ProductsAllController } from 'infra/http/products/all';

export interface IProductsContentProps {
  foods: IProductProps[];
  podcasts: IPodcastProps[];
  videos: IVideoProps[];
}

const Todos: NextPage<IProductsContentProps> = props =>
  props ? (
    <ProductsContent {...props} />
  ) : (
    <CircularProgress style={{ margin: 'auto' }} />
  );

export default Todos;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const productsAllController = new ProductsAllController();
    const props = await productsAllController.index();

    return {
      props,
      revalidate: 600,
    };
  } catch (err) {
    return {
      props: {
        foods: [],
        podcasts: [],
        videos: [],
      },
      revalidate: 60,
    };
  }
};
