import CircularProgress from '@mui/material/CircularProgress';
import { GetStaticProps, NextPage } from 'next';

import ProductsContent from '@/components/pages/Produtos';
import { useFood } from '@/hooks/Product';
import { IPodcastProps } from '@/interfaces/IPodcastProps';
import { IProductProps } from '@/interfaces/IProductProps';
import { foodService, podcastService } from '@/services/index';

import Container from './styles';

export interface IProductsContentProps {
  foods: IProductProps[];
  podcasts: IPodcastProps[];
}

const Todos: NextPage<IProductsContentProps> = ({ ...props }) => {
  const [{ isLoading }] = [useFood()];

  return (
    <Container>
      {!isLoading ? (
        <ProductsContent {...props} />
      ) : (
        <CircularProgress style={{ margin: 'auto' }} />
      )}
    </Container>
  );
};

export default Todos;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [foods, podcasts] = await Promise.all([
      foodService?.findAll(),
      podcastService?.findAll(),
    ]);

    return {
      props: {
        foods,
        podcasts,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        foods: [],
        podcasts: [],
      },
      revalidate: 60,
    };
  }
};
