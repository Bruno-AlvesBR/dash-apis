import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { foodService } from '@/services/index';
import { useFood } from '@/hooks/Product';
import Form from '@/components/core/Forms/Foods';
import { IProductProps } from '@/interfaces/IProductProps';

import { Container } from '@/styles/theme';

interface IProduct {
  food?: IProductProps;
}

const Product: NextPage<IProduct> = ({ food }) => {
  const [{ handleUpdateProduct }] = [useFood()];

  return (
    <Container>
      <Form handleProductSubmit={handleUpdateProduct} product={food} />
    </Container>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  try {
    const food = await foodService.findBySlug(slug);

    return {
      props: {
        food,
      },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        food: {},
      },
      revalidate: 60,
    };
  }
};
